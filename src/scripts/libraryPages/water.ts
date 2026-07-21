import { calculateWaterStats, getLifeStatsUpdate } from "../../utils/libraryLogic";

const countElement = document.getElementById("water-count");
const bottlesElement = document.getElementById("water-bottles");

document.addEventListener("update-life-stats", (event) => {
    const { stats } = getLifeStatsUpdate(event);
    if (!countElement || !stats) return;

    const { litersDrunk } = calculateWaterStats(stats.daysAlive);
    const bottles = litersDrunk / 0.5;
    countElement.innerText = litersDrunk.toLocaleString();

    if (bottlesElement) {
        const label = bottlesElement.innerText.split(" ").slice(1).join(" ");
        bottlesElement.innerText = `${Math.floor(bottles).toLocaleString()} ${label || "BOTELLAS"}`;
    }
});
