import type { Language } from "../../i18n/languages";
import { LIBRARY_ES_TEXTS } from "./texts/es";
import { LIBRARY_EN_TEXTS } from "./texts/en";
import { LIBRARY_FR_TEXTS } from "./texts/fr";
import { LIBRARY_DE_TEXTS } from "./texts/de";
import { LIBRARY_IT_TEXTS } from "./texts/it";
import { LIBRARY_PT_TEXTS } from "./texts/pt";
import { LIBRARY_NL_TEXTS } from "./texts/nl";
import { LIBRARY_SV_TEXTS } from "./texts/sv";
import { LIBRARY_PL_TEXTS } from "./texts/pl";
import { LIBRARY_ID_TEXTS } from "./texts/id";
import { LIBRARY_TR_TEXTS } from "./texts/tr";
import { LIBRARY_RU_TEXTS } from "./texts/ru";
import { LIBRARY_JA_TEXTS } from "./texts/ja";
import { LIBRARY_KO_TEXTS } from "./texts/ko";
import { LIBRARY_ZH_TEXTS } from "./texts/zh";

export const LIBRARY_SLUGS = {
    es: "biblioteca",
    en: "library-of-death",
    fr: "bibliotheque-de-la-mort",
    de: "bibliothek-des-todes",
    it: "biblioteca-della-morte",
    pt: "biblioteca-da-morte",
    nl: "bibliotheek-van-de-dood",
    sv: "dodens-bibliotek",
    pl: "biblioteka-smierci",
    id: "perpustakaan-kematian",
    tr: "olum-kutuphanesi",
    ru: "biblioteka-smerti",
    ja: "library-of-death",
    ko: "library-of-death",
    zh: "library-of-death",
} as const satisfies Record<Language, string>;

type DeepStringToString<T> = T extends string
    ? string
    : T extends object
      ? { readonly [K in keyof T]: DeepStringToString<T[K]> }
      : T;

export type LibraryTexts = DeepStringToString<typeof LIBRARY_ES_TEXTS>;

export type LibraryLocaleData = {
    readonly cardTitle: string;
    readonly cardSubtitle: string;
    readonly cardDescription: string;
    readonly title: string;
    readonly description: string;
    readonly texts: LibraryTexts;
};

