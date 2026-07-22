import fs from "node:fs";
import path from "node:path";

const directory = path.resolve("src/components/wheat");

const sections = {
    "TrigoDeepTime.astro": {
        type: "deepTime",
        common: true,
        replacements: {
            "El Tiempo Profundo": "{texts.chapter}",
            "200.000 Años de Silencio": "{texts.title}",
            "Durante el 99% de nuestra historia, fuimos nómadas. El mundo no nos pertenecía; nosotros pertenecíamos al mundo.":
                "{texts.firstParagraph}",
            "Cazábamos, recolectábamos, y seguíamos adelante. La vida era peligrosa, sí, pero era ligera.":
                "{texts.secondParagraph}",
            'quote="No teníamos dueños, ni muros, ni dioses enfadados."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
        },
    },
    "TrigoTrap.astro": {
        type: "trap",
        common: true,
        replacements: {
            "La Trampa": "{texts.chapter}",
            "El Regalo Envenenado": "{texts.title}",
            "Parecía un regalo: comida segura. Pero el trigo exigía un servicio constante. Limpiar el campo, traer agua, espantar plagas.":
                "{texts.description}",
            'quote="¿Domesticamos al trigo... o el trigo nos domesticó a nosotros?"':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            '&gt; "Este punto de unión sostiene todas las ciudades de la Tierra."':
                "{texts.figureCaption}",
        },
    },
    "TrigoSkeletonCompare.astro": {
        type: "skeleton",
        common: true,
        replacements: {
            'alt="Comparación de esqueletos: Cazador vs Agricultor"': "alt={texts.imageAlt}",
            "El Coste Biológico": "{texts.chapter}",
            "Cuerpos rotos": "{texts.title}",
            "La adopción de la agricultura trajo una plaga de dolencias nuevas: hernias, artritis, y deformaciones de la columna. Pero lo peor estaba en los huesos.":
                "{texts.description}",
            'quote="El cuerpo humano evolucionó durante 2 millones de años para trepar, correr y cazar. No para agacharse, cavar y cargar piedras."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            "FIG. 2: PALEOPATOLOGÍA COMPARADA (Cohen & Armelagos, 1984)": "{texts.figureCaption}",
            "/images/concepts/trigo/skeleton-compare.webp": "/images/wheat/skeleton-compare.webp",
        },
    },
    "TrigoCalorieHunter.astro": {
        type: "calorieHunter",
        replacements: {
            "La Trampa Energética": "{texts.chapter}",
            "Calorías vs. Libertad": "{texts.title}",
            "El cazador trabajaba menos y comía mejor. El agricultor trabajaba más y comía peor. ¿Por qué cambiamos?":
                "{texts.introduction}",
            "La Libertad del Cazador": "{texts.figureTitle}",
            "Horas de trabajo/día": "{texts.workLabel}",
            "4 horas": "{texts.workValue}",
            "Calidad Nutricional": "{texts.nutritionLabel}",
            "Alta (Variada)": "{texts.nutritionValue}",
            "Densidad Poblacional": "{texts.densityLabel}",
            "Baja (0.1/km²)": "{texts.densityValue}",
        },
    },
    "TrigoCalorieFarmer.astro": {
        type: "calorieFarmer",
        replacements: {
            "La Trampa Energética II": "{texts.chapter}",
            "El Precio a Pagar": "{texts.title}",
            "El trigo permitía alimentar a más gente, aunque fuera gente más miserable.":
                "{texts.introduction}",
            "La Carga del Agricultor": "{texts.figureTitle}",
            "Horas de trabajo/día": "{texts.workLabel}",
            "10+ horas": "{texts.workValue}",
            "Calidad Nutricional": "{texts.nutritionLabel}",
            "Baja (Monocultivo)": "{texts.nutritionValue}",
            "Densidad Poblacional": "{texts.densityLabel}",
            "Explosiva (50/km²)": "{texts.densityValue}",
            '"La evolución no busca la felicidad del individuo, solo busca más copias de ADN. El trigo fue la herramienta perfecta para multiplicar humanos, no para hacerlos felices."':
                "{texts.conclusion}",
        },
    },
    "TrigoPositiveKnowledge.astro": {
        type: "positiveKnowledge",
        common: true,
        replacements: {
            "La Ciencia": "{texts.chapter}",
            "La Ciencia del Tiempo": "{texts.title}",
            "El cazador vive en el presente eterno. El agricultor necesita predecir el futuro.":
                "{texts.firstParagraph}",
            'quote="Para saber cuándo sembrar, tuvimos que entender los ciclos del sol y la luna. Inventamos la astronomía, las matemáticas y la geometría para medir los campos. El trigo fue el padre de la ciencia abstracta."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
        },
    },
    "TrigoPositiveBeer.astro": {
        type: "positiveBeer",
        common: true,
        replacements: {
            "C₂H₅OH": "{texts.formula}",
            Etanol: "{texts.formulaName}",
            "La Fiesta": "{texts.chapter}",
            "La Alegría Líquida": "{texts.title}",
            "Hay una teoría seria que dice que": "{texts.theoryLead}",
            'quote="no domesticamos el trigo para hacer pan, sino para hacer cerveza."':
                "quote={texts.theoryQuote} shareLabel={common.shareIdea}",
            "La fermentación nos dio una bebida segura (libre de bacterias) y rica en calorías. Pero más importante: nos dio la fiesta, el ritual y la cohesión social. La cerveza suavizó las fricciones de vivir juntos en grandes grupos.":
                "{texts.description}",
        },
    },
    "TrigoPositiveWriting.astro": {
        type: "positiveWriting",
        common: true,
        replacements: {
            "10101010101010101010101010101010 01010101010101010101010101010101 11001100110011001100110011001100 ...":
                "{texts.binary}",
            Aleph: "{texts.symbol}",
            "El inicio de la historia": "{texts.symbolCaption}",
            "La Escritura": "{texts.chapter}",
            "La Memoria Eterna": "{texts.title}",
            'quote="No inventamos la escritura para escribir poesía. La inventamos para contar sacos de trigo."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            "Pero esa herramienta contable se convirtió en algo más grande. Nos permitió hablar con los muertos y dejar mensajes a los no nacidos. El trigo nos obligó a crear la":
                "{texts.firstParagraph}",
            Historia: "{texts.historyWord}",
            "Sin el excedente de grano, nuestra memoria se borraría con cada generación. Con el trigo, nuestra experiencia se acumula. Somos inmortales en papel.":
                "{texts.secondParagraph}",
        },
    },
    "TrigoRachis.astro": {
        type: "rachis",
        common: true,
        replacements: {
            "El Raquis": "{texts.chapter}",
            "La Estructura Invisible": "{texts.title}",
            "Un accidente microscópico": "{texts.lead}",
            "La historia de la civilización descansa sobre un detalle biológico:":
                "{texts.explanationBeforeName}",
            ". En el trigo salvaje, es quebradizo para dispersar la semilla. En el trigo doméstico, es duro; la semilla espera al hombre.":
                "{texts.explanationAfterName}",
            'Ese milímetro de biología creó la "necesidad del trabajo". El trigo ya no podía nacer solo. Nosotros ya no podíamos comer sin sembrar.':
                "{texts.consequence}",
            'quote="Se firmó un contrato de sangre: nosotros le damos la vida, él nos da la energía."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
        },
    },
    "TrigoSurplus.astro": {
        type: "surplus",
        common: true,
        replacements: {
            "FIG. 4: ACUMULACIÓN": "{texts.figureLabel}",
            "El Excedente": "{texts.chapter}",
            "El nacimiento de la pobreza": "{texts.title}",
            "El trigo tiene una property que la carne no tiene:": "{texts.storageLead}",
            "Se puede almacenar": "{texts.storageEmphasis}",
            ". Un grano seco dura años. Y aquí nace la tragedia humana.":
                "{texts.storageConclusion}",
            '<ShareableQuote quote="El trigo inventó la pobreza." />':
                "<ShareableQuote quote={texts.povertyQuote} shareLabel={common.shareIdea} />",
            "Porque por primera vez, alguien podía tener 'todo' y otro podía no tener 'nada'.":
                "{texts.inequality}",
            "Si puedes acumular comida, puedes acumular poder. Aparecen los silos. Aparecen los muros para proteger los silos. Aparecen los soldados para vigilar los muros. Aparecen los reyes para contar el grano.":
                "{texts.power}",
            "La Duda": "{texts.doubtTitle}",
            "Antes del trigo, todos éramos iguales ante el hambre. El grano rompió el equilibrio social para siempre. ¿Construimos las ciudades para protegernos a nosotros, o para proteger al trigo de los demás?":
                "{texts.doubtText}",
        },
    },
    "TrigoSocialContract.astro": {
        type: "socialContract",
        common: true,
        replacements: {
            "El Contrato Social": "{texts.chapter}",
            "Leyes de Grano": "{texts.title}",
            "Cuando tienes un granero, necesitas protegerlo. Cuando tienes vecinos con hambre, necesitas leyes.":
                "{texts.firstParagraph}",
            "El Código de Hammurabi, una de las primeras leyes escritas, no habla de libertad. Habla de deudas, de robos de grano, de canales de riego.":
                "{texts.secondParagraph}",
            'quote="La justicia nació para administrar la cosecha."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            '"Si un hombre tiene una deuda de grano y no tiene dinero para pagarla, entregará a su hijo o hija como esclavo."':
                "{texts.lawQuote}",
            "- Código de Hammurabi, 1750 a.C.": "{texts.lawAttribution}",
            "TABLILLA ADMINISTRATIVA": "{texts.tabletTitle}",
            "Uruk, 3100 a.C.": "{texts.tabletPlace}",
        },
    },
    "TrigoWorkHoursChart.astro": {
        type: "workHours",
        common: true,
        replacements: {
            "El Coste del Progreso": "{texts.chapter}",
            "La Jornada Laboral": "{texts.title}",
            'Contrario a la creencia popular, la vida "primitiva" no era una lucha constante.':
                "{texts.description}",
            'quote="La promesa de la agricultura era la seguridad, pero el precio fue el tiempo libre."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            "~3-5 horas": "{texts.hunterHours}",
            Subsistencia: "{texts.hunterMeasure}",
            "Cazador-Recolector": "{texts.hunterTitle}",
            "Tiempo libre abundante. Trabajo intermitente.": "{texts.hunterDescription}",
            "~9-10 horas": "{texts.farmerHours}",
            "De sol a sol": "{texts.farmerMeasure}",
            "Agricultor Neolítico": "{texts.farmerTitle}",
            "Trabajo constante. Preparación de suelo, siembra, cosecha, molienda.":
                "{texts.farmerDescription}",
            'Datos basados en estudios de Marshall Sahlins ("La sociedad opulenta primitiva") y registros antropológicos de sociedades !Kung.':
                "{texts.sourceNote}",
        },
    },
    "TrigoPopulationGraph.astro": {
        type: "population",
        common: true,
        replacements: {
            Demografía: "{texts.chapter}",
            "La Explosión": "{texts.title}",
            "Durante 200.000 años fuimos pocos. Luego llegó el trigo.": "{texts.description}",
            "~5 Millones": "{texts.paleolithic.value}",
            "Población Paleolítica": "{texts.paleolithic.label}",
            "~200 Millones": "{texts.romanEmpire.value}",
            "Imperio Romano": "{texts.romanEmpire.label}",
            "8.200 Millones": "{texts.present.value}",
            "Población 2025": "{texts.present.label}",
        },
    },
    "TrigoPositiveCity.astro": {
        type: "positiveCity",
        common: true,
        replacements: {
            "La Ciudad": "{texts.chapter}",
            "La Ciudad Refugio": "{texts.title}",
            'quote="El trigo nos pidió quedarnos quietos. A cambio, nos dio muros."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            Jericó: "{texts.cities[0].value}",
            "8000 a.C. - La primera ciudad amurallada": "{texts.cities[0].label}",
            Çatalhöyük: "{texts.cities[1].value}",
            "7500 a.C. - 10,000 habitantes conviviendo": "{texts.cities[1].label}",
            Uruk: "{texts.cities[2].value}",
            "4000 a.C. - La primera metrópolis": "{texts.cities[2].label}",
            'Por primera vez, el ser humano no estaba a merced de la tormenta o la bestia. Creamos espacios controlados, templados y seguros. La "casa" dejó de ser un concepto temporal para convertirse en un legado.':
                "{texts.description}",
            Centro: "{texts.centerLabel}",
        },
    },
    "TrigoPositiveLaw.astro": {
        type: "positiveLaw",
        common: true,
        replacements: {
            "La Ley": "{texts.chapter}",
            "El Orden del Caos": "{texts.title}",
            'quote="La vida salvaje es libre, pero la justicia es arbitraria (la ley del más fuerte). El trigo nos obligó a inventar la Justicia Objetiva."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            "Resolución de Conflictos": "{texts.conflictTitle}",
            "Cuando dos vecinos discuten por un límite de tierra, ya no se matan. Van a un tercero neutral. Nacen los jueces y las leyes escritas. La violencia disminuye drásticamente dentro de los muros de la ciudad.":
                "{texts.conflictText}",
            "Derechos de Propiedad": "{texts.propertyTitle}",
            "Saber que lo que siembras es tuyo permitió la inversión a largo plazo. Nadie construye una casa de piedra si cree que se la quitarán mañana. La ley trajo la estabilidad necesaria para el progreso.":
                "{texts.propertyText}",
            "∞": "{texts.beforeValue}",
            Antes: "{texts.beforeLabel}",
            "-90%": "{texts.afterValue}",
            Después: "{texts.afterLabel}",
            "Reducción de Violencia Interpersonal": "{texts.reductionLabel}",
        },
    },
    "TrigoPositiveSecurity.astro": {
        type: "positiveSecurity",
        common: true,
        replacements: {
            "La Seguridad": "{texts.chapter}",
            "El Fin del Miedo": "{texts.title}",
            "La vida nómada era una apuesta diaria. Si no cazabas, no comías. El trigo trajo algo nuevo:":
                "{texts.firstParagraph}",
            "El Futuro": "{texts.emphasis}",
            "Por primera vez, la humanidad podía mirar al mañana con certeza. El granero lleno significaba que el invierno ya no era una sentencia de muerte.":
                "{texts.secondParagraph}",
            'quote="Cambiamos la libertad salvaje por la paz mental."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
            365: "{texts.metrics[0].value}",
            "Días seguros": "{texts.metrics[0].label}",
            Hambrunas: "{texts.metrics[1].label}",
            Certeza: "{texts.metrics[2].label}",
            Capacidad: "{texts.capacityLabel}",
            "Reserva Estratégica": "{texts.reserveLabel}",
            Granero: "{texts.granaryLabel}",
        },
    },
    "TrigoPositiveExpansion.astro": {
        type: "positiveExpansion",
        replacements: {
            "La Expansión": "{texts.chapter}",
            "La Especie Imparable": "{texts.title}",
            "Gracias a la densidad calórica del trigo, pudimos habitar lugares donde la caza era escasa. Conquistamos desiertos, montañas y tundras.":
                "{texts.description}",
            "10,000 a.C.": "{texts.dates[0]}",
            "8,000 a.C.": "{texts.dates[1]}",
            "5,000 a.C.": "{texts.dates[2]}",
            "3,000 a.C.": "{texts.dates[3]}",
            "1M": "{texts.populations[0]}",
            "5M": "{texts.populations[1]}",
            "50M": "{texts.populations[2]}",
            "Crecimiento Poblacional": "{texts.chartLabel}",
            "7 Continentes": "{texts.metrics[0].value}",
            Habitados: "{texts.metrics[0].label}",
            "El trigo permitió asentamientos permanentes en todos los climas habitables del planeta.":
                "{texts.metrics[0].description}",
            "×50": "{texts.metrics[1].value}",
            Crecimiento: "{texts.metrics[1].label}",
            "La población humana se multiplicó por 50 en los primeros 7,000 años de agricultura.":
                "{texts.metrics[1].description}",
            "∞": "{texts.metrics[2].value}",
            Potencial: "{texts.metrics[2].label}",
            "Sin límites geográficos, la humanidad se convirtió en una especie verdaderamente global.":
                "{texts.metrics[2].description}",
        },
    },
    "TrigoPositiveSpecialization.astro": {
        type: "positiveSpecialization",
        common: true,
        replacements: {
            "El Genio": "{texts.chapter}",
            "El Nacimiento del Genio": "{texts.title}",
            "El Artesano": "{texts.roles[0].title}",
            'Liberado de la búsqueda de comida, las manos pudieron perfeccionar la arcilla, el metal y la tela. Nació el concepto de "maestro".':
                "{texts.roles[0].description}",
            "Cerámica • Metalurgia • Textiles": "{texts.roles[0].skills}",
            "El Sanador": "{texts.roles[1].title}",
            "El tiempo libre permitió la observación. Entendimos las plantas no solo como comida, sino como medicina. Nació la farmacología.":
                "{texts.roles[1].description}",
            "Herbolaria • Cirugía • Diagnóstico": "{texts.roles[1].skills}",
            "El Astrónomo": "{texts.roles[2].title}",
            "Necesitábamos predecir las cosechas. Así que miramos arriba y mapeamos las estrellas. Inventamos el calendario y las matemáticas.":
                "{texts.roles[2].description}",
            "Astronomía • Calendario • Geometría": "{texts.roles[2].skills}",
            Cazadores: "{texts.beforeLabel}",
            "Antes del trigo": "{texts.beforeCaption}",
            Agricultores: "{texts.afterLabel}",
            "Después del trigo": "{texts.afterCaption}",
            "El excedente liberó al 90% de la población para dedicarse a la innovación, el arte y la ciencia. Por primera vez, la humanidad pudo especializarse.":
                "{texts.conclusion}",
            'quote="En una tribu de cazadores, todos cazan. En una ciudad de trigo, uno cultiva y nueve pueden soñar."':
                "quote={texts.quote} shareLabel={common.shareIdea}",
        },
    },
    "TrigoPositiveTrade.astro": {
        type: "positiveTrade",
        replacements: {
            "El Comercio": "{texts.chapter}",
            "El Primer Dinero": "{texts.title}",
            "Antes del oro, fue el grano. El siclo (shekel) original no era una moneda, era una medida de peso de cebada.":
                "{texts.firstParagraph}",
            "El excedente de trigo permitió el comercio a larga distancia. Conectó tribus aisladas. Llevó obsidiana de Anatolia a Jericó y conchas del Mediterráneo al desierto.":
                "{texts.secondParagraph}",
            "El trigo tejió la primera red global de cooperación humana. No solo alimentó cuerpos, sino que creó las primeras rutas comerciales que unirían civilizaciones.":
                "{texts.conclusion}",
            "1 Siclo": "{texts.shekelValue}",
            "≈ 180 granos": "{texts.shekelLabel}",
            "3000km": "{texts.distanceValue}",
            "Rutas comerciales": "{texts.distanceLabel}",
            TRIGO: "{texts.wheatLabel}",
            Anatolia: "{texts.places[0]}",
            Jericó: "{texts.places[1]}",
            Uruk: "{texts.places[2]}",
            Egipto: "{texts.places[3]}",
            Sumeria: "{texts.places[4]}",
            Levante: "{texts.places[5]}",
            Creta: "{texts.places[6]}",
            Chipre: "{texts.places[7]}",
            Obsidiana: "{texts.goods[0].value}",
            "De Anatolia a Mesopotamia": "{texts.goods[0].label}",
            Lapislázuli: "{texts.goods[1].value}",
            "De Afganistán al Mediterráneo": "{texts.goods[1].label}",
            Conchas: "{texts.goods[2].value}",
            "Del Mediterráneo al desierto": "{texts.goods[2].label}",
        },
    },
    "TrigoHeader.astro": {
        type: "header",
        replacements: {
            "La Luz": "{texts.light}",
            "La Historia del Trigo": "{texts.title}",
            "Detalles: Luces y Sombras": "{texts.details}",
            "La Sombra": "{texts.shadow}",
        },
    },
    "TrigoGrindingRoutine.astro": {
        type: "grinding",
        replacements: {
            "La Rutina": "{texts.chapter}",
            "El amanecer del dolor": "{texts.title}",
            "El trigo exigía ser molido. No podíamos comerlo crudo. Así que inventamos la piedra de moler.":
                "{texts.firstParagraph}",
            "Y con ella, inventamos el dolor de espalda crónico, la artritis en las rodillas y las hernias. Durante horas, cada día, arrodillados, empujando una piedra contra otra.":
                "{texts.secondParagraph}",
            "El cuerpo humano, diseñado para trepar y correr, se rompió contra el suelo.":
                "{texts.conclusion}",
        },
    },
    "TrigoModernMap.astro": {
        type: "modernMap",
        replacements: {
            "La Larga Duración": "{texts.chapter}",
            "El mapa hoy": "{texts.title}",
            "El tiempo pasa. Los imperios caen. Las religiones cambian. Pero el trigo permanece.":
                "{texts.firstParagraph}",
            'Mira el mapa hoy. No veas fronteras políticas, son inventos recientes. Mira las "estructuras": las inmensas llanuras de monocultivo que alimentan a 8.000 millones de almas. Hemos terraformado el planeta para convertirlo en una inmensa granja.':
                "{texts.secondParagraph}",
            "El trigo ha ganado la partida evolutiva. Ocupa más tierra que cualquier bosque natural.":
                "{texts.conclusion}",
        },
    },
    "TrigoEpilogue.astro": {
        type: "epilogue",
        replacements: {
            Epílogo: "{texts.chapter}",
            '"Sostienes un trozo de pan. Es el resultado de 100 siglos de selección, dolor, ingeniería y fe. Es la batería de la humanidad. Pero la duda persiste, silenciosa como la historia misma: Hemos conquistado el hambre... ¿pero qué perdimos en el camino al dejar de ser libres?"':
                "{texts.text}",
        },
    },
    "TrigoFuture.astro": {
        type: "future",
        replacements: {
            "El Futuro": "{texts.chapter}",
            "El Trigo Infinito": "{texts.title}",
            "Edición Genética": "{texts.geneEditingTitle}",
            "Ya no esperamos mutaciones accidentales. Ahora reescribimos el código del trigo para que sobreviva a la sequía, a la sal y al calor. El trigo del futuro no será natural.":
                "{texts.geneEditingText}",
            "Granjas Verticales": "{texts.verticalFarmsTitle}",
            "Liberar la tierra. Cultivar hacia arriba en torres de cristal en el centro de las ciudades. El fin del agricultor, el inicio del ingeniero agrónomo.":
                "{texts.verticalFarmsText}",
            '"Empezamos domesticando una hierba salvaje. Terminamos domesticando el planeta entero para que le sirviera."':
                "{texts.conclusion}",
        },
    },
};

