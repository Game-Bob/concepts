import type { Language } from "../../i18n/languages";
import { BOREDOM_ES_TEXTS } from "./texts/es";
import { BOREDOM_EN_TEXTS } from "./texts/en";
import { BOREDOM_FR_TEXTS } from "./texts/fr";
import { BOREDOM_DE_TEXTS } from "./texts/de";
import { BOREDOM_IT_TEXTS } from "./texts/it";
import { BOREDOM_PT_TEXTS } from "./texts/pt";
import { BOREDOM_NL_TEXTS } from "./texts/nl";
import { BOREDOM_SV_TEXTS } from "./texts/sv";
import { BOREDOM_PL_TEXTS } from "./texts/pl";
import { BOREDOM_ID_TEXTS } from "./texts/id";
import { BOREDOM_TR_TEXTS } from "./texts/tr";
import { BOREDOM_RU_TEXTS } from "./texts/ru";
import { BOREDOM_JA_TEXTS } from "./texts/ja";
import { BOREDOM_KO_TEXTS } from "./texts/ko";
import { BOREDOM_ZH_TEXTS } from "./texts/zh";

export const BOREDOM_SLUGS = {
    es: "oda-al-aburrimiento",
    en: "ode-to-boredom",
    fr: "ode-a-lennui",
    de: "ode-an-die-langeweile",
    it: "ode-alla-noia",
    pt: "ode-ao-tedio",
    nl: "ode-aan-de-verveling",
    sv: "ode-till-tristess",
    pl: "oda-do-nudy",
    id: "ode-untuk-kebosanan",
    tr: "can-sikintisina-ovgu",
    ru: "oda-skuke",
    ja: "ode-to-boredom",
    ko: "ode-to-boredom",
    zh: "ode-to-boredom",
} as const satisfies Record<Language, string>;

export type BoredomParagraph = {
    readonly title: string;
    readonly text: string;
};

export type BoredomTexts = {
    readonly title: string;
    readonly subtitle: string;
    readonly tocTitle: string;
    readonly tocLoading: string;
    readonly art1Title: string;
    readonly sub11Title: string;
    readonly sec111Title: string;
    readonly sec111Text: string;
    readonly sec112Title: string;
    readonly sec112Text: string;
    readonly sub12Title: string;
    readonly sec121Title: string;
    readonly sec121Text: string;
    readonly sec122Title: string;
    readonly sec122Text: string;
    readonly sub13Title: string;
    readonly sec131Title: string;
    readonly sec131Text: string;
    readonly sec132Title: string;
    readonly sec132Text: string;
    readonly art2Title: string;
    readonly sub21Title: string;
    readonly sec211Title: string;
    readonly sec211Text: string;
    readonly sec212Title: string;
    readonly sec212Text: string;
    readonly sub22Title: string;
    readonly sec221Title: string;
    readonly sec221Text: string;
    readonly sec222Title: string;
    readonly sec222Text: string;
    readonly sub23Title: string;
    readonly sec231Title: string;
    readonly sec231Text: string;
    readonly sec232Title: string;
    readonly sec232Text: string;
    readonly art3Title: string;
    readonly sub31Title: string;
    readonly sec311Title: string;
    readonly sec311Text: string;
    readonly sec312Title: string;
    readonly sec312Text: string;
    readonly sub32Title: string;
    readonly sec321Title: string;
    readonly sec321Text: string;
    readonly sec322Title: string;
    readonly sec322Text: string;
    readonly sub33Title: string;
    readonly sec331Title: string;
    readonly sec331Text: string;
    readonly sec332Title: string;
    readonly sec332Text: string;
    readonly art4Title: string;
    readonly sub41Title: string;
    readonly sec411Title: string;
    readonly sec411Text: string;
    readonly sec412Title: string;
    readonly sec412Text: string;
    readonly sub42Title: string;
    readonly sec421Title: string;
    readonly sec421Text: string;
    readonly sec422Title: string;
    readonly sec422Text: string;
    readonly sub43Title: string;
    readonly sec431Title: string;
    readonly sec431Text: string;
    readonly sec432Title: string;
    readonly sec432Text: string;
    readonly art5Title: string;
    readonly sub51Title: string;
    readonly sec511Title: string;
    readonly sec511Text: string;
    readonly sub52Title: string;
    readonly sub52Intro: string;
    readonly paragraphs: readonly BoredomParagraph[];
    readonly art6Title: string;
    readonly sub61Title: string;
    readonly sec611Title: string;
    readonly sec611Text: string;
    readonly sec612Title: string;
    readonly sec612Text: string;
    readonly infLeveTitle: string;
    readonly infLeveText: string;
    readonly infGraveTitle: string;
    readonly infGraveText: string;
    readonly infMuyGraveTitle: string;
    readonly infMuyGraveText: string;
    readonly sub62Title: string;
    readonly sec621Title: string;
    readonly sec621Text: string;
    readonly sec622Title: string;
    readonly sec622Text: string;
    readonly sec623Title: string;
    readonly sec623Text: string;
    readonly sub63Title: string;
    readonly sec631Title: string;
    readonly sec631Text: string;
    readonly sec632Title: string;
    readonly sec632Text: string;
    readonly sec633Title: string;
    readonly sec633Text: string;
    readonly docInfo: string;
    readonly warningTitle: string;
    readonly warningP1: string;
    readonly warningP2: string;
    readonly warningP3: string;
};

