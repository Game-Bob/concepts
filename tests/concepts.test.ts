import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { CONCEPTS, getConceptLocale } from "../src/concepts/registry";
import { LANGUAGE_CODES } from "../src/i18n/languages";
import {
    getConceptAlternateLinks,
    getConceptsIndexUrl,
    getConceptUrl,
} from "../src/routing/routes";

const SHARING_ENGLISH_SLUG = new Set(["ja", "ko", "zh"]);

const validateSlug = (language: (typeof LANGUAGE_CODES)[number], slug: string): void => {
    expect(slug, `${language} slug must be transliterated`).toMatch(/^[a-z0-9-]+$/);
    expect(slug, `${language} slug cannot end with a language code`).not.toMatch(/-[a-z]{2}$/);
};

describe("concept registry", () => {
    it("keeps concept identifiers unique", () => {
        const ids = CONCEPTS.map(({ id }) => id);

        expect(new Set(ids).size).toBe(ids.length);
    });

    it("provides transliterated and properly localized slugs in all languages", () => {
        const slugsByLanguage = Object.fromEntries(
            LANGUAGE_CODES.map((language) => [language, new Set<string>()])
        );

        for (const concept of CONCEPTS) {
            const englishSlug = concept.slugs.en;
            const localizedSlugs = new Set<string>();

            for (const language of LANGUAGE_CODES) {
                const slug = concept.slugs[language];
                validateSlug(language, slug);

                if (language !== "en" && SHARING_ENGLISH_SLUG.has(language)) {
                    expect(slug).toBe(englishSlug);
                } else if (language !== "en") {
                    expect(slug, `${language} slug must differ from English`).not.toBe(englishSlug);
                    expect(localizedSlugs.has(slug), `${language} slug must be unique`).toBe(false);
                    localizedSlugs.add(slug);
                }

                const languageSlugs = slugsByLanguage[language];
                expect(languageSlugs?.has(slug), `${concept.id} collides in ${language}`).toBe(
                    false
                );
                languageSlugs?.add(slug);
                expect(getConceptLocale(concept.id, language).title).toBeTruthy();
            }
        }
    });

    it("keeps every detail page reciprocal", () => {
        for (const concept of CONCEPTS) {
            const links = getConceptAlternateLinks(concept.id);
            expect(links).toHaveLength(LANGUAGE_CODES.length);

            for (const { language, url } of links) {
                expect(url).toBe(getConceptUrl(concept.id, language));
                expect(url).toBe(`${getConceptsIndexUrl(language)}${concept.slugs[language]}/`);
            }
        }
    });

    it("registers a card and an experience for every concept", () => {
        const indexSource = fs.readFileSync(
            path.resolve("src/components/ConceptsIndex.astro"),
            "utf8"
        );
        const cardSource = fs.readFileSync(
            path.resolve("src/components/ConceptCard.astro"),
            "utf8"
        );
        const detailSource = fs.readFileSync(
            path.resolve("src/components/ConceptDetail.astro"),
            "utf8"
        );

        expect(indexSource).toContain("<ConceptCard");
        for (const concept of CONCEPTS) {
            expect(cardSource).toContain(`conceptId === "${concept.id}"`);
            expect(detailSource).toContain(`conceptId === "${concept.id}"`);
        }
    });
});
