import { describe, expect, it } from "vitest";

import { LANGUAGES } from "../src/i18n/languages";

const EXPECTED_LANGUAGE_CODES = [
    "es",
    "en",
    "fr",
    "de",
    "it",
    "pt",
    "nl",
    "sv",
    "pl",
    "id",
    "tr",
    "ru",
    "ja",
    "ko",
    "zh",
] as const;

describe("language contract", () => {
    it("publishes exactly the fifteen supported languages", () => {
        expect(LANGUAGES.map(({ code }) => code)).toEqual(EXPECTED_LANGUAGE_CODES);
    });
});
