type Elements = {
    readonly intro: HTMLElement;
    readonly waiting: HTMLElement;
    readonly penalty: HTMLElement;
    readonly success: HTMLElement;
    readonly ticket: HTMLElement;
    readonly lostTicket: HTMLElement;
    readonly fact: HTMLElement;
    readonly status: HTMLElement;
    readonly circle: SVGCircleElement;
    readonly finalTime: HTMLElement;
    readonly finalAttempts: HTMLElement;
};

const requireElement = <T extends Element>(root: Element, selector: string): T => {
    const element = root.querySelector<T>(selector);
    if (!element) throw new Error(`Waiting experience is missing ${selector}`);
    return element;
};

const getElements = (root: HTMLElement): Elements => ({
    intro: requireElement(root, "[data-waiting-intro]"),
    waiting: requireElement(root, "[data-waiting-active]"),
    penalty: requireElement(root, "[data-waiting-penalty]"),
    success: requireElement(root, "[data-waiting-success]"),
    ticket: requireElement(root, "[data-waiting-ticket]"),
    lostTicket: requireElement(root, "[data-waiting-lost-ticket]"),
    fact: requireElement(root, "[data-waiting-fact]"),
    status: requireElement(root, "[data-waiting-status]"),
    circle: requireElement(root, "[data-waiting-progress]"),
    finalTime: requireElement(root, "[data-waiting-final-time]"),
    finalAttempts: requireElement(root, "[data-waiting-final-attempts]"),
});

const parseList = (value: string | undefined): readonly string[] => {
    if (!value) return [];
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) && parsed.every((item) => typeof item === "string") ? parsed : [];
};

const formatTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes.toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
};

class WaitingExperience {
    private readonly elements: Elements;
    private readonly facts: readonly string[];
    private readonly statuses: readonly string[];
    private active = false;
    private attempts = 1;
    private ticket = 1;
    private progress = 0;
    private startedAt = 0;
    private factIndex = 0;
    private shuffledFacts: readonly string[] = [];
    private stepTimer?: number;
    private factTimer?: number;
    private statusTimer?: number;

    constructor(private readonly root: HTMLElement) {
        this.elements = getElements(root);
        this.facts = parseList(root.dataset.facts);
        this.statuses = parseList(root.dataset.statuses);
    }

    initialize(): void {
        requireElement<HTMLButtonElement>(this.root, "[data-waiting-start]").addEventListener(
            "click",
            () => this.start()
        );
        requireElement<HTMLButtonElement>(this.root, "[data-waiting-retry]").addEventListener(
            "click",
            () => this.retry()
        );
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) this.fail();
        });
        window.addEventListener("blur", () => this.fail());
    }

    private show(visible: HTMLElement): void {
        [
            this.elements.intro,
            this.elements.waiting,
            this.elements.penalty,
            this.elements.success,
        ].forEach((element) => {
            element.hidden = element !== visible;
            element.classList.remove("waiting__state--entering");
        });
        void visible.offsetWidth;
        visible.classList.add("waiting__state--entering");
    }

    private clearTimers(): void {
        window.clearTimeout(this.stepTimer);
        window.clearInterval(this.factTimer);
        window.clearInterval(this.statusTimer);
    }

    private updateFact(): void {
        if (!this.shuffledFacts.length) return;
        this.elements.fact.classList.remove("waiting__fact--revealing");
        void this.elements.fact.offsetWidth;
        this.elements.fact.textContent =
            this.shuffledFacts[this.factIndex % this.shuffledFacts.length] ?? "";
        this.elements.fact.classList.add("waiting__fact--revealing");
        this.factIndex += 1;
    }

    private updateStatus(): void {
        const status = this.statuses[Math.floor(Math.random() * this.statuses.length)];
        if (status) this.elements.status.textContent = status;
    }

    private start(): void {
        this.active = true;
        this.progress = 0;
        this.startedAt = Date.now();
        this.factIndex = 0;
        const shuffled = [...this.facts];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = shuffled[i];
            if (temp !== undefined) {
                shuffled[i] = shuffled[j] ?? "";
                shuffled[j] = temp;
            }
        }
        this.shuffledFacts = shuffled;
        this.elements.ticket.textContent = this.ticket.toString().padStart(3, "0");
        this.elements.circle.style.strokeDashoffset = "100";
        this.show(this.elements.waiting);
        this.updateFact();
        this.factTimer = window.setInterval(() => this.updateFact(), 8000);
        this.statusTimer = window.setInterval(() => this.updateStatus(), 5000);
        this.step();
    }

    private step(): void {
        if (!this.active) return;
        this.progress = Math.min(100, this.progress + Math.random() * 0.05 + 0.025);
        this.elements.circle.style.strokeDashoffset = (100 - this.progress).toString();
        if (this.progress >= 100) this.finish();
        else this.stepTimer = window.setTimeout(() => this.step(), Math.random() * 200 + 200);
    }

    private finish(): void {
        this.active = false;
        this.clearTimers();
        this.elements.finalTime.textContent = formatTime(Date.now() - this.startedAt);
        this.elements.finalAttempts.textContent = this.attempts.toString();
        this.show(this.elements.success);
    }

    private fail(): void {
        if (!this.active) return;
        this.active = false;
        this.clearTimers();
        this.elements.lostTicket.textContent = this.ticket.toString().padStart(3, "0");
        this.show(this.elements.penalty);
    }

    private retry(): void {
        this.ticket += 1;
        this.attempts += 1;
        this.start();
    }
}

document.querySelectorAll<HTMLElement>("[data-waiting-experience]").forEach((root) => {
    new WaitingExperience(root).initialize();
});
