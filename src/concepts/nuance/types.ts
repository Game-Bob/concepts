export type NuanceSlideData = {
    readonly id: string;
    readonly labelLeft: string;
    readonly labelRight: string;
    readonly badge: string;
    readonly title: string;
    readonly desc: string;
    readonly leftTitle: string;
    readonly leftDesc: string;
    readonly rightTitle: string;
    readonly rightDesc: string;
};

export type NuanceTexts = {
    readonly hud: {
        readonly defaultLeft: string;
        readonly defaultRight: string;
        readonly hint: string;
        readonly sliderLabel: string;
    };
    readonly intro: {
        readonly labelLeft: string;
        readonly labelRight: string;
        readonly title: string;
        readonly descriptionFirst: string;
        readonly descriptionSecond: string;
        readonly leftTitle: string;
        readonly leftDescription: string;
        readonly rightTitle: string;
        readonly rightDescription: string;
    };
    readonly slides: readonly NuanceSlideData[];
    readonly outro: {
        readonly firstLine: string;
        readonly secondLine: string;
        readonly exit: string;
        readonly left: string;
        readonly right: string;
    };
};

export type NuanceLocaleData = {
    readonly cardTitle: string;
    readonly cardSubtitle: string;
    readonly cardDescription: string;
    readonly title: string;
    readonly description: string;
    readonly texts: NuanceTexts;
};
