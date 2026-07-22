import type { Language } from "./languages";

export const CONCEPTS_SECTION_SLUGS = {
    es: "conceptos",
    en: "concepts",
    fr: "concepts",
    de: "konzepte",
    it: "concetti",
    pt: "conceitos",
    nl: "concepten",
    sv: "koncept",
    pl: "koncepcje",
    id: "konsep",
    tr: "kavramlar",
    ru: "kontseptsii",
    ja: "concepts",
    ko: "concepts",
    zh: "concepts",
} as const satisfies Record<Language, string>;
