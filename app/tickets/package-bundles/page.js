import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";
import { buildMetadata, ticketSeoBySlug } from "../../../lib/seo";

export const metadata = buildMetadata(ticketSeoBySlug["package-bundles"]);

export default function PackageBundlesTicketPage() {
  const page = ticketPages.find((entry) => entry.slug === "package-bundles");
  return <TicketInfoPage page={page} />;
}
