document.addEventListener("DOMContentLoaded", () => {
    const loadingEl = document.querySelector("[data-toc-loading]");
    const listEl = document.querySelector("[data-toc-list]");
    if (loadingEl && listEl) {
        setTimeout(() => {
            loadingEl.setAttribute("hidden", "");
            listEl.removeAttribute("hidden");
        }, 2000);
    }
});
