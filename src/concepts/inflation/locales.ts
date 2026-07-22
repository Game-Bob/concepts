import type { Language } from "../../i18n/languages";
import type { InflationLocaleData } from "./types";
import { INFLATION_ES_TEXTS } from "./texts/es";
import { INFLATION_EN_TEXTS } from "./texts/en";
import { INFLATION_FR_TEXTS } from "./texts/fr";
import { INFLATION_DE_TEXTS } from "./texts/de";
import { INFLATION_IT_TEXTS } from "./texts/it";
import { INFLATION_PT_TEXTS } from "./texts/pt";
import { INFLATION_NL_TEXTS } from "./texts/nl";
import { INFLATION_SV_TEXTS } from "./texts/sv";
import { INFLATION_PL_TEXTS } from "./texts/pl";
import { INFLATION_ID_TEXTS } from "./texts/id";
import { INFLATION_TR_TEXTS } from "./texts/tr";
import { INFLATION_RU_TEXTS } from "./texts/ru";
import { INFLATION_JA_TEXTS } from "./texts/ja";
import { INFLATION_KO_TEXTS } from "./texts/ko";
import { INFLATION_ZH_TEXTS } from "./texts/zh";

export const INFLATION_SLUGS = {
    es: "inflacion",
    en: "inflation",
    fr: "l-inflation",
    de: "geldentwertung",
    it: "inflazione",
    pt: "inflacao",
    nl: "inflatie",
    sv: "penningvardeforlust",
    pl: "inflacja",
    id: "inflasi",
    tr: "enflasyon",
    ru: "inflyatsiya",
    ja: "inflation",
    ko: "inflation",
    zh: "inflation",
} as const satisfies Record<Language, string>;

const appendMissing = <Item>(
    translated: readonly Item[],
    complete: readonly Item[]
): readonly Item[] => [...translated, ...complete.slice(translated.length)];

const completeCollections = (
    locale: InflationLocaleData,
    complete: InflationLocaleData
): InflationLocaleData => ({
    ...locale,
    items: appendMissing(locale.items, complete.items),
    cases: appendMissing(locale.cases, complete.cases),
    effortComparisons: appendMissing(locale.effortComparisons, complete.effortComparisons),
    reportTable1Rows: appendMissing(locale.reportTable1Rows, complete.reportTable1Rows),
    hiddenTypesCards: appendMissing(locale.hiddenTypesCards, complete.hiddenTypesCards),
});

const EN_LOCALE = completeCollections(INFLATION_EN_TEXTS, INFLATION_ES_TEXTS);
const withCompleteCollections = (locale: InflationLocaleData): InflationLocaleData =>
    completeCollections(locale, EN_LOCALE);

export const INFLATION_LOCALES = {
    es: INFLATION_ES_TEXTS,
    en: EN_LOCALE,
    fr: withCompleteCollections(INFLATION_FR_TEXTS),
    de: withCompleteCollections(INFLATION_DE_TEXTS),
    it: withCompleteCollections(INFLATION_IT_TEXTS),
    pt: withCompleteCollections(INFLATION_PT_TEXTS),
    nl: withCompleteCollections(INFLATION_NL_TEXTS),
    sv: withCompleteCollections(INFLATION_SV_TEXTS),
    pl: withCompleteCollections(INFLATION_PL_TEXTS),
    id: withCompleteCollections(INFLATION_ID_TEXTS),
    tr: withCompleteCollections(INFLATION_TR_TEXTS),
    ru: withCompleteCollections(INFLATION_RU_TEXTS),
    ja: withCompleteCollections(INFLATION_JA_TEXTS),
    ko: withCompleteCollections(INFLATION_KO_TEXTS),
    zh: withCompleteCollections(INFLATION_ZH_TEXTS),
} as const satisfies Record<Language, InflationLocaleData>;

export const INFLATION_CONCEPT = {
    id: "inflation",
    useDetailedDescription: true,
    slugs: INFLATION_SLUGS,
    locales: INFLATION_LOCALES,
} as const;
