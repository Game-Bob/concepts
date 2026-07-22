import type { WheatTexts } from "../types";

export const WHEAT_EN_TEXTS: WheatTexts = {
    common: {
        conceptName: "wheat",
        shareIdea: "Share idea",
        close: "Close",
        millionsSuffix: "million",
    },
    header: {
        light: "The Light",
        title: "The History of Wheat",
        details: "Details: Light and Shadow",
        shadow: "The Shadow",
    },
    deepTime: {
        chapter: "Deep Time",
        title: "200,000 Years of Silence",
        firstParagraph:
            "For 99% of our history, we were nomads. The world did not belong to us; we belonged to the world.",
        secondParagraph:
            "We hunted, gathered and moved on. Life was dangerous, yes, but it was light.",
        quote: "We had no masters, no walls and no angry gods.",
    },
    rachis: {
        chapter: "The Rachis",
        title: "The Invisible Structure",
        lead: "A microscopic accident",
        explanationBeforeName: "The history of civilisation rests on one biological detail:",
        name: "the rachis",
        explanationAfterName:
            ". In wild wheat it is brittle, allowing the seed to scatter. In domesticated wheat it is tough; the seed waits for humans.",
        consequence:
            "That millimetre of biology created the ‘need to work’. Wheat could no longer grow by itself. We could no longer eat without sowing.",
        quote: "A blood pact was signed: we give it life, it gives us energy.",
    },
    trap: {
        chapter: "The Trap",
        title: "The Poisoned Gift",
        description:
            "It looked like a gift: dependable food. But wheat demanded constant service—clearing the field, carrying water and driving off pests.",
        quote: "Did we domesticate wheat... or did wheat domesticate us?",
        figureCaption: "> “This point of union supports every city on Earth.”",
    },
    grinding: {
        chapter: "The Routine",
        title: "The dawn of pain",
        firstParagraph:
            "Wheat demanded to be ground. We could not eat it raw, so we invented the grinding stone.",
        secondParagraph:
            "With it, we invented chronic back pain, arthritis of the knees and hernias. For hours every day, kneeling and pushing one stone against another.",
        conclusion: "The human body, designed to climb and run, broke against the ground.",
    },
    skeleton: {
        imageAlt: "Skeleton comparison: hunter versus farmer",
        chapter: "The Biological Cost",
        title: "Broken bodies",
        description:
            "The adoption of agriculture brought a plague of new ailments: hernias, arthritis, and spinal deformities. The worst was written in the bones.",
        quote: "The human body evolved for 2 million years to climb, run, and hunt. Not to bend, dig, and carry stones.",
        figureCaption: "FIG. 2: COMPARATIVE PALEOPATHOLOGY (Cohen & Armelagos, 1984)",
    },
    calorieHunter: {
        chapter: "The Energy Trap",
        title: "Calories vs Freedom",
        introduction:
            "The hunter worked less and ate better. The farmer worked more and ate worse. Why did we change?",
        figureTitle: "The Hunter's Freedom",
        workLabel: "Work hours per day",
        workValue: "4 hours",
        nutritionLabel: "Nutritional quality",
        nutritionValue: "High (varied)",
        densityLabel: "Population density",
        densityValue: "Low (0.1/km²)",
    },
    calorieFarmer: {
        chapter: "The Energy Trap II",
        title: "The Price to Pay",
        introduction: "Wheat allowed feeding more people, even if they were more miserable.",
        figureTitle: "The Farmer's Burden",
        workLabel: "Work hours per day",
        workValue: "Over 10 hours",
        nutritionLabel: "Nutritional quality",
        nutritionValue: "Low (monoculture)",
        densityLabel: "Population density",
        densityValue: "Explosive (50/km²)",
        conclusion:
            "Evolution does not seek individual happiness; it only seeks more DNA copies. Wheat was the perfect tool to multiply humans, not to make them happy.",
    },
    surplus: {
        figureLabel: "FIG. 4: ACCUMULATION",
        chapter: "The Surplus",
        title: "The birth of poverty",
        storageLead: "Wheat has a property that meat lacks:",
        storageEmphasis: "it can be stored",
        storageConclusion: ". A dry grain lasts for years. And here human tragedy is born.",
        povertyQuote: "Wheat invented poverty.",
        inequality:
            "Because for the first time, someone could have 'everything' and someone else could have 'nothing'.",
        power: "If you can accumulate food, you can accumulate power. Silos appear. Walls appear to protect the silos. Soldiers appear to watch the walls. Kings appear to count the grain.",
        doubtTitle: "The Doubt",
        doubtText:
            "Before wheat, we were all equal before hunger. Grain broke the social balance forever. Did we build cities to protect ourselves, or to protect wheat from others?",
    },
    socialContract: {
        chapter: "The Social Contract",
        title: "Grain Laws",
        firstParagraph:
            "When you have a granary, you need to protect it. When you have hungry neighbors, you need laws.",
        secondParagraph:
            "The Code of Hammurabi, one of the earliest written law codes, does not speak of freedom. It speaks of debts, grain thefts, and irrigation canals.",
        quote: "Justice was born to manage the harvest.",
        lawQuote:
            "“If a man has a debt of grain and has no money to pay it, he shall hand over his son or daughter as a slave.”",
        lawAttribution: "— Code of Hammurabi, 1750 BC",
        tabletTitle: "ADMINISTRATIVE TABLET",
        tabletPlace: "Uruk, 3100 BC",
    },
    population: {
        chapter: "Demographics",
        title: "The Explosion",
        description: "For 200,000 years we were few. Then wheat arrived.",
        chartLabel: "Human population (millions)",
        chartDates: ["200,000 BC", "100,000 BC", "10,000 BC", "0", "1000 AD", "1800 AD", "2025"],
        paleolithic: { value: "~5 million", label: "Paleolithic population" },
        romanEmpire: { value: "~200 million", label: "Roman Empire" },
        present: { value: "8,200 million", label: "Population in 2025" },
    },
    workHours: {
        chapter: "The Cost of Progress",
        title: "The Workday",
        description: "Contrary to popular belief, 'primitive' life was not a constant struggle.",
        quote: "The promise of agriculture was security, but the price was free time.",
        hunterHours: "~3-5 hours",
        hunterMeasure: "Subsistence",
        hunterTitle: "Hunter-gatherer",
        hunterDescription: "Abundant leisure time. Intermittent work.",
        farmerHours: "~9-10 hours",
        farmerMeasure: "Sunup to sundown",
        farmerTitle: "Neolithic farmer",
        farmerDescription: "Constant toil. Soil preparation, sowing, harvesting, and grinding.",
        sourceNote:
            "Data based on studies by Marshall Sahlins ('Stone Age Economics') and anthropological records of !Kung societies.",
    },
    modernMap: {
        chapter: "The Longue Durée",
        title: "The map today",
        firstParagraph: "Time passes. Empires fall. Religions change. But wheat remains.",
        secondParagraph:
            "Look at the map today. Do not see political borders; they are recent inventions. See the 'structures': the immense plains of monoculture feeding 8 billion souls. We have terraformed the planet into a massive farm.",
        conclusion:
            "Wheat won the evolutionary game. It occupies more land than any natural forest.",
    },
    future: {
        chapter: "The Future",
        title: "Infinite Wheat",
        geneEditingTitle: "Gene Editing",
        geneEditingText:
            "We no longer wait for accidental mutations. Now we rewrite wheat's code to survive drought, salt, and heat. The wheat of the future will not be natural.",
        verticalFarmsTitle: "Vertical Farms",
        verticalFarmsText:
            "Freeing the land. Growing upward in glass towers in city centers. The end of the farmer, the beginning of the agricultural engineer.",
        conclusion:
            "“We began by domesticating a wild grass. We ended by domesticating the entire planet to serve it.”",
    },
    epilogue: {
        chapter: "Epilogue",
        text: "“You hold a piece of bread. It is the result of 100 centuries of selection, pain, engineering, and faith. It is humanity's battery. But the doubt persists, silent as history itself: we conquered hunger... but what did we lose along the way when we ceased to be free?”",
    },
    documentation: {
        title: "Documentation and References",
        references: [
            {
                category: "Primary source",
                authors: "Harari, Yuval Noah.",
                year: "(2011).",
                title: "Sapiens: A Brief History of Humankind.",
                publisher: "Harper.",
                description:
                    "Chapter 'History's Biggest Fraud'. Analysis of how wheat domesticated man rather than vice versa, imposing a burden of labor and disease in exchange for population explosion.",
            },
            {
                category: "Anthropology",
                authors: "Scott, James C.",
                year: "(2017).",
                title: "Against the Grain: A Deep History of the Earliest States.",
                publisher: "Yale University Press.",
                description:
                    "Study on the formation of early agrarian states, control of grain surplus, and social coercion required for intensive agriculture.",
            },
            {
                category: "Paleopathology",
                authors: "Cohen, M. N., & Armelagos, G. J.",
                year: "(1984).",
                title: "Paleopathology at the Origins of Agriculture.",
                publisher: "Academic Press.",
                description:
                    "Compendium of skeletal studies demonstrating height reduction (~15 cm), increased dental caries, enamel hypoplasia, and repetitive stress injuries in Levantine transitional populations.",
            },
            {
                category: "Economics",
                authors: "Sahlins, Marshall.",
                year: "(1972).",
                title: "Stone Age Economics.",
                publisher: "Aldine de Gruyter.",
                description:
                    "Research on working hours in hunter-gatherer societies (estimated at 3-5 hours daily) vs the intensive workday of agrarian societies.",
            },
            {
                category: "Botanics",
                authors: "Zohary, D., & Hopf, M.",
                year: "(2000).",
                title: "Domestication of Plants in the Old World.",
                publisher: "Oxford University Press.",
                description:
                    "Technical details on rachis mutation in emmer and einkorn wheat and its impact on human harvesting.",
            },
        ],
        projectLabel: "jjlmoya / CONCEPTS / WHEAT",
        updatedAt: "Last update: November 2025",
        status: "STATUS: COMPLETED",
        identifier: "ID: CPT-003-WHEAT",
    },
    positiveDocumentation: {
        title: "References: The Light",
        references: [
            {
                category: "Civilization",
                authors: "Bronowski, Jacob.",
                year: "(1973).",
                title: "The Ascent of Man.",
                publisher: "BBC Books.",
                description:
                    "Analysis of how sedentary agriculture enabled architecture, mathematics, and complex social structure.",
            },
            {
                category: "Beer",
                authors: "Katz, S. H., & Voigt, M. M.",
                year: "(1986).",
                title: "Bread and Beer: The Early Use of Cereals in the Human Diet.",
                publisher: "Expedition.",
                description:
                    "The hypothesis that the primary motivation for cereal domestication was alcohol production for social rituals.",
            },
            {
                category: "Economics",
                authors: "Graeber, David.",
                year: "(2011).",
                title: "Debt: The First 5,000 Years.",
                publisher: "Melville House.",
                description: "On the origin of money as grain-based credit in Sumerian temples.",
            },
        ],
    },
    choice: {
        heading: "Choose your side",
        shadowTitle: "Team Shadow",
        shadowDescription: "“Agriculture was a trap. I prefer freedom.”",
        shadowAction: "Join the Shadow",
        shadowShareText:
            "I've seen the trap. Wheat domesticated us. I choose the freedom of the shadow. #HistoryOfWheat #TeamShadow",
        lightTitle: "Team Light",
        lightDescription: "“Civilization is worth it. I prefer progress.”",
        lightAction: "Join the Light",
        lightShareText:
            "The cost was high, but civilization is worth it. I choose the light of progress. #HistoryOfWheat #TeamLight",
    },
    positiveExpansion: {
        chapter: "The Expansion",
        title: "The Unstoppable Species",
        description:
            "Thanks to wheat's caloric density, we could inhabit places where game was scarce. We conquered deserts, mountains, and tundras.",
        dates: ["10,000 BC", "8,000 BC", "5,000 BC", "3,000 BC"],
        populations: ["1 M", "5 M", "50 M"],
        chartLabel: "Population growth",
        metrics: [
            {
                value: "7 continents",
                label: "Inhabited",
                description:
                    "Wheat enabled permanent settlements in every habitable climate on the planet.",
            },
            {
                value: "×50",
                label: "Growth",
                description:
                    "Human population multiplied 50-fold in the first 7,000 years of agriculture.",
            },
            {
                value: "∞",
                label: "Potential",
                description: "Without geographic limits, humanity became a truly global species.",
            },
        ],
    },
    positiveKnowledge: {
        chapter: "Science",
        title: "The Science of Time",
        firstParagraph:
            "The hunter lives in the eternal present. The farmer needs to predict the future.",
        secondParagraph:
            "To know when to sow, we had to understand the cycles of sun and moon. We invented astronomy, mathematics, and geometry to measure fields. Wheat was the father of abstract science.",
    },
    positiveSpecialization: {
        chapter: "Genius",
        title: "The Birth of Genius",
        roles: [
            {
                title: "The Craftsman",
                description:
                    "Freed from foraging, hands perfected clay, metal, and cloth. The concept of 'master' was born.",
                skills: "Pottery • Metallurgy • Textiles",
            },
            {
                title: "The Healer",
                description:
                    "Leisure time allowed observation. We understood plants not just as food, but as medicine. Pharmacology was born.",
                skills: "Herbalism • Surgery • Diagnosis",
            },
            {
                title: "The Astronomer",
                description:
                    "We needed to predict harvests. So we looked up and mapped the stars. We invented the calendar and mathematics.",
                skills: "Astronomy • Calendar • Geometry",
            },
        ],
        beforeValue: "100%",
        beforeLabel: "Hunters",
        beforeCaption: "Before wheat",
        afterValue: "10%",
        afterLabel: "Farmers",
        afterCaption: "After wheat",
        conclusion:
            "Surplus freed 90% of the population to dedicate themselves to innovation, art, and science. For the first time, humanity could specialize.",
        quote: "In a hunter tribe, everyone hunts. In a wheat city, one cultivates and nine can dream.",
    },
    positiveLaw: {
        chapter: "The Law",
        title: "Order out of Chaos",
        quote: "Wild life is free, but justice is arbitrary (rule of the strongest). Wheat forced us to invent Objective Justice.",
        conflictTitle: "Conflict Resolution",
        conflictText:
            "When two neighbors argue over a boundary, they no longer kill each other. They go to a neutral third party. Judges and written laws are born. Interpersonal violence drops drastically within city walls.",
        propertyTitle: "Property Rights",
        propertyText:
            "Knowing that what you sow is yours enabled long-term investment. Nobody builds a stone house if they think it will be taken tomorrow. Law brought the stability needed for progress.",
        beforeValue: "∞",
        beforeLabel: "Before",
        afterValue: "-90%",
        afterLabel: "After",
        reductionLabel: "Reduction of interpersonal violence",
    },
    positiveBeer: {
        formula: "C₂H₅OH",
        formulaName: "Ethanol",
        chapter: "The Celebration",
        title: "Liquid Joy",
        theoryLead: "There is a serious theory stating that",
        theoryQuote: "we did not domesticate wheat to make bread, but to make beer.",
        description:
            "Fermentation gave us a safe (bacteria-free) and calorie-dense drink. But more importantly: it gave us celebration, ritual, and social cohesion. Beer softened the friction of living together in large groups.",
    },
    positiveTrade: {
        chapter: "Trade",
        title: "The First Money",
        firstParagraph:
            "Before gold, there was grain. The original shekel was not a coin; it was a unit weight of barley.",
        secondParagraph:
            "Wheat surplus enabled long-distance trade. It connected isolated tribes. It carried obsidian from Anatolia to Jericho and shells from the Mediterranean to the desert.",
        conclusion:
            "Wheat wove the first global network of human cooperation. It not only fed bodies, but created the first trade routes connecting civilizations.",
        shekelValue: "1 shekel",
        shekelLabel: "≈ 180 grains",
        distanceValue: "3000 km",
        distanceLabel: "Trade routes",
        wheatLabel: "WHEAT",
        places: ["Anatolia", "Jericho", "Uruk", "Egypt", "Sumeria", "Levant", "Crete", "Cyprus"],
        goods: [
            { value: "Obsidian", label: "From Anatolia to Mesopotamia" },
            { value: "Lapis Lazuli", label: "From Afghanistan to Mediterranean" },
            { value: "Shells", label: "From Mediterranean to Desert" },
        ],
    },
    positiveWriting: {
        binary: "10101010101010101010101010101010 01010101010101010101010101010101 11001100110011001100110011001100 ...",
        symbol: "Aleph",
        symbolCaption: "The beginning of history",
        chapter: "Writing",
        title: "Eternal Memory",
        quote: "We did not invent writing to compose poetry. We invented it to count sacks of wheat.",
        firstParagraph:
            "But that accounting tool became something far greater. It allowed us to speak with the dead and leave messages for the unborn. Wheat forced us to create",
        historyWord: "History",
        secondParagraph:
            "Without grain surplus, our memory would be erased with every generation. With wheat, our experience accumulates. We are immortal on paper.",
    },
    positiveCity: {
        chapter: "The City",
        title: "The Refuge City",
        quote: "Wheat asked us to stay still. In exchange, it gave us walls.",
        cities: [
            { value: "Jericho", label: "8000 BC — The first walled city" },
            { value: "Çatalhöyük", label: "7500 BC — 10,000 inhabitants coexisting" },
            { value: "Uruk", label: "4000 BC — The first metropolis" },
        ],
        description:
            "For the first time, human beings were not at the mercy of storms or beasts. We created controlled, tempered, and safe spaces. 'Home' ceased to be a temporary concept and became a legacy.",
        centerLabel: "Center",
    },
    positiveSecurity: {
        chapter: "Security",
        title: "The End of Fear",
        firstParagraph:
            "Nomadic life was a daily gamble. If you didn't hunt, you didn't eat. Wheat brought something new:",
        emphasis: "the future.",
        secondParagraph:
            "For the first time, humanity could look to tomorrow with certainty. A full granary meant winter was no longer a death sentence.",
        quote: "We traded wild freedom for peace of mind.",
        metrics: [
            { value: "365", label: "Secure days" },
            { value: "0", label: "Famines" },
            { value: "100%", label: "Certainty" },
        ],
        capacityLabel: "Capacity",
        reserveLabel: "Strategic reserve",
        granaryLabel: "Granary",
    },
    tableOfContents: {
        navigationLabel: "Table of Contents",
        openLabel: "Open index",
        closeLabel: "Close index",
        title: "Table of Contents",
        sections: [
            { id: "positive-documentation", label: "References", theme: "emerald" },
            { id: "dilema-luz", label: "Choose your side", theme: "emerald" },
            { id: "positive-expansion", label: "IX. The Expansion", theme: "emerald" },
            { id: "positive-knowledge", label: "VIII. Science", theme: "emerald" },
            { id: "positive-specialization", label: "VII. Genius", theme: "emerald" },
            { id: "positive-law", label: "VI. The Law", theme: "emerald" },
            { id: "positive-beer", label: "V. Celebration", theme: "emerald" },
            { id: "positive-trade", label: "IV. Trade", theme: "emerald" },
            { id: "positive-writing", label: "III. Writing", theme: "emerald" },
            { id: "positive-city", label: "II. The City", theme: "emerald" },
            { id: "positive-security", label: "I. Security", theme: "emerald" },
            { id: "intro", label: "Start", theme: "neutral" },
            { id: "tiempo-profundo", label: "I. Deep Time", theme: "amber" },
            { id: "raquis", label: "II. The Rachis", theme: "amber" },
            { id: "trampa", label: "III. The Trap", theme: "amber" },
            { id: "rutina", label: "IV. The Routine", theme: "amber" },
            { id: "cuerpos-rotos", label: "V. Broken Bodies", theme: "amber" },
            { id: "calorias-cazador", label: "VI. Calories (Hunter)", theme: "amber" },
            { id: "calorias-agricultor", label: "VII. Calories (Farmer)", theme: "amber" },
            { id: "excedente", label: "VIII. The Surplus", theme: "amber" },
            { id: "contrato-social", label: "IX. Social Contract", theme: "amber" },
            { id: "demografia", label: "X. Demographics", theme: "amber" },
            { id: "jornada-laboral", label: "XI. The Workday", theme: "amber" },
            { id: "mapa-moderno", label: "XII. Modern Map", theme: "amber" },
            { id: "futuro", label: "XIII. The Future", theme: "amber" },
            { id: "epilogo", label: "Epilogue", theme: "neutral" },
            { id: "documentacion", label: "References", theme: "neutral" },
            { id: "dilema-sombra", label: "Choose your side", theme: "neutral" },
        ],
    },
};
