import { buildKmlDocument } from "../../lib/seo";

export async function GET() {
  return new Response(buildKmlDocument(), {
    headers: {
      "Content-Type": "application/vnd.google-earth.kml+xml; charset=utf-8",
    },
  });
}
