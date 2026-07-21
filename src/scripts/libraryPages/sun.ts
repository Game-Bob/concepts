import { calculateSunStats, getLifeStatsUpdate } from "../../utils/libraryLogic";

const countElement = document.getElementById("sun-count");
const textCountElement = document.getElementById("sun-text-count");

document.addEventListener("update-life-stats", (event) => {
    const { stats } = getLifeStatsUpdate(event);
    if (!countElement || !stats) return;

    const { sunrises } = calculateSunStats(stats.daysAlive);
    countElement.innerText = Math.floor(sunrises).toLocaleString();
    if (textCountElement) {
        const label = textCountElement.innerText.split(" ").slice(1).join(" ");
        textCountElement.innerText = `${Math.floor(sunrises).toLocaleString()} ${label || "VECES"}`;
    }
});
