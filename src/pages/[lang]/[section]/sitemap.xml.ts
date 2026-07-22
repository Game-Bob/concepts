import type { APIRoute, GetStaticPaths } from "astro";
import { LANGUAGE_CODES, type Language } from "../../../i18n/languages";
import { CONCEPTS_SECTION_SLUGS } from "../../../i18n/sections";
import { renderSitemap } from "../../../seo/sitemap";

interface Props {
    language: Exclude<Language, "es">;
}

export const getStaticPaths = (() =>
    LANGUAGE_CODES.filter((language): language is Exclude<Language, "es"> => language !== "es").map(
        (language) => ({
            params: { lang: language, section: CONCEPTS_SECTION_SLUGS[language] },
            props: { language },
        })
    )) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = ({ props }) =>
    new Response(renderSitemap(props.language), {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
