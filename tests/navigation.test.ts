import { describe, expect, it } from "vitest";

import { LANGUAGE_CODES } from "../src/i18n/languages";
import { getSiteNavigation } from "../src/routing/navigation";
import { getConceptsIndexUrl } from "../src/routing/routes";

describe("global site navigation", () => {
    it.each(LANGUAGE_CODES)("links %s to its complete site navigation", (language) => {
        const navigation = getSiteNavigation(language);
        const expectedHost =
            language === "es" ? "https://www.jjlmoya.es" : "https://www.gamebob.dev";

        expect(navigation).toHaveLength(language === "es" ? 7 : 4);
        expect(navigation.filter(({ active }) => active)).toHaveLength(1);
        expect(navigation).toContainEqual(
            expect.objectContaining({ href: getConceptsIndexUrl(language), active: true })
        );
        expect(navigation.every(({ href }) => href.startsWith(expectedHost))).toBe(true);
    });
});
