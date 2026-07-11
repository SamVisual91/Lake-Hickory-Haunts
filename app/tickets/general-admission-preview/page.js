import localFont from "next/font/local";
import { GeneralAdmissionPage } from "../../../components/GeneralAdmissionPage";
import { buildMetadata, ticketSeoBySlug } from "../../../lib/seo";

const theMacabre = localFont({
  src: "../../../public/fonts/The-Macabre.otf",
  display: "swap",
});

export const metadata = buildMetadata(ticketSeoBySlug["general-admission-preview"]);

export default async function GeneralAdmissionPreviewPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialDate = typeof resolvedSearchParams?.date === "string" ? resolvedSearchParams.date : null;

  return <GeneralAdmissionPage titleClassName={theMacabre.className} initialDate={initialDate} />;
}
