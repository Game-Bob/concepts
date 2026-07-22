import type { APIRoute } from "astro";
import { renderSitemap } from "../../seo/sitemap";

export const GET: APIRoute = () =>
    new Response(renderSitemap("es"), {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
