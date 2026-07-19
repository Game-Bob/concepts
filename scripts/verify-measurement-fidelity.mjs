import fs from "node:fs";
import path from "node:path";

const workspace = process.cwd();
const sourceRoot = path.resolve(workspace, "../jjlmoya/src/components/pages/medicion");
const targetRoot = path.resolve(workspace, "src/components/measurement/original");
const spanishSource = fs.readFileSync(
    path.resolve(workspace, "src/concepts/measurement/texts/es.ts"),
    "utf8"
);
const texts = Object.fromEntries(
    [...spanishSource.matchAll(/^\s+"([^"]+)": (".*"),$/gm)].map((match) => [
        match[1],
        JSON.parse(match[2]),
    ])
);

const normalize = (value) => value.replace(/\r\n/g, "\n").replace(/\s+/g, " ").trim();
const setupPattern =
    /import type \{ MeasurementTexts \} from "\.\.\/\.\.\/\.\.\/concepts\/measurement\/locales";\s+interface Props \{\s+texts: MeasurementTexts;\s+\}\s+const \{ texts \} = Astro\.props;\s*/;
const issues = [];

for (const file of fs
    .readdirSync(sourceRoot)
    .filter((name) => name.endsWith(".astro"))
    .sort()) {
    const source = fs.readFileSync(path.join(sourceRoot, file), "utf8");
    const localized = fs.readFileSync(path.join(targetRoot, file), "utf8");
    const restored = localized
        .replace(/\{texts\["([^"]+)"\]\}/g, (_, id) => {
            if (!(id in texts)) throw new Error(`Missing Spanish text: ${id}`);
            return texts[id];
        })
        .replace(setupPattern, "");
    if (normalize(source) !== normalize(restored)) issues.push(file);
}

const sourceCss = fs.readFileSync(
    path.resolve(workspace, "../jjlmoya/src/pages/conceptos/medicion.css"),
    "utf8"
);
const targetCss = fs.readFileSync(
    path.resolve(workspace, "src/styles/measurement-experience.css"),
    "utf8"
);

if (sourceCss.replace(/\r\n/g, "\n").trim() !== targetCss.replace(/\r\n/g, "\n").trim()) {
    issues.push("measurement-experience.css");
}

if (issues.length) {
    process.stderr.write(`Fidelity differences: ${issues.join(", ")}\n`);
    process.exitCode = 1;
} else {
    process.stdout.write(
        "All original measurement components, texts, styles and structures are preserved.\n"
    );
}
