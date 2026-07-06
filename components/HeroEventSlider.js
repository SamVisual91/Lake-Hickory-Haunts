"use client";

import { useEffect, useState } from "react";

const events = [
  {
    label: "2026 Season",
    title: "Thirteen attractions. One massive night at Lake Hickory Haunts.",
    description:
      "Prepare for a night filled with Thrills, Chills, and Fun! Learn more about all 13 Attractions to get the most out of your visit.",
    href: "/attractions",
    cta: "Learn More",
  },
  {
    label: "New for 2026",
    title: "Descend deeper with the new Descent cave expansion.",
    description:
      "Follow the darker tunnels, creature encounters, and underground mystery that make Descent one of the biggest new reasons to come back this season.",
    href: "/attractions/descent",
    cta: "See Descent",
  },
  {
    label: "Plan the Night",
    title: "Grab tickets, hit the Midway, and refuel at Kraken's Kitchen.",
    description:
      "Build the full night from your ticket plan to midway photo ops, roaming characters, quick bites, and warm drinks between attractions.",
    href: "/tickets/general-admission",
    cta: "Get Tickets",
  },
];

export function HeroEventSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current === events.length - 1 ? 0 : current + 1));
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <aside className="hero-event-card">
      <div className="hero-event-top">
        <p className="panel-label">{events[activeIndex].label}</p>
      </div>

      <div className="hero-event-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {events.map((event) => (
          <article className="hero-event-slide" key={event.title}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <a
              className="hero-event-button"
              href={event.href}
              target={event.href.startsWith("http") ? "_blank" : undefined}
              rel={event.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {event.cta}
            </a>
          </article>
        ))}
      </div>
    </aside>
  );
}
