import localFont from "next/font/local";
import { GeneralAdmissionDateTimePage } from "../../components/GeneralAdmissionDateTimePage";

const theMacabre = localFont({
  src: "../../public/fonts/The-Macabre.otf",
  display: "swap",
});

export const metadata = {
  title: "Tickets | Lake Hickory Haunts",
};

export default async function TicketsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialDate = typeof resolvedSearchParams?.date === "string" ? resolvedSearchParams.date : null;

  return <GeneralAdmissionDateTimePage titleClassName={theMacabre.className} initialDate={initialDate} />;
}
