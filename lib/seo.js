import { attractions } from "../data/attractions";

export const SITE_NAME = "Lake Hickory Haunts";
export const SITE_URL = "https://www.lakehickoryhaunts.com";
export const DEFAULT_LAST_MODIFIED = "2026-07-10T00:00:00-04:00";

export const DEFAULT_DESCRIPTION =
  "Lake Hickory Haunts is North Carolina's premier haunted theme park featuring 13 full-scale haunted attractions, over 100 industry-leading characters, and unforgettable special effects.";

export function buildAbsoluteUrl(path = "/") {
  if (!path || path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  canonicalPath,
  robots,
  type = "website",
}) {
  const canonical = canonicalPath ?? path;
  const url = buildAbsoluteUrl(canonical);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(robots ? { robots } : {}),
  };
}

export const staticPageSeo = {
  home: {
    title: "Home - Lake Hickory Haunts",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  },
  aboutUs: {
    title: "About Us - Lake Hickory Haunts",
    description:
      "Lake Hickory Haunts is a haunted theme park that provides an entertaining, thrilling, scary, and fun-filled experience. Learn all about us here!",
    path: "/about-us",
  },
  attractions: {
    title: "Attractions - Lake Hickory Haunts",
    description:
      "Learn about the fun and exciting attractions featured at Lake Hickory Haunts, from our Midway of Mayhem to our Big Top Circus and more.",
    path: "/attractions",
  },
  characters: {
    title: "Characters - Lake Hickory Haunts",
    description:
      "Characters at Lake Hickory Haunts are fun, scary, and innovative. Check out the incredible characters featured throughout LHH.",
    path: "/characters",
  },
  contact: {
    title: "Contact - Lake Hickory Haunts",
    description:
      "We love to hear your feedback. Contact us if you would like to leave feedback about your experience at Lake Hickory Haunts.",
    path: "/contact",
  },
  cookiePolicy: {
    title: "Lake Hickory Haunts - Cookie Policy",
    description:
      "Cookie policy for Lake Hickory Haunts, a haunted theme park that provides an entertaining, thrilling, scary, and fun-filled experience.",
    path: "/cookie-policy",
  },
  directions: {
    title: "Get Directions - Lake Hickory Haunts",
    description:
      "Get directions to Lake Hickory Haunts in Hickory, North Carolina. Learn how to get to Lake Hickory Haunts from I-40 East and West or from 321 South.",
    path: "/directions",
  },
  faq: {
    title: "FAQ - Lake Hickory Haunts",
    description:
      "Do you have questions about Lake Hickory Haunts? Learn about our pricing, schedule, attractions, rules, and more on our FAQ page.",
    path: "/faq",
  },
  hoursEvents: {
    title: "Hours and Events - Lake Hickory Haunts",
    description:
      "Lake Hickory Haunts opens in the fall. Learn more about our hours and events for the haunt season.",
    path: "/hours-events",
  },
  privacyPolicy: {
    title: "Privacy Policy - Lake Hickory Haunts",
    description:
      "Privacy policy for Lake Hickory Haunts, a haunted theme park that provides an entertaining, thrilling, scary, and fun-filled experience.",
    path: "/privacy-policy",
  },
  termsOfUse: {
    title: "Terms of Use - Lake Hickory Haunts",
    description:
      "Terms of use for Lake Hickory Haunts, a haunted theme park that provides an entertaining, thrilling, scary, and fun-filled experience.",
    path: "/terms-of-use",
  },
  tickets: {
    title: "Tickets - Lake Hickory Haunts",
    description:
      "Buy tickets online now. Lake Hickory Haunts general admission, fast pass, and VIP pass tickets are available now.",
    path: "/tickets",
  },
  whileYouWait: {
    title: "While You Wait - Lake Hickory Haunts",
    description:
      "Explore midway food, roaming monsters, photo ops, live entertainment, and extra things to do on the Midway of Mayhem at Lake Hickory Haunts.",
    path: "/whileyouwait",
  },
};

export const ticketSeoBySlug = {
  "general-admission": {
    title: "General Admission Ticket - Lake Hickory Haunts",
    description:
      "Buy general admission tickets for Lake Hickory Haunts and experience all 13 main attractions with a standard wait time.",
    path: "/tickets/general-admission",
  },
  "vip-experience": {
    title: "VIP Experience - Lake Hickory Haunts",
    description:
      "Upgrade your night with the Lake Hickory Haunts VIP Experience, including faster entry, VIP lounge access, and extra perks.",
    path: "/tickets/vip-experience",
  },
  "group-discount-10-plus": {
    title: "Group Discount for 10+ - Lake Hickory Haunts",
    description:
      "Plan your Lake Hickory Haunts visit with discounted group tickets for 10 or more guests on select nights.",
    path: "/tickets/group-discount-10-plus",
  },
  "package-bundles": {
    title: "Package Bundles - Lake Hickory Haunts",
    description:
      "Compare Lake Hickory Haunts package bundles and choose the best ticket value for your haunt night.",
    path: "/tickets/package-bundles",
  },
  "general-admission-preview": {
    title: "General Admission Preview - Lake Hickory Haunts",
    description:
      "Preview the Lake Hickory Haunts general admission ticket experience before publishing changes live.",
    path: "/tickets/general-admission-preview",
    canonicalPath: "/tickets/general-admission",
    robots: {
      index: false,
      follow: false,
    },
  },
};

