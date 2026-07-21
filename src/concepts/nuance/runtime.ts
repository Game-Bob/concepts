type NuanceElements = {
    readonly root: HTMLElement;
    readonly track: HTMLElement;
    readonly visualTrack: HTMLElement;
    readonly handle: HTMLElement;
    readonly bgLeft: HTMLElement;
    readonly bgRight: HTMLElement;
    readonly bgCenter: HTMLElement;
    readonly labelLeft: HTMLElement;
    readonly labelRight: HTMLElement;
    readonly slides: readonly HTMLElement[];
};

const requireElement = <T extends HTMLElement>(root: ParentNode, selector: string): T => {
    const element = root.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Nuance experience is missing ${selector}`);
    }

    return element;
};

const getElements = (root: HTMLElement): NuanceElements => ({
    root,
    track: requireElement(root, "[data-nuance-track]"),
    visualTrack: requireElement(root, "[data-nuance-visual-track]"),
    handle: requireElement(root, "[data-nuance-handle]"),
    bgLeft: requireElement(root, "[data-nuance-bg-left]"),
    bgRight: requireElement(root, "[data-nuance-bg-right]"),
    bgCenter: requireElement(root, "[data-nuance-bg-center]"),
    labelLeft: requireElement(root, "[data-nuance-label-left]"),
    labelRight: requireElement(root, "[data-nuance-label-right]"),
    slides: [...root.querySelectorAll<HTMLElement>("[data-nuance-slide]")],
});

type NuanceState = {
    position: number;
    dragging: boolean;
    windForce: number;
    windTarget: number;
    animationFrameId: number;
};

type NuanceOpacity = {
    readonly left: number;
    readonly right: number;
    readonly center: number;
};

const getOpacity = (position: number): NuanceOpacity => {
    if (position < 0.45) {
        const left = Math.min(1, (0.45 - position) * 5);
        return { left, right: 0, center: 1 - left };
    }

    if (position > 0.55) {
        const right = Math.min(1, (position - 0.55) * 5);
        return { left: 0, right, center: 1 - right };
    }

    return { left: 0, right: 0, center: 1 };
};

const renderSlide = (slide: HTMLElement, opacity: NuanceOpacity): void => {
    const left = requireElement<HTMLElement>(slide, ".nuance-state-left");
    const right = requireElement<HTMLElement>(slide, ".nuance-state-right");
    const center = requireElement<HTMLElement>(slide, ".nuance-state-center");
    left.style.opacity = opacity.left > 0.1 ? String(Math.min(1, opacity.left * 2)) : "0";
    right.style.opacity = opacity.right > 0.1 ? String(Math.min(1, opacity.right * 2)) : "0";
    center.style.opacity = String(opacity.center);
    center.style.transform = `scale(${0.9 + opacity.center * 0.1}) blur(${(1 - opacity.center) * 10}px)`;
};

const renderExperience = (elements: NuanceElements, position: number): void => {
    const opacity = getOpacity(position);
    elements.handle.style.left = `${position * 100}%`;
    elements.track.setAttribute("aria-valuenow", String(Math.round(position * 100)));
    elements.bgLeft.style.opacity = opacity.left.toFixed(3);
    elements.bgRight.style.opacity = opacity.right.toFixed(3);
    elements.bgCenter.style.opacity = opacity.center.toFixed(3);
    elements.bgCenter.style.filter = `grayscale(${Math.max(opacity.left, opacity.right)})`;
    elements.root.style.color = opacity.left > 0.5 ? "#000" : "#fff";
    const darkTrack = opacity.left > 0.5;
    elements.visualTrack.style.borderColor = darkTrack
        ? "rgba(0, 0, 0, 0.2)"
        : "rgba(255, 255, 255, 0.2)";
    elements.visualTrack.style.backgroundColor = darkTrack
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(0, 0, 0, 0.2)";
    elements.slides.forEach((slide) => renderSlide(slide, opacity));
};

const updatePosition = (elements: NuanceElements, state: NuanceState, clientX: number): void => {
    const rect = elements.track.getBoundingClientRect();
    const raw = (clientX - rect.left) / rect.width;
    state.position = Math.max(0, Math.min(1, raw));
};

const getKeyPosition = (event: KeyboardEvent, position: number): number | undefined => {
    const step = event.shiftKey ? 0.1 : 0.025;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") return position - step;
    if (event.key === "ArrowRight" || event.key === "ArrowUp") return position + step;
    if (event.key === "Home") return 0;
    if (event.key === "End") return 1;
    return undefined;
};

const startDrag = (elements: NuanceElements, state: NuanceState, event: PointerEvent): void => {
    state.dragging = true;
    elements.track.setPointerCapture(event.pointerId);
    elements.handle.classList.add("cursor-grabbing");
    updatePosition(elements, state, event.clientX);
    renderExperience(elements, state.position);
};

const moveDrag = (elements: NuanceElements, state: NuanceState, event: PointerEvent): void => {
    if (!state.dragging) return;
    updatePosition(elements, state, event.clientX);
    renderExperience(elements, state.position);
};

const endDrag = (elements: NuanceElements, state: NuanceState, event: PointerEvent): void => {
    state.dragging = false;
    elements.handle.classList.remove("cursor-grabbing");
    if (elements.track.hasPointerCapture(event.pointerId)) {
        elements.track.releasePointerCapture(event.pointerId);
    }
};

const handleKeydown = (
    elements: NuanceElements,
    state: NuanceState,
    event: KeyboardEvent
): void => {
    const position = getKeyPosition(event, state.position);
    if (position === undefined) return;
    event.preventDefault();
    state.position = Math.max(0, Math.min(1, position));
    renderExperience(elements, state.position);
};

const setupControls = (elements: NuanceElements, state: NuanceState): (() => void) => {
    const start = (event: PointerEvent): void => startDrag(elements, state, event);
    const move = (event: PointerEvent): void => moveDrag(elements, state, event);
    const end = (event: PointerEvent): void => endDrag(elements, state, event);
    const keydown = (event: KeyboardEvent): void => handleKeydown(elements, state, event);
    elements.track.addEventListener("pointerdown", start);
    elements.track.addEventListener("pointermove", move);
    elements.track.addEventListener("pointerup", end);
    elements.track.addEventListener("pointercancel", end);
    elements.track.addEventListener("keydown", keydown);
    return () => {
        elements.track.removeEventListener("pointerdown", start);
        elements.track.removeEventListener("pointermove", move);
        elements.track.removeEventListener("pointerup", end);
        elements.track.removeEventListener("pointercancel", end);
        elements.track.removeEventListener("keydown", keydown);
    };
};

const setupObserver = (elements: NuanceElements): (() => void) => {
    elements.labelLeft.dataset.defaultLabel = elements.labelLeft.innerText;
    elements.labelRight.dataset.defaultLabel = elements.labelRight.innerText;
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const slide = entry.target as HTMLElement;
                    elements.labelLeft.innerText =
                        slide.dataset.labelLeft || elements.labelLeft.dataset.defaultLabel || "";
                    elements.labelRight.innerText =
                        slide.dataset.labelRight || elements.labelRight.dataset.defaultLabel || "";
                }
            }
        },
        { threshold: 0.5 }
    );
    elements.slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
};

const setupAnimation = (elements: NuanceElements, state: NuanceState): (() => void) => {
    const loop = (): void => {
        if (!state.dragging) {
            if (Math.random() > 0.98) state.windTarget = (Math.random() - 0.5) * 0.008;
            state.windForce += (state.windTarget - state.windForce) * 0.05;
            state.position += state.windForce + (state.position - 0.5) * 0.003;
            state.position = Math.max(0, Math.min(1, state.position));
        }
        renderExperience(elements, state.position);
        state.animationFrameId = window.requestAnimationFrame(loop);
    };
    state.animationFrameId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(state.animationFrameId);
};

const setupNuanceExperience = (elements: NuanceElements): (() => void) => {
    const state: NuanceState = {
        position: 0.5,
        dragging: false,
        windForce: 0,
        windTarget: 0,
        animationFrameId: 0,
    };
    const cleanups = [setupControls(elements, state), setupObserver(elements)];
    renderExperience(elements, state.position);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        cleanups.push(setupAnimation(elements, state));
    }
    return () => cleanups.forEach((cleanup) => cleanup());
};

export const initializeNuanceExperience = (): (() => void) => {
    const root = document.querySelector<HTMLElement>("[data-nuance-controller]");

    if (!root) {
        return () => undefined;
    }

    return setupNuanceExperience(getElements(root));
};
