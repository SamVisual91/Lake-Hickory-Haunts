import { notFound } from "next/navigation";
import { GeneralAdmissionPage } from "../../../components/GeneralAdmissionPage";
import { TicketInfoPage } from "../../../components/TicketInfoPage";
import { ticketPages } from "../../../data/site";

export function generateStaticParams() {
  return ticketPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }) {
  const page = ticketPages.find((entry) => entry.slug === params.slug);

  if (!page) {
    return {
      title: "Tickets | Lake Hickory Haunts",
    };
  }

  return {
    title: `${page.title} | Lake Hickory Haunts`,
  };
}

export default async function TicketRoutePage({ params, searchParams }) {
  if (params.slug === "general-admission") {
    const resolvedSearchParams = await searchParams;
    const initialDate = typeof resolvedSearchParams?.date === "string" ? resolvedSearchParams.date : null;

    return <GeneralAdmissionPage initialDate={initialDate} />;
  }

  const page = ticketPages.find((entry) => entry.slug === params.slug);

  if (!page) {
    notFound();
  }

  return <TicketInfoPage page={page} />;
}
