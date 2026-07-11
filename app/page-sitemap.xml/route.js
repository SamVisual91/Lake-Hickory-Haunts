import {
  buildAbsoluteUrl,
  buildUrlSetXml,
  DEFAULT_LAST_MODIFIED,
  indexablePagePaths,
} from "../../lib/seo";

const pageEntries = indexablePagePaths.map((path) => ({
  loc: buildAbsoluteUrl(path),
  lastmod: DEFAULT_LAST_MODIFIED,
  changefreq: path === "/" ? "weekly" : "monthly",
  priority: path === "/" ? 1.0 : path.startsWith("/tickets") ? 0.9 : path.startsWith("/attractions/") ? 0.8 : 0.7,
}));

export async function GET() {
  return new Response(buildUrlSetXml(pageEntries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
