import { describe, expect, it } from "vitest";

import { CONCEPTS, getConceptLocale } from "../src/concepts/registry";
import { LANGUAGE_CODES } from "../src/i18n/languages";
import { getSiteNavigation } from "../src/routing/navigation";
import { CONCEPTS_LOCALES } from "../src/sections/concepts/locales";

const CORRUPTED_TYPOGRAPHY = [
    { name: "zero-width space", pattern: /\u200b/u },
    { name: "replacement character", pattern: /\ufffd/u },
    { name: "UTF-8 decoded as Latin-1", pattern: /Ã[\u0080-\u00bf]/u },
    { name: "broken UTF-8 punctuation", pattern: /â[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/u },
    { name: "UTF-8 Cyrillic decoded as Latin-1", pattern: /(?:Ð|Ñ)[\u0080-\u00bf\u02c6-\u02dc]/u },
] as const;

type StringEntry = {
    readonly path: string;
    readonly value: string;
};

const getStringEntries = (value: unknown, currentPath = "root"): readonly StringEntry[] => {
    if (typeof value === "string") return [{ path: currentPath, value }];

    if (Array.isArray(value)) {
        return value.flatMap((entry, index) => getStringEntries(entry, `${currentPath}[${index}]`));
    }

    if (value && typeof value === "object") {
        return Object.entries(value).flatMap(([key, entry]) =>
            getStringEntries(entry, `${currentPath}.${key}`)
        );
    }

    return [];
};

const CONTENT_SETS = [
    ...LANGUAGE_CODES.map((language) => ({
        label: `concepts index (${language})`,
        content: CONCEPTS_LOCALES[language],
    })),
    ...LANGUAGE_CODES.map((language) => ({
        label: `navigation (${language})`,
        content: getSiteNavigation(language).map(({ label }) => label),
    })),
    ...CONCEPTS.flatMap((concept) =>
        LANGUAGE_CODES.map((language) => ({
            label: `${concept.id} (${language})`,
            content: getConceptLocale(concept.id, language),
        }))
    ),
] as const;

describe("typography garbage character validation", () => {
    for (const { label, content } of CONTENT_SETS) {
        it(`rejects corrupted typography in ${label}`, () => {
            const found = getStringEntries(content).flatMap(({ path, value }) =>
                CORRUPTED_TYPOGRAPHY.filter(({ pattern }) => pattern.test(value)).map(
                    ({ name }) => `${path}: ${name}`
                )
            );

            expect(found).toEqual([]);
        });
    }
});
