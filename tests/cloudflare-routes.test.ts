import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { LANGUAGE_CODES } from "../src/i18n/languages";
import { CONCEPTS_SECTION_SLUGS } from "../src/i18n/sections";

interface WranglerConfig {
    routes: Array<{ pattern: string; zone_name: string }>;
    assets: {
        directory: string;
        html_handling: string;
        not_found_handling: string;
    };
}

const readJsonc = <T>(path: string): T =>
    JSON.parse(readFileSync(path, "utf8").replace(/,\s*([}\]])/g, "$1")) as T;

const config = readJsonc<WranglerConfig>("wrangler.jsonc");

describe("Cloudflare deployment", () => {
    it("routes every localized concepts section on its canonical host", () => {
        const conceptRoutes = LANGUAGE_CODES.filter((language) => language !== "es").flatMap(
            (language) => {
                const base = `www.gamebob.dev/${language}/${CONCEPTS_SECTION_SLUGS[language]}`;
                return [
                    { pattern: base, zone_name: "gamebob.dev" },
                    { pattern: `${base}/*`, zone_name: "gamebob.dev" },
                ];
            }
        );

        expect(config.routes).toEqual([
            ...conceptRoutes,
            { pattern: "www.gamebob.dev/_studio/*", zone_name: "gamebob.dev" },
            { pattern: "www.jjlmoya.es/conceptos", zone_name: "jjlmoya.es" },
            { pattern: "www.jjlmoya.es/conceptos/*", zone_name: "jjlmoya.es" },
            { pattern: "www.jjlmoya.es/_studio/*", zone_name: "jjlmoya.es" },
        ]);
    });

    it("serves the static Astro build with real 404 responses", () => {
        expect(config.assets).toEqual({
            directory: "./dist",
            html_handling: "force-trailing-slash",
            not_found_handling: "404-page",
        });
    });
});
