import type { InflationBasketItem } from "./types";
import { setupEffortCalculator } from "./runtime/effort-calculator";
import { initMoneyIllusionChart } from "./runtime/money-illusion";

export const getPurchasingPower = (year: number): number => {
    const yearsDiff = 2026 - year;
    if (year < 1980) return Math.pow(1.06, yearsDiff);
    if (year < 2000) return Math.pow(1.04, yearsDiff);
    return Math.pow(1.025, yearsDiff);
};

export const calculateBasket = (
    budget: number,
    items: readonly InflationBasketItem[],
    year: number
): Map<string, number> => {
    const availableItems = items.filter((item) => item.minYear <= year && item.maxYear >= year);

    let currentBudget = budget;
    const itemCounts = new Map<string, number>();

    const sortedItems = [...availableItems].sort((a, b) => b.price - a.price);

    sortedItems.forEach((item) => {
        if (currentBudget >= item.price) {
            if (item.price > 50 && Math.random() > 0.3) {
                itemCounts.set(item.name, (itemCounts.get(item.name) || 0) + 1);
                currentBudget -= item.price;
            }
        }
    });

    let safety = 0;
    while (currentBudget > 1 && safety < 100) {
        const affordable = availableItems.filter((i) => i.price <= currentBudget);
        if (affordable.length === 0) break;

        const randomItem = affordable[Math.floor(Math.random() * affordable.length)];
        if (randomItem) {
            itemCounts.set(randomItem.name, (itemCounts.get(randomItem.name) || 0) + 1);
            currentBudget -= randomItem.price;
        }
        safety++;
    }

    return itemCounts;
};

const setupCasesDragScroll = (casesContainer: HTMLElement): void => {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    casesContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        casesContainer.classList.add("active");
        startX = e.pageX - casesContainer.offsetLeft;
        scrollLeft = casesContainer.scrollLeft;
    });

    casesContainer.addEventListener("mouseleave", () => {
        isDown = false;
        casesContainer.classList.remove("active");
    });

    casesContainer.addEventListener("mouseup", () => {
        isDown = false;
        casesContainer.classList.remove("active");
    });

    casesContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - casesContainer.offsetLeft;
        const walk = (x - startX) * 2;
        casesContainer.scrollLeft = scrollLeft - walk;
    });
};

const setupShareHandler = (container: HTMLElement): void => {
    container.addEventListener("click", (e) => {
        const target = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-share-btn]");
        if (!target) return;

        const text = target.getAttribute("data-share-text");
        if (!text) return;

        if (navigator.share) {
            navigator
                .share({ title: "Inflación", text, url: window.location.href })
                .catch(() => {});
        } else if (navigator.clipboard) {
            navigator.clipboard
                .writeText(`${text} ${window.location.href}`)
                .then(() => {
                    const originalText = target.innerText;
                    target.innerText = "¡Copiado!";
                    setTimeout(() => {
                        target.innerText = originalText;
                    }, 2000);
                })
                .catch(() => {});
        }
    });
};

const createItemHtml = (item: InflationBasketItem, count: number, delay: number): string => {
    const scale = item.price > 50 ? "inf-item-large" : "inf-item-normal";
    const bg = item.price > 50 ? "inf-bg-large" : "inf-bg-normal";
    const countBadge = count > 1 ? `<div class="inf-badge-count">${count}</div>` : "";
    const iconTemplates = document.getElementById("icon-templates");
    const iconContainer = iconTemplates
        ? iconTemplates.querySelector(`#icon-${item.icon}`)
        : document.getElementById(`icon-${item.icon}`);
    const iconHtml = iconContainer ? iconContainer.innerHTML : "";

    return `<div class="inf-item-wrapper ${bg} ${scale}" style="animation-delay: ${delay}ms" title="${item.name} (${item.price}€) ${count > 1 ? `x${count}` : ""}">
    ${countBadge}
    ${iconHtml}
    <span class="inf-item-name">${item.name}</span>
  </div>`;
};

interface SliderElements {
    slider: HTMLInputElement;
    yearDisplay: HTMLElement | null;
    valueDisplay: HTMLElement | null;
    itemsContainer: HTMLElement | null;
    container: HTMLElement;
    items: InflationBasketItem[];
}

const updateSliderState = (opts: SliderElements): void => {
    const year = parseInt(opts.slider.value, 10);
    const power = getPurchasingPower(year);
    const totalValue = 100 * power;

    if (opts.yearDisplay) opts.yearDisplay.innerText = year.toString();
    if (opts.valueDisplay) opts.valueDisplay.innerText = `${Math.round(totalValue)}€`;

    const itemCounts = calculateBasket(totalValue, opts.items, year);
    let html = "";
    let animationDelay = 0;

    itemCounts.forEach((count, itemName) => {
        const item = opts.items.find((i) => i.name === itemName);
        if (item) {
            html += createItemHtml(item, count, animationDelay);
            animationDelay += 30;
        }
    });

    if (opts.itemsContainer) opts.itemsContainer.innerHTML = html;
};

export const initInflationRuntime = (container: HTMLElement): void => {
    const slider = container.querySelector<HTMLInputElement>("#year-slider");
    const yearDisplay = container.querySelector<HTMLElement>("#year-display");
    const valueDisplay = container.querySelector<HTMLElement>("#value-display");
    const itemsContainer = container.querySelector<HTMLElement>("#items-container");

    if (!slider || !container.dataset.items) return;

    const items: InflationBasketItem[] = JSON.parse(container.dataset.items);
    const opts: SliderElements = {
        slider,
        yearDisplay,
        valueDisplay,
        itemsContainer,
        container,
        items,
    };
    const update = (): void => updateSliderState(opts);

    slider.addEventListener("input", update);
    update();

    const casesContainer = container.querySelector<HTMLElement>("#cases-container");
    if (casesContainer) setupCasesDragScroll(casesContainer);
    setupShareHandler(container);

    initMoneyIllusionChart(container);
    setupEffortCalculator(container);
    populateIcons(container);
};

const populateIcons = (container: HTMLElement): void => {
    const iconPlaceholders = container.querySelectorAll<HTMLElement>(
        ".case-icon-svg[data-icon], .inf-comparison-icon[data-icon], .source-icon[data-icon]"
    );
    const iconTemplates = document.getElementById("icon-templates");
    iconPlaceholders.forEach((placeholder) => {
        const iconName = placeholder.dataset.icon;
        if (!iconName) return;
        const template = iconTemplates
            ? iconTemplates.querySelector(`#icon-${iconName}`)
            : document.getElementById(`icon-${iconName}`);
        if (template) {
            placeholder.innerHTML = template.innerHTML;
        }
    });
};
