"use client";

import { useEffect } from "react";

export function HistoryNavigationReloader() {
  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType("navigation");
    const currentNavigation = navigationEntries[0];

    if (currentNavigation?.type === "back_forward") {
      window.location.reload();
      return undefined;
    }

    const handlePopState = () => {
      window.location.reload();
    };

    const handlePageShow = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}
