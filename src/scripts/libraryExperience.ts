import { calculateLifeStats } from "../utils/libraryLogic";
import { shareElementAsImage } from "../utils/share";
import "./libraryDialogueTimeline";

let currentPage = 0;
const spreads = document.querySelectorAll(".lb-spread");
const totalPages = spreads.length;

const prevBtn = document.getElementById("prev-page") as HTMLButtonElement | null;
const nextBtn = document.getElementById("next-page") as HTMLButtonElement | null;
const shareBtn = document.getElementById("share-page");
const book = document.getElementById("life-book");
const warningModal = document.getElementById("tear-warning-modal");
const warningContent = document.getElementById("tear-warning-content");
const cancelTearBtn = document.getElementById("cancel-tear");
const confirmTearBtn = document.getElementById("confirm-tear");

const getTornPages = (): number[] =>
    JSON.parse(localStorage.getItem("life-book-torn-pages") || "[]");

const addTornPage = (pageIndex: number) => {
    const torn = getTornPages();
    if (!torn.includes(pageIndex)) {
        torn.push(pageIndex);
        localStorage.setItem("life-book-torn-pages", JSON.stringify(torn));
    }
};

const getActiveStatValue = (index: number) => {
    const ids: Record<number, string> = {
        1: "heart-counter",
        2: "sleep-hours",
        3: "breath-counter",
        4: "steps-count",
        5: "words-count",
        6: "blinks-count",
        7: "tears-count",
        8: "skin-count",
        9: "moon-count",
        10: "water-count",
        11: "food-count",
        12: "hair-count",
        13: "nails-count",
        14: "sun-count",
        15: "mind-count",
    };
    const id = ids[index];
    if (id) {
        const el = document.getElementById(id);
        return el ? el.textContent?.trim() || "" : "";
    }
    return "";
};

function handleShareBtnState(tornPages: number[]) {
    if (shareBtn) {
        if (tornPages.includes(currentPage)) {
            shareBtn.style.opacity = "0";
            shareBtn.style.pointerEvents = "none";
        } else if (currentPage > 0 && currentPage < totalPages - 1) {
            shareBtn.style.opacity = "1";
            shareBtn.style.pointerEvents = "auto";
        } else {
            shareBtn.style.opacity = "0";
            shareBtn.style.pointerEvents = "none";
        }
    }
}

function fetchTornMessage(index: number, dynamicMsgEl: HTMLElement) {
    const event = new CustomEvent("get-torn-message", {
        detail: {
            index,
            callback: (msg: string) => {
                dynamicMsgEl.textContent = msg;
            },
        },
    });
    document.dispatchEvent(event);
}

function updateTornPageContent(spread: Element, index: number) {
    const leftContent = spread.querySelector(".lb-page-left .lb-page-content");
    const leftTorn = spread.querySelector(".lb-page-left .lb-page-torn");
    const rightContent = spread.querySelector(".lb-page-right .lb-page-content");
    const rightTorn = spread.querySelector(".lb-page-right .lb-page-torn");
    leftContent?.classList.add("hidden");
    leftTorn?.classList.remove("hidden");
    rightContent?.classList.add("hidden");
    rightTorn?.classList.remove("hidden");

    const dynamicMsgEl = rightTorn?.querySelector(".lb-torn-dynamic-message") as HTMLElement | null;
    if (dynamicMsgEl && !dynamicMsgEl.textContent) {
        fetchTornMessage(index, dynamicMsgEl);
    }
}

function updateUntornPageContent(spread: Element) {
    const leftContent = spread.querySelector(".lb-page-left .lb-page-content");
    const leftTorn = spread.querySelector(".lb-page-left .lb-page-torn");
    const rightContent = spread.querySelector(".lb-page-right .lb-page-content");
    const rightTorn = spread.querySelector(".lb-page-right .lb-page-torn");
    leftContent?.classList.remove("hidden");
    leftTorn?.classList.add("hidden");
    rightContent?.classList.remove("hidden");
    rightTorn?.classList.add("hidden");
}

