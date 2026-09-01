import localFont from "next/font/local";
import { GeneralAdmissionDateTimePage } from "../../components/GeneralAdmissionDateTimePage";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

const theMacabre = localFont({
  src: "../../public/fonts/The-Macabre.otf",
  display: "swap",
});

export const metadata = buildMetadata(staticPageSeo.tickets);

const ticketPricingSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Lake Hickory Haunts 2026 Season",
  description:
    "Online tickets start at $32 plus tax for General Admission, $48 plus tax for Fast Pass, and $66 plus tax for VIP. Prices vary by date and ticket type.",
  url: "https://www.lakehickoryhaunts.com/tickets",
  startDate: "2026-09-12T19:30:00-04:00",
  endDate: "2026-11-07T23:00:00-05:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Lake Hickory Haunts",
    address: {
      "@type": "PostalAddress",
      streetAddress: "520 Carolina Ave",
      addressLocality: "Hickory",
      addressRegion: "NC",
      postalCode: "28601",
      addressCountry: "US",
    },
  },
  offers: {
    "@type": "AggregateOffer",
    url: "https://www.lakehickoryhaunts.com/tickets",
    priceCurrency: "USD",
    lowPrice: "32",
    highPrice: "74",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    validFrom: "2026-09-01T00:00:00-04:00",
  },
};

export default async function TicketsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialDate = typeof resolvedSearchParams?.date === "string" ? resolvedSearchParams.date : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ticketPricingSchema) }}
      />
      <GeneralAdmissionDateTimePage titleClassName={theMacabre.className} initialDate={initialDate} />
    </>
  );
}
