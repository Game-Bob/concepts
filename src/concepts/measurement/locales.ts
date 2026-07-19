import type { Language } from "../../i18n/languages";
import { MEASUREMENT_ES_TEXTS, type MeasurementTextId, type MeasurementTexts } from "./texts/es";
import { MEASUREMENT_EN_TEXTS } from "./texts/en";
import { MEASUREMENT_FR_TEXTS } from "./texts/fr";
import { MEASUREMENT_DE_TEXTS } from "./texts/de";
import { MEASUREMENT_IT_TEXTS } from "./texts/it";
import { MEASUREMENT_PT_TEXTS } from "./texts/pt";
import { MEASUREMENT_NL_TEXTS } from "./texts/nl";
import { MEASUREMENT_SV_TEXTS } from "./texts/sv";
import { MEASUREMENT_PL_TEXTS } from "./texts/pl";
import { MEASUREMENT_ID_TEXTS } from "./texts/id";
import { MEASUREMENT_TR_TEXTS } from "./texts/tr";
import { MEASUREMENT_RU_TEXTS } from "./texts/ru";
import { MEASUREMENT_JA_TEXTS } from "./texts/ja";
import { MEASUREMENT_KO_TEXTS } from "./texts/ko";
import { MEASUREMENT_ZH_TEXTS } from "./texts/zh";

export type { MeasurementTextId, MeasurementTexts };

export const MEASUREMENT_SLUGS = {
    es: "medicion",
    en: "measurement",
    fr: "mesure",
    de: "messung",
    it: "misurazione",
    pt: "medicao",
    nl: "meting",
    sv: "matning",
    pl: "pomiar",
    id: "pengukuran",
    tr: "olcum",
    ru: "izmerenie",
    ja: "measurement",
    ko: "measurement",
    zh: "measurement",
} as const satisfies Record<Language, string>;

export type MeasurementLocaleData = {
    readonly cardTitle: string;
    readonly cardSubtitle: string;
    readonly cardDescription: string;
    readonly title: string;
    readonly description: string;
    readonly texts: MeasurementTexts;
};

