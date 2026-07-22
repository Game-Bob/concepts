import { calculateLifeStats } from "../utils/libraryLogic";

let currentYear: number | null = null;
let currentMonth: number | null = null;

const book = document.getElementById("library-book");
const d0 = document.getElementById("death-dialogue-0");
const d1 = document.getElementById("death-dialogue-1");
const d2 = document.getElementById("death-dialogue-2");
const d3 = document.getElementById("death-dialogue-3");

if (d0) {
    d0.addEventListener("dialogue-complete", () => {
        setTimeout(() => {
            d0.classList.remove("active");
            setTimeout(() => {
                if (d1) {
                    d1.classList.add("active");
                    const container = d1.querySelector(".dd-container");
                    container?.dispatchEvent(new CustomEvent("start-typing"));
                }
            }, 2500);
        }, 3000);
    });
}

if (d1) {
    d1.addEventListener("dialogue-complete", () => {
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent("show-death-year-input"));
        }, 1000);
    });
}

document.addEventListener("year-selected", (e: Event) => {
    const customEvent = e as CustomEvent<{ year: number }>;
    currentYear = customEvent.detail.year;
    if (d1) d1.classList.remove("active");
    setTimeout(() => {
        if (d2) {
            d2.classList.add("active");
            const container = d2.querySelector(".dd-container");
            container?.dispatchEvent(new CustomEvent("start-typing"));
        }
    }, 2500);
});

if (d2) {
    d2.addEventListener("dialogue-complete", () => {
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent("show-death-month-input"));
        }, 1000);
    });
}

document.addEventListener("birthdate-selected", (e: Event) => {
    const customEvent = e as CustomEvent<{ month: number }>;
    currentMonth = customEvent.detail.month;
    localStorage.setItem(
        "life-birthdate",
        JSON.stringify({ year: currentYear, month: currentMonth })
    );
    if (d2) d2.classList.remove("active");
    setTimeout(() => {
        if (d3) {
            d3.classList.add("active");
            const container = d3.querySelector(".dd-container");
            container?.dispatchEvent(new CustomEvent("start-typing"));
        }
    }, 2500);
});

function handleIntroCompleted() {
    const wrapper = document.getElementById("intro-flow");
    if (wrapper) {
        wrapper.style.opacity = "0";
        setTimeout(() => {
            wrapper.style.display = "none";
            if (book) {
                book.style.display = "block";
                void book.offsetHeight;
                book.classList.add("visible");
            }
        }, 3000);
    }
}

if (d3) {
    d3.addEventListener("dialogue-complete", () => {
        setTimeout(() => {
            handleIntroCompleted();
            if (currentYear !== null && currentMonth !== null) {
                const birthdate = new Date(currentYear, currentMonth, 1);
                const stats = calculateLifeStats(birthdate);
                document.dispatchEvent(
                    new CustomEvent("update-life-stats", {
                        detail: { birthdate, stats },
                    })
                );
            }
            document.dispatchEvent(new CustomEvent("library-intro-completed"));
        }, 3000);
    });
}
