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
    image: "/assets/visit-monster-mash-card-20260715.png",
  },
  {
    title: "Axe Throwing",
    tone: "orange",
    description: "Test your aim & satisfy your inner warrior (Ages 18+)",
    image: "/assets/visit-axe-throwing-card-20260715.png",
  },
  {
    title: "Dizzy Darts",
    tone: "purple",
    description: "Try to hit the mark in this mind-bending carnival challenge!",
    image: "/assets/visit-dizzy-darts-card-20260715.jpg",
  },
  {
    title: "Kraken's Kitchen",
    tone: "aqua",
    description: "Spooky eats, drinks, and kraken bites to fuel your night",
    image: "/assets/visit-kraken-kitchen-card-20260715.jpg",
  },
  {
    title: "Live Events & Dj's",
    tone: "purple",
    description: "High - energy entertainment, live music, and non stop beats!",
    image: "/assets/visit-live-events-card-20260715.jpg",
  },
  {
    title: "Coffin Simulators",
    tone: "green",
    description: "Experience what it's like to be buried alive in this horrifying ride!",
    image: "/assets/visit-coffin-simulators-card-20260715.jpg",
  },
  {
    title: "Curse of The Mummy",
    tone: "orange",
    description: "Think you can make it out alive before time runs out?",
    image: "/assets/visit-curse-of-the-mummy-card-20260715.png",
  },
  {
    title: "Pharaoh's Treasure",
    tone: "green",
    description: "Solve the puzzles, find the hidden Golden Tomb of the Pharaoh, and escape before time runs out!",
    image: "/assets/visit-pharaohs-treasure-card-20260715.png",
  },
  {
    title: "VIP Lounge",
    tone: "orange",
    description: "Upgrade your night! Enjoy your private access, refreshments & spooky comfort. Exclusive to VIP Pass holders.",
    image: "/assets/visit-vip-lounge-card-20260715.jpg",
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
              src="/assets/while-you-wait-header-midway-crowd-20260720.png"
              alt="While You Wait header artwork"
              width={2172}
              height={724}
              priority
              sizes="100vw"
            />
          </div>
        </section>

        <p className="visit-strip-heading">Offerings, entertainment, and additional attractions available on the Midway of Mayhem</p>
      </div>

      <VisitMidwayGrid boxes={midwayBoxes} />
    </main>
  );
}
