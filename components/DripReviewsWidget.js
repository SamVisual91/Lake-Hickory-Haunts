"use client";

import { useEffect } from "react";

const reviewStylesheets = [
  "https://cdn.endorsal.io/widgets/endorsal-testimonials.min.css",
  "https://cdn.endorsal.io/widgets/widget.min.css",
  "https://cdn.endorsal.io/widgets/endorsal-reviewhq.min.css",
];

const reviewWidgetScript = "https://cdn.endorsal.io/widgets/reviewhq.min.js";
const reviewWidgetId = "ndrsl-5f370bac03f8820eafd74f79";
const reviewFormUrl = "https://forms.dripreviews.com/form/5f74c107223c151ce6268a55";

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
    <section className="dripreviews-shell page-width" aria-label="Guest reviews">
      <div className="dripreviews-header">
        <p className="about-carousel-label">Guest Reviews</p>
        <h2>See what guests are saying.</h2>
        <p className="dripreviews-intro">
          This section reuses the same DripReviews widget from the old site, so your
          reviews can stay managed in one place while still showing up on the new site.
        </p>
      </div>

      <div className="dripreviews-card">
        <div id={reviewWidgetId} className="ndrsl-widget" />
      </div>

      <div className="dripreviews-actions">
        <a className="dripreviews-feedback-link" href={reviewFormUrl} target="_blank" rel="noreferrer">
          Leave Feedback
        </a>
      </div>
    </section>
  );
}
