import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";
import { buildMetadata, ticketSeoBySlug } from "../../../lib/seo";

export const metadata = buildMetadata(ticketSeoBySlug["vip-experience"]);

export default function VipExperienceTicketPage() {
  const page = ticketPages.find((entry) => entry.slug === "vip-experience");
  return <TicketInfoPage page={page} />;
}
