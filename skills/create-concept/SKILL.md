---
name: create-concept
description: Crear un concepto artístico nuevo o migrar uno existente al repositorio @jjlmoya/concepts respetando su arquitectura Astro, sus 15 idiomas, slugs localizados, rutas canónicas, identidad compartida, card performativa, experiencia interactiva, temas, accesibilidad y contratos automáticos. Usar cuando se añada un concepto, se traslade uno desde jjlmoya, se complete una migración parcial o se revise que una implementación encaja en la filosofía artística de Concepts.
---

# Crear o migrar un concepto

## Preparación obligatoria

1. Trabajar desde la raíz de `concepts`.
2. Leer completamente [references/contracts.md](references/contracts.md).
3. Revisar `git status` y preservar cambios ajenos.
4. Inspeccionar el registro, el índice, el detalle y un concepto existente antes de editar.
5. Si se migra, leer la página, componentes, estilos, scripts y assets originales. No reconstruir la obra a partir de una captura.

No ejecutar una migración masiva. Completar un concepto de principio a fin.

## Definir la obra

Antes de programar, formular en una frase:

- qué idea explora;
- qué debe sentir la persona;
- qué gesto visual o interactivo expresa esa idea;
- qué hace que su card sea reconocible sin leer el título.

No tratar el concepto como una ficha, artículo, landing genérica o utilidad. La prioridad es artística. La card es el primer acto de la obra y la página de detalle es su desarrollo.

Si se migra, conservar la tesis y los gestos esenciales del original. Mejorar arquitectura, accesibilidad, temas y movimiento sin homogeneizar su personalidad.

## Crear el módulo del concepto

Crear `src/concepts/<id>/` con:

- `locales.ts`: slugs y todos los literales en los 15 idiomas;
- `runtime.ts`: solo si existe comportamiento cliente.

Usar un `id` interno estable, corto y en inglés. No usar el slug como identidad interna.

Definir un tipo de locale explícito. Incluir los textos de card y experiencia en el mismo contrato. No dejar literales visibles en componentes, runtime, atributos accesibles ni CSS generado.

Desarrollar primero el idioma fuente indicado por el usuario; por defecto, español. Antes del checkpoint final, completar los 15 idiomas con exactamente la misma estructura y sin valores vacíos.

## Registrar el concepto

Actualizar `src/concepts/registry.ts`:

1. Exportar desde el módulo del concepto una única definición `{ id, slugs, locales }`.
2. Importar esa definición en el registro.
3. Añadirla una sola vez a `CONCEPT_MODULES`, en el orden editorial deseado.

`ConceptId`, `CONCEPTS`, `getConcept` y `getConceptLocale` deben derivarse del mapa de módulos.
No ampliar uniones, overloads ni ramas condicionales al registrar conceptos nuevos.

El registro es la fuente de verdad para rutas estáticas, alternates y listados. No crear páginas manuales por idioma ni duplicar rutas.

## Crear una card performativa

Crear:

- `src/components/cards/<Name>Card.astro`;
- `src/styles/cards/<name>-card.css`.

La card debe:

- comunicar el concepto visualmente antes de leerlo;
- tener una composición propia, no una plantilla cosmética;
- usar un icono cuando sea el lenguaje más claro y animarlo con intención;
- mantener movimiento autónomo elegante, no dopamínico;
- evitar depender de hover para transmitir la idea;
- funcionar con teclado, tacto y movimiento reducido;
- usar `href` relativo recibido por props;
- recibir locale y número por props;
- no conocer dominios, idiomas ni rutas globales.

Integrarla en `ConceptsIndex.astro` mediante el `id`. No añadir una card genérica como sustituto de una dirección artística pendiente.

## Crear la experiencia

Crear:

- `src/components/<Name>Experience.astro` para estructura semántica;
- `src/styles/<name>-experience.css` para la obra visual;
- `src/concepts/<id>/runtime.ts` para estado e interacción, si hace falta.

Integrarla en `ConceptDetail.astro` mediante el `id` y pasarle solo locale y rutas relativas necesarias.

Mantener estas fronteras:

- Astro representa contenido y estructura inicial.
- CSS representa composición, temas y movimiento.
- Runtime representa estado e interacción.
- `identity` representa header, footer, selector de idioma y tema.

