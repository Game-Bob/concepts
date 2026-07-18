export const LANGUAGES = [
    { code: "es", name: "Español", locale: "es-ES" },
    { code: "en", name: "English", locale: "en-US" },
    { code: "fr", name: "Français", locale: "fr-FR" },
    { code: "de", name: "Deutsch", locale: "de-DE" },
    { code: "it", name: "Italiano", locale: "it-IT" },
    { code: "pt", name: "Português", locale: "pt-PT" },
    { code: "nl", name: "Nederlands", locale: "nl-NL" },
    { code: "sv", name: "Svenska", locale: "sv-SE" },
    { code: "pl", name: "Polski", locale: "pl-PL" },
    { code: "id", name: "Bahasa Indonesia", locale: "id-ID" },
    { code: "tr", name: "Türkçe", locale: "tr-TR" },
    { code: "ru", name: "Русский", locale: "ru-RU" },
    { code: "ja", name: "日本語", locale: "ja-JP" },
    { code: "ko", name: "한국어", locale: "ko-KR" },
    { code: "zh", name: "中文", locale: "zh-CN" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];

export const LANGUAGE_CODES = LANGUAGES.map(({ code }) => code) as readonly Language[];
