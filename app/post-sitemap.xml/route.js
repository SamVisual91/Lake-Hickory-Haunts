import { buildUrlSetXml } from "../../lib/seo";

export async function GET() {
  return new Response(buildUrlSetXml([]), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
