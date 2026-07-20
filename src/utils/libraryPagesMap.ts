import PageHeart from "../components/library/pages/PageHeart.astro";
import PageSleep from "../components/library/pages/PageSleep.astro";
import PageBreath from "../components/library/pages/PageBreath.astro";
import PageSteps from "../components/library/pages/PageSteps.astro";
import PageWords from "../components/library/pages/PageWords.astro";
import PageBlinks from "../components/library/pages/PageBlinks.astro";
import PageTears from "../components/library/pages/PageTears.astro";
import PageSkin from "../components/library/pages/PageSkin.astro";
import PageMoon from "../components/library/pages/PageMoon.astro";
import PageWater from "../components/library/pages/PageWater.astro";
import PageFood from "../components/library/pages/PageFood.astro";
import PageHair from "../components/library/pages/PageHair.astro";
import PageNails from "../components/library/pages/PageNails.astro";
import PageSun from "../components/library/pages/PageSun.astro";
import PageMind from "../components/library/pages/PageMind.astro";
import PageCats from "../components/library/pages/PageCats.astro";
import type { LibraryLocaleData } from "../concepts/library/locales";

type TextsExtractor = (t: LibraryLocaleData["texts"]) => unknown;

interface PageMapping {
    left: unknown;
    right: unknown;
    getTexts: TextsExtractor;
}

export const PAGES_MAP: PageMapping[] = [
    { left: PageHeart, right: PageHeart, getTexts: (t) => t.pageHeart },
    { left: PageSleep, right: PageSleep, getTexts: (t) => t.pageSleep },
    { left: PageBreath, right: PageBreath, getTexts: (t) => t.pageBreath },
    { left: PageSteps, right: PageSteps, getTexts: (t) => t.pageSteps },
    { left: PageWords, right: PageWords, getTexts: (t) => t.pageWords },
    { left: PageBlinks, right: PageBlinks, getTexts: (t) => t.pageBlinks },
    { left: PageTears, right: PageTears, getTexts: (t) => t.pageTears },
    { left: PageSkin, right: PageSkin, getTexts: (t) => t.pageSkin },
    { left: PageMoon, right: PageMoon, getTexts: (t) => t.pageMoon },
    { left: PageWater, right: PageWater, getTexts: (t) => t.pageWater },
    { left: PageFood, right: PageFood, getTexts: (t) => t.pageFood },
    { left: PageHair, right: PageHair, getTexts: (t) => t.pageHair },
    { left: PageNails, right: PageNails, getTexts: (t) => t.pageNails },
    { left: PageSun, right: PageSun, getTexts: (t) => t.pageSun },
    { left: PageMind, right: PageMind, getTexts: (t) => t.pageMind },
    { left: PageCats, right: PageCats, getTexts: (t) => t.pageCats },
];