No copiar header, footer, redes, enlaces legales, licencia ni lógica de tema dentro del concepto.

## Movimiento y ceremonia

Diseñar animaciones que pertenezcan al significado de la obra. Preferir ritmos, pausas, secuencias y transiciones de estado frente a estímulos constantes.

Toda experiencia debe:

- tener estados iniciales coherentes sin JavaScript;
- respetar `prefers-reduced-motion`;
- evitar destellos, saltos de layout y animaciones que bloqueen controles;
- mantener legibles foco, contraste y mensajes en claro y oscuro;
- limpiar timers y evitar listeners duplicados;
- no depender de puntero o hover para funcionar.

## Rutas, slugs y enlaces

Aplicar el contrato de slugs de la referencia sin excepciones improvisadas.

- Usar rutas relativas dentro de la experiencia y las cards.
- Usar las funciones de `src/routing/routes.ts` para canonical, alternates y cambio de idioma.
- Mantener español en `jjlmoya.es` y los otros 14 idiomas en `gamebob.dev`.
- No traducir rutas mediante condicionales dispersos.
- No crear URLs absolutas para navegación interna de desarrollo.

## Migrar desde jjlmoya

1. Inventariar archivos y comportamiento de la obra original.
2. Separar contenido, presentación y runtime.
3. Trasladar solo los assets realmente usados.
4. Sustituir dependencias del layout antiguo por contratos de `concepts` e `identity`.
5. Preservar la intención artística y comprobar todos los estados, no solo la portada.
6. Mantener la obra original en su repo hasta que el usuario autorice retirarla.

No importar código en runtime desde `../jjlmoya`. La migración debe quedar autocontenida.

### Fidelidad obligatoria de una migración

En una migración, el contenido y la forma de la obra original son invariantes. La migración solo
autoriza estas transformaciones:

- localizar íntegramente el contenido a los 15 idiomas;
- añadir temas claro y oscuro sin sustituir la dirección visual original;
- adaptar layout, routing, identity, estado y fronteras de archivos a la arquitectura de Concepts.

No resumir, seleccionar, condensar, reinterpretar, rediseñar, renombrar capítulos ni sustituir
escenas por una versión inspirada. No eliminar textos, SVG, visuales, animaciones, interacciones,
estados ni transiciones presentes en la ruta original. No crear una card nueva si existe una card
original: trasladar su composición, icono, color, contenido y comportamiento.

Antes de adaptar, copiar la fuente utilizada por la página y verificar:

- mismo inventario de componentes y assets usados;
- mismo orden de renderizado;
- mismos textos en el idioma fuente;
- mismo markup artístico, salvo los cambios mínimos para inyectar locales y props;
- mismos estilos del tema original como uno de los dos temas;
- mismos scripts e interacciones, salvo encapsulado, accesibilidad y limpieza técnica que no alteren
  el resultado observable.

Si una mejora artística o editorial parece conveniente, no incluirla en la migración. Proponerla al
usuario por separado después de alcanzar paridad.

## Tests que deben crecer solos

Actualizar o crear tests basados en `CONCEPTS`, `LANGUAGE_CODES` y los contratos compartidos. No escribir un test que enumere a mano todos los conceptos actuales y quede obsoleto al añadir el siguiente.

Como mínimo, cubrir dinámicamente:

- locale presente para cada concepto e idioma;
- slugs válidos y sin colisiones;
- 15 alternates recíprocos por concepto;
- URL española e internacional correctas;
- card y experiencia registradas;
- ausencia de literales prohibidos;
- política de una sola `font-family` global;
- temas claro y oscuro;
- rutas generadas desde el registro.

Un test específico es válido para una conducta propia de la obra. No usarlo para repetir contratos globales.

## Checkpoint y entrega

No ejecutar build, linter, Astro check ni QA visual después de cada cambio. El usuario realiza el QA visual durante el desarrollo.

Cuando el usuario solicite un checkpoint u OKQA:

1. Ejecutar primero tests focalizados.
2. Ejecutar después los comandos de calidad solicitados.
3. Corregir errores objetivos antes de pedir revisión visual.
4. Informar qué rutas e idiomas conviene abrir y qué interacciones revisar.

No afirmar que una migración está completa si faltan idiomas, estados, temas, responsive, movimiento reducido o integración en el registro.
