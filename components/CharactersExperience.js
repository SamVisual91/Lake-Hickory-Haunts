"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const characterCarouselImages = [
  { src: "/assets/character-banners/Boss.png", alt: "Boss character banner", name: "Boss" },
  { src: "/assets/character-banners/Dr Death.png", alt: "Dr. Death character banner", name: "Dr. Death" },
  { src: "/assets/character-banners/Kluath.png", alt: "Kluath character banner", name: "Kluath" },
  { src: "/assets/character-banners/Shepherd.png", alt: "Shepherd character banner", name: "Shepherd" },
  { src: "/assets/character-banners/Vodyanoi.png", alt: "Vodyanoi character banner", name: "Vodyanoi" },
  { src: "/assets/character-banners/grim.png", alt: "Grim character banner", name: "Grim" },
  { src: "/assets/character-banners/Lilith.png", alt: "Lilith character banner", name: "Lilith" },
  { src: "/assets/character-banners/Hoss.png", alt: "Pirate Captain character banner", name: "Pirate Captain" },
  { src: "/assets/character-banners/Rat.png", alt: "Rat character banner", name: "Rat" },
  { src: "/assets/character-banners/The Creature.png", alt: "The Creature character banner", name: "The Creature" },
  { src: "/assets/character-banners/Nova Kaine.png", alt: "Nova Kaine character banner", name: "Nova Kaine" },
  { src: "/assets/character-banners/Rust.png", alt: "Rust character banner", name: "Rust" },
  { src: "/assets/character-banners/Nurse Delilah.png", alt: "Nurse Delilah character banner", name: "Nurse Delilah" },
  { src: "/assets/character-banners/Sherbert.png", alt: "Sherbert character banner", name: "Sherbert" },
  { src: "/assets/character-banners/Bloody Moira.png", alt: "Bloody Moira character banner", name: "Bloody Moira" },
  { src: "/assets/character-banners/Twigsaw.png", alt: "Twigsaw character banner", name: "Twigsaw" },
  { src: "/assets/character-banners/Ripr.png", alt: "Ripr character banner", name: "Ripr" },
  { src: "/assets/character-banners/The Diver.png", alt: "The Diver character banner", name: "The Diver" },
  { src: "/assets/character-banners/Wolfy.png", alt: "Wolfy character banner", name: "Wolfy" },
  { src: "/assets/character-banners/Eden.png", alt: "Eden character banner", name: "Eden" },
  { src: "/assets/character-banners/Grave Digger.png", alt: "Grave Digger character banner", name: "Grave Digger" },
  { src: "/assets/character-banners/Precious.png", alt: "Precious character banner", name: "Precious" },
  { src: "/assets/character-banners/Pumpkin King.png", alt: "Pumpkin King character banner", name: "Pumpkin King" },
  { src: "/assets/character-banners/Squeeks.png", alt: "Squeeks character banner", name: "Squeeks" },
];

function CarouselArrow({ direction = "right" }) {
  const rotation = direction === "left" ? "rotate(180 14 14)" : undefined;

  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <g transform={rotation}>
        <path
          d="M8.5 4.5 18.5 14 8.5 23.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function CharactersExperience() {
  const carouselRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;

    if (!node) {
      return;
    }

    const distance = Math.max(node.clientWidth * 0.72, 260);

    node.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const activeIndex = hoveredIndex ?? selectedIndex;

  return (
    <main className="page-shell character-banner-page">
      <section className="character-banner-hero" id="character-banner-hero">
        <div className="character-banner-headline">
          <Image
            src="/assets/meet-the-icons.png"
            alt="Meet the Icons"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 900px) 82vw, 70vw"
          />
        </div>
      </section>

      <div className="character-banner-scroll">
        <span>Scroll to Discover</span>
        <i aria-hidden="true" />
      </div>

      <section className="character-carousel" aria-label="Character image carousel">
        <button
          type="button"
          className="character-carousel-arrow"
          onClick={() => scrollCarousel("left")}
          aria-label="Previous character images"
        >
          <CarouselArrow direction="left" />
        </button>

        <div className="character-carousel-track" ref={carouselRef}>
          {characterCarouselImages.map((image, index) => (
            <button
              type="button"
              className={`character-carousel-card ${activeIndex === index ? "is-active" : ""}`}
              key={image.src}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onTouchStart={() => setSelectedIndex(index)}
              onClick={() => setSelectedIndex(index)}
              aria-label={`${image.name} character image`}
            >
              <div className="character-carousel-card-media">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 900px) 42vw, (max-width: 1180px) 34vw, 18vw"
                  priority={index < 4}
                />
                <span className="character-carousel-card-name">{image.name}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="character-carousel-arrow"
          onClick={() => scrollCarousel("right")}
          aria-label="Next character images"
        >
          <CarouselArrow direction="right" />
        </button>
      </section>

      <div className="attraction-browser-disclaimer">
        <p>
          Lake Hickory Haunts is an ever-evolving attraction experience. Attractions,
          scenes, characters, show elements, and event details may be updated, adjusted,
          or changed throughout the season as the experience continues to grow.
        </p>
      </div>
    </main>
  );
}
