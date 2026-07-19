import fs from "node:fs";
import path from "node:path";
import { parse } from "@astrojs/compiler";

const root = process.argv.includes("--source")
    ? path.resolve("../jjlmoya/src/components/pages/medicion")
    : path.resolve("src/components/measurement/original");
const requestedFile = process.argv.find((argument) => argument.startsWith("--file="))?.slice(7);
const files = fs
    .readdirSync(root)
    .filter((name) => name.endsWith(".astro") && (!requestedFile || name === requestedFile))
    .sort();
const catalog = [];

const normalize = (value) => value.replace(/\s+/g, " ").trim();

const visit = (node, file, ancestors = [], insideExpression = false) => {
    if (!node || typeof node !== "object") return;

    if (node.type === "text") {
        const value = normalize(node.data ?? node.value ?? "");
        const parent = ancestors.at(-1);
        if (value && parent !== "style" && parent !== "script" && !insideExpression) {
            catalog.push({ file, kind: "text", parent, value, position: node.position });
        }
    }

    if (node.type === "element" || node.type === "component") {
        for (const attribute of node.attributes ?? []) {
            if (["aria-label", "alt", "placeholder", "title"].includes(attribute.name)) {
                const value = normalize(attribute.value ?? "");
                if (value) {
                    catalog.push({
                        file,
                        kind: attribute.name,
                        parent: node.name,
                        value,
                        position: attribute.position,
                    });
                }
            }
        }
    }

    const nextAncestors = node.name ? [...ancestors, node.name] : ancestors;
    const nextInsideExpression =
        insideExpression || node.type === "expression" || node.type === "frontmatter";
    for (const child of node.children ?? []) {
        visit(child, file, nextAncestors, nextInsideExpression);
    }
};

for (const file of files) {
    const source = fs.readFileSync(path.join(root, file), "utf8");
    const result = await parse(source, { position: true });
    if (process.argv.includes("--ast")) {
        process.stdout.write(`${JSON.stringify(result.ast, null, 2)}\n`);
        process.exit(0);
    }
    visit(result.ast, file);
}

if (process.argv.includes("--summary")) {
    const byFile = Object.entries(Object.groupBy(catalog, ({ file }) => file)).map(
        ([file, entries]) => ({ file, count: entries.length })
    );
    const unique = new Set(catalog.map(({ value }) => value));
    const byKind = Object.fromEntries(
        Object.entries(Object.groupBy(catalog, ({ kind }) => kind)).map(([kind, entries]) => [
            kind,
            entries.length,
        ])
    );
    process.stdout.write(
        `${JSON.stringify({ total: catalog.length, unique: unique.size, byKind, byFile }, null, 2)}\n`
    );
} else {
    process.stdout.write(`${JSON.stringify(catalog, null, 2)}\n`);
}
