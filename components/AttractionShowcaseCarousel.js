"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    title: "Nightmare Factory",
    description:
      "Enter Dr. Death's industrial nightmare where hallucinations, slime, and twisted experiments push fear into overdrive.",
    image: "/assets/offer-special.jpg",
    alt: "Lake Hickory Haunts nurse character in a haunted corridor",
    href: "/attractions",
    cta: "Enter Nightmare Factory",
  },
  {
    title: "Lair of the Undead",
    description:
      "Wander into a realm of blackness where undead souls claw toward the living and every step feels like a grave mistake.",
    image: "/assets/offer-vip-v2.jpg",
    alt: "Lake Hickory Haunts green-lit creature performer",
    href: "/attractions",
    cta: "Face the Undead",
  },
  {
    title: "Bayou Encampment",
    description:
      "A voodoo-soaked world in the treetops where witch doctors, dark rituals, and swamp legends come alive around you.",
    image: "/assets/offer-events.jpg",
    alt: "Lake Hickory Haunts creature performer reaching toward camera",
    href: "/attractions",
    cta: "Walk the Bayou",
  },
  {
    title: "Shipwrecked",
    description:
      "A larger pirate nightmare with expanded scenes, dramatic pathways, and a cinematic over-water atmosphere built to feel massive.",
    image: "/assets/offer-events.jpg",
    alt: "Lake Hickory Haunts creature performer reaching toward camera",
    href: "/attractions",
    cta: "Explore Shipwrecked",
  },
  {
    title: "Vodyanoi",
    description:
      "Encounter sirens, floods, sea creatures, and the horrors that lurk around the haunted waters surrounding the sunken village.",
    image: "/assets/doc-thumb-right.jpg",
    alt: "Lake Hickory Haunts event video thumbnail",
    href: "/attractions",
    cta: "Enter the Waters",
  },
  {
    title: "Extinction 2.0",
    description:
      "Alien hybrids, lab horrors, and the rise of Kluath create a high-intensity sci-fi nightmare unlike anything else on site.",
    image: "/assets/signal.jpg",
    alt: "Green-lit performer in a stairwell at Lake Hickory Haunts",
    href: "/attractions",
    cta: "Enter Extinction",
  },
  {
    title: "Aftermath",
    description:
      "Survive the fallout in a post-apocalyptic city where the wall keeps the outside world out, and the monsters in.",
    image: "/assets/mirror.jpg",
    alt: "Lake Hickory Haunts performer behind distressed glass",
    href: "/attractions",
    cta: "Enter Aftermath",
  },
  {
    title: "Nature's Revenge",
    description:
      "Inside an ancient experimental greenhouse, beautiful growth turns vicious as nature takes back what is hers.",
    image: "/assets/offer-vip-v2.jpg",
    alt: "Lake Hickory Haunts green-lit creature performer",
    href: "/attractions",
    cta: "Face Nature's Revenge",
  },
  {
    title: "Descent",
    description:
      "Descend deeper into the caves with darker tunnels, creature encounters, and a claustrophobic journey through The Relic.",
    image: "/assets/mirror.jpg",
    alt: "Lake Hickory Haunts performer behind distressed glass",
    href: "/attractions",
    cta: "Enter Descent",
  },
  {
    title: "Boss's Big Top Circus",
    description:
      "Step into the clown takeover where Boss is back, bigger than ever, and determined to transform every guest into part of the show.",
    image: "/assets/hero.jpg",
    alt: "Lake Hickory Haunts pumpkin-lit character scene",
    href: "/attractions",
    cta: "Enter the Big Top",
  },
  {
    title: "The Chop Shop",
    description:
      "What used to be a family general store is now a brutal place of tools, blood, and locals no one dares to disturb.",
    image: "/assets/offer-special.jpg",
    alt: "Lake Hickory Haunts nurse character in a haunted corridor",
    href: "/attractions",
    cta: "Enter the Chop Shop",
  },
  {
    title: "Ghost Town",
    description:
      "This town is more alive than it looks. The dead are watching, and they do not take kindly to disrespect.",
    image: "/assets/doc-thumb-base.jpg",
    alt: "Lake Hickory Haunts documentary thumbnail",
    href: "/attractions",
    cta: "Walk Ghost Town",
  },
  {
    title: "The Midway",
    description:
      "The midway sets the tone with roaming characters, photo moments, and the kind of energy that makes the full night feel alive.",
    image: "/assets/offer-special.jpg",
    alt: "Lake Hickory Haunts nurse character in a haunted corridor",
    href: "/attractions",
    cta: "See the Midway",
  },
];

export function AttractionShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="page-width stack home-reveal">
      <div className="showcase-wrap">
        <button type="button" className="showcase-arrow showcase-arrow-left" onClick={previous} aria-label="Previous slide">
          &#8249;
        </button>

        <div className="showcase-media">
          <Image src={activeSlide.image} alt={activeSlide.alt} width={1600} height={900} />
        </div>

        <button type="button" className="showcase-arrow showcase-arrow-right" onClick={next} aria-label="Next slide">
          &#8250;
        </button>
      </div>

      <div className="showcase-dots" aria-label="Attraction slides">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`showcase-dot ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${slide.title}`}
          />
        ))}
      </div>

      <div className="showcase-copy">
        <h3>{activeSlide.title}</h3>
        <p>{activeSlide.description}</p>
        <a className="homepage-secondary-cta" href={activeSlide.href}>{activeSlide.cta}</a>
      </div>
    </section>
  );
}
