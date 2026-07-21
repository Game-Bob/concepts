export interface LibraryPageTexts {
    quote: string;
    sublabel: string;
    title: string;
}

export interface LibraryPageProps {
    side: "left" | "right";
    texts: LibraryPageTexts;
}

export interface LibraryStatTextProps {
    counterId: string;
    texts: LibraryPageTexts;
    titleClass: string;
}
