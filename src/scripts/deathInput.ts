let selectedYear: number | null = null;
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

function handleShowYearInput() {
    const container = document.getElementById("death-input-container");
    if (container) {
        container.classList.remove("hidden");
        container.classList.add("di-grid-display");
        setTimeout(() => {
            container.classList.remove("opacity-0");
            const defaultYear = document.querySelector('.year-item[data-year="1989"]');
            defaultYear?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }, 100);
    }
}

function handleShowMonthInput() {
    const monthSection = document.getElementById("month-section");
    if (monthSection) {
        monthSection.classList.remove("di-hidden-interaction");
    }
}

if (!window.name.includes("__deathInputRegistered")) {
    document.addEventListener("show-death-year-input", handleShowYearInput);
    document.addEventListener("show-death-month-input", handleShowMonthInput);
    window.name += "__deathInputRegistered";
}

function setupSpineState(el: Element, isActive: boolean) {
    const spine = el.querySelector(".book-spine");
    const text = el.querySelector(".di-book-text");
    if (spine) {
        if (isActive) {
            spine.classList.remove("di-spine-inactive");
            spine.classList.add("di-spine-active");
        } else {
            spine.classList.add("di-spine-inactive");
            spine.classList.remove("di-spine-active");
        }
    }
    if (text) {
        if (isActive) {
            text.classList.remove("di-text-inactive");
            text.classList.add("di-text-active");
        } else {
            text.classList.add("di-text-inactive");
            text.classList.remove("di-text-active");
        }
    }
}

function findClosestYearItem(
    yearSlider: HTMLElement,
    yearItems: NodeListOf<Element>
): HTMLElement | null {
    const sliderRect = yearSlider.getBoundingClientRect();
    const center = sliderRect.left + sliderRect.width / 2;
    let closestItem: HTMLElement | null = null;
    let minDiff = Infinity;

    yearItems.forEach((item) => {
        const el = item as HTMLElement;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const diff = Math.abs(center - itemCenter);
        setupSpineState(el, false);
        if (diff < minDiff) {
            minDiff = diff;
            closestItem = el;
        }
    });
    return closestItem;
}

function updateActiveYear(yearSlider: HTMLElement, yearItems: NodeListOf<Element>) {
    const closestItem = findClosestYearItem(yearSlider, yearItems);
    if (closestItem) {
        setupSpineState(closestItem, true);
        selectedYear = parseInt(closestItem.dataset.year || "0", 10);
    }
}

function setupSliderDrag(yearSlider: HTMLElement) {
    yearSlider.addEventListener("mousedown", (e) => {
        isDragging = false;
        yearSlider.classList.add("di-dragging");
        startX = e.pageX - yearSlider.offsetLeft;
        scrollLeft = yearSlider.scrollLeft;
        yearSlider.style.scrollSnapType = "none";
    });
    yearSlider.addEventListener("mouseleave", () => {
        yearSlider.classList.remove("di-dragging");
        yearSlider.style.scrollSnapType = "x mandatory";
    });
    yearSlider.addEventListener("mouseup", () => {
        yearSlider.classList.remove("di-dragging");
        yearSlider.style.scrollSnapType = "x mandatory";
        setTimeout(() => {
            isDragging = false;
        }, 50);
    });
    yearSlider.addEventListener("mousemove", (e) => {
        if (!yearSlider.classList.contains("di-dragging")) return;
        e.preventDefault();
        const x = e.pageX - yearSlider.offsetLeft;
        const walk = (x - startX) * 2;
        if (Math.abs(walk) > 5) {
            isDragging = true;
        }
        yearSlider.scrollLeft = scrollLeft - walk;
    });
}

function handleConfirmYear() {
    if (selectedYear) {
        const event = new CustomEvent("year-selected", {
            detail: { year: selectedYear },
        });
        document.dispatchEvent(event);
        const yearSection = document.getElementById("year-section");
        if (yearSection) {
            yearSection.classList.add("di-fade-out");
            setTimeout(() => {
                yearSection.classList.add("hidden");
            }, 1000);
        }
    }
}

function handleMonthSelect(btn: HTMLElement) {
    const month = parseInt(btn.dataset.month || "0", 10);
    const event = new CustomEvent("birthdate-selected", {
        detail: { year: selectedYear, month },
    });
    document.dispatchEvent(event);
    const container = document.getElementById("death-input-container");
    if (container) {
        container.classList.add("di-opacity-0");
        setTimeout(() => {
            container.classList.add("hidden");
            container.classList.remove("di-grid-display");
        }, 1000);
    }
}

function setupYearItems(yearItems: NodeListOf<Element>) {
    yearItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            item.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        });
    });
}

function setupYearConfirmBtn(yearConfirmBtn: HTMLElement) {
    yearConfirmBtn.addEventListener(
        "touchstart",
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleConfirmYear();
        },
        { passive: false }
    );
    yearConfirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleConfirmYear();
    });
}

function setupMonthBtns(monthBtns: NodeListOf<Element>) {
    monthBtns.forEach((btn) => {
        const el = btn as HTMLElement;
        el.addEventListener(
            "touchstart",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                handleMonthSelect(el);
            },
            { passive: false }
        );
        el.addEventListener("click", (e) => {
            e.preventDefault();
            handleMonthSelect(el);
        });
    });
}

function initDeathInput() {
    const yearSlider = document.getElementById("year-slider") as HTMLElement | null;
    const yearItems = document.querySelectorAll(".year-item");
    const yearConfirmBtn = document.getElementById("year-confirm-btn");
    const monthBtns = document.querySelectorAll(".month-btn");

    if (yearSlider) {
        setupSliderDrag(yearSlider);
        yearSlider.addEventListener("scroll", () => {
            window.requestAnimationFrame(() => updateActiveYear(yearSlider, yearItems));
        });
        setTimeout(() => updateActiveYear(yearSlider, yearItems), 500);
    }

    setupYearItems(yearItems);
    if (yearConfirmBtn) {
        setupYearConfirmBtn(yearConfirmBtn);
    }
    setupMonthBtns(monthBtns);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDeathInput);
} else {
    initDeathInput();
}
