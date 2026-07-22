import { describe, expect, it } from "vitest";

import { CONCEPTS } from "../src/concepts/registry";
import { LANGUAGE_CODES } from "../src/i18n/languages";
import { getConceptsIndexUrl, getConceptUrl } from "../src/routing/routes";
import { OPEN_GRAPH_IMAGES } from "../src/seo/assets";
import { renderInternationalSitemapIndex, renderSitemap } from "../src/seo/sitemap";

describe("SEO assets", () => {
    it("assigns one Open Graph image to the index and every concept", () => {
        expect(Object.keys(OPEN_GRAPH_IMAGES).sort()).toEqual(
            ["concepts", ...CONCEPTS.map(({ id }) => id)].sort()
        );
    });
});

describe("concept sitemaps", () => {
    it.each(LANGUAGE_CODES)(
        "includes every canonical URL and reciprocal hreflang for %s",
        (language) => {
            const sitemap = renderSitemap(language);

            expect(sitemap).toContain(`<loc>${getConceptsIndexUrl(language)}</loc>`);
            for (const concept of CONCEPTS) {
                expect(sitemap).toContain(`<loc>${getConceptUrl(concept.id, language)}</loc>`);
            }
            expect(sitemap.match(/<url>/g)).toHaveLength(CONCEPTS.length + 1);
            expect(sitemap.match(/hreflang="x-default"/g)).toHaveLength(CONCEPTS.length + 1);
        }
    );

    it("indexes every international sitemap", () => {
        const sitemapIndex = renderInternationalSitemapIndex();

        for (const language of LANGUAGE_CODES.filter((code) => code !== "es")) {
            expect(sitemapIndex).toContain(`${getConceptsIndexUrl(language)}sitemap.xml`);
        }
    });
});
