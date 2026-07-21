import fs from "node:fs";
import path from "node:path";

const colors = {
    "#ffffff": "var(--wheat-white)",
    "#fff": "var(--wheat-white)",
    "#e7e5e4": "var(--wheat-stone-200)",
    "#d6d3d1": "var(--wheat-stone-300)",
    "#a8a29e": "var(--wheat-stone-400)",
    "#78716c": "var(--wheat-stone-500)",
    "#57534e": "var(--wheat-stone-600)",
    "#44403c": "var(--wheat-stone-700)",
    "#292524": "var(--wheat-stone-800)",
    "#1c1917": "var(--wheat-stone-900)",
    "#0c0a09": "var(--wheat-stone-950)",
    "#fbbf24": "var(--wheat-amber-400)",
    "#f59e0b": "var(--wheat-amber-500)",
    "#d97706": "var(--wheat-amber-600)",
    "#92400e": "var(--wheat-amber-800)",
    "#34d399": "var(--wheat-emerald-400)",
    "#10b981": "var(--wheat-emerald-500)",
    "#065f46": "var(--wheat-emerald-800)",
    "#064e3b": "var(--wheat-emerald-900)",
    "#22c55e": "var(--wheat-green-500)",
    "#3b82f6": "var(--wheat-blue-500)",
    "#ef4444": "var(--wheat-red-500)",
};

const replaceColors = (source) => {
    let result = source;
    for (const [color, variable] of Object.entries(colors)) {
        result = result.replaceAll(color, variable);
    }
    return result;
};

const directory = path.resolve("src/components/wheat");
for (const name of fs.readdirSync(directory).filter((name) => name.endsWith(".astro"))) {
    const file = path.join(directory, name);
    const source = fs.readFileSync(file, "utf8");
    const result = source.replace(
        /<style>([\s\S]*?)<\/style>/g,
        (_match, css) => `<style>${replaceColors(css)}</style>`
    );
    fs.writeFileSync(file, result);
}

const stylesheet = path.resolve("src/styles/wheat-experience.css");
fs.writeFileSync(stylesheet, replaceColors(fs.readFileSync(stylesheet, "utf8")));
