# Contratos de Concepts

## Mapa de archivos

- `src/concepts/registry.ts`: fuente de verdad de conceptos y locales.
- `src/concepts/<id>/locales.ts`: slugs y contenido de una obra.
- `src/concepts/<id>/runtime.ts`: comportamiento cliente aislado.
- `src/components/ConceptsIndex.astro`: composición del catálogo y despacho de cards.
- `src/components/ConceptDetail.astro`: shell compartido y despacho de experiencias.
- `src/components/cards/`: una card artística por concepto.
- `src/styles/cards/`: estilos aislados de cards.
- `src/styles/<name>-experience.css`: estilos aislados de experiencias.
- `src/routing/routes.ts`: URLs canónicas, paths y alternates.
- `src/i18n/languages.ts`: lista cerrada de idiomas.
- `src/i18n/sections.ts`: slugs traducidos de la sección.
- `src/i18n/translation-contract.ts`: igualdad estructural entre locales.
- `src/layouts/BaseLayout.astro`: metadata y temas globales.
- `@jjlmoya/identity`: navegación, idiomas, tema y footer.

## Idiomas obligatorios

Mantener exactamente:

`es`, `en`, `fr`, `de`, `it`, `pt`, `nl`, `sv`, `pl`, `id`, `tr`, `ru`, `ja`, `ko`, `zh`.

El español vive en `https://www.jjlmoya.es/<seccion>/<concepto>/`.

Los demás idiomas viven en `https://www.gamebob.dev/<idioma>/<seccion>/<concepto>/`.

No añadir el prefijo `/es/`.

## Slugs

Cada concepto exporta un mapa que satisface `Record<Language, string>`.

Reglas:

- solo ASCII minúsculo, números y guiones: `^[a-z0-9-]+$`;
- transliterar idiomas no latinos cuando se traduzca el slug;
- no añadir sufijos de idioma como `-es` o `-fr`;
- localizar el significado, no concatenar el título mecánicamente;
- evitar colisiones entre conceptos y entre slugs localizados;
- el slug de cada idioma debe diferir del inglés cuando exista traducción natural;
- `ja`, `ko` y `zh` pueden reutilizar el slug inglés como fallback deliberado;
- no introducir slugs directamente en páginas Astro o componentes.

Las páginas dinámicas ya consumen `CONCEPTS`; no crear un archivo de página por concepto o idioma.

## Locales

Usar un tipo específico por obra y un objeto completo:

```ts
export const EXAMPLE_LOCALES = {
    es: { ... },
    en: { ... },
} as const satisfies Record<Language, ExampleLocale>;
```

Completar los 15 idiomas antes del checkpoint final. Todas las claves deben existir, contener el mismo tipo y tener valores no vacíos.

Todo texto visible o accesible es traducible:

- títulos y descripciones;
- botones y enlaces;
- estados, errores y resultados;
- `aria-label`, ayudas y textos alternativos propios;
- datos que el runtime muestra después de cargar.

## Integridad tipográfica

Conservar la puntuación de la obra fuente y usar la puntuación natural de cada idioma. Rayas,
elipsis, comillas tipográficas, comillas angulares y espacios antes de dos puntos pueden ser
correctos según el contenido o el idioma y no deben normalizarse globalmente.

Prohibido introducir caracteres invisibles accidentales, caracteres de reemplazo o mojibake.
Usar caracteres normales del idioma, incluidos acentos, alfabetos nativos y sus signos propios.

## Enlaces

- Card del índice: `./<slug>/`.
- Regreso desde el detalle: `../`.
- Cambio de idioma en desarrollo: `getConceptPath`.
- Cambio de idioma en producción: `getConceptUrl`.
- Canonical y alternates: siempre las funciones de `routes.ts`.
- Navegación que sale hacia otra aplicación o dominio: absoluta.

Los componentes artísticos reciben `href` o `indexUrl`; no construyen rutas.

## Card artística

No existe una plantilla visual compartida. Sí existe un contrato funcional:

- enlace semántico único;
- título, descripción y número localizados;
- identidad visual propia;
- responsive y teclado;
- foco visible;
- temas claro y oscuro;
- `prefers-reduced-motion`;
- sin depender de hover;
- sin conocer routing global.

Ejemplos de dirección artística:

- Espera usa un reloj de arena que gira lentamente.
- Oda al aburrimiento debe parecer deliberadamente burocrática y aburrida, como un formulario.

No reutilizar la estética de otra card si contradice el concepto.

## Experiencia

El detalle debe ocupar el espacio útil entre header y footer cuando la obra lo requiera. No fijar alturas con números que ignoren el shell.

Separar runtime cuando exista estado cliente. Seleccionar elementos desde una raíz propia mediante atributos `data-*`; fallar con mensajes claros si falta una pieza estructural.

Evitar estado global, selectores de IDs genéricos y scripts inline grandes. Limpiar timers al terminar o abandonar estados.

## Temas y tipografía

- Soportar `.theme-light` y `.theme-dark` desde el primer estado.
- Usar tokens existentes o variables propias con valores para ambos temas.
- No implementar un selector de tema local.
- No declarar `font-family`, `font` ni `@font-face` fuera de la frontera global autorizada.
- No importar fuentes desde componentes o CSS de una obra.

## Identity

Consumir header, footer, selector de idioma y tema desde `@jjlmoya/identity`.

Las aplicaciones solo aportan idioma, marca, navegación contextual, clase y su propia versión cuando corresponda. No duplicar:

- copyright;
- términos y privacidad;
- redes e iconos sociales;
- licencia;
- gata;
- lógica de tema.

## Tests

Los contratos globales deben iterar el registro. Un concepto nuevo debe quedar cubierto al añadirse a `CONCEPTS`, sin editar una lista paralela en tests.

Tests específicos de una obra pueden verificar su comportamiento singular, por ejemplo:

- penalización al perder foco;
- persistencia de intentos;
- secuencia concreta de estados;
- semántica particular de su card.

No convertir preferencias visuales subjetivas en snapshots rígidos. El usuario hace el QA visual.
