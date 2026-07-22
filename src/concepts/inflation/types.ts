export interface InflationBasketItem {
    readonly name: string;
    readonly price: number;
    readonly icon: string;
    readonly minYear: number;
    readonly maxYear: number;
}

export interface InflationCaseItem {
    readonly title: string;
    readonly year: number;
    readonly icon: string;
    readonly color: string;
    readonly price: string;
    readonly description: string;
}

export interface InflationHiddenTypeItem {
    readonly title: string;
    readonly badge: string;
    readonly icon: string;
    readonly desc: string;
    readonly example: string;
    readonly quote: string;
}

export interface InflationSourceItem {
    readonly type: string;
    readonly name: string;
    readonly org: string;
    readonly freq: string;
    readonly desc: string;
    readonly bestFor: string;
    readonly linkText: string;
    readonly url: string;
    readonly icon?: string;
}

export interface InflationEffortItem {
    readonly title: string;
    readonly shareTitle: string;
    readonly icon: string;
    readonly then: {
        readonly year: number;
        readonly effort: string;
        readonly effortValue: number;
        readonly salary: string;
        readonly cost: string;
    };
    readonly now: {
        readonly year: number;
        readonly effort: string;
        readonly effortValue: number;
        readonly salary: string;
        readonly cost: string;
    };
}

export interface InflationReportRow {
    readonly concept: string;
    readonly year: number;
    readonly priceHist: string;
    readonly price2025: string;
    readonly varPercent: string;
    readonly isPositive?: boolean;
    readonly sourceName: string;
    readonly sourceUrl?: string;
    readonly sourceTitle?: string;
}

export interface InflationHiddenTypeCard {
    readonly badge: string;
    readonly title: string;
    readonly graphicLabel1?: string;
    readonly graphicLabel2?: string;
    readonly graphicLegend1?: string;
    readonly graphicLegend2?: string;
    readonly graphicRemoved1?: string;
    readonly graphicAdded1?: string;
    readonly graphicRemoved2?: string;
    readonly graphicAdded2?: string;
    readonly tagline: string;
    readonly description: string;
    readonly sourceText: string;
    readonly shareText: string;
}

export interface InflationLocaleData {
    readonly cardTitle: string;
    readonly cardSubtitle: string;
    readonly cardDescription: string;
    readonly title: string;
    readonly description: string;
    readonly headerSubtitle: string;
    readonly sliderTitle: string;
    readonly sliderYearPrefix: string;
    readonly sliderValuePrefix: string;
    readonly billTitle: string;
    readonly billYearLabel: string;
    readonly billValueLabel: string;
    readonly casesTitle: string;
    readonly casesSubtitle: string;
    readonly shareText: string;
    readonly shareButton: string;
    readonly infoTitle: string;
    readonly infoSubtitle1: string;
    readonly infoP1: string;
    readonly infoSubtitle2: string;
    readonly infoP2: string;
    readonly infoSubtitle3: string;
    readonly infoP3: string;
    readonly infoScienceTitle: string;
    readonly infoScienceText: string;
    readonly disclaimerTitle: string;
    readonly disclaimerText: string;
    readonly disclaimerEffortTitle: string;
    readonly disclaimerEffortP1: string;
    readonly disclaimerEffortP2: string;
    readonly disclaimerProductivityTitle: string;
    readonly disclaimerProductivityText: string;
    readonly effortTitle: string;
    readonly effortSubtitle: string;
    readonly effortPerYear: string;
    readonly effortUseAverageBtn: string;
    readonly effortGoodEra: string;
    readonly effortHarshReality: string;
    readonly effortWorkSuffix: string;
    readonly effortSalaryLabel: string;
    readonly effortCostLabel: string;
    readonly effortFooterNote: string;
    readonly illusionTitle: string;
    readonly illusionSubtitle: string;
    readonly illusionNominalLabel: string;
    readonly illusionNominalDesc: string;
    readonly illusionRealLabel: string;
    readonly illusionRealDesc: string;
    readonly illusionLegendNominal: string;
    readonly illusionLegendReal: string;
    readonly illusionExplanation: string;
    readonly hiddenTypesTitle: string;
    readonly hiddenTypesSubtitle: string;
    readonly sourcesTitle: string;
    readonly sourcesSubtitle: string;
    readonly sourcesBadge: string;
    readonly reportTitle: string;
    readonly reportSubtitle: string;
    readonly table1Title: string;
    readonly table1Ref: string;
    readonly thConcept: string;
    readonly thYear: string;
    readonly thHistPrice: string;
    readonly thPrice2025: string;
    readonly thVar: string;
    readonly thSource: string;
    readonly table2Title: string;
    readonly thAvgSalary: string;
    readonly thSmiMonthly: string;
    readonly thSmiTotal: string;
    readonly noteTitle: string;
    readonly noteP1: string;
    readonly noteP2: string;
    readonly noteSources: string;
    readonly personalNoteTitle: string;
    readonly personalNoteText: string;
    readonly madeForFun: string;
    readonly reportTable1Rows: readonly InflationReportRow[];
    readonly items: readonly InflationBasketItem[];
    readonly cases: readonly InflationCaseItem[];
    readonly effortComparisons: readonly InflationEffortItem[];
    readonly hiddenTypesCards: readonly InflationHiddenTypeCard[];
}