const addFrontmatter = (source, type, common) => {
    const marker = source.indexOf("---", 3);
    const commonProperty = common ? '\n    common: WheatTexts["common"];' : "";
    const destructure = common ? "texts, common" : "texts";
    const addition = `\nimport type { WheatTexts } from "../../concepts/wheat/types";\n\ninterface Props {\n    texts: WheatTexts[${JSON.stringify(type)}];${commonProperty}\n}\n\nconst { ${destructure} } = Astro.props;\n`;
    return `${source.slice(0, marker)}${addition}${source.slice(marker)}`;
};

for (const [name, config] of Object.entries(sections)) {
    const file = path.join(directory, name);
    let source = fs.readFileSync(file, "utf8");
    if (!source.includes("interface Props"))
        source = addFrontmatter(source, config.type, config.common);
    source = source.replace(
        'import ShareableQuote from "../../ShareableQuote.astro";',
        'import ShareableQuote from "./WheatShareableQuote.astro";'
    );
    for (const [original, replacement] of Object.entries(config.replacements)) {
        source = source.replaceAll(original, replacement);
        if (!original.includes('="') && !original.includes("<")) {
            const pattern = original
                .split(/\s+/)
                .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                .join("\\s+");
            source = source.replace(new RegExp(pattern, "g"), replacement);
        }
    }
    if (name === "TrigoPositiveKnowledge.astro") {
        source = source.replace("{texts.chapter} del Tiempo", "{texts.title}");
        source = source.replace(
            /(<p class="wheat-text-base wheat-pos-knowledge-desc-secondary wheat-leading-relaxed">)[\s\S]*?(<\/p>)/,
            "$1{texts.secondParagraph}$2"
        );
    }
    if (name === "TrigoPositiveCity.astro") {
        source = source.replace("{texts.chapter} Refugio", "{texts.title}");
    }
    fs.writeFileSync(file, source);
}

