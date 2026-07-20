import { shareElementAsImage } from "./share";

interface ToastGlobal {
    show: (msg: string, type: string) => void;
}

function getToast(): ToastGlobal | null {
    const w = window as unknown as { toast?: ToastGlobal };
    return w.toast || null;
}

function showCopiedFeedback(element: HTMLElement) {
    const originalContent = element.innerHTML;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isSecure = window.isSecureContext;

    if (!isMobile || isSecure) {
        element.innerHTML =
            '<span style="font-size: 0.75em; font-weight: bold; color: #10b981;">¡Copiado!</span>';
        setTimeout(() => {
            element.innerHTML = originalContent;
        }, 2000);
    }
}

async function fallbackCopyTextToClipboard(text: string, element: HTMLElement) {
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
            showCopiedFeedback(element);
            return true;
        }
    } catch {}
    return false;
}

async function copyTextToClipboard(text: string, element: HTMLElement) {
    try {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const isSecure = window.isSecureContext;

        if (isMobile && !isSecure) {
            getToast()?.show("Compartir requiere HTTPS. Copiado al portapapeles.", "warning");
        }

        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            showCopiedFeedback(element);
            return true;
        }
        throw new Error("Clipboard API unavailable");
    } catch {
        return fallbackCopyTextToClipboard(text, element);
    }
}

async function tryShareText(shareTitle: string, fullText: string, element: HTMLElement) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: shareTitle,
                text: fullText,
            });
            return true;
        } catch (err) {
            if ((err as Error).name === "AbortError") {
                return true;
            }
        }
    }
    return copyTextToClipboard(fullText, element);
}

export async function handleGlobalShare(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const btn = target.closest("[data-share-btn]");
    if (!btn) return;

    const element = btn as HTMLElement;
    const shareText = element.dataset.shareText;
    const targetId = element.dataset.shareTargetId;
    const fileName = element.dataset.shareFilename || "share.webp";
    const shareTitle = element.dataset.shareTitle || "Compartir";

    if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            void shareElementAsImage({
                element: targetEl,
                title: shareTitle,
                text: shareText || "",
                fileName: fileName,
            });
            return;
        }
    }

    if (shareText) {
        const fullText = `${shareText}\n\n${window.location.href}`;
        void tryShareText(shareTitle, fullText, element);
    }
}

if (typeof window !== "undefined") {
    document.addEventListener("click", handleGlobalShare);
}
