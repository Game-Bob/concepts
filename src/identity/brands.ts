import type { Language } from "../i18n/languages";
import { getBrandProfile, type Identity } from "@jjlmoya/identity";

export const BRANDS = {
    jjlmoya: getBrandProfile("jjlmoya"),
    gamebob: getBrandProfile("gamebob"),
} as const;

export type Brand = Identity;

export const getBrand = (language: Language): Brand => (language === "es" ? "jjlmoya" : "gamebob");