export type BoredomLocaleData = {
    readonly cardTitle: string;
    readonly cardSubtitle: string;
    readonly cardDescription: string;
    readonly title: string;
    readonly description: string;
    readonly texts: BoredomTexts;
};

export const BOREDOM_LOCALES = {
    es: {
        cardTitle: "ODA AL ABURRIMIENTO",
        cardSubtitle: "Art. 1",
        cardDescription: "Referencia normativa sobre el valor estructural del tedio.",
        title: "Oda al aburrimiento",
        description:
            "Compendio estatutario para el reconocimiento y preservación del aburrimiento como estado intrínseco de la consciencia.",
        texts: BOREDOM_ES_TEXTS,
    },
    en: {
        cardTitle: "ODE TO BOREDOM",
        cardSubtitle: "Art. 1",
        cardDescription: "Regulatory reference on the structural value of tedium.",
        title: "Ode to boredom",
        description:
            "Statutory compendium for the recognition and preservation of boredom as an intrinsic state of consciousness.",
        texts: BOREDOM_EN_TEXTS,
    },
    fr: {
        cardTitle: "ODE À L'ENNUI",
        cardSubtitle: "Art. 1",
        cardDescription: "Référence réglementaire sur la valeur structurelle du tedium.",
        title: "Ode à l'ennui",
        description:
            "Recueil statutaire pour la reconnaissance et la préservation de l'ennui en tant qu'état intrinsèque de la conscience.",
        texts: BOREDOM_FR_TEXTS,
    },
    de: {
        cardTitle: "ODE AN DIE LANGEWEILE",
        cardSubtitle: "Art. 1",
        cardDescription: "Regulatorischer Bezug auf den strukturellen Wert des Überdrusses.",
        title: "Ode an die Langeweile",
        description:
            "Gesetzessammlung zur Anerkennung und Erhaltung der Langeweile als intrinsischer Zustand des Bewusstseins.",
        texts: BOREDOM_DE_TEXTS,
    },
    it: {
        cardTitle: "ODE ALLA NOIA",
        cardSubtitle: "Art. 1",
        cardDescription: "Riferimento normativo sul valore strutturale del tedio.",
        title: "Ode alla noia",
        description:
            "Compendio statutario per il riconoscimento e la preservazione della noia come stato intrinseco della coscienza.",
        texts: BOREDOM_IT_TEXTS,
    },
    pt: {
        cardTitle: "ODE AO TÉDIO",
        cardSubtitle: "Art. 1",
        cardDescription: "Referência regulamentar sobre o valor estrutural do tédio.",
        title: "Ode ao tédio",
        description:
            "Compêndio estatutário para o reconhecimento e preservação do tédio como estado intrínseco da consciência.",
        texts: BOREDOM_PT_TEXTS,
    },
    nl: {
        cardTitle: "ODE AAN DE VERVELING",
        cardSubtitle: "Art. 1",
        cardDescription: "Reglementaire verwijzing naar de structurele waarde van verveling.",
        title: "Ode aan de verveling",
        description:
            "Statutair compendium voor de erkenning en het behoud van verveling als een intrinsieke staat van bewustzijn.",
        texts: BOREDOM_NL_TEXTS,
    },
    sv: {
        cardTitle: "ODE TILL TRISTESS",
        cardSubtitle: "Art. 1",
        cardDescription: "Reglerande referens om tristessens strukturella värde.",
        title: "Ode till tristess",
        description:
            "Lagstadgat kompendium för erkännande och bevarande av tristess som ett inneboende tillstånd av medvetande.",
        texts: BOREDOM_SV_TEXTS,
    },
    pl: {
        cardTitle: "ODA DO NUDY",
        cardSubtitle: "Art. 1",
        cardDescription: "Odniesienie regulacyjne dotyczące strukturalnej wartości znużenia.",
        title: "Oda do nudy",
        description:
            "Kompendium ustawowe dotyczące uznania i zachowania nudy jako wewnętrznego stanu świadomości.",
        texts: BOREDOM_PL_TEXTS,
    },
    id: {
        cardTitle: "ODE UNTUK KEBOSANAN",
        cardSubtitle: "Art. 1",
        cardDescription: "Referensi peraturan tentang nilai struktural kejenuhan.",
        title: "Ode untuk kebosanan",
        description:
            "Kompendium undang-undang untuk pengakuan dan pemeliharaan kebosanan sebagai keadaan kesadaran intrinsik.",
        texts: BOREDOM_ID_TEXTS,
    },
    tr: {
        cardTitle: "CAN SIKINTISINA ÖVGÜ",
        cardSubtitle: "Art. 1",
        cardDescription: "Can sıkıntısının yapısal değeri üzerine yasal referans.",
        title: "Can sıkıntısına övgü",
        description:
            "Bilincin içsel bir durumu olarak can sıkıntısının tanınması ve korunması için yasal derleme.",
        texts: BOREDOM_TR_TEXTS,
    },
    ru: {
        cardTitle: "ОДА СКУКЕ",
        cardSubtitle: "Арт. 1",
        cardDescription: "Нормативная ссылка на структурную ценность скуки.",
        title: "Ода скуке",
        description:
            "Уставной сборник для признания и сохранения скуки как неотъемлемого состояния сознания.",
        texts: BOREDOM_RU_TEXTS,
    },
    ja: {
        cardTitle: "退屈へのオード",
        cardSubtitle: "第1条",
        cardDescription: "退屈の構造的価値に関する規制上の言及。",
        title: "退屈へのオード",
        description: "意識の本質的な状態としての退屈の認識と保存のための規約集。",
        texts: BOREDOM_JA_TEXTS,
    },
    ko: {
        cardTitle: "지루함에 대한 오드",
        cardSubtitle: "제1조",
        cardDescription: "지루함의 구조적 가치에 대한 규제적 언급.",
        title: "지루함에 대한 오드",
        description: "의식의 본질적인 상태로서 지루함의 인식과 보존을 위한 규약집.",
        texts: BOREDOM_KO_TEXTS,
    },
    zh: {
        cardTitle: "无聊颂",
        cardSubtitle: "第1条",
        cardDescription: "关于厌倦结构价值的法定参考。",
        title: "无聊颂",
        description: "承认并保持无聊作为意识内在状态的法定汇编。",
        texts: BOREDOM_ZH_TEXTS,
    },
} as const satisfies Record<Language, BoredomLocaleData>;

export const BOREDOM_CONCEPT = {
    id: "boredom",
    slugs: BOREDOM_SLUGS,
    locales: BOREDOM_LOCALES,
} as const;
