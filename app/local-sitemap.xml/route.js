import { buildAbsoluteUrl, buildUrlSetXml } from "../../lib/seo";

const localEntries = [
  {
    loc: buildAbsoluteUrl("/locations.kml"),
  },
];

export async function GET() {
  return new Response(buildUrlSetXml(localEntries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
