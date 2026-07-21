import fs from "node:fs";
import path from "node:path";

const directory = "src/components/wheat";
const result = {};

for (const name of fs
    .readdirSync(directory)
    .filter((entry) => entry.endsWith(".astro"))
    .sort()) {
    let source = fs.readFileSync(path.join(directory, name), "utf8");
    source = source
        .replace(/^---[\s\S]*?---/, "")
        .replace(/<style>[\s\S]*?<\/style>/g, "")
        .replace(/<script>[\s\S]*?<\/script>/g, "");
    const values = [];

    for (const match of source.matchAll(/(?:aria-label|alt|data-share-text)="([^"]+)"/g)) {
        values.push(match[1].replace(/\s+/g, " ").trim());
    }

    for (const match of source.matchAll(/>([^<>{}]+)</g)) {
        const value = match[1].replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
        if (value && !/^[,.;:]+$/.test(value)) values.push(value);
    }

    result[name] = [...new Set(values)];
}

process.stdout.write(JSON.stringify(result, null, 2));