export const attractionSeoBySlug = {
  "shipwrecked": {
    title: "Shipwrecked - Lake Hickory Haunts",
    description:
      "Beware, these pirates are not to be bartered with. Can you survive Shipwrecked 2.0, or will you be made to walk the plank?",
    path: "/attractions/shipwrecked",
  },
  "voodoo-bayou": {
    title: "Voodoo Bayou - Lake Hickory Haunts",
    description:
      "Voodoo witch doctors live in the treetops at Voodoo Bayou. Be cautious, the power of their witchcraft is not to be reckoned or bartered with.",
    path: "/attractions/voodoo-bayou",
  },
  "aftermath": {
    title: "Aftermath - Lake Hickory Haunts",
    description:
      "Those who survive Extinction must inhabit the city of Aftermath, a post-apocalyptic city with a giant territorial wall surrounding it.",
    path: "/attractions/aftermath",
  },
  "aquaphobia": {
    title: "Aquaphobia - Lake Hickory Haunts",
    description:
      "Come experience Aquaphobia at Lake Hickory Haunts and prepare to be surprised and thrilled.",
    path: "/attractions/aquaphobia",
  },
  "big-top-circus": {
    title: "Big Top Circus - Lake Hickory Haunts",
    description:
      "Boss's Big Top Circus is back. Boss has one goal: transform all humans into clowns so he and his evil clown army can take over the world.",
    path: "/attractions/big-top-circus",
  },
  "chop-shop": {
    title: "Chop Shop - Lake Hickory Haunts",
    description:
      "The Mangler is a death machine with one purpose: to mutilate and destroy all who enter.",
    path: "/attractions/chop-shop",
  },
  "decent": {
    title: "Descent - Lake Hickory Haunts",
    description:
      "Within Descent, victims encounter awe-inspiring water caverns, rock formation caves, darkness, and much more.",
    path: "/attractions/decent",
  },
  "extinction": {
    title: "Extinction - Lake Hickory Haunts",
    description:
      "Welcome to Extinction 2.0, a bone-chilling haunted attraction deep beneath the murky waters of Lake Hickory.",
    path: "/attractions/extinction",
  },
  "ghost-town": {
    title: "Ghost Town - Lake Hickory Haunts",
    description:
      "Filled with ghastly, restless, and displeased spirits, Ghost Town is more alive than it may look.",
    path: "/attractions/ghost-town",
  },
  "lair-of-the-undead": {
    title: "Lair of the Undead - Lake Hickory Haunts",
    description:
      "The Lair of the Undead is a terrifying attraction where the souls of the undead wander aimlessly in an eternal abyss of darkness and despair.",
    path: "/attractions/lair-of-the-undead",
  },
  "midway-mayhem": {
    title: "Midway of Mayhem - Lake Hickory Haunts",
    description:
      "Our fun and exciting Midway of Mayhem is now even bigger with more midway space, food, and attractions.",
    path: "/attractions/midway-mayhem",
  },
  "natures-revenge": {
    title: "Nature's Revenge - Lake Hickory Haunts",
    description:
      "Enter Nature's Revenge and experience an entertaining, thrilling, scary, and fun-filled greenhouse nightmare at Lake Hickory Haunts.",
    path: "/attractions/natures-revenge",
  },
  "nightmare-factory": {
    title: "Nightmare Factory - Lake Hickory Haunts",
    description:
      "Experience terror beyond your wildest dreams at Nightmare Factory. Horrifying hallucinations await.",
    path: "/attractions/nightmare-factory",
  },
};

export const indexablePagePaths = [
  "/",
  "/about-us",
  "/attractions",
  "/characters",
  "/contact",
  "/cookie-policy",
  "/directions",
  "/faq",
  "/hours-events",
  "/privacy-policy",
  "/terms-of-use",
  "/tickets",
  "/tickets/general-admission",
  "/tickets/vip-experience",
  "/tickets/group-discount-10-plus",
  "/tickets/package-bundles",
  "/whileyouwait",
  ...attractions.map((attraction) => `/attractions/${attraction.slug}`),
];

export function buildSitemapIndexXml(entries) {
  const items = entries
    .map(
      ({ loc, lastmod = DEFAULT_LAST_MODIFIED }) => `<sitemap>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
</sitemap>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export function buildUrlSetXml(entries) {
  const items = entries
    .map(
      ({ loc, lastmod = DEFAULT_LAST_MODIFIED, changefreq, priority }) => `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>${changefreq ? `
  <changefreq>${changefreq}</changefreq>` : ""}${typeof priority === "number" ? `
  <priority>${priority.toFixed(1)}</priority>` : ""}
</url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export function buildKmlDocument() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Lake Hickory Haunts Locations</name>
    <Placemark>
      <name>Lake Hickory Haunts</name>
      <description>520 Carolina Ave, Hickory, NC 28601</description>
    </Placemark>
  </Document>
</kml>`;
}
