import type { NavigationItem } from "@jjlmoya/identity/types";
import type { Language } from "../i18n/languages";
import { getConceptsIndexUrl } from "./routes";

const GAMEBOB_HOST = "https://www.gamebob.dev";
const JJLMOYA_HOST = "https://www.jjlmoya.es";

const UTILITIES_SLUGS = {
    es: "utilidades",
    en: "utilities",
    fr: "utilitaires",
    de: "werkzeuge",
    it: "utilita",
    pt: "utilidades",
    nl: "hulpmiddelen",
    sv: "verktyg",
    pl: "narzedzia",
    id: "utilitas",
    tr: "araclar",
    ru: "instrumenty",
    ja: "utilities",
    ko: "utilities",
    zh: "utilities",
} as const satisfies Record<Language, string>;

const TEAM_SLUGS = {
    es: "equipo",
    en: "team",
    fr: "equipe",
    de: "mannschaft",
    it: "squadra",
    pt: "equipa",
    nl: "medewerkers",
    sv: "medarbetare",
    pl: "zespol",
    id: "anggota",
    tr: "ekibimiz",
    ru: "komanda",
    ja: "team",
    ko: "team",
    zh: "team",
} as const satisfies Record<Language, string>;

const INTERNATIONAL_LABELS = {
    es: { concepts: "conceptos", apps: "apps", utilities: "utilidades", team: "equipo" },
    en: { concepts: "Concepts", apps: "Apps", utilities: "Utilities", team: "Team" },
    fr: { concepts: "Concepts", apps: "Apps", utilities: "Utilitaires", team: "Équipe" },
    de: { concepts: "Konzepte", apps: "Apps", utilities: "Werkzeuge", team: "Mannschaft" },
    it: { concepts: "Concetti", apps: "App", utilities: "Utilità", team: "Squadra" },
    pt: { concepts: "Conceitos", apps: "Apps", utilities: "Utilidades", team: "Equipa" },
    nl: { concepts: "Concepten", apps: "Apps", utilities: "Hulpmiddelen", team: "Medewerkers" },
    sv: { concepts: "Koncept", apps: "Appar", utilities: "Verktyg", team: "Medarbetare" },
    pl: { concepts: "Koncepcje", apps: "Aplikacje", utilities: "Narzędzia", team: "Zespół" },
    id: { concepts: "Konsep", apps: "Aplikasi", utilities: "Utilitas", team: "Anggota" },
    tr: { concepts: "Kavramlar", apps: "Uygulamalar", utilities: "Araçlar", team: "Ekibimiz" },
    ru: { concepts: "Концепции", apps: "Приложения", utilities: "Инструменты", team: "Команда" },
    ja: { concepts: "コンセプト", apps: "アプリ", utilities: "ユーティリティ", team: "チーム" },
    ko: { concepts: "콘셉트", apps: "앱", utilities: "유틸리티", team: "팀" },
    zh: { concepts: "概念", apps: "应用", utilities: "工具", team: "团队" },
} as const satisfies Record<Language, Record<"concepts" | "apps" | "utilities" | "team", string>>;

const getSpanishNavigation = (): readonly NavigationItem[] => [
    { label: "proyectos", href: `${JJLMOYA_HOST}/proyectos/` },
    { label: "conceptos", href: getConceptsIndexUrl("es"), active: true },
    { label: "apps", href: `${JJLMOYA_HOST}/apps/` },
    { label: "utilidades", href: `${JJLMOYA_HOST}/utilidades/` },
    { label: "gamebob", href: `${JJLMOYA_HOST}/gamebob/` },
    { label: "charlas", href: `${JJLMOYA_HOST}/charlas/` },
    { label: "equipo", href: `${JJLMOYA_HOST}/equipo/` },
];

const getInternationalNavigation = (
    language: Exclude<Language, "es">
): readonly NavigationItem[] => {
    const labels = INTERNATIONAL_LABELS[language];
    return [
        { label: labels.apps, href: `${GAMEBOB_HOST}/${language}/apps/` },
        {
            label: labels.utilities,
            href: `${GAMEBOB_HOST}/${language}/${UTILITIES_SLUGS[language]}/`,
        },
        { label: labels.concepts, href: getConceptsIndexUrl(language), active: true },
        { label: labels.team, href: `${GAMEBOB_HOST}/${language}/${TEAM_SLUGS[language]}/` },
    ];
};

export const getSiteNavigation = (language: Language): readonly NavigationItem[] =>
    language === "es" ? getSpanishNavigation() : getInternationalNavigation(language);
