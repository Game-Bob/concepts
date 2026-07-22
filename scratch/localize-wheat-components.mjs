import fs from "node:fs";
import path from "node:path";

const directory = path.resolve("src/components/wheat");
const excluded = new Set(["style", "script"]);
const values = new Set();

const normalize = (value) => value.replace(/\s+/g, " ").trim();
const expression = (value) => `{w(${JSON.stringify(normalize(value))})}`;

const translateAttributes = (source) =>
    source.replace(
        /\b(alt|aria-label|title|data-share-text|quote)="([^"]*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ][^"]*)"/g,
        (_match, name, value) => {
            values.add(normalize(value));
            return `${name}=${expression(value)}`;
        }
    );

const translateNodes = (source) =>
    source.replace(/>([^<>{}]*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ][^<>{}]*)</g, (_match, value) => {
        const normalized = normalize(value);
        if (!normalized) return _match;
        values.add(normalized);
        return `>${expression(value)}<`;
    });

const injectFrontmatter = (source) => {
    const end = source.indexOf("---", 3);
    const frontmatter = source.slice(3, end);
    const addition = `\nimport type { WheatTranslator } from "../../concepts/wheat/texts";\nconst { w } = Astro.props as { w: WheatTranslator };\n`;
    return `---${frontmatter}${addition}---${source.slice(end + 3)}`;
};

for (const name of fs.readdirSync(directory).filter((name) => name.endsWith(".astro"))) {
    const file = path.join(directory, name);
    let source = fs.readFileSync(file, "utf8");
    if (source.includes("WheatTranslator")) continue;
    const blocks = [];
    source = source.replace(/<(style|script)\b[\s\S]*?<\/\1>/g, (block, tag) => {
        if (!excluded.has(tag)) return block;
        const token = `__WHEAT_BLOCK_${blocks.length}__`;
        blocks.push(block);
        return token;
    });
    source = translateNodes(translateAttributes(source));
    source = injectFrontmatter(source);
    source = source.replace(/__WHEAT_BLOCK_(\d+)__/g, (_match, index) => blocks[Number(index)]);
    fs.writeFileSync(file, source);
}

for (const name of fs.readdirSync(directory).filter((name) => name.endsWith(".astro"))) {
    const file = path.join(directory, name);
    const source = fs
        .readFileSync(file, "utf8")
        .replaceAll(
            'import ShareableQuote from "../../ShareableQuote.astro";',
            'import ShareableQuote from "./WheatShareableQuote.astro";'
        )
        .replace(/<ShareableQuote(?![^>]*\{w\})/g, "<ShareableQuote {w}");
    fs.writeFileSync(file, source);
}

const localizedValues = new Set();
for (const name of fs.readdirSync(directory).filter((name) => name.endsWith(".astro"))) {
    const source = fs.readFileSync(path.join(directory, name), "utf8");
    for (const match of source.matchAll(/w\(("(?:[^"\\]|\\.)*")\)/g)) {
        localizedValues.add(JSON.parse(match[1]));
    }
}
localizedValues.add("Compartir idea");
const sortedValues = [...localizedValues].sort();
const entries = sortedValues.map(
    (value) => `    ${JSON.stringify(value)}: ${JSON.stringify(value)},`
);
const output = `export const WHEAT_ES_TEXTS = {\n${entries.join("\n")}\n} as const;\n`;
fs.mkdirSync(path.resolve("src/concepts/wheat/texts"), { recursive: true });
fs.writeFileSync(path.resolve("src/concepts/wheat/texts/es.ts"), output);
process.stdout.write(`${sortedValues.length}\n`);
