import { AboutUsExperience } from "../../components/AboutUsExperience";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

export const metadata = buildMetadata(staticPageSeo.aboutUs);

export default function AboutUsPage() {
  return (
    <main className="page-shell interior-page about-page">
      <AboutUsExperience />
    </main>
  );
}
