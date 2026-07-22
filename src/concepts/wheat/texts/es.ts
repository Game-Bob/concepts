import type { WheatTexts } from "../types";

export const WHEAT_ES_TEXTS = {
    common: {
        conceptName: "trigo",
        shareIdea: "Compartir idea",
        close: "Cerrar",
        millionsSuffix: "millones",
    },
    header: {
        light: "La Luz",
        title: "La Historia del Trigo",
        details: "Detalles: Luces y Sombras",
        shadow: "La Sombra",
    },
    deepTime: {
        chapter: "El Tiempo Profundo",
        title: "200.000 Años de Silencio",
        firstParagraph:
            "Durante el 99% de nuestra historia, fuimos nómadas. El mundo no nos pertenecía; nosotros pertenecíamos al mundo.",
        secondParagraph:
            "Cazábamos, recolectábamos, y seguíamos adelante. La vida era peligrosa, sí, pero era ligera.",
        quote: "No teníamos dueños, ni muros, ni dioses enfadados.",
    },
    rachis: {
        chapter: "El Raquis",
        title: "La Estructura Invisible",
        lead: "Un accidente microscópico",
        explanationBeforeName:
            "La historia de la civilización descansa sobre un detalle biológico:",
        name: "el raquis",
        explanationAfterName:
            ". En el trigo salvaje, es quebradizo para dispersar la semilla. En el trigo doméstico, es duro; la semilla espera al hombre.",
        consequence:
            "Ese milímetro de biología creó la «necesidad del trabajo». El trigo ya no podía nacer solo. Nosotros ya no podíamos comer sin sembrar.",
        quote: "Se firmó un contrato de sangre: nosotros le damos la vida, él nos da la energía.",
    },
    trap: {
        chapter: "La Trampa",
        title: "El Regalo Envenenado",
        description:
            "Parecía un regalo: comida segura. Pero el trigo exigía un servicio constante. Limpiar el campo, traer agua, espantar plagas.",
        quote: "¿Domesticamos al trigo... o el trigo nos domesticó a nosotros?",
        figureCaption: "> «Este punto de unión sostiene todas las ciudades de la Tierra.»",
    },
    grinding: {
        chapter: "La Rutina",
        title: "El amanecer del dolor",
        firstParagraph:
            "El trigo exigía ser molido. No podíamos comerlo crudo. Así que inventamos la piedra de moler.",
        secondParagraph:
            "Y con ella, inventamos el dolor de espalda crónico, la artritis en las rodillas y las hernias. Durante horas, cada día, arrodillados, empujando una piedra contra otra.",
        conclusion: "El cuerpo humano, diseñado para trepar y correr, se rompió contra el suelo.",
    },
    skeleton: {
        imageAlt: "Comparación de esqueletos: cazador frente a agricultor",
        chapter: "El Coste Biológico",
        title: "Cuerpos rotos",
        description:
            "La adopción de la agricultura trajo una plaga de dolencias nuevas: hernias, artritis y deformaciones de la columna. Pero lo peor estaba en los huesos.",
        quote: "El cuerpo humano evolucionó durante 2 millones de años para trepar, correr y cazar. No para agacharse, cavar y cargar piedras.",
        figureCaption: "FIG. 2: PALEOPATOLOGÍA COMPARADA (Cohen y Armelagos, 1984)",
    },
    calorieHunter: {
        chapter: "La Trampa Energética",
        title: "Calorías frente a Libertad",
        introduction:
            "El cazador trabajaba menos y comía mejor. El agricultor trabajaba más y comía peor. ¿Por qué cambiamos?",
        figureTitle: "La Libertad del Cazador",
        workLabel: "Horas de trabajo al día",
        workValue: "4 horas",
        nutritionLabel: "Calidad nutricional",
        nutritionValue: "Alta (variada)",
        densityLabel: "Densidad poblacional",
        densityValue: "Baja (0,1/km²)",
    },
    calorieFarmer: {
        chapter: "La Trampa Energética II",
        title: "El Precio a Pagar",
        introduction: "El trigo permitía alimentar a más gente, aunque fuera gente más miserable.",
        figureTitle: "La Carga del Agricultor",
        workLabel: "Horas de trabajo al día",
        workValue: "Más de 10 horas",
        nutritionLabel: "Calidad nutricional",
        nutritionValue: "Baja (monocultivo)",
        densityLabel: "Densidad poblacional",
        densityValue: "Explosiva (50/km²)",
        conclusion:
            "La evolución no busca la felicidad del individuo, solo busca más copias de ADN. El trigo fue la herramienta perfecta para multiplicar humanos, no para hacerlos felices.",
    },
    surplus: {
        figureLabel: "FIG. 4: ACUMULACIÓN",
        chapter: "El Excedente",
        title: "El nacimiento de la pobreza",
        storageLead: "El trigo tiene una propiedad que la carne no tiene:",
        storageEmphasis: "se puede almacenar",
        storageConclusion: ". Un grano seco dura años. Y aquí nace la tragedia humana.",
        povertyQuote: "El trigo inventó la pobreza.",
        inequality:
            "Porque por primera vez, alguien podía tener «todo» y otro podía no tener «nada».",
        power: "Si puedes acumular comida, puedes acumular poder. Aparecen los silos. Aparecen los muros para proteger los silos. Aparecen los soldados para vigilar los muros. Aparecen los reyes para contar el grano.",
        doubtTitle: "La Duda",
        doubtText:
            "Antes del trigo, todos éramos iguales ante el hambre. El grano rompió el equilibrio social para siempre. ¿Construimos las ciudades para protegernos a nosotros, o para proteger al trigo de los demás?",
    },
    socialContract: {
        chapter: "El Contrato Social",
        title: "Leyes de Grano",
        firstParagraph:
            "Cuando tienes un granero, necesitas protegerlo. Cuando tienes vecinos con hambre, necesitas leyes.",
        secondParagraph:
            "El Código de Hammurabi, una de las primeras leyes escritas, no habla de libertad. Habla de deudas, de robos de grano, de canales de riego.",
        quote: "La justicia nació para administrar la cosecha.",
        lawQuote:
            "«Si un hombre tiene una deuda de grano y no tiene dinero para pagarla, entregará a su hijo o hija como esclavo.»",
        lawAttribution: "— Código de Hammurabi, 1750 a. C.",
        tabletTitle: "TABLILLA ADMINISTRATIVA",
        tabletPlace: "Uruk, 3100 a. C.",
    },
    population: {
        chapter: "Demografía",
        title: "La Explosión",
        description: "Durante 200.000 años fuimos pocos. Luego llegó el trigo.",
        chartLabel: "Población humana (millones)",
        chartDates: [
            "200.000 a. C.",
            "100.000 a. C.",
            "10.000 a. C.",
            "0",
            "1000 d. C.",
            "1800 d. C.",
            "2025",
        ],
        paleolithic: { value: "~5 millones", label: "Población paleolítica" },
        romanEmpire: { value: "~200 millones", label: "Imperio romano" },
        present: { value: "8.200 millones", label: "Población en 2025" },
    },
    workHours: {
        chapter: "El Coste del Progreso",
        title: "La Jornada Laboral",
        description:
            "Contrario a la creencia popular, la vida «primitiva» no era una lucha constante.",
        quote: "La promesa de la agricultura era la seguridad, pero el precio fue el tiempo libre.",
        hunterHours: "~3-5 horas",
        hunterMeasure: "Subsistencia",
        hunterTitle: "Cazador-recolector",
        hunterDescription: "Tiempo libre abundante. Trabajo intermitente.",
        farmerHours: "~9-10 horas",
        farmerMeasure: "De sol a sol",
        farmerTitle: "Agricultor neolítico",
        farmerDescription: "Trabajo constante. Preparación del suelo, siembra, cosecha y molienda.",
        sourceNote:
            "Datos basados en estudios de Marshall Sahlins («La sociedad opulenta primitiva») y registros antropológicos de sociedades !Kung.",
    },
    modernMap: {
        chapter: "La Larga Duración",
        title: "El mapa hoy",
        firstParagraph:
            "El tiempo pasa. Los imperios caen. Las religiones cambian. Pero el trigo permanece.",
        secondParagraph:
            "Mira el mapa hoy. No veas fronteras políticas, son inventos recientes. Mira las «estructuras»: las inmensas llanuras de monocultivo que alimentan a 8.000 millones de almas. Hemos terraformado el planeta para convertirlo en una inmensa granja.",
        conclusion:
            "El trigo ha ganado la partida evolutiva. Ocupa más tierra que cualquier bosque natural.",
    },
    future: {
        chapter: "El Futuro",
        title: "El Trigo Infinito",
        geneEditingTitle: "Edición Genética",
        geneEditingText:
            "Ya no esperamos mutaciones accidentales. Ahora reescribimos el código del trigo para que sobreviva a la sequía, a la sal y al calor. El trigo del futuro no será natural.",
        verticalFarmsTitle: "Granjas Verticales",
        verticalFarmsText:
            "Liberar la tierra. Cultivar hacia arriba en torres de cristal en el centro de las ciudades. El fin del agricultor, el inicio del ingeniero agrónomo.",
        conclusion:
            "«Empezamos domesticando una hierba salvaje. Terminamos domesticando el planeta entero para que le sirviera.»",
    },
    epilogue: {
        chapter: "Epílogo",
        text: "«Sostienes un trozo de pan. Es el resultado de 100 siglos de selección, dolor, ingeniería y fe. Es la batería de la humanidad. Pero la duda persiste, silenciosa como la historia misma: hemos conquistado el hambre... ¿pero qué perdimos en el camino al dejar de ser libres?»",
    },
    documentation: {
        title: "Documentación y Referencias",
        references: [
            {
                category: "Fuente primaria",
                authors: "Harari, Yuval Noah.",
                year: "(2011).",
                title: "Sapiens: De animales a dioses.",
                publisher: "Debate.",
                description:
                    "Capítulo «El mayor fraude de la historia». Análisis sobre cómo el trigo domesticó al hombre y no al revés, imponiendo una carga de trabajo y enfermedad a cambio de una explosión demográfica.",
            },
            {
                category: "Antropología",
                authors: "Scott, James C.",
                year: "(2017).",
                title: "Against the Grain: A Deep History of the Earliest States.",
                publisher: "Yale University Press.",
                description:
                    "Estudio sobre la formación de los primeros estados agrarios, el control del excedente de granos y la coacción social necesaria para mantener la agricultura intensiva.",
            },
            {
                category: "Paleopatología",
                authors: "Cohen, M. N., y Armelagos, G. J.",
                year: "(1984).",
                title: "Paleopathology at the Origins of Agriculture.",
                publisher: "Academic Press.",
                description:
                    "Compendio de estudios esqueléticos que demuestran la reducción de estatura (aprox. 15 cm), el aumento de caries, la hipoplasia del esmalte y las lesiones por estrés repetitivo en poblaciones de transición al Neolítico en el Levante.",
            },
            {
                category: "Economía",
                authors: "Sahlins, Marshall.",
                year: "(1972).",
                title: "Stone Age Economics.",
                publisher: "Aldine de Gruyter.",
                description:
                    "Investigación sobre las horas de trabajo en sociedades de cazadores-recolectores (estimadas en 3-5 horas diarias) frente a la jornada laboral intensiva de las sociedades agrarias.",
            },
            {
                category: "Botánica",
                authors: "Zohary, D., y Hopf, M.",
                year: "(2000).",
                title: "Domestication of Plants in the Old World.",
                publisher: "Oxford University Press.",
                description:
                    "Detalles técnicos sobre la mutación del raquis en el trigo escanda y el trigo almidonero, y su impacto en la recolección humana.",
            },
        ],
        projectLabel: "jjlmoya / CONCEPTOS / TRIGO",
        updatedAt: "Última actualización: noviembre de 2025",
        status: "ESTADO: FINALIZADO",
        identifier: "ID: CPT-003-WHEAT",
    },
    positiveDocumentation: {
        title: "Referencias: La Luz",
        references: [
            {
                category: "Civilización",
                authors: "Bronowski, Jacob.",
                year: "(1973).",
                title: "El Ascenso del Hombre.",
                publisher: "BBC Books.",
                description:
                    "Análisis sobre cómo la agricultura sedentaria permitió el desarrollo de la arquitectura, las matemáticas y la estructura social compleja.",
            },
            {
                category: "Cerveza",
                authors: "Katz, S. H., y Voigt, M. M.",
                year: "(1986).",
                title: "Bread and Beer: The Early Use of Cereals in the Human Diet.",
                publisher: "Expedition.",
                description:
                    "La hipótesis de que la motivación principal para la domesticación de cereales fue la producción de alcohol para rituales sociales.",
            },
            {
                category: "Economía",
                authors: "Graeber, David.",
                year: "(2011).",
                title: "En Deuda: Una historia alternativa de la economía.",
                publisher: "Ariel.",
                description:
                    "Sobre el origen del dinero como crédito basado en granos en los templos de Sumeria.",
            },
        ],
    },
    choice: {
        heading: "Elige tu bando",
        shadowTitle: "Team Sombra",
        shadowDescription: "«La agricultura fue una trampa. Prefiero la libertad.»",
        shadowAction: "Unirse a la Sombra",
        shadowShareText:
            "He visto la trampa. El trigo nos domesticó. Elijo la libertad de la sombra. #HistoriaDelTrigo #TeamSombra",
        lightTitle: "Team Luz",
        lightDescription: "«La civilización merece la pena. Prefiero el progreso.»",
        lightAction: "Unirse a la Luz",
        lightShareText:
            "El coste fue alto, pero la civilización merece la pena. Elijo la luz del progreso. #HistoriaDelTrigo #TeamLuz",
    },
    positiveExpansion: {
        chapter: "La Expansión",
        title: "La Especie Imparable",
        description:
            "Gracias a la densidad calórica del trigo, pudimos habitar lugares donde la caza era escasa. Conquistamos desiertos, montañas y tundras.",
        dates: ["10.000 a. C.", "8.000 a. C.", "5.000 a. C.", "3.000 a. C."],
        populations: ["1 M", "5 M", "50 M"],
        chartLabel: "Crecimiento poblacional",
        metrics: [
            {
                value: "7 continentes",
                label: "Habitados",
                description:
                    "El trigo permitió asentamientos permanentes en todos los climas habitables del planeta.",
            },
            {
                value: "×50",
                label: "Crecimiento",
                description:
                    "La población humana se multiplicó por 50 en los primeros 7.000 años de agricultura.",
            },
            {
                value: "∞",
                label: "Potencial",
                description:
                    "Sin límites geográficos, la humanidad se convirtió en una especie verdaderamente global.",
            },
        ],
    },
    positiveKnowledge: {
        chapter: "La Ciencia",
        title: "La Ciencia del Tiempo",
        firstParagraph:
            "El cazador vive en el presente eterno. El agricultor necesita predecir el futuro.",
        secondParagraph:
            "Para saber cuándo sembrar, tuvimos que entender los ciclos del sol y la luna. Inventamos la astronomía, las matemáticas y la geometría para medir los campos. El trigo fue el padre de la ciencia abstracta.",
    },
    positiveSpecialization: {
        chapter: "El Genio",
        title: "El Nacimiento del Genio",
        roles: [
            {
                title: "El Artesano",
                description:
                    "Liberado de la búsqueda de comida, las manos pudieron perfeccionar la arcilla, el metal y la tela. Nació el concepto de «maestro».",
                skills: "Cerámica • Metalurgia • Textiles",
            },
            {
                title: "El Sanador",
                description:
                    "El tiempo libre permitió la observación. Entendimos las plantas no solo como comida, sino como medicina. Nació la farmacología.",
                skills: "Herbolaria • Cirugía • Diagnóstico",
            },
            {
                title: "El Astrónomo",
                description:
                    "Necesitábamos predecir las cosechas. Así que miramos arriba y mapeamos las estrellas. Inventamos el calendario y las matemáticas.",
                skills: "Astronomía • Calendario • Geometría",
            },
        ],
        beforeValue: "100%",
        beforeLabel: "Cazadores",
        beforeCaption: "Antes del trigo",
        afterValue: "10%",
        afterLabel: "Agricultores",
        afterCaption: "Después del trigo",
        conclusion:
            "El excedente liberó al 90% de la población para dedicarse a la innovación, el arte y la ciencia. Por primera vez, la humanidad pudo especializarse.",
        quote: "En una tribu de cazadores, todos cazan. En una ciudad de trigo, uno cultiva y nueve pueden soñar.",
    },
    positiveLaw: {
        chapter: "La Ley",
        title: "El Orden del Caos",
        quote: "La vida salvaje es libre, pero la justicia es arbitraria (la ley del más fuerte). El trigo nos obligó a inventar la Justicia Objetiva.",
        conflictTitle: "Resolución de Conflictos",
        conflictText:
            "Cuando dos vecinos discuten por un límite de tierra, ya no se matan. Van a un tercero neutral. Nacen los jueces y las leyes escritas. La violencia disminuye drásticamente dentro de los muros de la ciudad.",
        propertyTitle: "Derechos de Propiedad",
        propertyText:
            "Saber que lo que siembras es tuyo permitió la inversión a largo plazo. Nadie construye una casa de piedra si cree que se la quitarán mañana. La ley trajo la estabilidad necesaria para el progreso.",
        beforeValue: "∞",
        beforeLabel: "Antes",
        afterValue: "-90%",
        afterLabel: "Después",
        reductionLabel: "Reducción de violencia interpersonal",
    },
    positiveBeer: {
        formula: "C₂H₅OH",
        formulaName: "Etanol",
        chapter: "La Fiesta",
        title: "La Alegría Líquida",
        theoryLead: "Hay una teoría seria que dice que",
        theoryQuote: "no domesticamos el trigo para hacer pan, sino para hacer cerveza.",
        description:
            "La fermentación nos dio una bebida segura (libre de bacterias) y rica en calorías. Pero más importante: nos dio la fiesta, el ritual y la cohesión social. La cerveza suavizó las fricciones de vivir juntos en grandes grupos.",
    },
    positiveTrade: {
        chapter: "El Comercio",
        title: "El Primer Dinero",
        firstParagraph:
            "Antes del oro, fue el grano. El siclo (shekel) original no era una moneda, era una medida de peso de cebada.",
        secondParagraph:
            "El excedente de trigo permitió el comercio a larga distancia. Conectó tribus aisladas. Llevó obsidiana de Anatolia a Jericó y conchas del Mediterráneo al desierto.",
        conclusion:
            "El trigo tejió la primera red global de cooperación humana. No solo alimentó cuerpos, sino que creó las primeras rutas comerciales que unirían civilizaciones.",
        shekelValue: "1 siclo",
        shekelLabel: "≈ 180 granos",
        distanceValue: "3000 km",
        distanceLabel: "Rutas comerciales",
        wheatLabel: "TRIGO",
        places: ["Anatolia", "Jericó", "Uruk", "Egipto", "Sumeria", "Levante", "Creta", "Chipre"],
        goods: [
            { value: "Obsidiana", label: "De Anatolia a Mesopotamia" },
            { value: "Lapislázuli", label: "De Afganistán al Mediterráneo" },
            { value: "Conchas", label: "Del Mediterráneo al desierto" },
        ],
    },
    positiveWriting: {
        binary: "10101010101010101010101010101010 01010101010101010101010101010101 11001100110011001100110011001100 ...",
        symbol: "Aleph",
        symbolCaption: "El inicio de la historia",
        chapter: "La Escritura",
        title: "La Memoria Eterna",
        quote: "No inventamos la escritura para escribir poesía. La inventamos para contar sacos de trigo.",
        firstParagraph:
            "Pero esa herramienta contable se convirtió en algo más grande. Nos permitió hablar con los muertos y dejar mensajes a los no nacidos. El trigo nos obligó a crear la",
        historyWord: "Historia",
        secondParagraph:
            "Sin el excedente de grano, nuestra memoria se borraría con cada generación. Con el trigo, nuestra experiencia se acumula. Somos inmortales en papel.",
    },
    positiveCity: {
        chapter: "La Ciudad",
        title: "La Ciudad Refugio",
        quote: "El trigo nos pidió quedarnos quietos. A cambio, nos dio muros.",
        cities: [
            { value: "Jericó", label: "8000 a. C. — La primera ciudad amurallada" },
            { value: "Çatalhöyük", label: "7500 a. C. — 10.000 habitantes conviviendo" },
            { value: "Uruk", label: "4000 a. C. — La primera metrópolis" },
        ],
        description:
            "Por primera vez, el ser humano no estaba a merced de la tormenta o la bestia. Creamos espacios controlados, templados y seguros. La «casa» dejó de ser un concepto temporal para convertirse en un legado.",
        centerLabel: "Centro",
    },
    positiveSecurity: {
        chapter: "La Seguridad",
        title: "El Fin del Miedo",
        firstParagraph:
            "La vida nómada era una apuesta diaria. Si no cazabas, no comías. El trigo trajo algo nuevo:",
        emphasis: "el futuro.",
        secondParagraph:
            "Por primera vez, la humanidad podía mirar al mañana con certeza. El granero lleno significaba que el invierno ya no era una sentencia de muerte.",
        quote: "Cambiamos la libertad salvaje por la paz mental.",
        metrics: [
            { value: "365", label: "Días seguros" },
            { value: "0", label: "Hambrunas" },
            { value: "100%", label: "Certeza" },
        ],
        capacityLabel: "Capacidad",
        reserveLabel: "Reserva estratégica",
        granaryLabel: "Granero",
    },
    tableOfContents: {
        navigationLabel: "Índice del contenido",
        openLabel: "Abrir índice",
        closeLabel: "Cerrar índice",
        title: "Índice de Contenidos",
        sections: [
            { id: "positive-documentation", label: "Referencias", theme: "emerald" },
            { id: "dilema-luz", label: "Elige tu Bando", theme: "emerald" },
            { id: "positive-expansion", label: "IX. La Expansión", theme: "emerald" },
            { id: "positive-knowledge", label: "VIII. La Ciencia", theme: "emerald" },
            { id: "positive-specialization", label: "VII. El Genio", theme: "emerald" },
            { id: "positive-law", label: "VI. La Ley", theme: "emerald" },
            { id: "positive-beer", label: "V. La Fiesta", theme: "emerald" },
            { id: "positive-trade", label: "IV. El Comercio", theme: "emerald" },
            { id: "positive-writing", label: "III. La Escritura", theme: "emerald" },
            { id: "positive-city", label: "II. La Ciudad", theme: "emerald" },
            { id: "positive-security", label: "I. La Seguridad", theme: "emerald" },
            { id: "intro", label: "Inicio", theme: "neutral" },
            { id: "tiempo-profundo", label: "I. Tiempo Profundo", theme: "amber" },
            { id: "raquis", label: "II. El Raquis", theme: "amber" },
            { id: "trampa", label: "III. La Trampa", theme: "amber" },
            { id: "rutina", label: "IV. La Rutina", theme: "amber" },
            { id: "cuerpos-rotos", label: "V. Cuerpos Rotos", theme: "amber" },
            { id: "calorias-cazador", label: "VI. Calorías (Cazador)", theme: "amber" },
            { id: "calorias-agricultor", label: "VII. Calorías (Agricultor)", theme: "amber" },
            { id: "excedente", label: "VIII. El Excedente", theme: "amber" },
            { id: "contrato-social", label: "IX. Contrato Social", theme: "amber" },
            { id: "demografia", label: "X. Demografía", theme: "amber" },
            { id: "jornada-laboral", label: "XI. Jornada Laboral", theme: "amber" },
            { id: "mapa-moderno", label: "XII. Mapa Moderno", theme: "amber" },
            { id: "futuro", label: "XIII. El Futuro", theme: "amber" },
            { id: "epilogo", label: "Epílogo", theme: "neutral" },
            { id: "documentacion", label: "Referencias", theme: "neutral" },
            { id: "dilema-sombra", label: "Elige tu Bando", theme: "neutral" },
        ],
    },
} as const satisfies WheatTexts;
