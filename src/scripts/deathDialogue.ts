function revealUnitSequentially(
    units: NodeListOf<Element>,
    i: number,
    speed: number,
    container: Element
) {
    if (i < units.length) {
        units[i].classList.remove("dd-hidden");
        setTimeout(() => revealUnitSequentially(units, i + 1, speed, container), speed);
    } else {
        const event = new CustomEvent("dialogue-complete", {
            bubbles: true,
        });
        container.dispatchEvent(event);
    }
}

function startTyping(units: NodeListOf<Element>, speed: number, delay: number, container: Element) {
    units.forEach((c) => c.classList.add("dd-hidden"));
    setTimeout(() => {
        revealUnitSequentially(units, 0, speed, container);
    }, delay);
}

function initSingleContainer(container: Element) {
    if (container.hasAttribute("data-initialized")) return;
    container.setAttribute("data-initialized", "true");

    const units = container.querySelectorAll(".dd-unit");
    const speed = parseInt(container.getAttribute("data-speed") || "50", 10);
    const delay = parseInt(container.getAttribute("data-delay") || "0", 10);
    const autoStart = container.getAttribute("data-auto-start") === "true";

    if (autoStart) {
        startTyping(units, speed, delay, container);
    }

    container.addEventListener("start-typing", () => {
        startTyping(units, speed, delay, container);
    });
}

function initDeathDialogue() {
    const containers = document.querySelectorAll(".dd-container");
    containers.forEach(initSingleContainer);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDeathDialogue);
} else {
    initDeathDialogue();
}