function updateSpreadTornState(spread: Element, index: number, tornPages: number[]) {
    if (tornPages.includes(index)) {
        updateTornPageContent(spread, index);
    } else {
        updateUntornPageContent(spread);
    }
}

const updateNavigation = () => {
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;

    const tornPages = getTornPages();
    spreads.forEach((spread) => {
        const index = parseInt(spread.getAttribute("data-index") || "0", 10);
        if (index === currentPage) {
            spread.classList.add("active");
            updateSpreadTornState(spread, index, tornPages);
        } else {
            spread.classList.remove("active");
        }
    });

    handleShareBtnState(tornPages);
};

document.addEventListener("library-intro-completed", () => {
    updateNavigation();
});

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updateNavigation();
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateNavigation();
        }
    });
}

if (shareBtn) {
    shareBtn.addEventListener("click", () => {
        if (warningModal && warningContent) {
            warningModal.classList.remove("lb-hidden");
            setTimeout(() => {
                warningModal.classList.remove("lb-modal-fade");
                warningContent.classList.remove("lb-scale-down");
                warningContent.classList.add("lb-scale-up");
            }, 10);
        }
    });
}

if (cancelTearBtn) {
    cancelTearBtn.addEventListener("click", () => {
        if (warningModal && warningContent) {
            warningModal.classList.add("lb-modal-fade");
            warningContent.classList.remove("lb-scale-up");
            warningContent.classList.add("lb-scale-down");
            setTimeout(() => {
                warningModal.classList.add("lb-hidden");
            }, 300);
        }
    });
}

async function performTearShare(activeSpread: HTMLElement, shareTitle: string, shareText: string) {
    const originalTransform = activeSpread.style.transform;
    const originalOpacity = activeSpread.style.opacity;

    activeSpread.style.transition = "transform 1s ease-in, opacity 1s ease-in";
    activeSpread.style.transform = "rotate(5deg) translateY(100px) scale(0.9)";
    activeSpread.style.opacity = "0";

    try {
        await shareElementAsImage({
            element: activeSpread,
            title: shareTitle,
            text: shareText,
            url: window.location.href,
            fileName: "pagina-sacrificada.jpg",
        });
    } catch {}

    setTimeout(() => {
        addTornPage(currentPage);
        updateNavigation();
        activeSpread.style.transition = "none";
        activeSpread.style.transform = originalTransform;
        activeSpread.style.opacity = originalOpacity;
    }, 1000);
}

if (confirmTearBtn) {
    confirmTearBtn.addEventListener("click", () => {
        if (warningModal) warningModal.classList.add("lb-hidden");

        const activeSpread = document.querySelector(
            `.lb-spread[data-index="${currentPage}"]`
        ) as HTMLElement | null;
        if (!activeSpread) return;

        const val = getActiveStatValue(currentPage);
        const event = new CustomEvent("get-torn-share-details", {
            detail: {
                index: currentPage,
                val,
                callback: (shareTitle: string, shareText: string) => {
                    void performTearShare(activeSpread, shareTitle, shareText);
                },
            },
        });
        document.dispatchEvent(event);
    });
}

const initFromStorage = () => {
    const storedData = localStorage.getItem("life-birthdate");
    if (storedData) {
        try {
            const { year, month } = JSON.parse(storedData);
            if (year && month !== undefined) {
                const introFlow = document.getElementById("intro-flow");
                if (introFlow) introFlow.style.display = "none";
                if (book) {
                    book.style.display = "block";
                    book.classList.add("visible");
                }
                const birthdate = new Date(year, month, 1);
                const stats = calculateLifeStats(birthdate);
                document.dispatchEvent(
                    new CustomEvent("update-life-stats", {
                        detail: { birthdate, stats },
                    })
                );
                updateNavigation();
            }
        } catch {}
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFromStorage);
} else {
    initFromStorage();
}
