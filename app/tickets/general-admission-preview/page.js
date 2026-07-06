import localFont from "next/font/local";
import { GeneralAdmissionPage } from "../../../components/GeneralAdmissionPage";

const theMacabre = localFont({
  src: "../../../public/fonts/The-Macabre.otf",
  display: "swap",
});

export const metadata = {
  title: "General Admission Preview | Lake Hickory Haunts",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function GeneralAdmissionPreviewPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialDate = typeof resolvedSearchParams?.date === "string" ? resolvedSearchParams.date : null;

  return <GeneralAdmissionPage titleClassName={theMacabre.className} initialDate={initialDate} />;
}
