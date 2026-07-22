import conceptsOpenGraph from "../assets/seo/open-graph/concepts.png";
import boredomOpenGraph from "../assets/seo/open-graph/boredom.png";
import inflationOpenGraph from "../assets/seo/open-graph/inflation.png";
import libraryOpenGraph from "../assets/seo/open-graph/library.png";
import measurementOpenGraph from "../assets/seo/open-graph/measurement.png";
import nuanceOpenGraph from "../assets/seo/open-graph/nuance.png";
import waitingOpenGraph from "../assets/seo/open-graph/waiting.png";
import wheatOpenGraph from "../assets/seo/open-graph/wheat.png";
import gamebobAppleTouchIcon from "../assets/seo/favicons/gamebob-apple-touch.webp";
import gamebobFavicon from "../assets/seo/favicons/gamebob.webp";
import jjlmoyaAppleTouchIcon from "../assets/seo/favicons/jjlmoya-apple-touch.webp";
import jjlmoyaFavicon from "../assets/seo/favicons/jjlmoya.webp";
import type { ConceptId } from "../concepts/registry";
import type { Brand } from "../identity/brands";

export const OPEN_GRAPH_IMAGES = {
    concepts: conceptsOpenGraph.src,
    boredom: boredomOpenGraph.src,
    inflation: inflationOpenGraph.src,
    library: libraryOpenGraph.src,
    measurement: measurementOpenGraph.src,
    nuance: nuanceOpenGraph.src,
    waiting: waitingOpenGraph.src,
    wheat: wheatOpenGraph.src,
} as const satisfies Record<"concepts" | ConceptId, string>;

export const BRAND_ICONS = {
    gamebob: {
        favicon: gamebobFavicon.src,
        appleTouchIcon: gamebobAppleTouchIcon.src,
    },
    jjlmoya: {
        favicon: jjlmoyaFavicon.src,
        appleTouchIcon: jjlmoyaAppleTouchIcon.src,
    },
} as const satisfies Record<Brand, { favicon: string; appleTouchIcon: string }>;
