"use client";

import { useEffect, useState } from "react";
import { AttractionCard } from "./AttractionsExplorer";
import { attractions } from "../data/attractions";

function getVisibleCount(viewportWidth) {
  if (viewportWidth <= 640) {
    return 1;
  }

  if (viewportWidth <= 1180) {
    return 2;
  }

  if (viewportWidth <= 1500) {
    return 3;
  }

  return 4;
}

function getVisibleAttractions(startIndex, visibleCount) {
  return Array.from({ length: visibleCount }, (_, offset) => attractions[(startIndex + offset) % attractions.length]);
}

export function HomeAttractionRowCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const syncVisibleCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);

    return () => window.removeEventListener("resize", syncVisibleCount);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStartIndex((current) => (current + 1) % attractions.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const moveLeft = () => {
    setStartIndex((current) => (current - 1 + attractions.length) % attractions.length);
  };

  const moveRight = () => {
    setStartIndex((current) => (current + 1) % attractions.length);
  };

  const visibleAttractions = getVisibleAttractions(startIndex, visibleCount);

  return (
    <section className="page-width stack home-reveal home-attraction-section">
      <div className="home-attraction-header">
        <h2>
          <span>Featuring 13 Attractions</span>
          <span>For the price of one.</span>
        </h2>
      </div>

      <section className="home-attraction-row" aria-label="Lake Hickory Haunts attractions">
        <button
          type="button"
          className="home-attraction-row-arrow home-attraction-row-arrow-left"
          aria-label="Scroll attractions left"
          onClick={moveLeft}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 3.5 7 12l8.5 8.5" />
          </svg>
        </button>

        <div className="home-attraction-row-grid">
          {visibleAttractions.map((attraction) => (
            <AttractionCard key={`${startIndex}-${attraction.id}`} attraction={attraction} />
          ))}
        </div>

        <button
          type="button"
          className="home-attraction-row-arrow home-attraction-row-arrow-right"
          aria-label="Scroll attractions right"
          onClick={moveRight}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.5 3.5 17 12l-8.5 8.5" />
          </svg>
        </button>
      </section>
    </section>
  );
}
