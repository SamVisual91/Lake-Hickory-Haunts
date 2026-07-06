import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";

export const metadata = {
  title: "Package Bundles | Lake Hickory Haunts",
};

export default function PackageBundlesTicketPage() {
  const page = ticketPages.find((entry) => entry.slug === "package-bundles");
  return <TicketInfoPage page={page} />;
}
