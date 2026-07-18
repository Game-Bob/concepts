import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const FORBIDDEN_CHARACTERS = [
    "\u2013",
    "\u2014",
    "\u2026",
    "\u201c",
    "\u201d",
    "\u2018",
    "\u2019",
    "\u00ab",
    "\u00bb",
    "\u200b",
    "\u201e",
] as const;

const getSourceFiles = (directory: string): readonly string[] =>
    fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return getSourceFiles(fullPath);
        return /\.(?:astro|ts)$/.test(entry.name) ? [fullPath] : [];
    });

const isContentFile = (filePath: string): boolean => {
    const normalized = filePath.replaceAll("\\", "/");
    return (
        normalized.includes("/i18n/") ||
        normalized.includes("/sections/") ||
        normalized.includes("/components/") ||
        normalized.endsWith("/routing/navigation.ts") ||
        normalized.endsWith("/locales.ts")
    );
};

const sourceFiles = getSourceFiles(path.join(process.cwd(), "src")).filter(isContentFile);

const getLiterals = (content: string): readonly string[] =>
    [...content.matchAll(/(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g)].map((match) => match[2] ?? "");

describe("typography garbage character validation", () => {
    sourceFiles.forEach((filePath) => {
        const relativePath = path.relative(process.cwd(), filePath);

        it(`rejects forbidden typography characters in ${relativePath}`, () => {
            const content = fs.readFileSync(filePath, "utf8");
            const literals = getLiterals(content);
            const found = FORBIDDEN_CHARACTERS.filter((character) =>
                literals.some((literal) => literal.includes(character))
            );
            expect(found, `${relativePath} contains: ${found.join(" ")}`).toEqual([]);
        });

        it(`rejects spaces before colons in ${relativePath}`, () => {
            const content = fs.readFileSync(filePath, "utf8");
            expect(getLiterals(content).some((literal) => / : /.test(literal))).toBe(false);
        });

        it(`rejects double hyphens in ${relativePath}`, () => {
            const content = fs.readFileSync(filePath, "utf8");
            expect(getLiterals(content).some((literal) => literal.includes("--"))).toBe(false);
        });
    });
});
