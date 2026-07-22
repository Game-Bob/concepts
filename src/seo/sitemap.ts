import { CONCEPTS } from "../concepts/registry";
import { LANGUAGE_CODES, type Language } from "../i18n/languages";
import {
    getConceptAlternateLinks,
    getConceptsAlternateLinks,
    getConceptsIndexUrl,
    getConceptUrl,
} from "../routing/routes";

const escapeXml = (value: string): string =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const renderUrl = (
    url: string,
    alternates: readonly { language: Language; url: string }[]
): string => {
    const alternateLinks = alternates
        .map(
            ({ language, url: alternateUrl }) =>
                `    <xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(alternateUrl)}" />`
        )
        .join("\n");
    const defaultUrl = alternates.find(({ language }) => language === "en")?.url ?? url;

    return [
        "  <url>",
        `    <loc>${escapeXml(url)}</loc>`,
        alternateLinks,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(defaultUrl)}" />`,
        "  </url>",
    ].join("\n");
};

export const renderSitemap = (language: Language): string => {
    const urls = [
        renderUrl(getConceptsIndexUrl(language), getConceptsAlternateLinks()),
        ...CONCEPTS.map(({ id }) =>
            renderUrl(getConceptUrl(id, language), getConceptAlternateLinks(id))
        ),
    ];

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...urls,
        "</urlset>",
    ].join("\n");
};

export const renderInternationalSitemapIndex = (): string => {
    const sitemaps = LANGUAGE_CODES.filter((language) => language !== "es").map(
        (language) =>
            `  <sitemap><loc>${escapeXml(`${getConceptsIndexUrl(language)}sitemap.xml`)}</loc></sitemap>`
    );

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemaps,
        "</sitemapindex>",
    ].join("\n");
};
