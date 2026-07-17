"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { attractions } from "../data/attractions";

export function AttractionCard({ attraction }) {
  const previewImage = attraction.selectorImage ?? null;
  const previewAlt = attraction.selectorImageAlt ?? `${attraction.title} attraction logo`;
  const cardClassName = [
    "attraction-card",
    attraction.className,
    attraction.selected ? "is-selected" : "",
    previewImage ? "attraction-card--has-media" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={`/attractions/${attraction.slug}`}
      className={cardClassName}
      aria-label={attraction.title}
      title={attraction.theme}
    >
      {previewImage ? (
        <div className="attraction-card-media" aria-hidden="true">
          <Image
            src={previewImage}
            alt={previewAlt}
            fill
            sizes="(max-width: 420px) 100vw, (max-width: 640px) 50vw, (max-width: 900px) 33vw, (max-width: 1200px) 25vw, 270px"
          />
        </div>
      ) : null}

      <span className="attraction-card-number">{attraction.id}</span>

      {attraction.selected ? (
        <span className="attraction-card-check" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M6 12.5 10.2 16.5 18 8.8" />
          </svg>
        </span>
      ) : null}

      <div className="attraction-card-copy">
        <h2>
          {attraction.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <span className="attraction-card-cta">View Attraction</span>
      </div>

      <span className="attraction-card-plus" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 7v10M7 12h10" />
        </svg>
      </span>
    </Link>
  );
}

export function AttractionsExplorer() {
  const viewportRef = useRef(null);
  const topRow = attractions.slice(0, 7);
  const bottomRow = attractions.slice(7);

  const scrollViewport = (direction) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="attraction-browser">
      <h1 className="sr-only">Choose your nightmare</h1>
      <div className="attraction-browser-hero" aria-hidden="true">
        <Image
          src="/assets/explore-the-attractions-header-text-2026-v2.png"
          alt=""
          width={1672}
          height={941}
          priority
          sizes="(max-width: 900px) 92vw, 72vw"
        />
      </div>
      <div className="attraction-picker">
        <div className="attraction-picker-backdrop" aria-hidden="true" />
        <p className="attraction-picker-heading">Select your attraction if you dare</p>

        <button
          type="button"
          className="attraction-picker-arrow attraction-picker-arrow-left"
          aria-label="Scroll attraction cards left"
          onClick={() => scrollViewport("left")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.5 3.5 7 12l8.5 8.5" />
          </svg>
        </button>

        <div className="attraction-picker-viewport" ref={viewportRef}>
          <div className="attraction-picker-row attraction-picker-row-top">
            {topRow.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>

          <div className="attraction-picker-row attraction-picker-row-bottom">
            {bottomRow.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="attraction-picker-arrow attraction-picker-arrow-right"
          aria-label="Scroll attraction cards right"
          onClick={() => scrollViewport("right")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M8.5 3.5 17 12l-8.5 8.5" />
          </svg>
        </button>
      </div>
      <div className="attraction-browser-disclaimer">
        <p>
          Lake Hickory Haunts is an ever-evolving attraction experience. Attractions,
          scenes, characters, show elements, and event details may be updated, adjusted,
          or changed throughout the season as the experience continues to grow.
        </p>
      </div>
    </section>
  );
}
