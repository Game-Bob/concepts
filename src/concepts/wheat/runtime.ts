import { initializeWheatPopulationChart } from "./populationChartRuntime";

type WheatExperienceElements = {
    root: HTMLElement;
    main: HTMLElement;
    splash: HTMLElement;
};

const shareText = async (text: string): Promise<void> => {
    if (navigator.share) {
        try {
            await navigator.share({ text });
            return;
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") return;
        }
    }

    await navigator.clipboard?.writeText(text);
};

const setupShareButtons = (root: HTMLElement): (() => void) => {
    const controller = new AbortController();
    root.querySelectorAll<HTMLElement>("[data-share-btn]").forEach((button) => {
        button.addEventListener(
            "click",
            () => {
                const text = button.dataset.shareText;
                if (text) void shareText(text);
            },
            { signal: controller.signal }
        );
    });
    return () => controller.abort();
};

const setupTocMenu = (root: HTMLElement): (() => void) => {
    const controller = new AbortController();
    const toggle = root.querySelector<HTMLButtonElement>("#toc-mobile-toggle");
    const close = root.querySelector<HTMLButtonElement>("#toc-mobile-close");
    const menu = root.querySelector<HTMLElement>("#toc-mobile-menu");
    const links = [...root.querySelectorAll<HTMLAnchorElement>(".toc-mobile-link")];
    const setMenuOpen = (open: boolean): void => {
        menu?.classList.toggle("translate-y-full", !open);
        document.body.classList.toggle("overflow-hidden", open);
        toggle?.setAttribute("aria-expanded", String(open));
    };
    const toggleMenu = (): void =>
        setMenuOpen(menu?.classList.contains("translate-y-full") ?? false);

    toggle?.setAttribute("aria-expanded", "false");
    toggle?.addEventListener("click", toggleMenu, { signal: controller.signal });
    close?.addEventListener("click", () => setMenuOpen(false), { signal: controller.signal });
    links.forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false), { signal: controller.signal });
    });

    return () => {
        controller.abort();
        setMenuOpen(false);
    };
};

const setupTocObserver = (root: HTMLElement): (() => void) => {
    const dots = [...root.querySelectorAll<HTMLElement>(".wheat-toc-dot")];
    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries.find((entry) => entry.isIntersecting);
            if (!visible) return;
            const active = root.querySelector<HTMLElement>(
                `a[href="#${visible.target.id}"] .wheat-toc-dot`
            );
            dots.forEach((dot) => dot.classList.toggle("active", dot === active));
        },
        { rootMargin: "-50% 0px", threshold: 0 }
    );
    root.querySelectorAll<HTMLElement>("section[id]").forEach((section) =>
        observer.observe(section)
    );

    return () => observer.disconnect();
};

const setupTableOfContents = (root: HTMLElement): (() => void) => {
    const cleanups = [setupTocMenu(root), setupTocObserver(root)];
    return () => cleanups.forEach((cleanup) => cleanup());
};

const getElements = (): WheatExperienceElements | null => {
    const root = document.querySelector<HTMLElement>("[data-wheat-experience]");
    if (!root) return null;

    const main = root.querySelector<HTMLElement>(".trigo-main");
    const splash = root.querySelector<HTMLElement>("[data-wheat-splash]");
    if (!main || !splash) return null;

    return { root, main, splash };
};

const revealImmediately = ({ root, main, splash }: WheatExperienceElements): void => {
    main.style.opacity = "1";
    splash.style.display = "none";
    splash.style.pointerEvents = "none";
    root.dataset.wheatReady = "true";
    document.body.classList.remove("wheat-splash-active");
};

const scrollToIntroduction = (root: HTMLElement): void => {
    const introduction = root.querySelector<HTMLElement>("#intro");
    introduction?.scrollIntoView({ behavior: "auto", block: "start" });
};

const prepareEntrance = ({ main, splash }: WheatExperienceElements): void => {
    document.body.classList.add("wheat-splash-active");
    main.style.opacity = "0";
    splash.style.display = "flex";
    splash.style.opacity = "1";
    splash.style.pointerEvents = "auto";
};

const scheduleEntrance = ({ root, main, splash }: WheatExperienceElements): number[] => [
    window.setTimeout(() => {
        main.style.opacity = "1";
    }, 100),
    window.setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";
        document.body.classList.remove("wheat-splash-active");
    }, 1500),
    window.setTimeout(() => {
        splash.style.display = "none";
        root.dataset.wheatReady = "true";
    }, 2500),
];

const runEntrance = (elements: WheatExperienceElements): (() => void) => {
    prepareEntrance(elements);
    const timers = scheduleEntrance(elements);

    return () => {
        timers.forEach((timer) => window.clearTimeout(timer));
        revealImmediately(elements);
    };
};

export const initializeWheatExperience = (): (() => void) => {
    const elements = getElements();
    if (!elements) return () => undefined;

    scrollToIntroduction(elements.root);
    const cleanups = [
        setupShareButtons(elements.root),
        setupTableOfContents(elements.root),
        initializeWheatPopulationChart(elements.root),
    ];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealImmediately(elements);
        return () => {
            cleanups.forEach((cleanup) => cleanup());
            revealImmediately(elements);
        };
    }

    cleanups.push(runEntrance(elements));
    return () => cleanups.forEach((cleanup) => cleanup());
};
