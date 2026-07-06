"use client";

import { useEffect } from "react";

export function HomePageEnhancer() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".home-reveal"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const viewportThresholdRatio = 0.88;

    if (!revealItems.length) {
      return undefined;
    }

    const revealVisibleItems = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
      const threshold = viewportHeight * viewportThresholdRatio;

      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) {
          return;
        }

        const rect = item.getBoundingClientRect();
        const isInView = rect.top <= threshold && rect.bottom >= 0;

        if (isInView) {
          item.classList.add("is-visible");
        }
      });
    };

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    const handleViewportSync = () => {
      window.requestAnimationFrame(revealVisibleItems);
    };

    const handlePageShow = () => {
      handleViewportSync();
    };

    const timeoutId = window.setTimeout(revealVisibleItems, 450);
    const followUpTimeoutId = window.setTimeout(revealVisibleItems, 1200);
    const syncWindowStart = window.performance.now();
    const syncIntervalId = window.setInterval(() => {
      revealVisibleItems();

      if (window.performance.now() - syncWindowStart > 2600) {
        window.clearInterval(syncIntervalId);
      }
    }, 220);

    revealVisibleItems();
    window.addEventListener("scroll", handleViewportSync, { passive: true });
    window.addEventListener("resize", handleViewportSync);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("lhh:splash-closed", handleViewportSync);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
      window.clearTimeout(followUpTimeoutId);
      window.clearInterval(syncIntervalId);
      window.removeEventListener("scroll", handleViewportSync);
      window.removeEventListener("resize", handleViewportSync);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("lhh:splash-closed", handleViewportSync);
    };
  }, []);

  return null;
}
