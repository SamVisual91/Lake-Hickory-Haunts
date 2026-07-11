import Image from "next/image";
import VisitMidwayGrid from "../visit/VisitMidwayGrid";
import { buildMetadata, staticPageSeo } from "../../lib/seo";

const midwayBoxes = [
  {
    title: "4d Asylum",
    tone: "purple",
    description: "Experience sensory terror in this thrilling walkthrough!",
    image: "/assets/visit-4d-asylum-card.png",
    icon: "/assets/visit-4d-asylum-icon.png",
  },
  {
    title: "Monster Mash",
    tone: "green",
    description: "How hard can you hack it! Rumble the ground!",
    image: "/assets/visit-monster-mash-card.png",
  },
  {
    title: "Axe Throwing",
    tone: "orange",
    description: "Test your aim & satisfy your inner warrior (Ages 18+)",
    image: "/assets/visit-axe-throwing-card.png",
  },
  {
    title: "Dizzy Darts",
    tone: "purple",
    description: "Try to hit the mark in this mind-bending carnival challenge!",
    image: "/assets/visit-dizzy-darts-card.png",
  },
  {
    title: "Kracken Kitchen",
    tone: "aqua",
    description: "Spooky eats, drinks, and kraken bites to fuel your haunt",
    image: "/assets/visit-kraken-kitchen-card.png",
  },
  {
    title: "Live Events & Dj's",
    tone: "purple",
    description: "High - energy entertainment, live music, and non stop beats!",
    image: "/assets/visit-live-events-card.png",
  },
  {
    title: "Coffin Simulators",
    tone: "green",
    description: "Feel the dread! Experience a horrifying ride into the darkness.",
    image: "/assets/visit-coffin-simulators-card.png",
  },
  {
    title: "VIP Lounge",
    tone: "orange",
    description: "Upgrade your night! Enjoy your private access, refreshments & Spooky comfort",
    image: "/assets/visit-vip-lounge-card-v2.png",
  },
];

export const metadata = buildMetadata(staticPageSeo.whileYouWait);

export default function WhileYouWaitPage() {
  return (
    <main className="visit-strips-page">
      <div className="visit-strips-shell page-width">
        <section className="visit-strip visit-strip-hero">
          <div className="visit-strip-media">
            <Image
              src="/assets/while-you-wait-header-lighthouse-20260710.jpg"
              alt="While You Wait header artwork"
              width={1920}
              height={1280}
              priority
              sizes="100vw"
            />
          </div>
        </section>

        <p className="visit-strip-heading">Things to do on the Midway of Mayhem</p>
      </div>

      <VisitMidwayGrid boxes={midwayBoxes} />
    </main>
  );
}
