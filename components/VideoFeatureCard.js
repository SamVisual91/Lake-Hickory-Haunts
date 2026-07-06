"use client";

import { useState } from "react";

export function VideoFeatureCard({
  thumbnailSrc = "/assets/doc-thumb-base.jpg",
  thumbnailAlt = "Lake Hickory Haunts video thumbnail",
  embedUrl,
  badge,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="event-video-shell">
      {isPlaying ? (
        <iframe
          className="event-video-frame"
          src={embedUrl}
          title={thumbnailAlt}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" className="event-video-trigger" onClick={() => setIsPlaying(true)}>
          <img src={thumbnailSrc} alt={thumbnailAlt} />
          <span className="event-video-overlay" aria-hidden="true">
            {badge ? <span className="event-video-badge">{badge}</span> : null}
            <span className="event-video-hoverplay">&#9654;</span>
          </span>
        </button>
      )}
    </div>
  );
}
