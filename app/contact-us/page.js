import { ContactUsExperience } from "../../components/ContactUsExperience";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

export const metadata = buildMetadata(staticPageSeo.contact);

export default function ContactUsPage() {
  return <ContactUsExperience />;
}
