import type { APIRoute } from "astro";
import { renderInternationalSitemapIndex } from "../../../seo/sitemap";

export const GET: APIRoute = () =>
    new Response(renderInternationalSitemapIndex(), {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
