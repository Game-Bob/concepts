import type { Language } from "../../i18n/languages";
import type { WheatLocaleData } from "./types";
import { WHEAT_DE_TEXTS } from "./texts/de";
import { WHEAT_EN_TEXTS } from "./texts/en";
import { WHEAT_ES_TEXTS } from "./texts/es";
import { WHEAT_FR_TEXTS } from "./texts/fr";
import { WHEAT_ID_TEXTS } from "./texts/id";
import { WHEAT_IT_TEXTS } from "./texts/it";
import { WHEAT_JA_TEXTS } from "./texts/ja";
import { WHEAT_KO_TEXTS } from "./texts/ko";
import { WHEAT_NL_TEXTS } from "./texts/nl";
import { WHEAT_PL_TEXTS } from "./texts/pl";
import { WHEAT_PT_TEXTS } from "./texts/pt";
import { WHEAT_RU_TEXTS } from "./texts/ru";
import { WHEAT_SV_TEXTS } from "./texts/sv";
import { WHEAT_TR_TEXTS } from "./texts/tr";
import { WHEAT_ZH_TEXTS } from "./texts/zh";

export const WHEAT_SLUGS = {
    es: "trigo",
    en: "wheat",
    fr: "ble",
    de: "weizen",
    it: "frumento",
    pt: "historia-do-trigo",
    nl: "tarwe",
    sv: "vete",
    pl: "pszenica",
    id: "gandum",
    tr: "bugday",
    ru: "pshenitsa",
    ja: "wheat",
    ko: "wheat",
    zh: "wheat",
} as const satisfies Record<Language, string>;

const WHEAT_CARD_LABELS = {
    es: { cardLeftLabel: "Libertad", cardRightLabel: "Seguridad" },
    en: { cardLeftLabel: "Freedom", cardRightLabel: "Security" },
    fr: { cardLeftLabel: "Liberté", cardRightLabel: "Sécurité" },
    de: { cardLeftLabel: "Freiheit", cardRightLabel: "Sicherheit" },
    it: { cardLeftLabel: "Libertà", cardRightLabel: "Sicurezza" },
    pt: { cardLeftLabel: "Liberdade", cardRightLabel: "Segurança" },
    nl: { cardLeftLabel: "Vrijheid", cardRightLabel: "Veiligheid" },
    sv: { cardLeftLabel: "Frihet", cardRightLabel: "Trygghet" },
    pl: { cardLeftLabel: "Wolność", cardRightLabel: "Bezpieczeństwo" },
    id: { cardLeftLabel: "Kebebasan", cardRightLabel: "Keamanan" },
    tr: { cardLeftLabel: "Özgürlük", cardRightLabel: "Güvenlik" },
    ru: { cardLeftLabel: "Свобода", cardRightLabel: "Безопасность" },
    ja: { cardLeftLabel: "自由", cardRightLabel: "安全" },
    ko: { cardLeftLabel: "자유", cardRightLabel: "안전" },
    zh: { cardLeftLabel: "自由", cardRightLabel: "安全" },
} as const satisfies Record<Language, Pick<WheatLocaleData, "cardLeftLabel" | "cardRightLabel">>;

const localized = (
    language: Language,
    cardTitle: string,
    cardSubtitle: string,
    cardDescription: string,
    title: string,
    description: string,
    texts: WheatLocaleData["texts"] = WHEAT_ES_TEXTS
): WheatLocaleData => ({
    ...WHEAT_CARD_LABELS[language],
    cardTitle,
    cardSubtitle,
    cardDescription,
    title,
    description,
    texts,
});