export const MEASUREMENT_LOCALES = {
    es: {
        cardTitle: "MEDICIÓN",
        cardSubtitle: "Todo tiene una unidad",
        cardDescription: "Desde el codo del faraón hasta el último bit de tu reloj inteligente.",
        title: "La medición: La alucinación colectiva",
        description:
            "No hay líneas rectas en la costa ni segundos en el amanecer. Un recorrido visual sobre cómo convertimos el caos del universo en números.",
        texts: MEASUREMENT_ES_TEXTS,
    },

    en: {
        cardTitle: "MEASUREMENT",
        cardSubtitle: "Everything has a unit",
        cardDescription: "From the Pharaoh's cubit to the last bit of your smartwatch.",
        title: "Measurement: The collective hallucination",
        description:
            "There are no straight lines on coastlines nor seconds in the sunrise. A visual journey into how we turn the chaos of the universe into numbers.",
        texts: MEASUREMENT_EN_TEXTS,
    },

    fr: {
        cardTitle: "MESURE",
        cardSubtitle: "Tout a une unité",
        cardDescription: "Du coude du pharaon au dernier bit de votre montre connectée.",
        title: "La mesure : L'hallucination collective",
        description:
            "Il n'y a pas de lignes droites sur les côtes ni de secondes dans le lever du soleil. Un voyage visuel sur la façon dont nous transformons le chaos de l'univers en nombres.",
        texts: MEASUREMENT_FR_TEXTS,
    },

    de: {
        cardTitle: "MESSUNG",
        cardSubtitle: "Alles hat eine Einheit",
        cardDescription: "Von der Elle des Pharaos bis zum letzten Bit deiner Smartwatch.",
        title: "Die Messung: Die kollektive Halluzination",
        description:
            "Es gibt keine geraden Linien an Küsten und keine Sekunden im Sonnenaufgang. Eine visuelle Reise darüber, wie wir das Chaos des Universums in Zahlen verwandeln.",
        texts: MEASUREMENT_DE_TEXTS,
    },

    it: {
        cardTitle: "MISURAZIONE",
        cardSubtitle: "Ogni cosa ha un'unità",
        cardDescription: "Dal cubito del faraone all'ultimo bit del tuo smartwatch.",
        title: "La misurazione: L'allucinazione collettiva",
        description:
            "Non esistono linee rette sulle coste né secondi nell'alba. Un viaggio visivo su come trasformiamo il caos dell'universo in numeri.",
        texts: MEASUREMENT_IT_TEXTS,
    },

    pt: {
        cardTitle: "MEDIÇÃO",
        cardSubtitle: "Tudo tem uma unidade",
        cardDescription: "Do côvado do faraó ao último bit do seu smartwatch.",
        title: "A medição: A alucinação coletiva",
        description:
            "Não há linhas retas nas costas nem segundos no amanhecer. Uma jornada visual sobre como transformamos o caos do universo em números.",
        texts: MEASUREMENT_PT_TEXTS,
    },

    nl: {
        cardTitle: "METING",
        cardSubtitle: "Alles heeft een eenheid",
        cardDescription: "Van de el van de farao tot de laatste bit van je smartwatch.",
        title: "Meting: De collectieve hallucinatie",
        description:
            "Er zijn geen rechte lijnen langs de kust en geen seconden in een zonsopgang. Een visuele reis over hoe we de chaos van het universum in getallen veranderen.",
        texts: MEASUREMENT_NL_TEXTS,
    },

    sv: {
        cardTitle: "MÄTNING",
        cardSubtitle: "Allt har en enhet",
        cardDescription: "Från faraons aln till den sista biten i din smartklocka.",
        title: "Mätning: Den kollektiva hallucinationen",
        description:
            "Det finns inga raka linjer längs kusterna och inga sekunder i soluppgången. En visuell resa om hur vi förvandlar universums kaos till siffror.",
        texts: MEASUREMENT_SV_TEXTS,
    },

    pl: {
        cardTitle: "POMIAR",
        cardSubtitle: "Wszystko ma swoją jednostkę",
        cardDescription: "Od łokcia faraona do ostatniego bitu Twojego smartwatcha.",
        title: "Pomiar: Zbiorowa halucynacja",
        description:
            "Na wybrzeżach nie ma prostych linii ani sekund we wschodzie słońca. Wizualna podróż o tym, jak zamieniamy chaos wszechświata w liczby.",
        texts: MEASUREMENT_PL_TEXTS,
    },

    id: {
        cardTitle: "PENGUKURAN",
        cardSubtitle: "Segala sesuatu memiliki satuan",
        cardDescription: "Dari hasta Firaun hingga bit terakhir jam tangan pintar Anda.",
        title: "Pengukuran: Halusinasi kolektif",
        description:
            "Tidak ada garis lurus di pantai ataupun detik dalam matahari terbit. Perjalanan visual tentang bagaimana kita mengubah kekacauan alam semesta menjadi angka.",
        texts: MEASUREMENT_ID_TEXTS,
    },

    tr: {
        cardTitle: "ÖLÇÜM",
        cardSubtitle: "Her şeyin bir birimi vardır",
        cardDescription: "Firavun'un arşınından akıllı saatinizin son bitine kadar.",
        title: "Ölçüm: Kolektif yanılsama",
        description:
            "Kıyı şeritlerinde düz çizgiler, gün doğumunda ise saniyeler yoktur. Evrenin kaosunu sayılara nasıl dönüştürdüğümüze dair görsel bir yolculuk.",
        texts: MEASUREMENT_TR_TEXTS,
    },

    ru: {
        cardTitle: "ИЗМЕРЕНИЕ",
        cardSubtitle: "У всего есть единица измерения",
        cardDescription: "От локтя фараона до последнего бита ваших смарт-часов.",
        title: "Измерение: Коллективная галлюцинация",
        description:
            "На побережье нет прямых линий, а в восходе солнца нет секунд. Визуальное путешествие о том, как мы превращаем хаос Вселенной в числа.",
        texts: MEASUREMENT_RU_TEXTS,
    },

    ja: {
        cardTitle: "測定",
        cardSubtitle: "すべてには単位がある",
        cardDescription: "ファラオのキュビットからスマートウォッチの最後のビットまで。",
        title: "測定：共同の幻影",
        description:
            "海岸線に直線はなく、日の出に秒はありません。宇宙の混沌を数字へと変えていく旅。",
        texts: MEASUREMENT_JA_TEXTS,
    },

    ko: {
        cardTitle: "측정",
        cardSubtitle: "모든 것에는 단위가 있다",
        cardDescription: "파라오의 큐빗부터 스마트워치의 마지막 비트까지.",
        title: "측정: 집단적 환상",
        description:
            "해안선에는 직선이 없고, 일출에는 초가 없습니다. 우주의 혼돈을 숫자로 바꾸는 시각적 여정.",
        texts: MEASUREMENT_KO_TEXTS,
    },

    zh: {
        cardTitle: "度量",
        cardSubtitle: "万物皆有单位",
        cardDescription: "从法老的腕尺到智能手表的最后一比特。",
        title: "度量：共同的幻觉",
        description:
            "海岸线没有真正的直线，日出也没有秒。一次关于人类如何将宇宙的混沌化为数字的视觉之旅。",
        texts: MEASUREMENT_ZH_TEXTS,
    },
} as const satisfies Record<Language, MeasurementLocaleData>;

export const MEASUREMENT_CONCEPT = {
    id: "measurement",
    slugs: MEASUREMENT_SLUGS,
    locales: MEASUREMENT_LOCALES,
} as const;
