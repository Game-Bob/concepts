import type { NuanceSlideData, NuanceTexts } from "../types";
import { NUANCE_ES_TEXTS } from "./es";

export type NuanceSlideTranslation = readonly [
    labelLeft: string,
    labelRight: string,
    badge: string,
    title: string,
    desc: string,
    leftTitle: string,
    leftDesc: string,
    rightTitle: string,
    rightDesc: string,
];

export type NuanceShellTranslation = {
    readonly hud: NuanceTexts["hud"];
    readonly intro: NuanceTexts["intro"];
    readonly outro: NuanceTexts["outro"];
};

export const createNuanceTexts = (
    shell: NuanceShellTranslation,
    translations: readonly NuanceSlideTranslation[]
): NuanceTexts => {
    if (translations.length !== NUANCE_ES_TEXTS.slides.length) {
        throw new Error(
            `Nuance locale has ${translations.length} slides; expected ${NUANCE_ES_TEXTS.slides.length}`
        );
    }

    const slides = NUANCE_ES_TEXTS.slides.map((source, index): NuanceSlideData => {
        const translation = translations[index];

        if (!translation) {
            throw new Error(`Nuance locale is missing slide ${source.id}`);
        }

        const [
            labelLeft,
            labelRight,
            badge,
            title,
            desc,
            leftTitle,
            leftDesc,
            rightTitle,
            rightDesc,
        ] = translation;

        return {
            id: source.id,
            labelLeft,
            labelRight,
            badge,
            title,
            desc,
            leftTitle,
            leftDesc,
            rightTitle,
            rightDesc,
        };
    });

    return { ...shell, slides };
};