export const WHEAT_LOCALES = {
    es: localized(
        "es",
        "TRIGO",
        "La Trampa Dorada",
        "Crónica de cómo una hierba domesticó a la humanidad.",
        "La Historia del Trigo",
        "Una exploración visual y narrativa sobre cómo el trigo transformó a la humanidad, desde el tiempo profundo hasta la era moderna.",
        WHEAT_ES_TEXTS
    ),
    en: localized(
        "en",
        "WHEAT",
        "The Golden Trap",
        "A chronicle of how a grass domesticated humanity.",
        "The History of Wheat",
        "A visual narrative exploring how wheat transformed humanity, from deep time to the modern age.",
        WHEAT_EN_TEXTS
    ),
    fr: localized(
        "fr",
        "BLÉ",
        "Le Piège Doré",
        "Chronique de la manière dont une herbe a domestiqué l’humanité.",
        "L’Histoire du Blé",
        "Une exploration visuelle et narrative de la manière dont le blé a transformé l’humanité, des temps profonds à l’époque moderne.",
        WHEAT_FR_TEXTS
    ),
    de: localized(
        "de",
        "WEIZEN",
        "Die Goldene Falle",
        "Eine Chronik darüber, wie ein Gras die Menschheit domestizierte.",
        "Die Geschichte des Weizens",
        "Eine visuelle Erzählung darüber, wie Weizen die Menschheit von der Tiefenzeit bis in die Moderne verwandelte.",
        WHEAT_DE_TEXTS
    ),
    it: localized(
        "it",
        "FRUMENTO",
        "La Trappola Dorata",
        "Cronaca di come un’erba addomesticò l’umanità.",
        "La Storia del Frumento",
        "Un’esplorazione visiva e narrativa di come il frumento trasformò l’umanità, dal tempo profondo all’età moderna.",
        WHEAT_IT_TEXTS
    ),
    pt: localized(
        "pt",
        "TRIGO",
        "A Armadilha Dourada",
        "Crónica de como uma erva domesticou a humanidade.",
        "A História do Trigo",
        "Uma exploração visual e narrativa de como o trigo transformou a humanidade, do tempo profundo à era moderna.",
        WHEAT_PT_TEXTS
    ),
    nl: localized(
        "nl",
        "TARWE",
        "De Gouden Val",
        "Een kroniek van hoe een grassoort de mensheid temde.",
        "De Geschiedenis van Tarwe",
        "Een visuele vertelling over hoe tarwe de mensheid veranderde, van de diepe tijd tot het moderne tijdperk.",
        WHEAT_NL_TEXTS
    ),
    sv: localized(
        "sv",
        "VETE",
        "Den Gyllene Fällan",
        "En krönika om hur ett gräs domesticerade mänskligheten.",
        "Vetets Historia",
        "En visuell berättelse om hur vetet förändrade mänskligheten, från djup tid till modern tid.",
        WHEAT_SV_TEXTS
    ),
    pl: localized(
        "pl",
        "PSZENICA",
        "Złota Pułapka",
        "Kronika tego, jak trawa udomowiła ludzkość.",
        "Historia Pszenicy",
        "Wizualna opowieść o tym, jak pszenica odmieniła ludzkość — od głębokiej przeszłości po czasy współczesne.",
        WHEAT_PL_TEXTS
    ),
    id: localized(
        "id",
        "GANDUM",
        "Perangkap Emas",
        "Kisah tentang bagaimana rerumputan menjinakkan umat manusia.",
        "Sejarah Gandum",
        "Penjelajahan visual dan naratif tentang bagaimana gandum mengubah umat manusia, dari masa purba hingga zaman modern.",
        WHEAT_ID_TEXTS
    ),
    tr: localized(
        "tr",
        "BUĞDAY",
        "Altın Tuzak",
        "Bir otun insanlığı nasıl evcilleştirdiğinin hikâyesi.",
        "Buğdayın Tarihi",
        "Buğdayın derin zamandan modern çağa insanlığı nasıl dönüştürdüğünü anlatan görsel bir keşif.",
        WHEAT_TR_TEXTS
    ),
    ru: localized(
        "ru",
        "ПШЕНИЦА",
        "Золотая Ловушка",
        "Хроника о том, как трава одомашнила человечество.",
        "История Пшеницы",
        "Визуальный рассказ о том, как пшеница изменила человечество — от глубокой древности до современности.",
        WHEAT_RU_TEXTS
    ),
    ja: localized(
        "ja",
        "小麦",
        "黄金の罠",
        "一本の草が人類を飼いならした物語。",
        "小麦の歴史",
        "小麦が太古から現代まで人類をどう変えたのかをたどる、視覚的な物語。",
        WHEAT_JA_TEXTS
    ),
    ko: localized(
        "ko",
        "밀",
        "황금의 덫",
        "한 포기의 풀이 인류를 길들인 연대기.",
        "밀의 역사",
        "밀이 아득한 과거부터 현대까지 인류를 어떻게 바꾸었는지 살펴보는 시각적 서사.",
        WHEAT_KO_TEXTS
    ),
    zh: localized(
        "zh",
        "小麦",
        "黄金陷阱",
        "一株草如何驯化人类的编年史。",
        "小麦的历史",
        "一场视觉叙事之旅，讲述小麦如何从远古时代一路改变人类直至现代。",
        WHEAT_ZH_TEXTS
    ),
} as const satisfies Record<Language, WheatLocaleData>;

export const WHEAT_CONCEPT = {
    id: "wheat",
    useDetailedDescription: true,
    socialImage: "/images/wheat/header.webp",
    slugs: WHEAT_SLUGS,
    locales: WHEAT_LOCALES,
} as const;
