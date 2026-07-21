export interface ShareImageOptions {
    element: HTMLElement;
    title: string;
    text: string;
    url?: string;
    fileName?: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

interface ToastGlobal {
    show: (message: string, type: string) => void;
}

interface ElementStyles {
    background: string;
    opacity: string;
    transform: string;
    transition: string;
}

const COLOR_PROPERTIES = [
    "color",
    "background-color",
    "border-color",
    "box-shadow",
    "background",
    "background-image",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "outline-color",
    "text-decoration-color",
    "fill",
    "stroke",
] as const;

const toError = (value: unknown): Error =>
    value instanceof Error ? value : new Error(String(value));

const isAbortError = (value: unknown): boolean =>
    value instanceof DOMException
        ? value.name === "AbortError"
        : toError(value).name === "AbortError";

const getToast = (): ToastGlobal | null => {
    const globalWindow = window as unknown as { toast?: ToastGlobal };
    return globalWindow.toast ?? null;
};

const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const copyText = async (text: string): Promise<boolean> => {
    if (!navigator.clipboard?.writeText) return false;

    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
};

const shareText = async (title: string, text: string): Promise<boolean> => {
    if (navigator.share) {
        try {
            await navigator.share({ title, text });
            return true;
        } catch (error) {
            if (isAbortError(error)) return true;
        }
    }

    return copyText(text);
};

const containsUnsupportedColor = (value: string): boolean =>
    value.includes("oklab") || value.includes("oklch");

const getSafeColor = (property: string): string => {
    if (property === "color") return "#e7e5e4";
    if (property.includes("background")) return "rgba(0, 0, 0, 0)";
    return "#000000";
};

const sanitizeStyleTags = (clonedDocument: Document) => {
    clonedDocument.querySelectorAll("style").forEach((styleTag) => {
        if (!containsUnsupportedColor(styleTag.innerHTML)) return;
        styleTag.innerHTML = styleTag.innerHTML.replace(/(oklab|oklch)\([^)]+\)/g, "#000000");
    });
};

const sanitizeSvgColors = (element: SVGElement) => {
    for (const attribute of ["fill", "stroke"]) {
        const value = element.getAttribute(attribute);
        if (value && containsUnsupportedColor(value)) {
            element.setAttribute(attribute, "#3f1d1d");
        }
    }
};

const sanitizeElementColors = (element: Element) => {
    if (!(element instanceof HTMLElement || element instanceof SVGElement)) return;
    const view = element.ownerDocument.defaultView;
    if (!view) return;

    const computedStyle = view.getComputedStyle(element);
    for (const property of COLOR_PROPERTIES) {
        const value = computedStyle.getPropertyValue(property);
        if (containsUnsupportedColor(value)) {
            element.style.setProperty(property, getSafeColor(property));
        }
    }

    if (element instanceof SVGElement) sanitizeSvgColors(element);
};

const sanitizeClone = (clonedDocument: Document) => {
    sanitizeStyleTags(clonedDocument);
    clonedDocument.querySelectorAll("*").forEach(sanitizeElementColors);
};

const readElementStyles = (element: HTMLElement): ElementStyles => ({
    background: element.style.background,
    opacity: element.style.opacity,
    transform: element.style.transform,
    transition: element.style.transition,
});

const applyCaptureStyles = (element: HTMLElement) => {
    element.style.background = "radial-gradient(circle at center, #292524 0%, #0c0a09 100%)";
    element.style.opacity = "1";
    element.style.transform = "none";
    element.style.transition = "none";
};

const restoreElementStyles = (element: HTMLElement, styles: ElementStyles) => {
    element.style.background = styles.background;
    element.style.opacity = styles.opacity;
    element.style.transform = styles.transform;
    element.style.transition = styles.transition;
};

const captureElement = async (element: HTMLElement): Promise<Blob | null> => {
    const originalStyles = readElementStyles(element);
    applyCaptureStyles(element);

    try {
        const html2canvas = (await import("html2canvas")).default;
        const canvas = await html2canvas(element, {
            allowTaint: true,
            backgroundColor: null,
            ignoreElements: (candidate) => candidate.classList.contains("ignore-capture"),
            logging: false,
            onclone: sanitizeClone,
            scale: 2,
            useCORS: true,
        });
        return await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.9));
    } finally {
        restoreElementStyles(element, originalStyles);
    }
};

const isIos = (): boolean => /iPad|iPhone|iPod/.test(navigator.userAgent);

const shareFile = async (file: File, title: string, text: string): Promise<boolean> => {
    const files = [file];
    if (!navigator.share || !navigator.canShare?.({ files })) return false;

    await copyText(text);
    getToast()?.show("Texto copiado. Pégalo al compartir.", "success");
    const shareData: ShareData = { files };
    if (!isIos()) {
        shareData.text = text;
        shareData.title = title;
    }

    try {
        await navigator.share(shareData);
        return true;
    } catch (error) {
        return isAbortError(error);
    }
};

const shareImageBlob = async (
    blob: Blob,
    fileName: string,
    title: string,
    text: string
): Promise<boolean> => {
    const jpegName = fileName.replace(/\.webp$/i, ".jpg");
    const file = new File([blob], jpegName, { type: "image/jpeg" });
    if (await shareFile(file, title, text)) return true;

    await shareText(title, text);
    downloadBlob(blob, jpegName);
    return true;
};

const completeImageShare = async (
    blob: Blob | null,
    fileName: string,
    title: string,
    text: string
): Promise<boolean> => {
    if (!blob) return shareText(title, text);
    return shareImageBlob(blob, fileName, title, text);
};

const resolveImageOptions = (options: ShareImageOptions) => ({
    fileName: options.fileName ?? "share-image.webp",
    url: options.url ?? window.location.href,
});

const notifySuccess = (callback: (() => void) | undefined) => callback?.();

const notifyError = (callback: ((error: Error) => void) | undefined, error: unknown) =>
    callback?.(toError(error));

export const shareElementAsImage = async (options: ShareImageOptions) => {
    const { element, title, text, onSuccess, onError } = options;
    const { fileName, url } = resolveImageOptions(options);
    const fullText = `${title}\n\n${text}\n\n${url}`;

    try {
        const blob = await captureElement(element);
        const completed = await completeImageShare(blob, fileName, title, fullText);
        if (completed) notifySuccess(onSuccess);
    } catch (error) {
        notifyError(onError, error);
        if (await shareText(title, fullText)) notifySuccess(onSuccess);
    }
};
