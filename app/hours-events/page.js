import { HoursEventsExperience } from "../../components/HoursEventsExperience";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

export const metadata = buildMetadata(staticPageSeo.hoursEvents);

export default function HoursEventsPage() {
  return (
    <main className="page-width interior-page">
      <HoursEventsExperience />
    </main>
  );
}
