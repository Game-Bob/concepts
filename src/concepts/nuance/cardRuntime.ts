const MINIMUM_SWITCH_DELAY = 900;
const MAXIMUM_SWITCH_DELAY = 5200;
const MINIMUM_GLITCH_DURATION = 90;
const MAXIMUM_GLITCH_DURATION = 240;

type NuanceCardState = {
    glitchTimer: number;
    switchTimer: number;
    variant: "a" | "b";
};

const getRandomUnit = (): number => {
    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    return (value[0] ?? 0) / 0xffffffff;
};

const getRandomInteger = (minimum: number, maximum: number): number =>
    Math.round(minimum + getRandomUnit() * (maximum - minimum));

const clearGlitch = (card: HTMLElement, state: NuanceCardState): void => {
    window.clearTimeout(state.glitchTimer);
    card.classList.remove("nuance-card--glitch-a", "nuance-card--glitch-b");
};

const triggerGlitch = (card: HTMLElement, state: NuanceCardState): void => {
    clearGlitch(card, state);
    state.variant = state.variant === "a" ? "b" : "a";
    card.classList.add(`nuance-card--glitch-${state.variant}`);
    state.glitchTimer = window.setTimeout(
        () => clearGlitch(card, state),
        getRandomInteger(MINIMUM_GLITCH_DURATION, MAXIMUM_GLITCH_DURATION)
    );
};

const switchPole = (card: HTMLElement, state: NuanceCardState): void => {
    card.dataset.nuancePole = card.dataset.nuancePole === "black" ? "white" : "black";
    triggerGlitch(card, state);
};

const scheduleSwitch = (card: HTMLElement, state: NuanceCardState): void => {
    state.switchTimer = window.setTimeout(
        () => {
            switchPole(card, state);
            scheduleSwitch(card, state);
        },
        getRandomInteger(MINIMUM_SWITCH_DELAY, MAXIMUM_SWITCH_DELAY)
    );
};

const setupCard = (card: HTMLElement): (() => void) => {
    const state: NuanceCardState = { glitchTimer: 0, switchTimer: 0, variant: "a" };
    card.dataset.nuanceCardInitialized = "true";
    scheduleSwitch(card, state);

    return () => {
        window.clearTimeout(state.switchTimer);
        clearGlitch(card, state);
        delete card.dataset.nuanceCardInitialized;
    };
};

export const initializeNuanceCards = (): (() => void) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return () => undefined;
    }

    const cards = [
        ...document.querySelectorAll<HTMLElement>(
            "[data-nuance-card]:not([data-nuance-card-initialized])"
        ),
    ];
    const cleanups = cards.map(setupCard);
    return () => cleanups.forEach((cleanup) => cleanup());
};
