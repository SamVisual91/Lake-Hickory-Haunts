import { notFound } from "next/navigation";
import { AttractionDetailPage } from "../../../components/AttractionDetailPage";
import { attractions, getAttractionBySlug } from "../../../data/attractions";

export function generateStaticParams() {
  return attractions.map((attraction) => ({ slug: attraction.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const attraction = getAttractionBySlug(resolvedParams.slug);

  if (!attraction) {
    return {
      title: "Attraction Not Found | Lake Hickory Haunts",
    };
  }

  return {
    title: `${attraction.shortTitle ?? attraction.title} | Lake Hickory Haunts`,
  };
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
