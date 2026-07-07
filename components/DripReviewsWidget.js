"use client";

import { useEffect } from "react";

const propertyId = "5f36c60103f8820eafd74c5a";
const reviewWidgetScript = "https://cdn.endorsal.io/widgets/widget.min.js";

export function DripReviewsWidget() {
  useEffect(() => {
    const existingContainer = document.getElementById("NDRSL-reviewhq");

    if (existingContainer) {
      existingContainer.remove();
    }

    const initWidget = () => {
      if (typeof window === "undefined" || typeof window.NDRSL?.init !== "function") {
        return;
      }

      window.NDRSL.init(propertyId);
    };

    const existingScript = document.querySelector('script[data-dripreviews-widget="true"]');

    if (existingScript) {
      initWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = reviewWidgetScript;
    script.async = true;
    script.defer = true;
    script.dataset.dripreviewsWidget = "true";
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
