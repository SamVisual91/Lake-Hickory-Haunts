import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";

export const metadata = {
  title: "Group Discount for 10+ | Lake Hickory Haunts",
};

export default function GroupDiscountTicketPage() {
  const page = ticketPages.find((entry) => entry.slug === "group-discount-10-plus");
  return <TicketInfoPage page={page} />;
}
