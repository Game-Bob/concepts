import { getConcept, type ConceptId } from "../concepts/registry";
import { CONCEPTS_SECTION_SLUGS } from "../i18n/sections";
import { LANGUAGE_CODES } from "../i18n/languages";
import type { Language } from "../i18n/languages";

const SPANISH_HOST = "https://www.jjlmoya.es";
const INTERNATIONAL_HOST = "https://www.gamebob.dev";

export type AlternateLink = { readonly language: Language; readonly url: string };

export const getConceptsIndexUrl = (language: Language): string => {
    const section = CONCEPTS_SECTION_SLUGS[language];
    return language === "es"
        ? `${SPANISH_HOST}/${section}/`
        : `${INTERNATIONAL_HOST}/${language}/${section}/`;
};

export const getConceptsPath = (language: Language): string => {
    const section = CONCEPTS_SECTION_SLUGS[language];
    return language === "es" ? `/${section}/` : `/${language}/${section}/`;
};

export const getConceptsAlternateLinks = (): readonly AlternateLink[] =>
    LANGUAGE_CODES.map((language) => ({ language, url: getConceptsIndexUrl(language) }));

export const getConceptUrl = (id: ConceptId, language: Language): string =>
    `${getConceptsIndexUrl(language)}${getConcept(id).slugs[language]}/`;

export const getConceptPath = (id: ConceptId, language: Language): string =>
    `${getConceptsPath(language)}${getConcept(id).slugs[language]}/`;

export const getConceptAlternateLinks = (id: ConceptId): readonly AlternateLink[] =>
    LANGUAGE_CODES.map((language) => ({ language, url: getConceptUrl(id, language) }));
