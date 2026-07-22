export interface WheatReference {
    category: string;
    authors: string;
    year: string;
    title: string;
    publisher: string;
    description: string;
}

export interface WheatMetric {
    value: string;
    label: string;
}

export interface WheatCalorieProfile {
    chapter: string;
    title: string;
    introduction: string;
    figureTitle: string;
    workLabel: string;
    workValue: string;
    nutritionLabel: string;
    nutritionValue: string;
    densityLabel: string;
    densityValue: string;
    conclusion?: string;
}

export interface WheatChoiceText {
    heading: string;
    shadowTitle: string;
    shadowDescription: string;
    shadowAction: string;
    shadowShareText: string;
    lightTitle: string;
    lightDescription: string;
    lightAction: string;
    lightShareText: string;
}

export interface WheatTexts {
    common: {
        conceptName: string;
        shareIdea: string;
        close: string;
        millionsSuffix: string;
    };
    header: {
        light: string;
        title: string;
        details: string;
        shadow: string;
    };
    deepTime: {
        chapter: string;
        title: string;
        firstParagraph: string;
        secondParagraph: string;
        quote: string;
    };
    rachis: {
        chapter: string;
        title: string;
        lead: string;
        explanationBeforeName: string;
        name: string;
        explanationAfterName: string;
        consequence: string;
        quote: string;
    };
    trap: {
        chapter: string;
        title: string;
        description: string;
        quote: string;
        figureCaption: string;
    };
    grinding: {
        chapter: string;
        title: string;
        firstParagraph: string;
        secondParagraph: string;
        conclusion: string;
    };
    skeleton: {
        imageAlt: string;
        chapter: string;
        title: string;
        description: string;
        quote: string;
        figureCaption: string;
    };
    calorieHunter: WheatCalorieProfile;
    calorieFarmer: WheatCalorieProfile;
    surplus: {
        figureLabel: string;
        chapter: string;
        title: string;
        storageLead: string;
        storageEmphasis: string;
        storageConclusion: string;
        povertyQuote: string;
        inequality: string;
        power: string;
        doubtTitle: string;
        doubtText: string;
    };
    socialContract: {
        chapter: string;
        title: string;
        firstParagraph: string;
        secondParagraph: string;
        quote: string;
        lawQuote: string;
        lawAttribution: string;
        tabletTitle: string;
        tabletPlace: string;
    };
    population: {
        chapter: string;
        title: string;
        description: string;
        chartLabel: string;
        chartDates: readonly string[];
        paleolithic: WheatMetric;
        romanEmpire: WheatMetric;
        present: WheatMetric;
    };
    workHours: {
        chapter: string;
        title: string;
        description: string;
        quote: string;
        hunterHours: string;
        hunterMeasure: string;
        hunterTitle: string;
        hunterDescription: string;
        farmerHours: string;
        farmerMeasure: string;
        farmerTitle: string;
        farmerDescription: string;
        sourceNote: string;
    };
    modernMap: {
        chapter: string;
        title: string;
        firstParagraph: string;
        secondParagraph: string;
        conclusion: string;
    };
    future: {
        chapter: string;
        title: string;
        geneEditingTitle: string;
        geneEditingText: string;
        verticalFarmsTitle: string;
        verticalFarmsText: string;
        conclusion: string;
    };
    epilogue: {
        chapter: string;
        text: string;
    };
    documentation: {
        title: string;
        references: readonly WheatReference[];
        projectLabel: string;
        updatedAt: string;
        status: string;
        identifier: string;
    };
    positiveDocumentation: {
        title: string;
        references: readonly WheatReference[];
    };
    choice: WheatChoiceText;
    positiveExpansion: {
        chapter: string;
        title: string;
        description: string;
        dates: readonly string[];
        populations: readonly string[];
        chartLabel: string;
        metrics: readonly [
            WheatMetric & { description: string },
            WheatMetric & { description: string },
            WheatMetric & { description: string },
        ];
    };
    positiveKnowledge: {
        chapter: string;
        title: string;
        firstParagraph: string;
        secondParagraph: string;
    };
    positiveSpecialization: {
        chapter: string;
        title: string;
        roles: readonly [
            { title: string; description: string; skills: string },
            { title: string; description: string; skills: string },
            { title: string; description: string; skills: string },
        ];
        beforeValue: string;
        beforeLabel: string;
        beforeCaption: string;
        afterValue: string;
        afterLabel: string;
        afterCaption: string;
        conclusion: string;
        quote: string;
    };
    positiveLaw: {
        chapter: string;
        title: string;
        quote: string;
        conflictTitle: string;
        conflictText: string;
        propertyTitle: string;
        propertyText: string;
        beforeValue: string;
        beforeLabel: string;
        afterValue: string;
        afterLabel: string;
        reductionLabel: string;
    };
    positiveBeer: {
        formula: string;
        formulaName: string;
        chapter: string;
        title: string;
        theoryLead: string;
        theoryQuote: string;
        description: string;
    };
    positiveTrade: {
        chapter: string;
        title: string;
        firstParagraph: string;
        secondParagraph: string;
        conclusion: string;
        shekelValue: string;
        shekelLabel: string;
        distanceValue: string;
        distanceLabel: string;
        wheatLabel: string;
        places: readonly [string, string, string, string, string, string, string, string];
        goods: readonly [WheatMetric, WheatMetric, WheatMetric];
    };
    positiveWriting: {
        binary: string;
        symbol: string;
        symbolCaption: string;
        chapter: string;
        title: string;
        quote: string;
        firstParagraph: string;
        historyWord: string;
        secondParagraph: string;
    };
    positiveCity: {
        chapter: string;
        title: string;
        quote: string;
        cities: readonly [WheatMetric, WheatMetric, WheatMetric];
        description: string;
        centerLabel: string;
    };
    positiveSecurity: {
        chapter: string;
        title: string;
        firstParagraph: string;
        emphasis: string;
        secondParagraph: string;
        quote: string;
        metrics: readonly [WheatMetric, WheatMetric, WheatMetric];
        capacityLabel: string;
        reserveLabel: string;
        granaryLabel: string;
    };
    tableOfContents: {
        navigationLabel: string;
        openLabel: string;
        closeLabel: string;
        title: string;
        sections: readonly { id: string; label: string; theme: "emerald" | "amber" | "neutral" }[];
    };
}

export interface WheatLocaleData {
    cardTitle: string;
    cardSubtitle: string;
    cardDescription: string;
    cardLeftLabel: string;
    cardRightLabel: string;
    title: string;
    description: string;
    texts: WheatTexts;
}
