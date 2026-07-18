import { LANGUAGE_CODES } from "./languages";
import type { Language } from "./languages";

export type TranslationTree = {
    readonly [key: string]: string | TranslationTree;
};

export type TranslationSet = Partial<Record<Language, TranslationTree>>;

const flattenTranslations = (
    tree: TranslationTree,
    prefix = "",
    result = new Map<string, string>()
): ReadonlyMap<string, string> => {
    for (const [key, value] of Object.entries(tree)) {
        const path = prefix ? `${prefix}.${key}` : key;

        if (typeof value === "string") {
            result.set(path, value);
        } else {
            flattenTranslations(value, path, result);
        }
    }

    return result;
};

const getMissingLocaleIssue = (
    translations: TranslationSet,
    language: Language
): readonly string[] => (translations[language] ? [] : [`Missing locale: ${language}`]);

const compareLocale = (
    language: Language,
    sourceEntries: ReadonlyMap<string, string>,
    localeEntries: ReadonlyMap<string, string>
): readonly string[] => {
    const issues: string[] = [];

    for (const key of sourceEntries.keys()) {
        if (!localeEntries.has(key)) {
            issues.push(`${language}: Missing key: ${key}`);
        }
    }

    for (const [key, value] of localeEntries) {
        if (!sourceEntries.has(key)) {
            issues.push(`${language}: Unexpected key: ${key}`);
        } else if (!value.trim()) {
            issues.push(`${language}: Empty value: ${key}`);
        }
    }

    return issues;
};

const compareTranslationSet = (
    translations: TranslationSet,
    sourceEntries: ReadonlyMap<string, string>
): readonly string[] =>
    LANGUAGE_CODES.flatMap((language) => {
        const locale = translations[language];
        return locale ? compareLocale(language, sourceEntries, flattenTranslations(locale)) : [];
    });

export const validateTranslations = (
    translations: TranslationSet,
    sourceLanguage: Language
): readonly string[] => {
    const issues = LANGUAGE_CODES.flatMap((language) =>
        getMissingLocaleIssue(translations, language)
    );
    const source = translations[sourceLanguage];

    if (!source) {
        return [`Missing source locale: ${sourceLanguage}`, ...issues];
    }

    const sourceEntries = flattenTranslations(source);
    return [...issues, ...compareTranslationSet(translations, sourceEntries)];
};
