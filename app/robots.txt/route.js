import { buildAbsoluteUrl } from "../../lib/seo";

export async function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /tickets/general-admission-preview

Sitemap: ${buildAbsoluteUrl("/sitemap.xml")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
