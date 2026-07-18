import { describe, expect, it } from "vitest";

import { getThemeClasses } from "@jjlmoya/identity";

describe("theme contract", () => {
    it.each([
        ["theme-light", false, ["theme-light"]],
        ["theme-light", true, ["theme-light"]],
        ["theme-dark", false, ["theme-dark"]],
        ["theme-dark", true, ["theme-dark"]],
        ["theme-system", false, ["theme-system", "theme-light"]],
        ["theme-system", true, ["theme-system", "theme-dark"]],
    ] as const)("resolves %s with dark preference %s", (theme, prefersDark, expected) => {
        expect(getThemeClasses(theme, prefersDark)).toEqual(expected);
    });
});
