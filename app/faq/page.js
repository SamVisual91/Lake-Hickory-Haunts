import { FaqRulesExperience } from "../../components/FaqRulesExperience";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

export const metadata = buildMetadata(staticPageSeo.faq);

export default function FaqPage() {
  return (
    <main className="interior-page faq-page-shell">
      <FaqRulesExperience />
    </main>
  );
}
