# SEO assets

Replace the Open Graph placeholder PNG files in place. Keep their filenames and dimensions so no code changes are needed.

- `open-graph/concepts.png`: section index image.
- `open-graph/{concept-id}.png`: one image for each concept.
- Open Graph images: 1200 x 630 px, PNG, recommended maximum 5 MB.
- `favicons/jjlmoya.webp` and `jjlmoya-apple-touch.webp` are copied from `../jjlmoya/public/`.
- `favicons/gamebob.webp` and `gamebob-apple-touch.webp` are copied from `../website/public/`.

The build fingerprints these files under `/_studio/`. Each page converts that path into an absolute URL on its own canonical host.
