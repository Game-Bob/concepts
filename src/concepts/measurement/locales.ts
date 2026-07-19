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
        cardSubtitle: "El Arte de Cuantificar",
        cardDescription: "Desde el codo del faraón hasta el último bit de tu reloj inteligente.",
        title: "La medición: La alucinación colectiva",
        description:
            "No hay líneas rectas en la costa ni segundos en el amanecer. Un recorrido visual sobre cómo convertimos el caos del universo en números.",
        texts: MEASUREMENT_ES_TEXTS,
    },
    en: {
        cardTitle: "MEASUREMENT",
        cardSubtitle: "The Art of Quantifying",
        cardDescription: "From the Pharaoh's cubit to the last bit of your smartwatch.",
        title: "Measurement: The collective hallucination",
        description:
            "There are no straight lines on coastlines nor seconds in the sunrise. A visual journey into how we turn the chaos of the universe into numbers.",
        texts: MEASUREMENT_EN_TEXTS,
    },
    fr: {
        cardTitle: "MESURE",
        cardSubtitle: "L'Art de Quantifier",
        cardDescription: "Du coude du pharaon au dernier bit de votre montre intelligente.",
        title: "La mesure: L'hallucination collective",
        description:
            "Il n'y a pas de lignes droites sur les côtes ni de secondes dans le lever du soleil. Un voyage visuel sur la façon dont nous transformons le chaos de l'univers en nombres.",
        texts: MEASUREMENT_FR_TEXTS,
    },
    de: {
        cardTitle: "MESSUNG",
        cardSubtitle: "Die Kunst des Quantifizierens",
        cardDescription: "Von der Elle des Pharaos bis zum letzten Bit Ihrer Smartwatch.",
        title: "Die Messung: Die kollektive Halluzination",
        description:
            "Es gibt keine geraden Linien an Küsten und keine Sekunden im Sonnenaufgang. Eine visuelle Reise, wie wir das Chaos des Universums in Zahlen verwandeln.",
        texts: MEASUREMENT_DE_TEXTS,
    },
    it: {
        cardTitle: "MISURAZIONE",
        cardSubtitle: "L'Arte di Quantificare",
        cardDescription: "Dal cubito del faraone all'ultimo bit del tuo smartwatch.",
        title: "La misurazione: L'allucinazione collective",
        description:
            "Non ci sono linee rette sulle coste né secondi all'alba. Un viaggio visivo su come trasformiamo il caos dell'universo in numeri.",
        texts: MEASUREMENT_IT_TEXTS,
    },
    pt: {
        cardTitle: "MEDIÇÃO",
        cardSubtitle: "A Arte de Quantificar",
        cardDescription: "Do côvado do faraó ao último bit do seu smartwatch.",
        title: "A medição: A alucinação coletiva",
        description:
            "Não hay linhas retas nas costas nem segundos no amanhecer. Uma jornada visual sobre como transformamos o caos do universo en números.",
        texts: MEASUREMENT_PT_TEXTS,
    },
    nl: {
        cardTitle: "METING",
        cardSubtitle: "De Kunst van het Kwantificeren",
        cardDescription: "Van de el van de farao tot de laatste bit van je smartwatch.",
        title: "De meting: De collectieve hallucinatie",
        description:
            "Er zijn geen rechte lijnen aan de kust en geen seconden in de zonsopgang. Een visuele reis over hoe we de chaos van het universum in getallen veranderen.",
        texts: MEASUREMENT_NL_TEXTS,
    },
    sv: {
        cardTitle: "MÄTNING",
        cardSubtitle: "Konsten att Kvantifiera",
        cardDescription: "Från faraons aln till den sista biten på din smartklocka.",
        title: "Mätningen: Den kollektiva hallucinationen",
        description:
            "Det finns inga raka linjer på kusterna och inga sekunder i soluppgången. En visuell resa om hur vi förvandlar universums kaos till siffror.",
        texts: MEASUREMENT_SV_TEXTS,
    },
    pl: {
        cardTitle: "POMIAR",
        cardSubtitle: "Sztuka Kwantyfikacji",
        cardDescription: "Od łokcia faraona do ostatniego bitu Twojego smartwatcha.",
        title: "Pomiar: Zbiorowa halucynacja",
        description:
            "Nie ma linii prostych na wybrzeżach ani sekund we wschodzie słońca. Wizualna podróż po tym, jak zamieniamy chaos wszechświata w liczby.",
        texts: MEASUREMENT_PL_TEXTS,
    },
    id: {
        cardTitle: "PENGUKURAN",
        cardSubtitle: "Seni Menguantifikasi",
        cardDescription: "Dari hasta Firaun hingga bit terakhir jam tangan pintar Anda.",
        title: "Pengukuran: Halusinasi kolektif",
        description:
            "Tidak ada garis lurus di pantai atau detik di matahari terbit. Perjalanan visual tentang bagaimana kita mengubah kekacauan alam semesta menjadi angka.",
        texts: MEASUREMENT_ID_TEXTS,
    },
    tr: {
        cardTitle: "ÖLÇÜM",
        cardSubtitle: "Nicelikselleştirme Sanatı",
        cardDescription: "Firavun'un arşınından akıllı saatinizin son bitine kadar.",
        title: "Ölçüm: Kolektif illüzyon",
        description:
            "Kıyı şeritlerinde düz çizgiler, gün doğumunda saniyeler yoktur. Evrenin kaosunu nasıl sayılara dönüştürdüğümüze dair görsel bir yolculuk.",
        texts: MEASUREMENT_TR_TEXTS,
    },
    ru: {
        cardTitle: "ИЗМЕРЕНИЕ",
        cardSubtitle: "Искусство измерения",
        cardDescription: "От локтя фараона до последнего бита ваших смарт-часов.",
        title: "Измерение: Коллективная галлюцинация",
        description:
            "На побережье нет прямых линий, а в восходе солнца нет секунд. Визуальное путешествие о том, как мы превращаем хаос Вселенной в числа.",
        texts: MEASUREMENT_RU_TEXTS,
    },
    ja: {
        cardTitle: "測定",
        cardSubtitle: "数値化の芸術",
        cardDescription: "ファラオのキュビットからスマートウォッチの最後のビットまで。",
        title: "測定：共同の幻影",
        description:
            "海岸線に直線はなく、日の出に秒はありません。宇宙の混沌を数値に変えるビジュアルな旅。",
        texts: MEASUREMENT_JA_TEXTS,
    },
    ko: {
        cardTitle: "측정",
        cardSubtitle: "수량화의 예술",
        cardDescription: "파라오의 큐빗부터 스마트워치의 마지막 비트까지.",
        title: "측정: 집단적 환상",
        description:
            "해안선에는 직선의 경계가 없고 일출에는 초가 없습니다. 우주의 혼돈을 숫자로 바꾸는 시각적 여정.",
        texts: MEASUREMENT_KO_TEXTS,
    },
    zh: {
        cardTitle: "度量",
        cardSubtitle: "量化的艺术",
        cardDescription: "从法老的腕尺到智能手表的最后一比特。",
        title: "度量：共同的幻觉",
        description:
            "海岸线没有直线的边界，日出里没有秒的刻度。关于我们如何将宇宙的混沌转化为数字的视觉之旅。",
        texts: MEASUREMENT_ZH_TEXTS,
    },
} as const satisfies Record<Language, MeasurementLocaleData>;

export const MEASUREMENT_CONCEPT = {
    id: "measurement",
    slugs: MEASUREMENT_SLUGS,
    locales: MEASUREMENT_LOCALES,
} as const;
