import type { Language } from "../i18n/languages";
import { WAITING_LOCALES, WAITING_SLUGS } from "./waiting/locales";

export type ConceptId = "waiting";

export type ConceptDefinition = {
    readonly id: ConceptId;
    readonly slugs: Record<Language, string>;
};

export const CONCEPTS = [
    { id: "waiting", slugs: WAITING_SLUGS },
] as const satisfies readonly ConceptDefinition[];

export const getConcept = (id: ConceptId): ConceptDefinition => {
    const concept = CONCEPTS.find((entry) => entry.id === id);
    if (!concept) throw new Error(`Unknown concept: ${id}`);
    return concept;
};

export const getConceptLocale = (id: ConceptId, language: Language) => {
    if (id === "waiting") return WAITING_LOCALES[language];
    throw new Error(`Missing locale loader for concept: ${id}`);
};
