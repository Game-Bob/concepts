import { describe, expect, it } from "vitest";

import { getConceptsAlternateLinks, getConceptsIndexUrl } from "../src/routing/routes";
import type { Language } from "../src/i18n/languages";

const EXPECTED_URLS: Record<Language, string> = {
    es: "https://www.jjlmoya.es/conceptos/",
    en: "https://www.gamebob.dev/en/concepts/",
    fr: "https://www.gamebob.dev/fr/concepts/",
    de: "https://www.gamebob.dev/de/konzepte/",
    it: "https://www.gamebob.dev/it/concetti/",
    pt: "https://www.gamebob.dev/pt/conceitos/",
    nl: "https://www.gamebob.dev/nl/concepten/",
    sv: "https://www.gamebob.dev/sv/koncept/",
    pl: "https://www.gamebob.dev/pl/koncepcje/",
    id: "https://www.gamebob.dev/id/konsep/",
    tr: "https://www.gamebob.dev/tr/kavramlar/",
    ru: "https://www.gamebob.dev/ru/kontseptsii/",
    ja: "https://www.gamebob.dev/ja/concepts/",
    ko: "https://www.gamebob.dev/ko/concepts/",
    zh: "https://www.gamebob.dev/zh/concepts/",
};

describe("localized concepts routes", () => {
    it("resolves every language to its canonical host and translated section", () => {
        const actualUrls = Object.fromEntries(
            Object.keys(EXPECTED_URLS).map((language) => [
                language,
                getConceptsIndexUrl(language as Language),
            ])
        );

        expect(actualUrls).toEqual(EXPECTED_URLS);
    });

    it("publishes one reciprocal alternate for every language", () => {
        const links = getConceptsAlternateLinks();

        expect(links).toHaveLength(15);
        expect(Object.fromEntries(links.map(({ language, url }) => [language, url]))).toEqual(
            EXPECTED_URLS
        );
    });
});
