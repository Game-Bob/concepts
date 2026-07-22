const DEFAULT_SALARY = 25000;
const WORK_HOURS_YEAR = 1760;

const formatEffort = (years: number): string => {
    const months = years * 12;
    if (months >= 12) return `${years.toFixed(1)} años`;

    const days = months * 30;
    if (days >= 30) return `${months.toFixed(1)} meses`;

    const hours = days * 8;
    if (hours >= 8) return `${days.toFixed(1)} días`;
    if (hours >= 1) return `${hours.toFixed(1)} h`;
    return `${Math.round(hours * 60)} min`;
};

const updateCard = (card: HTMLElement, salary: number): void => {
    const cost = Number(card.dataset.cost);
    if (!cost) return;

    const effort = cost / (salary / WORK_HOURS_YEAR) / 8 / 220;
    const effortText = card.querySelector<HTMLElement>(".inf-effort-text-interactive");
    const salaryDisplay = card.querySelector<HTMLElement>(".inf-user-salary-display");
    const progressBar = card.querySelector<HTMLElement>(".inf-progress-bar-now");

    if (effortText) effortText.innerText = formatEffort(effort);
    if (salaryDisplay) salaryDisplay.innerText = `${salary.toLocaleString()}€`;
    if (!progressBar) return;

    const baseEffort = Number(card.dataset.baseEffort || 50);
    progressBar.style.width = `${Math.min(100, Math.max(5, baseEffort * (DEFAULT_SALARY / salary)))}%`;
};

export const setupEffortCalculator = (container: HTMLElement): void => {
    const salaryInput = container.querySelector<HTMLInputElement>("#user-salary");
    const resetButton = container.querySelector<HTMLElement>("#reset-salary");
    const cards = container.querySelectorAll<HTMLElement>(".inf-comparison-card");
    if (!salaryInput) return;

    const update = (): void => {
        const salary = Number(salaryInput.value) || DEFAULT_SALARY;
        cards.forEach((card) => updateCard(card, salary));
    };

    salaryInput.addEventListener("input", update);
    resetButton?.addEventListener("click", () => {
        salaryInput.value = String(DEFAULT_SALARY);
        update();
    });
};
