import { Chart, registerables, type ChartConfiguration, type TooltipItem } from "chart.js";

Chart.register(...registerables);

type WheatChartPalette = {
    accent: string;
    accentRgb: string;
    background: string;
    foreground: string;
    grid: string;
    muted: string;
};

const getDataset = (canvas: HTMLCanvasElement, palette: WheatChartPalette) => ({
    label: canvas.dataset.chartLabel ?? "",
    data: [0.5, 1, 4, 200, 300, 1000, 8200],
    borderColor: palette.accent,
    backgroundColor: (context: { chart: Chart }) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, `rgb(${palette.accentRgb} / 0.5)`);
        gradient.addColorStop(1, `rgb(${palette.accentRgb} / 0)`);
        return gradient;
    },
    fill: true,
    tension: 0.4,
    borderWidth: 3,
    pointRadius: 4,
    pointHoverRadius: 8,
    pointBackgroundColor: palette.accent,
});

const getTooltip = (palette: WheatChartPalette, locale: string | undefined, suffix: string) => ({
    backgroundColor: palette.background,
    titleColor: palette.accent,
    bodyColor: palette.foreground,
    borderColor: `rgb(${palette.accentRgb} / 0.2)`,
    borderWidth: 1,
    padding: 12,
    displayColors: false,
    callbacks: {
        label: (context: TooltipItem<"line">) =>
            `${Number(context.parsed.y).toLocaleString(locale)} ${suffix}`,
    },
});

const getScales = (palette: WheatChartPalette, locale: string | undefined) => ({
    x: {
        grid: { color: palette.grid },
        ticks: { color: palette.muted, maxRotation: 45, minRotation: 45 },
    },
    y: {
        grid: { color: palette.grid },
        ticks: {
            color: palette.muted,
            callback: (value: string | number) => `${Number(value).toLocaleString(locale)} M`,
        },
    },
});

const getConfiguration = (
    canvas: HTMLCanvasElement,
    reducedMotion: boolean,
    palette: WheatChartPalette
): ChartConfiguration<"line"> => {
    const labels = JSON.parse(canvas.dataset.chartDates ?? "[]") as string[];
    const suffix = canvas.dataset.millionsSuffix ?? "M";
    const locale = canvas.closest<HTMLElement>("[data-language]")?.dataset.language;

    return {
        type: "line",
        data: { labels, datasets: [getDataset(canvas, palette)] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: getTooltip(palette, locale, suffix),
            },
            scales: getScales(palette, locale),
            animation: reducedMotion ? false : { duration: 2000, easing: "easeOutQuart" },
        },
    };
};

const createChart = (canvas: HTMLCanvasElement): Chart<"line"> => {
    Chart.getChart(canvas)?.destroy();
    return new Chart(
        canvas,
        getConfiguration(
            canvas,
            window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            getPalette(canvas)
        )
    );
};

const getPalette = (canvas: HTMLCanvasElement) => {
    const styles = getComputedStyle(canvas);
    const value = (property: string): string => styles.getPropertyValue(property).trim();
    const accentRgb = value("--wheat-amber-500-rgb");
    const stoneRgb = value("--wheat-stone-500-rgb");

    return {
        accent: value("--wheat-amber-500"),
        accentRgb,
        background: `rgb(${value("--wheat-stone-900-rgb")} / 0.95)`,
        foreground: value("--wheat-stone-200"),
        grid: `rgb(${stoneRgb} / 0.18)`,
        muted: value("--wheat-stone-400"),
    };
};

export const initializeWheatPopulationChart = (root: HTMLElement): (() => void) => {
    const canvas = root.querySelector<HTMLCanvasElement>("[data-wheat-population-chart]");
    if (!canvas) return () => undefined;

    let chart: Chart<"line"> | undefined;
    const observer = new IntersectionObserver(
        (entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            chart = createChart(canvas);
            observer.disconnect();
        },
        { threshold: 0.2 }
    );
    observer.observe(canvas);
    const themeObserver = new MutationObserver(() => {
        if (chart) chart = createChart(canvas);
    });
    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });

    return () => {
        observer.disconnect();
        themeObserver.disconnect();
        chart?.destroy();
    };
};
