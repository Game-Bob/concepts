# Concepts

Aplicación multilingüe para las obras de Conceptos de GameBob.

## Contrato público

- Español se publica en `https://www.jjlmoya.es/conceptos/` sin prefijo de idioma.
- Los otros catorce idiomas se publican en `https://www.gamebob.dev/{idioma}/{sección}/`.
- Las rutas de sección se traducen.
- Cada página declara canonical y quince `hreflang` recíprocos.
- Cada página publica metadatos Open Graph/Twitter, datos estructurados y un asset social propio.
- Cada sección publica `sitemap.xml`; el índice internacional está en `/en/concepts/sitemap-index.xml`.
- Los assets compilados viven bajo `/_studio/`.

Los `robots.txt` de los sitios padre deben enlazar estos dos puntos de entrada:

```text
Sitemap: https://www.jjlmoya.es/conceptos/sitemap.xml
Sitemap: https://www.gamebob.dev/en/concepts/sitemap-index.xml
```

Los placeholders editables de favicon y Open Graph viven en `src/assets/seo/`; su README documenta nombres y dimensiones finales.

## Desarrollo

```bash
npm install
npm run dev
```

El servidor de desarrollo utiliza `http://localhost:4323` y la raíz local redirige a `/conceptos/`.

Se puede desarrollar una obra inicialmente en español. Mientras falten traducciones, los tests deben permanecer rojos y el commit será rechazado.

Antes de considerar terminado cualquier cambio:

```bash
npm run qa
```

`qa` ejecuta Astro Check, ESLint, Stylelint, Prettier, Vitest, la build estática y la auditoría de dependencias.

## Traducciones

Los quince idiomas son obligatorios:

`es`, `en`, `fr`, `de`, `it`, `pt`, `nl`, `sv`, `pl`, `id`, `tr`, `ru`, `ja`, `ko` y `zh`.

El español es el idioma fuente. El validador rechaza:

- Idiomas ausentes.
- Claves ausentes.
- Claves inesperadas.
- Valores vacíos.
- Estructuras diferentes respecto al español.

No existe fallback silencioso hacia español.

## Temas

El contrato de temas conserva estas clases sobre `html`:

- `theme-light`
- `theme-dark`
- `theme-system`

`theme-system` se resuelve además a `theme-light` o `theme-dark` según la preferencia del sistema.

## Tipografía

La aplicación permite una única declaración `font-family`, localizada en `src/styles/global.css`. Todos los elementos la heredan.

Stylelint rechaza en cualquier otro archivo:

- `font-family`
- El shorthand `font`
- `@font-face`
- `@import`

## Hooks

`pre-commit` ejecuta check, lint y tests. `pre-push` ejecuta el QA completo. CI repite el QA aunque se omitan localmente los hooks.
