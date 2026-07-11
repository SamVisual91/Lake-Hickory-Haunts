import localFont from "next/font/local";
import { GeneralAdmissionDateTimePage } from "../../../components/GeneralAdmissionDateTimePage";
import { buildMetadata, ticketSeoBySlug } from "../../../lib/seo";

const theMacabre = localFont({
  src: "../../../public/fonts/The-Macabre.otf",
  display: "swap",
});

export const metadata = buildMetadata(ticketSeoBySlug["general-admission"]);

export default async function GeneralAdmissionTicketPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialDate = typeof resolvedSearchParams?.date === "string" ? resolvedSearchParams.date : null;

  return <GeneralAdmissionDateTimePage titleClassName={theMacabre.className} initialDate={initialDate} />;
}
