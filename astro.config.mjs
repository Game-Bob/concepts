import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
    integrations: [icon()],
    output: "static",
    trailingSlash: "always",
    redirects: {
        "/": "/conceptos/",
    },
    build: {
        assets: "_studio",
    },
});
