import { CharactersExperience } from "../../components/CharactersExperience";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

export const metadata = buildMetadata(staticPageSeo.characters);

export default function CharactersPage() {
  return <CharactersExperience />;
}
