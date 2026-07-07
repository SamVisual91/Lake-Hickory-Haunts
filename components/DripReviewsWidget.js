"use client";

import { useEffect } from "react";

const reviewStylesheets = [
  "https://cdn.endorsal.io/widgets/endorsal-testimonials.min.css",
  "https://cdn.endorsal.io/widgets/widget.min.css",
  "https://cdn.endorsal.io/widgets/endorsal-reviewhq.min.css",
];

const reviewWidgetScript = "https://cdn.endorsal.io/widgets/reviewhq.min.js";
const reviewWidgetId = "ndrsl-5f370bac03f8820eafd74f79";

export function DripReviewsWidget() {
  useEffect(() => {
    reviewStylesheets.forEach((href) => {
      const existingLink = document.querySelector(`link[href="${href}"]`);

      if (existingLink) {
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });

    const existingScript = document.querySelector('script[data-dripreviews-widget="true"]');

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = reviewWidgetScript;
    script.async = true;
    script.dataset.dripreviewsWidget = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="dripreviews-shell" aria-label="Guest reviews">
      <div className="dripreviews-card">
        <div id={reviewWidgetId} className="ndrsl-widget" />
      </div>
    </div>
  );
}
