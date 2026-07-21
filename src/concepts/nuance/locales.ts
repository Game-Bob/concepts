import type { Language } from "../../i18n/languages";
import type { NuanceLocaleData } from "./types";
import { NUANCE_DE_TEXTS } from "./texts/de";
import { NUANCE_EN_TEXTS } from "./texts/en";
import { NUANCE_ES_TEXTS } from "./texts/es";
import { NUANCE_FR_TEXTS } from "./texts/fr";
import { NUANCE_ID_TEXTS } from "./texts/id";
import { NUANCE_IT_TEXTS } from "./texts/it";
import { NUANCE_JA_TEXTS } from "./texts/ja";
import { NUANCE_KO_TEXTS } from "./texts/ko";
import { NUANCE_NL_TEXTS } from "./texts/nl";
import { NUANCE_PL_TEXTS } from "./texts/pl";
import { NUANCE_PT_TEXTS } from "./texts/pt";
import { NUANCE_RU_TEXTS } from "./texts/ru";
import { NUANCE_SV_TEXTS } from "./texts/sv";
import { NUANCE_TR_TEXTS } from "./texts/tr";
import { NUANCE_ZH_TEXTS } from "./texts/zh";

export const NUANCE_SLUGS = {
    es: "escala-de-grises",
    en: "death-of-nuance",
    fr: "mort-de-la-nuance",
    de: "tod-der-nuance",
    it: "morte-della-sfumatura",
    pt: "morte-da-nuance",
    nl: "dood-van-de-nuance",
    sv: "nyansens-dod",
    pl: "smierc-niuansu",
    id: "matinya-nuansa",
    tr: "nansin-olumu",
    ru: "smert-nyuansa",
    ja: "death-of-nuance",
    ko: "death-of-nuance",
    zh: "death-of-nuance",
} as const satisfies Record<Language, string>;

