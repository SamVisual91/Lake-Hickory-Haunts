"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const openingNight = new Date("2026-09-12T20:00:00-04:00");

const nightBands = [
  {
    id: "green",
    label: "Green Nights",
    accent: "#8cf245",
    dates: "Sep 12 & 18",
    note: "Best-value early season nights with the cleanest first-pick ticket window.",
  },
  {
    id: "aqua",
    label: "Aqua Nights",
    accent: "#26d7ff",
    dates: "Sep 19, 25 & 26",
    note: "Longer September runs with a little more time to hit the midway too.",
  },
  {
    id: "purple",
    label: "Purple Nights",
    accent: "#d545ff",
    dates: "Oct 11, 18, 25, 29 + Nov 1",
    note: "Prime haunt nights with standard pacing and a full event atmosphere.",
  },
  {
    id: "orange",
    label: "Orange Nights",
    accent: "#ff8b1f",
    dates: "Oct 2, 3, 9, 10, 16, 17, 23, 24, 30 & 31",
    note: "Peak-season dates and some of the highest-demand nights of the year.",
  },
];

function getCountdownParts() {
  const now = Date.now();
  const diff = openingNight.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isLive: false };
}

export function HomeTicketUrgencyBlock() {
  const [countdown, setCountdown] = useState(() => getCountdownParts());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const openingNightLabel = useMemo(
    () =>
      openingNight.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }),
    [],
  );

  return (
    <section className="page-width home-reveal home-ticket-urgency">
      <div className="home-ticket-urgency-shell">
        <div className="home-ticket-urgency-copy">
          <p className="eyebrow">Countdown To Fear</p>
          <h2>Choose your night early before the strongest dates tighten up.</h2>
          <p className="home-ticket-urgency-note">
            Opening night begins <strong>{openingNightLabel}</strong>. Buy early, lock in
            your color night, and give yourself the cleanest shot at premium dates and
            VIP access.
          </p>

          <div className="home-ticket-urgency-actions">
            <Link href="/tickets" className="home-ticket-primary">
              Buy General Admission
            </Link>
            <Link href="/tickets" className="home-ticket-secondary">
              Explore VIP Access
            </Link>
          </div>

          <div className="home-ticket-urgency-rule">
            <strong>Ticket Flex Rule</strong>
            <span>
              If your plans change, your ticket can still be used on the same color night
              or a lighter one.
            </span>
          </div>
        </div>

        <div className="home-ticket-urgency-panel">
          <div className={`home-ticket-countdown ${countdown.isLive ? "is-live" : ""}`}>
            <div className="home-ticket-countdown-header">
              <span>{countdown.isLive ? "Now Open" : "Opening Night Countdown"}</span>
              <strong>September 12, 2026</strong>
            </div>

            <div className="home-ticket-countdown-grid" aria-label="Countdown to opening night">
              <div className="home-ticket-countdown-unit">
                <span>{String(countdown.days).padStart(2, "0")}</span>
                <small>Days</small>
              </div>
              <div className="home-ticket-countdown-unit">
                <span>{String(countdown.hours).padStart(2, "0")}</span>
                <small>Hours</small>
              </div>
              <div className="home-ticket-countdown-unit">
                <span>{String(countdown.minutes).padStart(2, "0")}</span>
                <small>Minutes</small>
              </div>
              <div className="home-ticket-countdown-unit">
                <span>{String(countdown.seconds).padStart(2, "0")}</span>
                <small>Seconds</small>
              </div>
            </div>
          </div>

          <div className="home-ticket-night-band-grid">
            {nightBands.map((band) => (
              <article
                key={band.id}
                className="home-ticket-night-band-card"
                style={{ "--night-band-accent": band.accent }}
              >
                <p>{band.label}</p>
                <strong>{band.dates}</strong>
                <span>{band.note}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
