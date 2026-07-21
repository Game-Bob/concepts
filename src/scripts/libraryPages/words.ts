import { calculateWordsStats, getLifeStatsUpdate } from "../../utils/libraryLogic";

const countElement = document.getElementById("words-count");
const textCountElement = document.getElementById("words-count-text");

document.addEventListener("update-life-stats", (event) => {
    const { stats } = getLifeStatsUpdate(event);
    if (!countElement || !stats) return;

    const { wordsSpoken } = calculateWordsStats(stats.minutesAlive);
    countElement.innerText = Math.floor(wordsSpoken).toLocaleString();
    if (textCountElement) {
        const label = textCountElement.innerText.split(" ").slice(1).join(" ");
        textCountElement.innerText = `${Math.floor(wordsSpoken).toLocaleString()} ${label}`;
    }
});