const rewriteDocumentation = (name, type, positive) => {
    const file = path.join(directory, name);
    const source = fs.readFileSync(file, "utf8");
    const styles = source.slice(source.indexOf("<style>"));
    const rowClass = positive ? "wheat-pos-doc-item" : "wheat-doc-row";
    const labelClass = positive
        ? "wheat-pos-doc-label wheat-uppercase wheat-tracking-widest"
        : "wheat-doc-row-title";
    const contentClass = positive ? "wheat-pos-doc-content" : "wheat-doc-row-content";
    const dividerClass = positive ? "wheat-pos-doc-divider" : "wheat-doc-divider";
    const header = positive
        ? `<section id="positive-documentation" class="wheat-relative wheat-font-mono wheat-pos-doc wheat-py-24"><div class="wheat-container wheat-container--narrow wheat-px-6 wheat-w-full"><h3 class="wheat-text-xs wheat-uppercase wheat-tracking-widest wheat-pos-doc-header wheat-mb-12 wheat-pb-4">{texts.title}</h3><div class="wheat-pos-doc-list">`
        : `<section id="documentacion" class="wheat-relative wheat-font-mono wheat-py-12 wheat-py-24@md wheat-doc-section"><div class="wheat-container wheat-container--narrow"><h3 class="trigo-chapter wheat-doc-chapter wheat-text-xs wheat-uppercase wheat-tracking-widest wheat-mb-12 wheat-pb-4">{texts.title}</h3><div class="wheat-space-y-8 wheat-text-xs wheat-text-sm@md wheat-leading-relaxed wheat-doc-list">`;
    const footer = positive
        ? `</div></div></section>`
        : `</div><div class="wheat-doc-footer wheat-mt-12 wheat-pt-12 wheat-flex wheat-justify-between wheat-items-end wheat-font-sans"><div class="wheat-doc-footer-left"><p>{texts.projectLabel}</p><p>{texts.updatedAt}</p></div><div class="wheat-doc-footer-right wheat-text-right"><p>{texts.status}</p><p>{texts.identifier}</p></div></div></div></section>`;
    const template = `${header}{texts.references.map((reference, index) => (<><div class="${rowClass}"><div class="${labelClass}">{reference.category}</div><div class="${contentClass}"><p class:list={[!${positive} && "wheat-mb-2"]}><strong class:list={[!${positive} && "wheat-doc-author"]}>{reference.authors}</strong> {reference.year} <em>{reference.title}</em> {reference.publisher}</p><p class:list={[!${positive} && "wheat-opacity-60"]}>{reference.description}</p></div></div>{index < texts.references.length - 1 && <div class="${dividerClass}"></div>}</>))}${footer}`;
    const frontmatter = `---\nimport type { WheatTexts } from "../../concepts/wheat/types";\ninterface Props { texts: WheatTexts[${JSON.stringify(type)}] }\nconst { texts } = Astro.props;\n---\n\n`;
    fs.writeFileSync(file, `${frontmatter}${template}\n\n${styles}`);
};

rewriteDocumentation("TrigoDocumentation.astro", "documentation", false);
rewriteDocumentation("TrigoPositiveDocumentation.astro", "positiveDocumentation", true);
