const CHART_LABELS = ["2000", "2004", "2008", "2012", "2016", "2020", "2024"];

const createDataset = (label: string, data: readonly number[], color: string) => ({
    label: `  ${label}`,
    data,
    borderColor: color,
    backgroundColor: color,
    tension: 0.3,
    borderWidth: 3,
    pointRadius: 6,
    pointHoverRadius: 8,
    pointBackgroundColor: color,
});

const createChartConfig = (legendNominal: string, legendReal: string) => ({
    type: "line" as const,
    data: {
        labels: CHART_LABELS,
        datasets: [
            createDataset(legendNominal, [1000, 1150, 1320, 1380, 1420, 1550, 1780], "#34d399"),
            createDataset(legendReal, [1000, 1010, 1020, 980, 990, 970, 950], "#fb7185"),
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index" as const, intersect: false },
        plugins: {
            legend: {
                position: "top" as const,
                labels: {
                    color: "#e2e8f0",
                    font: { size: 14 },
                    usePointStyle: true,
                    boxWidth: 10,
                    padding: 20,
                },
            },
        },
    },
});

export const initMoneyIllusionChart = (container: HTMLElement): void => {
    const canvas = container.querySelector<HTMLCanvasElement>("#moneyIllusionChart");
    if (!canvas) return;

    const nominal = canvas.dataset.legendNominal || "Lo que ingresas";
    const real = canvas.dataset.legendReal || "Para lo que te da";

    import("chart.js").then(({ Chart, registerables }) => {
        Chart.register(...registerables);
        Chart.getChart(canvas)?.destroy();
        new Chart(canvas, createChartConfig(nominal, real));
    });
};
