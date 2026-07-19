import fs from "node:fs";
import path from "node:path";
import { parse } from "@astrojs/compiler";

const file = process.argv.find((argument) => argument.startsWith("--file="))?.slice(7);
if (!file) throw new Error("Pass --file=MedicionName.astro");

const sourceRoot = process.argv.includes("--source")
    ? "../jjlmoya/src/components/pages/medicion"
    : "src/components/measurement/original";
const filePath = path.resolve(sourceRoot, file);
const source = fs.readFileSync(filePath, "utf8");
const parsed = await parse(source, { position: true });
const nodes = [];

const normalize = (value) => value.replace(/\s+/g, " ").trim();

const visit = (node, ancestors = [], insideExpression = false) => {
    if (!node || typeof node !== "object") return;
    if (node.type === "text") {
        const value = normalize(node.data ?? node.value ?? "");
        const parent = ancestors.at(-1);
        if (
            value &&
            parent !== "style" &&
            parent !== "script" &&
            !insideExpression &&
            node.position
        ) {
            nodes.push({ value, start: node.position.start.offset, end: node.position.end.offset });
        }
    }
    const nextAncestors = node.name ? [...ancestors, node.name] : ancestors;
    const nextInsideExpression =
        insideExpression || node.type === "expression" || node.type === "frontmatter";
    for (const child of node.children ?? []) visit(child, nextAncestors, nextInsideExpression);
};

visit(parsed.ast);

const stem = file.replace(/^Medicion/, "").replace(/\.astro$/, "");
const prefix = `${stem[0].toLowerCase()}${stem.slice(1)}`;
const entries = nodes.map((node, index) => ({
    id: `${prefix}.${String(index + 1).padStart(3, "0")}`,
    value: node.value,
    hintStart: node.start,
}));

const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let cursor = source.indexOf("---", 3) + 3;
for (const entry of entries) {
    const pattern = new RegExp(escapePattern(entry.value).replaceAll(" ", "\\s+"), "g");
    pattern.lastIndex = cursor;
    const candidates = [];
    let candidate;
    while ((candidate = pattern.exec(source)) && candidate.index <= entry.hintStart + 500) {
        candidates.push(candidate);
        if (!candidate[0].length) pattern.lastIndex += 1;
    }
    const match = candidates.sort(
        (a, b) => Math.abs(a.index - entry.hintStart) - Math.abs(b.index - entry.hintStart)
    )[0];
    if (!match) throw new Error(`Could not locate ${entry.id}: ${entry.value}`);
    entry.start = match.index;
    entry.end = match.index + match[0].length;
    cursor = entry.end;
}

let transformed = source;
for (const entry of [...entries].sort((a, b) => b.start - a.start)) {
    transformed = `${transformed.slice(0, entry.start)}{texts[${JSON.stringify(entry.id)}]}${transformed.slice(entry.end)}`;
}

const frontmatterEnd = transformed.indexOf("---", 3);
if (frontmatterEnd < 0) throw new Error(`${file} has no closing frontmatter fence`);
const setup = [
    'import type { MeasurementTexts } from "../../../concepts/measurement/locales";',
    "",
    "interface Props {",
    "    texts: MeasurementTexts;",
    "}",
    "",
    "const { texts } = Astro.props;",
    "",
].join("\n");
transformed = `${transformed.slice(0, frontmatterEnd)}${setup}${transformed.slice(frontmatterEnd)}`;

process.stdout.write(
    `${JSON.stringify({ transformed, entries: entries.map(({ id, value }) => ({ id, value })) })}\n`
);
