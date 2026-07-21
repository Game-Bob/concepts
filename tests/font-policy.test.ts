import { readFile } from "node:fs/promises";
import path from "node:path";

import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

describe("font policy", () => {
    it.each([
        [".sample { font-family: serif; }", "property-disallowed-list"],
        [".sample { font: 1rem serif; }", "property-disallowed-list"],
        ["@font-face { font-family: sample; src: url(sample.woff2); }", "at-rule-disallowed-list"],
        ["@import url(font.css);", "at-rule-disallowed-list"],
    ])("rejects non-global font ownership", async (code, expectedRule) => {
        const result = await stylelint.lint({
            code,
            codeFilename: path.resolve("src/components/invalid-font.css"),
            configFile: path.resolve(".stylelintrc.json"),
        });
        const rules = result.results.flatMap(({ warnings }) => warnings.map(({ rule }) => rule));

        expect(rules).toContain(expectedRule);
    }, 15000);

    it("defines font-family exactly once in the global typography boundary", async () => {
        const globalStyles = await readFile(path.resolve("src/styles/global.css"), "utf8");
        const declarations = globalStyles.match(/font-family\s*:/g) ?? [];

        expect(declarations).toHaveLength(1);
    });
});
