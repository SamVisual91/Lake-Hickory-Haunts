import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";

export const metadata = {
  title: "VIP Experience | Lake Hickory Haunts",
};

export default function VipExperienceTicketPage() {
  const page = ticketPages.find((entry) => entry.slug === "vip-experience");
  return <TicketInfoPage page={page} />;
}
