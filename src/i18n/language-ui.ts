import type { Language } from "./languages";

export const LANGUAGE_UI = {
    es: {
        change: "Cambiar idioma",
        select: "Seleccionar idioma",
        close: "Cerrar selector de idioma",
    },
    en: { change: "Change language", select: "Select language", close: "Close language selector" },
    fr: {
        change: "Changer de langue",
        select: "Choisir la langue",
        close: "Fermer le sélecteur de langue",
    },
    de: { change: "Sprache ändern", select: "Sprache auswählen", close: "Sprachauswahl schließen" },
    it: {
        change: "Cambia lingua",
        select: "Seleziona lingua",
        close: "Chiudi il selettore della lingua",
    },
    pt: { change: "Mudar idioma", select: "Selecionar idioma", close: "Fechar seletor de idioma" },
    nl: { change: "Taal wijzigen", select: "Taal selecteren", close: "Taalselector sluiten" },
    sv: { change: "Byt språk", select: "Välj språk", close: "Stäng språkväljaren" },
    pl: { change: "Zmień język", select: "Wybierz język", close: "Zamknij wybór języka" },
    id: { change: "Ubah bahasa", select: "Pilih bahasa", close: "Tutup pemilih bahasa" },
    tr: { change: "Dili değiştir", select: "Dil seç", close: "Dil seçiciyi kapat" },
    ru: { change: "Изменить язык", select: "Выбрать язык", close: "Закрыть выбор языка" },
    ja: { change: "言語を変更", select: "言語を選択", close: "言語選択を閉じる" },
    ko: { change: "언어 변경", select: "언어 선택", close: "언어 선택기 닫기" },
    zh: { change: "更改语言", select: "选择语言", close: "关闭语言选择器" },
} as const satisfies Record<Language, { change: string; select: string; close: string }>;
