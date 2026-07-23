"use client";

import Link from "next/link";
import { useState } from "react";

const months = [
  { id: "2026-09", label: "September 2026", shortLabel: "SEP", monthIndex: 8, year: 2026 },
  { id: "2026-10", label: "October 2026", shortLabel: "OCT", monthIndex: 9, year: 2026 },
  { id: "2026-11", label: "November 2026", shortLabel: "NOV", monthIndex: 10, year: 2026 },
];

const scheduleBands = [
  {
    id: "sep-early",
    accent: "#8cf245",
    glow: "rgba(140, 242, 69, 0.28)",
    hours: "8:00 PM - 10:00 PM",
    label: "SEP: 12 & 18",
    dates: ["2026-09-12", "2026-09-18"],
    note: "Early-season entry window with a tighter nighttime run.",
  },
  {
    id: "sep-late",
    accent: "#26d7ff",
    glow: "rgba(38, 215, 255, 0.26)",
    hours: "7:30 PM - 10:30 PM",
    label: "SEP: 19, 25 & 26",
    dates: ["2026-09-19", "2026-09-25", "2026-09-26"],
    note: "A longer September run with more time to move through the midway.",
  },
  {
    id: "purple-nights",
    accent: "#d545ff",
    glow: "rgba(213, 69, 255, 0.24)",
    hours: "7:00 PM - 10:00 PM",
    label: "OCT: 11, 18, 25, 29  |  NOV: 1",
    dates: ["2026-10-11", "2026-10-18", "2026-10-25", "2026-10-29", "2026-11-01"],
    note: "Prime haunted nights with standard entry pacing and full event atmosphere.",
  },
  {
    id: "peak-october",
    accent: "#ff8b1f",
    glow: "rgba(255, 139, 31, 0.24)",
    hours: "7:00 PM - 11:00 PM",
    label: "OCT: 2, 3, 9, 10, 16, 17, 23, 24, 30 & 31",
    dates: [
      "2026-10-02",
      "2026-10-03",
      "2026-10-09",
      "2026-10-10",
      "2026-10-16",
      "2026-10-17",
      "2026-10-23",
      "2026-10-24",
      "2026-10-30",
      "2026-10-31",
    ],
    note: "Peak October operating nights with the latest closing window of the season.",
  },
  {
    id: "nov-finale",
    accent: "#ff3b32",
    glow: "rgba(255, 59, 50, 0.28)",
    hours: "7:00 PM - 9:30 PM",
    label: "NOV: 6 & 7",
    dates: ["2026-11-06", "2026-11-07"],
    note: "Finale weekend with a shorter box-office window before the season closes.",
  },
];

const featuredEvents = [
  {
    name: "Bourbon Sons Concert: September 25th",
    timing: "8PM-9:30PM",
    description: "Included with Lake Hickory Haunts admission",
  },
  {
    name: "Nightshades Concert: September 26th",
    timing: "",
    description:
      "Three 30 minute shows throughout the night. One of these shows is included with Lake Hickory Haunts admission",
  },
  {
    name: "Screen Used Maximum Overdrive Green Goblin Head: September 25th and 26th",
    timing: "",
    description: "Included with Lake Hickory Haunts admission",
  },
  {
    name: "Screen Used Jeepers Creepers Truck: October 2nd and 3rd",
    timing: "",
    description: "Included with Lake Hickory Haunts admission",
  },
  {
    name: "The Mystery Machine and Ecto-1 Ghostbusters replica cars: October 9th through November 7th",
    timing: "",
    description: "Included with Lake Hickory Haunts admission",
  },
  {
    name: "Small Town Titans Concert: October 30th and 31st",
    timing: "8PM-9:30PM",
    description: "Included with Lake Hickory Haunts admission",
  },
  {
    name: "Contagious Concert: November 7th",
    timing: "8PM-9:30PM",
    description: "Included with Lake Hickory Haunts admission",
  },
  {
    name: "More Live Event Announcements Coming Soon",
    timing: "Stay Tuned",
    description:
      "Check back for additional featured nights, concerts, and special attractions as the season continues.",
  },
];

const dayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const dateToBand = scheduleBands.reduce((lookup, band) => {
  band.dates.forEach((date) => {
    lookup[date] = band;
  });
  return lookup;
}, {});

function parseDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateId(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatReadableDate(dateString) {
  return parseDate(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function buildCalendarDays(monthConfig) {
  const firstOfMonth = new Date(monthConfig.year, monthConfig.monthIndex, 1);
  const calendarStart = new Date(monthConfig.year, monthConfig.monthIndex, 1 - firstOfMonth.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(calendarStart);
    date.setDate(calendarStart.getDate() + index);
    const id = formatDateId(date);

    return {
      id,
      day: date.getDate(),
      isCurrentMonth: date.getMonth() === monthConfig.monthIndex,
      band: dateToBand[id] ?? null,
    };
  });
}

function ClockIcon({ accent }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="23" fill="none" stroke={accent} strokeWidth="3.2" />
      <path d="M32 18v15l10 7" fill="none" stroke={accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 12v4M32 48v4M12 32h4M48 32h4M18.5 18.5l2.8 2.8M42.7 42.7l2.8 2.8M45.5 18.5l-2.8 2.8M21.3 42.7l-2.8 2.8" fill="none" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction = "left" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HoursEventsExperience() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState("2026-09-12");

  const activeMonth = months[activeMonthIndex];
  const calendarDays = buildCalendarDays(activeMonth);
  const selectedBand = dateToBand[selectedDate] ?? null;
  const hasPrevMonth = activeMonthIndex > 0;
  const hasNextMonth = activeMonthIndex < months.length - 1;

  const setMonthByIndex = (nextIndex) => {
    const boundedIndex = Math.min(Math.max(nextIndex, 0), months.length - 1);
    const month = months[boundedIndex];
    const firstActiveDate = scheduleBands
      .flatMap((band) => band.dates)
      .find((date) => date.startsWith(month.id));

    setActiveMonthIndex(boundedIndex);
    setSelectedDate(firstActiveDate ?? `${month.id}-01`);
  };

  const handleBandFocus = (band) => {
    const date = band.dates[0];
    const monthIndex = months.findIndex((month) => date.startsWith(month.id));

    if (monthIndex >= 0) {
      setActiveMonthIndex(monthIndex);
    }

    setSelectedDate(date);
  };

  return (
    <section className="hx-shell">
      <div className="hx-hero">
        <h1 className="hx-title">Hours and Events</h1>
      </div>

      <div className="hx-board">
        <section className="hx-panel hx-schedule-panel" aria-labelledby="hx-schedule-heading">
          <div className="hx-panel-heading">
            <p className="hx-panel-label">Operating Windows</p>
            <h2 id="hx-schedule-heading">Event Hours</h2>
          </div>

          <div className="hx-schedule-list">
            {scheduleBands.map((band) => {
              const isActive = selectedBand?.id === band.id;

              return (
                <button
                  key={band.id}
                  type="button"
                  className={`hx-slot-card ${isActive ? "is-active" : ""}`}
                  style={{ "--hx-accent": band.accent, "--hx-glow": band.glow }}
                  onClick={() => handleBandFocus(band)}
                >
                  <span className="hx-slot-icon">
                    <ClockIcon accent={band.accent} />
                  </span>
                  <span className="hx-slot-copy">
                    <strong>{band.hours}</strong>
                    <span>{band.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hx-office-note">
            The hours above are for the box office. The haunt keeps moving until the last
            ticket-holder enters the attraction.
          </div>
        </section>

        <section className="hx-panel hx-calendar-panel" aria-labelledby="hx-calendar-heading">
          <div className="hx-calendar-top">
            <button
              type="button"
              className="hx-month-arrow"
              aria-label="Show previous month"
              disabled={!hasPrevMonth}
              onClick={() => setMonthByIndex(activeMonthIndex - 1)}
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="hx-month-switcher">
              <h2 id="hx-calendar-heading">{activeMonth.label}</h2>
              <p className="hx-season-range">September 2026 through November 2026</p>
              <div className="hx-month-tabs" aria-label="Available months">
                {months.map((month, index) => (
                  <button
                    key={month.id}
                    type="button"
                    className={`hx-month-tab ${index === activeMonthIndex ? "is-active" : ""}`}
                    onClick={() => setMonthByIndex(index)}
                  >
                    {month.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="hx-month-arrow"
              aria-label="Show next month"
              disabled={!hasNextMonth}
              onClick={() => setMonthByIndex(activeMonthIndex + 1)}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>

          <div className="hx-day-labels" aria-hidden="true">
            {dayLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className="hx-calendar-grid">
            {calendarDays.map((day) => {
              const isSelected = day.id === selectedDate;
              const accent = day.band?.accent ?? "rgba(243, 247, 245, 0.18)";

              return (
                <button
                  key={day.id}
                  type="button"
                  className={[
                    "hx-day",
                    day.isCurrentMonth ? "" : "is-outside",
                    day.band ? "is-event" : "is-dark",
                    isSelected ? "is-selected" : "",
                  ].join(" ").trim()}
                  style={{ "--hx-day-accent": accent }}
                  onClick={() => day.isCurrentMonth && setSelectedDate(day.id)}
                  disabled={!day.isCurrentMonth}
                  aria-pressed={isSelected}
                  aria-label={`${formatReadableDate(day.id)}${day.band ? `, event hours ${day.band.hours}` : ", no public event hours scheduled"}`}
                >
                  {day.day}
                </button>
              );
            })}
          </div>

          <div className="hx-calendar-actions">
            <Link href={`/tickets?date=${selectedDate}`} className="hx-primary-button">
              Get your tickets here
            </Link>
          </div>
        </section>
      </div>

      <section className="hx-events-section" aria-labelledby="hx-events-heading">
        <div className="hx-events-header">
          <p className="hx-panel-label">Lake Hickory Haunts</p>
          <h2 id="hx-events-heading">Special Events</h2>
          <p className="hx-events-intro">
            Special concerts, featured props, and one-night event extras happening on select
            dates throughout the season.
          </p>
        </div>

        <div className="live-events-lineup">
          <div className="live-events-grid">
            {featuredEvents.map((event) => (
              <article className="live-events-card" key={event.name}>
                {event.timing ? <p className="live-events-card-time">{event.timing}</p> : null}
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
