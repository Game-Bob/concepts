import type { TranslationSet } from "../../i18n/translation-contract";

export const CONCEPTS_LOCALES = {
    es: {
        title: "Conceptos",
        description:
            "Algunas ideas se entienden leyendo. Otras necesitan existir. Estos conceptos nacen cuando una idea lleva tanto tiempo dando vueltas por mi cabeza que la única forma de compartirla es construirla.",
    },
    en: {
        title: "Concepts",
        description:
            "Some ideas are understood by reading. Others need to exist. These concepts are born when an idea has been spinning around in my head for so long that the only way to share it is to build it.",
    },
    fr: {
        title: "Concepts",
        description:
            "Certaines idées se comprennent en lisant. D'autres ont besoin d'exister. Ces concepts naissent lorsqu'une idée tourne dans ma tête depuis si longtemps que la seule façon de la partager est de la construire.",
    },
    de: {
        title: "Konzepte",
        description:
            "Einige Ideen versteht man beim Lesen. Andere müssen existieren. Diese Konzepte entstehen, wenn mir eine Idee so lange im Kopf herumspukt, dass die einzige Möglichkeit, sie zu teilen, darin besteht, sie zu bauen.",
    },
    it: {
        title: "Concetti",
        description:
            "Alcune idee si capiscono leggendo. Altre hanno bisogno di esistere. Questi concetti nascono quando un'idea mi frulla in testa da così tanto tempo che l'unico modo per condividerla è costruirla.",
    },
    pt: {
        title: "Conceitos",
        description:
            "Há ideias que se compreendem lendo. Outras precisam de existir. Estes conceitos nascem quando uma ideia anda a circular na minha cabeça há tanto tempo que a única forma de a partilhar é construindo-a.",
    },
    nl: {
        title: "Concepten",
        description:
            "Sommige ideeën begrijp je door te lezen. Andere moeten bestaan. Deze concepten ontstaan wanneer een idee al zo lang in mijn hoofd rondspookt dat de enige manier om het te delen is om het te bouwen.",
    },
    sv: {
        title: "Koncept",
        description:
            "Vissa idéer förstås genom att läsa. Andra behöver existera. Dessa koncept föds när en idé har snurrat i mitt huvud så länge att det enda sättet att dela den är att bygga den.",
    },
    pl: {
        title: "Koncepcje",
        description:
            "Niektóre idee rozumie się poprzez czytanie. Inne muszą zaistnieć. Te koncepcje rodzą się, gdy jakiś pomysł krąży mi po głowie tak długo, że jedynym sposobem na podzielenie się nim jest jego zbudowanie.",
    },
    id: {
        title: "Konsep",
        description:
            "Beberapa ide dipahami dengan membaca. Yang lain perlu ada. Konsep-konsep ini lahir ketika sebuah ide telah berputar-putar di kepala saya begitu lama sehingga satu-satunya cara untuk membagikannya adalah dengan membangunnya.",
    },
    tr: {
        title: "Kavramlar",
        description:
            "Bazı fikirler okuyarak anlaşılır. Diğerlerinin var olması gerekir. Bu kavramlar, bir fikir kafamda o kadar uzun süre dönüp durduğunda doğar ki onu paylaşmanın tek yolu onu inşa etmektir.",
    },
    ru: {
        title: "Концепции",
        description:
            "Некоторые идеи можно понять, читая. Другие должны существовать. Эти концепции рождаются, когда идея так долго крутится в моей голове, что единственный способ поделиться ею состоит в том, чтобы воплотить её в жизнь.",
    },
    ja: {
        title: "コンセプト",
        description:
            "読んで理解できるアイデアもあれば、存在する必要があるアイデアもあります。頭の中で長く巡っているアイデアを共有する唯一の方法は、それを形にすることです。これらのコンセプトは、そこから生まれます。",
    },
    ko: {
        title: "콘셉트",
        description:
            "어떤 생각은 읽는 것만으로 이해됩니다. 어떤 생각은 존재해야 합니다. 이러한 콘셉트는 어떤 생각이 제 머릿속을 오랫동안 맴도아서 그것을 공유하는 유일한 방법이 직접 만드는 것뿐일 때 탄생합니다.",
    },
    zh: {
        title: "概念",
        description:
            "有些想法可以通过阅读来理解。有些想法则需要存在。当一个想法在我的脑海中盘旋了很久，以至于分享它的唯一方式就是将其付诸实践时，这些概念就诞生了。",
    },
} as const satisfies TranslationSet;

export type ConceptsLocale = (typeof CONCEPTS_LOCALES)[keyof typeof CONCEPTS_LOCALES];
