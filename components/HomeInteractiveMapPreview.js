"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const mapStops = [
  {
    id: "gate",
    kicker: "Arrival",
    label: "Front Gate",
    title: "Entry Gate & Ticketing",
    description:
      "Start at the gate, lock in your night color, and move straight into the scream route with fast access to admissions and will call.",
    accent: "#f4b04f",
    href: "/tickets/general-admission",
    cta: "View Admission Options",
    top: "74%",
    left: "12%",
    stats: ["Will Call", "Admission", "Entry"],
  },
  {
    id: "attractions",
    kicker: "Main Route",
    label: "13 Attractions",
    title: "The Full Haunt Path",
    description:
      "See where the scream trail branches into all thirteen major attractions, built for guests who want the full cinematic night.",
    accent: "#ff6c3d",
    href: "/attractions",
    cta: "Explore Attractions",
    top: "28%",
    left: "33%",
    stats: ["13 Main Attractions", "Multi-Scene", "Full Route"],
  },
  {
    id: "midway",
    kicker: "Interactive Zone",
    label: "Midway of Mayhem",
    title: "Games, chaos, and midway energy",
    description:
      "Step off the attraction path and into games, challenge stations, live energy, and the full Things to Do lineup in one high-impact zone.",
    accent: "#7bf36a",
    href: "/whileyouwait",
    cta: "Open Things To Do",
    top: "48%",
    left: "51%",
    stats: ["Games", "Food", "VIP"],
  },
  {
    id: "kraken",
    kicker: "Fuel Stop",
    label: "Kraken Kitchen",
    title: "Spooky eats between scream runs",
    description:
      "Pause for food, warm drinks, and quick refuel stops without losing the pace of the night. Kraken Kitchen anchors the midway break point.",
    accent: "#8cf245",
    href: "/whileyouwait",
    cta: "See Midway Food",
    top: "63%",
    left: "77%",
    stats: ["Food", "Drinks", "Quick Stop"],
  },
  {
    id: "vip",
    kicker: "Upgrade Route",
    label: "VIP Lounge",
    title: "Private access and premium comfort",
    description:
      "Map your premium route with private lounge access, upgraded comfort, and an easier way to pace your night between headline scares.",
    accent: "#d545ff",
    href: "/tickets/general-admission",
    cta: "See VIP Access",
    top: "82%",
    left: "84%",
    stats: ["VIP", "Private Access", "Refreshments"],
  },
];

export function HomeInteractiveMapPreview() {
  const [activeStopId, setActiveStopId] = useState("midway");

  const activeStop = useMemo(
    () => mapStops.find((stop) => stop.id === activeStopId) ?? mapStops[0],
    [activeStopId],
  );

  return (
    <section className="page-width home-reveal home-map-preview">
      <div className="home-map-preview-header">
        <p className="eyebrow">Interactive Preview</p>
        <h2>Preview the property before you ever step through the gate.</h2>
        <p className="home-map-preview-note">
          Hover the map stops to preview where the major night experiences live, then
          jump straight into tickets, attractions, events, or the midway.
        </p>
      </div>

      <div className="home-map-preview-board">
        <div className="home-map-stage" aria-label="Interactive preview map of Lake Hickory Haunts">
          <div className="home-map-stage-glow home-map-stage-glow-left" aria-hidden="true" />
          <div className="home-map-stage-glow home-map-stage-glow-right" aria-hidden="true" />

          <svg className="home-map-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M12 74 C18 64, 23 52, 33 28 S46 15, 70 19" />
            <path d="M33 28 C39 42, 45 49, 51 48 S67 42, 70 19" />
            <path d="M51 48 C63 58, 72 64, 77 63 S83 70, 84 82" />
            <path d="M51 48 C57 44, 63 36, 70 19" />
          </svg>

          <div className="home-map-centerpiece" aria-hidden="true">
            <span className="home-map-centerpiece-ring" />
            <strong>Midway</strong>
            <span>of Mayhem</span>
          </div>

          {mapStops.map((stop) => {
            const isActive = stop.id === activeStop.id;

            return (
              <button
                key={stop.id}
                type="button"
                className={`home-map-pin ${isActive ? "is-active" : ""}`}
                style={{
                  "--pin-accent": stop.accent,
                  top: stop.top,
                  left: stop.left,
                }}
                onMouseEnter={() => setActiveStopId(stop.id)}
                onFocus={() => setActiveStopId(stop.id)}
                onClick={() => setActiveStopId(stop.id)}
                aria-pressed={isActive}
              >
                <span className="home-map-pin-dot" aria-hidden="true" />
                <span className="home-map-pin-label">{stop.label}</span>
              </button>
            );
          })}
        </div>

        <aside
          className="home-map-detail-card"
          style={{ "--map-accent": activeStop.accent }}
          aria-live="polite"
        >
          <p className="home-map-detail-kicker">{activeStop.kicker}</p>
          <h3>{activeStop.title}</h3>
          <p className="home-map-detail-copy">{activeStop.description}</p>

          <div className="home-map-detail-stats">
            {activeStop.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>

          <Link href={activeStop.href} className="home-map-detail-cta">
            {activeStop.cta}
          </Link>

          <div className="home-map-detail-list">
            {mapStops.map((stop) => (
              <button
                key={stop.id}
                type="button"
                className={`home-map-detail-listitem ${stop.id === activeStop.id ? "is-active" : ""}`}
                style={{ "--detail-item-accent": stop.accent }}
                onMouseEnter={() => setActiveStopId(stop.id)}
                onFocus={() => setActiveStopId(stop.id)}
                onClick={() => setActiveStopId(stop.id)}
              >
                <span>{stop.label}</span>
                <span>{stop.kicker}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