export const LIBRARY_LOCALES = {
    es: {
        cardTitle: "LA BIBLIOTECA DE LA MUERTE",
        cardSubtitle: "Vol. I",
        cardDescription: "El libro de tu vida guardado en los estantes del tiempo.",
        title: "La Biblioteca de la Morte",
        description: "El libro de tu vida guardado en los estantes del tiempo.",
        texts: LIBRARY_ES_TEXTS,
    },
    en: {
        cardTitle: "THE LIBRARY OF DEATH",
        cardSubtitle: "Vol. I",
        cardDescription: "The book of your life stored on the shelves of time.",
        title: "The Library of Death",
        description: "The book of your life stored on the shelves of time.",
        texts: LIBRARY_EN_TEXTS,
    },
    fr: {
        cardTitle: "LA BIBLIOTHÈQUE DE LA MORT",
        cardSubtitle: "Vol. I",
        cardDescription: "Le livre de votre vie conservé sur les étagères du temps.",
        title: "La Bibliothèque de la Mort",
        description: "Le livre de votre vie conservé sur les étagères du temps.",
        texts: LIBRARY_FR_TEXTS,
    },
    de: {
        cardTitle: "DIE BIBLIOTHEK DES TODES",
        cardSubtitle: "Vol. I",
        cardDescription: "Das Buch Ihres Lebens, aufbewahrt in den Regalen der Zeit.",
        title: "Die Bibliothek des Todes",
        description: "Das Buch Ihres Lebens, aufbewahrt in den Regalen der Zeit.",
        texts: LIBRARY_DE_TEXTS,
    },
    it: {
        cardTitle: "LA BIBLIOTECA DELLA MORTE",
        cardSubtitle: "Vol. I",
        cardDescription: "Il libro della tua vita conservato sugli scaffali del tempo.",
        title: "La Biblioteca della Morte",
        description: "Il libro della tua vita conservato sugli scaffali del tempo.",
        texts: LIBRARY_IT_TEXTS,
    },
    pt: {
        cardTitle: "A BIBLIOTECA DA MORTE",
        cardSubtitle: "Vol. I",
        cardDescription: "O livro da sua vida guardado nas prateleiras do tempo.",
        title: "A Biblioteca da Morte",
        description: "O livro da sua vida guardado nas prateleiras do tempo.",
        texts: LIBRARY_PT_TEXTS,
    },
    nl: {
        cardTitle: "DE BIBLIOTHEEK VAN DE DOOD",
        cardSubtitle: "Vol. I",
        cardDescription: "Het boek van uw leven bewaard in de planken van de tijd.",
        title: "De Bibliotheek van de Dood",
        description: "Het boek van uw leven bewaard in de planken van de tijd.",
        texts: LIBRARY_NL_TEXTS,
    },
    sv: {
        cardTitle: "DÖDENS BIBLIOTEK",
        cardSubtitle: "Vol. I",
        cardDescription: "Boken om ditt liv förvarad på tidens hyllor.",
        title: "Dödens Bibliotek",
        description: "Boken om ditt liv förvarad på tidens hyllor.",
        texts: LIBRARY_SV_TEXTS,
    },
    pl: {
        cardTitle: "BIBLIOTEKA ŚMIERCI",
        cardSubtitle: "Vol. I",
        cardDescription: "Księga twojego życia przechowywana na półkach czasu.",
        title: "Biblioteka Śmierci",
        description: "Księga twojego życia przechowywana na półkach czasu.",
        texts: LIBRARY_PL_TEXTS,
    },
    id: {
        cardTitle: "PERPUSTAKAAN KEMATIAN",
        cardSubtitle: "Vol. I",
        cardDescription: "Buku kehidupan Anda disimpan di rak-rak waktu.",
        title: "Perpustakaan Kematian",
        description: "Buku kehidupan Anda disimpan di rak-rak waktu.",
        texts: LIBRARY_ID_TEXTS,
    },
    tr: {
        cardTitle: "ÖLÜM KÜTÜPHANESİ",
        cardSubtitle: "Vol. I",
        cardDescription: "Zamanın raflarında saklanan hayatınızın kitabı.",
        title: "Ölüm Kütüphanesi",
        description: "Zamanın raflarında saklanan hayatınızın kitabı.",
        texts: LIBRARY_TR_TEXTS,
    },
    ru: {
        cardTitle: "БИБЛИОТЕКА СМЕРТИ",
        cardSubtitle: "Том I",
        cardDescription: "Книга вашей жизни, хранящаяся на полках времени.",
        title: "Библиотека Сmerти",
        description: "Книга вашей жизни, хранящаяся на полках времени.",
        texts: LIBRARY_RU_TEXTS,
    },
    ja: {
        cardTitle: "死の図書館",
        cardSubtitle: "第1巻",
        cardDescription: "時間の棚に保管されたあなたの人生の書。",
        title: "死の図書館",
        description: "時間の棚に保管されたあなたの人生の書。",
        texts: LIBRARY_JA_TEXTS,
    },
    ko: {
        cardTitle: "죽음의 도서관",
        cardSubtitle: "제1권",
        cardDescription: "시간의 선반에 보관된 당신의 인생 책.",
        title: "죽음의 도서관",
        description: "시간의 선반에 보관된 당신의 인생 책.",
        texts: LIBRARY_KO_TEXTS,
    },
    zh: {
        cardTitle: "死亡图书馆",
        cardSubtitle: "第一卷",
        cardDescription: "存放在时间书架上的你的人生之书。",
        title: "死亡图书馆",
        description: "存放在时间书架上的你的人生之书。",
        texts: LIBRARY_ZH_TEXTS,
    },
} as const satisfies Record<Language, LibraryLocaleData>;

export const LIBRARY_CONCEPT = {
    id: "library",
    slugs: LIBRARY_SLUGS,
    locales: LIBRARY_LOCALES,
} as const;
