import { calculateMindStats, getLifeStatsUpdate } from "../../utils/libraryLogic";

const countElement = document.getElementById("mind-count");

document.addEventListener("update-life-stats", (event) => {
    const { stats } = getLifeStatsUpdate(event);
    if (!countElement || !stats) return;

    const { thoughts } = calculateMindStats(stats.daysAlive);
    countElement.innerText = Math.floor(thoughts).toLocaleString();
});
