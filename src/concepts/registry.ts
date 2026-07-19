import type { Language } from "../i18n/languages";
import { MEASUREMENT_CONCEPT } from "./measurement/locales";
import { WAITING_CONCEPT } from "./waiting/locales";
import { BOREDOM_CONCEPT } from "./boredom/locales";

const CONCEPT_MODULES = [WAITING_CONCEPT, MEASUREMENT_CONCEPT, BOREDOM_CONCEPT] as const;

type RegisteredConcept = (typeof CONCEPT_MODULES)[number];

export type ConceptId = RegisteredConcept["id"];

type ConceptById<Id extends ConceptId> = Extract<RegisteredConcept, { readonly id: Id }>;
type ConceptLocaleById<Id extends ConceptId> = ConceptById<Id>["locales"][Language];

const CONCEPTS_BY_ID = Object.fromEntries(
    CONCEPT_MODULES.map((concept) => [concept.id, concept])
) as { readonly [Id in ConceptId]: ConceptById<Id> };

export const CONCEPTS = CONCEPT_MODULES;

export const getConcept = <Id extends ConceptId>(id: Id): ConceptById<Id> => CONCEPTS_BY_ID[id];

export const getConceptLocale = <Id extends ConceptId>(
    id: Id,
    language: Language
): ConceptLocaleById<Id> => {
    const concept = getConcept(id);
    return concept.locales[language] as ConceptLocaleById<Id>;
};
