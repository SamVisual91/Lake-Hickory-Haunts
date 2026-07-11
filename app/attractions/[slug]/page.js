import { notFound } from "next/navigation";
import { AttractionDetailPage } from "../../../components/AttractionDetailPage";
import { attractions, getAttractionBySlug } from "../../../data/attractions";
import { attractionSeoBySlug, buildMetadata, staticPageSeo } from "../../../lib/seo";

export function generateStaticParams() {
  return attractions.map((attraction) => ({ slug: attraction.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const attraction = getAttractionBySlug(resolvedParams.slug);

  if (!attraction) {
    return buildMetadata(staticPageSeo.attractions);
  }

  return buildMetadata(
    attractionSeoBySlug[attraction.slug] ?? {
      title: `${attraction.shortTitle ?? attraction.title} - Lake Hickory Haunts`,
      description: staticPageSeo.attractions.description,
      path: `/attractions/${attraction.slug}`,
    },
  );
}

export default async function AttractionDetailRoute({ params }) {
  const resolvedParams = await params;
  const attraction = getAttractionBySlug(resolvedParams.slug);

  if (!attraction) {
    notFound();
  }

  return (
    <main className="attraction-detail-page-shell">
      <AttractionDetailPage attraction={attraction} />
    </main>
  );
}
