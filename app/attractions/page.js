import { AttractionsExplorer } from "../../components/AttractionsExplorer";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

export const metadata = buildMetadata(staticPageSeo.attractions);

export default function AttractionsPage() {
  return (
    <main className="page-shell interior-page attractions-page-shell">
      <AttractionsExplorer />
    </main>
  );
}
