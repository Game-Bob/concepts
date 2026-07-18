import { describe, expect, it } from "vitest";
import { CONCEPTS, getConceptLocale } from "../src/concepts/registry";
import { WAITING_LOCALES } from "../src/concepts/waiting/locales";
import { LANGUAGE_CODES } from "../src/i18n/languages";
import { getConceptAlternateLinks, getConceptUrl } from "../src/routing/routes";

const SHARING_ENGLISH_SLUG = new Set(["ja", "ko", "zh"]);

const validateSlug = (language: (typeof LANGUAGE_CODES)[number], slug: string): void => {
    expect(slug, `${language} slug must be transliterated`).toMatch(/^[a-z0-9-]+$/);
    expect(slug, `${language} slug cannot end with a language code`).not.toMatch(/-[a-z]{2}$/);
};

describe("concept registry", () => {
    it("registers waiting as the first real concept", () => {
        expect(CONCEPTS.map(({ id }) => id)).toEqual(["waiting"]);
    });

    it("provides transliterated and properly localized slugs in all languages", () => {
        const englishSlug = CONCEPTS[0]?.slugs.en;
        const localizedSlugs = new Set<string>();

        for (const language of LANGUAGE_CODES) {
            const slug = CONCEPTS[0]?.slugs[language] ?? "";
            validateSlug(language, slug);

            if (language !== "en" && SHARING_ENGLISH_SLUG.has(language)) {
                expect(slug).toBe(englishSlug);
            } else if (language !== "en") {
                expect(slug, `${language} slug must differ from English`).not.toBe(englishSlug);
                expect(localizedSlugs.has(slug), `${language} slug must be unique`).toBe(false);
                localizedSlugs.add(slug);
            }

            expect(getConceptLocale("waiting", language).title).toBeTruthy();
            expect(WAITING_LOCALES[language].facts.length).toBeGreaterThanOrEqual(25);
        }
    });

    it("keeps every detail page reciprocal", () => {
        const links = getConceptAlternateLinks("waiting");
        expect(links).toHaveLength(15);
        expect(links.find(({ language }) => language === "es")?.url).toBe(
            "https://www.jjlmoya.es/conceptos/espera/"
        );
        expect(links.find(({ language }) => language === "en")?.url).toBe(
            "https://www.gamebob.dev/en/concepts/waiting/"
        );
        expect(links.map(({ language }) => getConceptUrl("waiting", language))).toEqual(
            links.map(({ url }) => url)
        );
    });
});
