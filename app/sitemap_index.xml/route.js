import { buildAbsoluteUrl, buildSitemapIndexXml } from "../../lib/seo";

const sitemapEntries = [
  { loc: buildAbsoluteUrl("/page-sitemap.xml") },
  { loc: buildAbsoluteUrl("/post-sitemap.xml") },
  { loc: buildAbsoluteUrl("/local-sitemap.xml") },
];

export async function GET() {
  return new Response(buildSitemapIndexXml(sitemapEntries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