export const NUANCE_LOCALES = {
    es: {
        cardTitle: "LA MUERTE DEL MATIZ",
        cardSubtitle: "Escala de Grises",
        cardDescription: "En un mundo binario, el gris es un acto de rebeldía.",
        title: "Escala de grises: ¿Todo es blanco o negro?",
        description:
            "Vivimos aplastados por los extremos. Una exploración interactiva sobre cómo la polarización está matando el pensamiento crítico.",
        texts: NUANCE_ES_TEXTS,
    },
    en: {
        cardTitle: "THE DEATH OF NUANCE",
        cardSubtitle: "Greyscale",
        cardDescription: "In a binary world, grey is an act of rebellion.",
        title: "Greyscale: Is everything black or white?",
        description:
            "We live crushed by extremes. An interactive exploration of how polarisation is killing critical thought.",
        texts: NUANCE_EN_TEXTS,
    },
    fr: {
        cardTitle: "LA MORT DE LA NUANCE",
        cardSubtitle: "Échelle de gris",
        cardDescription: "Dans un monde binaire, le gris est un acte de rébellion.",
        title: "Échelle de gris : tout est-il blanc ou noir ?",
        description:
            "Nous vivons écrasés par les extrêmes. Une exploration interactive de la façon dont la polarisation tue l’esprit critique.",
        texts: NUANCE_FR_TEXTS,
    },
    de: {
        cardTitle: "DER TOD DER NUANCE",
        cardSubtitle: "Graustufen",
        cardDescription: "In einer binären Welt ist Grau ein Akt der Rebellion.",
        title: "Graustufen: Ist alles schwarz oder weiß?",
        description:
            "Wir leben erdrückt von den Extremen. Eine interaktive Erkundung darüber, wie Polarisierung kritisches Denken tötet.",
        texts: NUANCE_DE_TEXTS,
    },
    it: {
        cardTitle: "LA MORTE DELLA SFUMATURA",
        cardSubtitle: "Scala di grigi",
        cardDescription: "In un mondo binario, il grigio è un atto di ribellione.",
        title: "Scala di grigi: è tutto bianco o nero?",
        description:
            "Viviamo schiacciati dagli estremi. Un’esplorazione interattiva di come la polarizzazione stia uccidendo il pensiero critico.",
        texts: NUANCE_IT_TEXTS,
    },
    pt: {
        cardTitle: "A MORTE DA NUANCE",
        cardSubtitle: "Escala de cinzentos",
        cardDescription: "Num mundo binário, o cinzento é um ato de rebeldia.",
        title: "Escala de cinzentos: tudo é preto ou branco?",
        description:
            "Vivemos esmagados pelos extremos. Uma exploração interativa sobre como a polarização está a matar o pensamento crítico.",
        texts: NUANCE_PT_TEXTS,
    },
    nl: {
        cardTitle: "DE DOOD VAN DE NUANCE",
        cardSubtitle: "Grijswaarden",
        cardDescription: "In een binaire wereld is grijs een daad van verzet.",
        title: "Grijswaarden: Is alles zwart of wit?",
        description:
            "We leven verpletterd tussen uitersten. Een interactieve verkenning van hoe polarisatie het kritische denken doodt.",
        texts: NUANCE_NL_TEXTS,
    },
    sv: {
        cardTitle: "NYANSENS DÖD",
        cardSubtitle: "Gråskala",
        cardDescription: "I en binär värld är grått en rebellisk handling.",
        title: "Gråskala: Är allt svart eller vitt?",
        description:
            "Vi lever krossade av ytterligheter. En interaktiv utforskning av hur polarisering dödar det kritiska tänkandet.",
        texts: NUANCE_SV_TEXTS,
    },
    pl: {
        cardTitle: "ŚMIERĆ NIUANSU",
        cardSubtitle: "Skala szarości",
        cardDescription: "W binarnym świecie szarość jest aktem buntu.",
        title: "Skala szarości: czy wszystko jest czarne albo białe?",
        description:
            "Żyjemy przygnieceni skrajnościami. Interaktywna opowieść o tym, jak polaryzacja zabija krytyczne myślenie.",
        texts: NUANCE_PL_TEXTS,
    },
    id: {
        cardTitle: "MATINYA NUANSA",
        cardSubtitle: "Skala abu-abu",
        cardDescription: "Di dunia yang serbabiner, abu-abu adalah tindakan pemberontakan.",
        title: "Skala abu-abu: apakah semuanya hitam atau putih?",
        description:
            "Kita hidup terjepit oleh kutub-kutub ekstrem. Sebuah eksplorasi interaktif tentang bagaimana polarisasi membunuh pemikiran kritis.",
        texts: NUANCE_ID_TEXTS,
    },
    tr: {
        cardTitle: "NÜANSIN ÖLÜMÜ",
        cardSubtitle: "Gri tonlama",
        cardDescription: "İkili bir dünyada gri, bir başkaldırı eylemidir.",
        title: "Gri tonlama: Her şey siyah ya da beyaz mı?",
        description:
            "Uçların baskısı altında yaşıyoruz. Kutuplaşmanın eleştirel düşünceyi nasıl öldürdüğüne dair etkileşimli bir keşif.",
        texts: NUANCE_TR_TEXTS,
    },
    ru: {
        cardTitle: "СМЕРТЬ НЮАНСА",
        cardSubtitle: "Оттенки серого",
        cardDescription: "В бинарном мире серый цвет — это акт бунта.",
        title: "Оттенки серого: всё чёрное или белое?",
        description:
            "Мы живём под гнётом крайностей. Интерактивное исследование того, как поляризация убивает критическое мышление.",
        texts: NUANCE_RU_TEXTS,
    },
    ja: {
        cardTitle: "ニュアンスの死",
        cardSubtitle: "グレースケール",
        cardDescription: "二元論の世界では、灰色は反逆の行為だ。",
        title: "グレースケール：すべては白か黒なのか？",
        description:
            "私たちは両極端に押しつぶされて生きている。分断が批判的思考をいかに殺しているかを探るインタラクティブな作品。",
        texts: NUANCE_JA_TEXTS,
    },
    ko: {
        cardTitle: "뉘앙스의 죽음",
        cardSubtitle: "회색조",
        cardDescription: "이분법의 세계에서 회색은 반항의 행위다.",
        title: "회색조: 모든 것은 흑백인가?",
        description:
            "우리는 극단에 짓눌려 살아간다. 양극화가 비판적 사고를 어떻게 죽이는지 탐구하는 인터랙티브 작품.",
        texts: NUANCE_KO_TEXTS,
    },
    zh: {
        cardTitle: "细微之处的死亡",
        cardSubtitle: "灰度",
        cardDescription: "在非黑即白的世界里，灰色是一种反叛。",
        title: "灰度：一切都是非黑即白吗？",
        description: "我们活在极端的挤压之下。这是一场关于极化如何扼杀批判性思维的互动探索。",
        texts: NUANCE_ZH_TEXTS,
    },
} as const satisfies Record<Language, NuanceLocaleData>;

export const NUANCE_CONCEPT = {
    id: "nuance",
    useDetailedDescription: true,
    socialImage: "/images/nuance-og.webp",
    slugs: NUANCE_SLUGS,
    locales: NUANCE_LOCALES,
} as const;
