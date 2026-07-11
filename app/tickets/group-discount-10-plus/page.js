import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";
import { buildMetadata, ticketSeoBySlug } from "../../../lib/seo";

export const metadata = buildMetadata(ticketSeoBySlug["group-discount-10-plus"]);

export default function GroupDiscountTicketPage() {
  const page = ticketPages.find((entry) => entry.slug === "group-discount-10-plus");
  return <TicketInfoPage page={page} />;
}
