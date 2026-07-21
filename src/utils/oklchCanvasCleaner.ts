function cleanStyleTags(clonedDoc: Document) {
    const styleTags = clonedDoc.querySelectorAll("style");
    styleTags.forEach((styleTag) => {
        if (styleTag.innerHTML.includes("oklab") || styleTag.innerHTML.includes("oklch")) {
            styleTag.innerHTML = styleTag.innerHTML.replace(/(oklab|oklch)\([^)]+\)/g, "#000000");
        }
    });
}

function getSafeColorValue(prop: string): string {
    if (prop === "color") {
        return "#ffffff";
    }
    if (prop.includes("background")) {
        return "rgba(0,0,0,0)";
    }
    return "#000000";
}

function cleanElementOklch(element: HTMLElement, props: string[]) {
    const style = window.getComputedStyle(element);
    props.forEach((prop) => {
        const val = style[prop as keyof CSSStyleDeclaration] as string;
        if (val && (val.includes("oklab") || val.includes("oklch"))) {
            if (prop === "color") {
                element.style.color = "#e7e5e4";
            } else if (prop === "backgroundColor") {
                element.style.backgroundColor = "#0c0a09";
            } else {
                const styleObj = element.style as unknown as Record<string, string>;
                styleObj[prop] = getSafeColorValue(prop);
            }
        }
    });
}

function cleanSvgOklch(element: SVGElement, svgAttrs: string[]) {
    svgAttrs.forEach((attr) => {
        const val = element.getAttribute(attr);
        if (val && (val.includes("oklab") || val.includes("oklch"))) {
            element.setAttribute(attr, "#3f1d1d");
        }
    });
}

export function cleanOklchColors(clonedDoc: Document) {
    cleanStyleTags(clonedDoc);
    const props = [
        "color",
        "backgroundColor",
        "borderColor",
        "boxShadow",
        "background",
        "backgroundImage",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
        "outlineColor",
        "textDecorationColor",
        "fill",
        "stroke",
    ];
    const svgAttrs = ["fill", "stroke"];
    const allElements = clonedDoc.querySelectorAll("*");

    allElements.forEach((el) => {
        const element = el as HTMLElement;
        cleanElementOklch(element, props);
        if (element instanceof SVGElement) {
            cleanSvgOklch(element, svgAttrs);
        }
    });
}
