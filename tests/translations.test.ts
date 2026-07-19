import { describe, expect, it } from "vitest";

import { validateTranslations } from "../src/i18n/translation-contract";
import type { TranslationSet } from "../src/i18n/translation-contract";
import { CONCEPTS, getConceptLocale } from "../src/concepts/registry";
import { LANGUAGE_CODES } from "../src/i18n/languages";
import { CONCEPTS_LOCALES } from "../src/sections/concepts/locales";

describe("concepts translations", () => {
    it("contains a complete locale for every supported language", () => {
        expect(validateTranslations(CONCEPTS_LOCALES, "es")).toEqual([]);

        for (const concept of CONCEPTS) {
            const translations = Object.fromEntries(
                LANGUAGE_CODES.map((language) => [language, getConceptLocale(concept.id, language)])
            ) as unknown as TranslationSet;
            expect(validateTranslations(translations, "es"), concept.id).toEqual([]);
        }
    });

    it("reports missing, unexpected and empty translation keys", () => {
        const invalidTranslations: TranslationSet = {
            ...CONCEPTS_LOCALES,
            en: { title: "Concepts", unexpected: "Unexpected" },
            fr: { title: " ", description: CONCEPTS_LOCALES.fr.description },
        };

        expect(validateTranslations(invalidTranslations, "es")).toEqual([
            "en: Missing key: description",
            "en: Unexpected key: unexpected",
            "fr: Empty value: title",
        ]);
    });
});
