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
    ru: "концепции",
    ja: "コンセプト",
    ko: "콘셉트",
    zh: "概念",
} as const satisfies Record<Language, string>;
