"use client";

import { useEffect, useMemo, useState } from "react";
import { submitHauntPayDateSelection } from "../lib/hauntpay";

const bookingWeekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const bookingMonths = [
  {
    monthIndex: 8,
    monthName: "September",
    year: 2026,
    availableDates: [12, 18, 19, 25, 26],
  },
  {
    monthIndex: 9,
    monthName: "October",
    year: 2026,
    availableDates: [2, 3, 9, 10, 11, 16, 17, 18, 23, 24, 25, 29, 30, 31],
  },
  {
    monthIndex: 10,
    monthName: "November",
    year: 2026,
    availableDates: [1, 6, 7],
  },
];

const bookingScheduleBands = [
  {
    id: "green-night",
    name: "Green Nights",
    accent: "#63f000",
    glow: "rgba(99, 240, 0, 0.28)",
    note: "Least crowded nights of the season.",
    crowdLabel: "Least crowded",
    timeOptions: ["7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"],
    dates: ["2026-09-12", "2026-09-18", "2026-09-19", "2026-10-11", "2026-10-29", "2026-11-01", "2026-11-06", "2026-11-07"],
    onlinePrices: [
      "General Admission: $32 (plus tax)",
      "Fast Pass: $48 (plus tax)",
      "VIP Pass: $66 (plus tax)",
    ],
    inPersonPrices: [
      "General Admission: $34 (plus tax)",
      "Fast Pass: $49 (plus tax)",
      "VIP Pass: $68 (plus tax)",
    ],
  },
  {
    id: "yellow-night",
    name: "Yellow Nights",
    accent: "#f8ff00",
    glow: "rgba(248, 255, 0, 0.28)",
    note: "Less crowded nights with a little more energy.",
    crowdLabel: "Less crowded",
    timeOptions: ["7:30 PM", "8:00 PM", "8:30 PM", "9:30 PM"],
    dates: ["2026-09-25", "2026-09-26", "2026-10-02", "2026-10-09", "2026-10-16", "2026-10-18", "2026-10-23", "2026-10-25"],
    onlinePrices: [
      "General Admission: $36 (plus tax)",
      "Fast Pass: $52 (plus tax)",
      "VIP Pass: $69 (plus tax)",
    ],
    inPersonPrices: [
      "General Admission: $38 (plus tax)",
      "Fast Pass: $55 (plus tax)",
      "VIP Pass: $72 (plus tax)",
    ],
  },
  {
    id: "orange-night",
    name: "Orange Nights",
    accent: "#ff9c27",
    glow: "rgba(255, 156, 39, 0.24)",
    note: "More crowded nights with the biggest demand.",
    crowdLabel: "More crowded",
    timeOptions: ["7:00 PM", "8:00 PM", "9:30 PM", "11:00 PM"],
    dates: ["2026-10-03", "2026-10-10", "2026-10-17", "2026-10-24", "2026-10-30", "2026-10-31"],
    onlinePrices: [
      "General Admission: $39 (plus tax)",
      "Fast Pass: $56 (plus tax)",
      "VIP Pass: $74 (plus tax)",
    ],
    inPersonPrices: [
      "General Admission: $42 (plus tax)",
      "Fast Pass: $58 (plus tax)",
      "VIP Pass: $77 (plus tax)",
    ],
  },
];

const bookingDateToBand = bookingScheduleBands.reduce((lookup, band) => {
  band.dates.forEach((date) => {
    lookup[date] = band;
  });
  return lookup;
}, {});

const ticketInfoPanels = [
  {
    id: "vip-info",
    accentVariant: "vip-highlight",
    eyebrow: "Best Experience",
    title: "VIP Pass",
    bullets: [
      "Immediate access to the haunt with no wait time on the midway or in queue (faster than Fast Pass).",
      "Exclusive access to the VIP lounge with a snack and water included.",
      "A free VIP sticker or trading card.",
      "One free midway attraction ticket for a midway attraction of your choice. Does not include escape rooms.",
      "$5 credit for the gift shop, concessions, or midway ticket booth.",
      "Free printed photo.",
    ],
  },
  {
    id: "fastpass-info",
    accentVariant: "fastpass-highlight",
    eyebrow: "Skip The Line",
    title: "Fast Pass",
    paragraphs: [
      "Fast Pass admission is an upgrade to a much shorter line which moves much faster than the General Admission line.",
      "Plus, no wait on the midway.",
    ],
  },
  {
    id: "general-info",
    accentVariant: "general-highlight",
    eyebrow: "Great Value",
    title: "General Admission",
    paragraphs: [
      "General Admission includes admission to all 13 main attractions with a standard wait time.",
    ],
  },
];

const ticketThingsToKnow = [
  "All 13 main attractions are included with all admission types.",
  "Standard Parking is $5 per car, Premier Parking (the closest and best parking spots) is $10 per car, and large passenger vehicles (20+ passengers) are $20 per car. Parking is cash or card.",
  "All ticket types are valid for one use only.",
  "When purchasing tickets, select which night you plan to visit. If you are unable to visit on the night you chose, you may use your ticket on any night that matches your night's color or is a lighter color than yours. If you can only visit on a darker color night, you may visit Will Call upon arrival and pay the difference.",
  "Military, Police, Fire, and EMS discount: $5 Off in-person with ID. (May not be combined with any other discounts, offers, and/or coupons).",
  "Sales tax is not included in prices.",
];

function buildTimeOptions(startHour, startMinute, endHour, endMinute) {
  const options = [];
  const cursor = new Date(2026, 8, 1, startHour, startMinute, 0, 0);
  const end = new Date(2026, 8, 1, endHour, endMinute, 0, 0);

  while (cursor <= end) {
    options.push(
      cursor.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    );
    cursor.setMinutes(cursor.getMinutes() + 30);
  }

  return options;
}

function buildCalendarCells(year, monthIndex) {
  const firstDayOffset = new Date(year, monthIndex, 1).getDay();
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();
  const leadingCells = Array.from({ length: firstDayOffset }, () => null);
  const dateCells = Array.from({ length: totalDays }, (_, index) => index + 1);
  return [...leadingCells, ...dateCells];
}

function formatBookingDateId(year, monthIndex, day) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function resolveInitialBookingSelection(initialDate) {
  if (!initialDate) {
    return { monthIndex: 0, day: 12 };
  }

  const [yearString, monthString, dayString] = initialDate.split("-");
  const requestedYear = Number.parseInt(yearString, 10);
  const requestedMonth = Number.parseInt(monthString, 10);
  const requestedDay = Number.parseInt(dayString, 10);

  if ([requestedYear, requestedMonth, requestedDay].some((value) => Number.isNaN(value))) {
    return { monthIndex: 0, day: 12 };
  }

  const matchedMonthIndex = bookingMonths.findIndex(
    (month) =>
      month.year === requestedYear &&
      month.monthIndex === requestedMonth - 1 &&
      month.availableDates.includes(requestedDay),
  );

  if (matchedMonthIndex === -1) {
    return { monthIndex: 0, day: 12 };
  }

  return { monthIndex: matchedMonthIndex, day: requestedDay };
}

export function GeneralAdmissionDateTimePage({ titleClassName, initialDate = null }) {
  const initialSelection = useMemo(() => resolveInitialBookingSelection(initialDate), [initialDate]);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(initialSelection.monthIndex);
  const [selectedDate, setSelectedDate] = useState(initialSelection.day);

  const activeMonth = bookingMonths[selectedMonthIndex] ?? bookingMonths[0];
  const bookingAvailableDates = activeMonth.availableDates;
  const bookingCalendarCells = useMemo(
    () => buildCalendarCells(activeMonth.year, activeMonth.monthIndex),
    [activeMonth.monthIndex, activeMonth.year],
  );

  const selectedDateId = formatBookingDateId(activeMonth.year, activeMonth.monthIndex, selectedDate);
  const canGoPrevMonth = selectedMonthIndex > 0;
  const canGoNextMonth = selectedMonthIndex < bookingMonths.length - 1;

  useEffect(() => {
    if (!bookingAvailableDates.includes(selectedDate)) {
      setSelectedDate(bookingAvailableDates[0] ?? activeMonth.availableDates[0] ?? 1);
    }
  }, [activeMonth.availableDates, bookingAvailableDates, selectedDate]);

  return (
    <main className="page-shell ga2-page">
      <section className="ga2-shell">
        <div className="ga2-backdrop" aria-hidden="true" />

        <section className="page-width ga2-hero">
          <div className="ga2-copy">
            <h1 className={titleClassName}>
              <span className="ga2-title-top">Face Your</span>
              <span className="ga2-title-bottom">Fears</span>
            </h1>
            <p className="ga2-lede">
              Plan a fun-filled night of spooky adventures and unforgettable memories at The Premier <span>Haunted Attraction</span> of the Carolinas
            </p>

            <div className="ga2-hero-note">
              <span>Plan Your Night</span>
              <strong>Choose your date, compare ticket options, and book the experience that fits your night best.</strong>
            </div>
          </div>
        </section>

        <section className="page-width ga2-grid ga2-grid-lite">
          <div className="ga2-main ga2-main-lite">
            <div className="ga2-next-step-heading">
              <h2>Select your date</h2>
              <span className="ga2-next-step-brush" aria-hidden="true" />
            </div>

            <section className="ga2-booking-strip" aria-label="Select date">
              <div className="ga2-booking-calendar">
                <div className="ga2-booking-monthbar">
                  <button
                    type="button"
                    className="ga2-booking-chevron is-prev"
                    aria-label="Previous month"
                    onClick={() => canGoPrevMonth && setSelectedMonthIndex((current) => current - 1)}
                    disabled={!canGoPrevMonth}
                  >
                    {"\u2039"}
                  </button>
                  <div className="ga2-booking-monthcopy">
                    <strong>{activeMonth.monthName} {activeMonth.year}</strong>
                    <span>September 2026 through November 2026</span>
                  </div>
                  <button
                    type="button"
                    className="ga2-booking-chevron is-next"
                    aria-label="Next month"
                    onClick={() => canGoNextMonth && setSelectedMonthIndex((current) => current + 1)}
                    disabled={!canGoNextMonth}
                  >
                    {"\u203A"}
                  </button>
                </div>

                <div className="ga2-booking-weekdays" aria-hidden="true">
                  {bookingWeekdays.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className="ga2-booking-dates">
                  {bookingCalendarCells.map((date, index) => {
                    if (date === null) {
                      return <span key={`booking-empty-${index}`} className="ga2-booking-empty" aria-hidden="true" />;
                    }

                    const isAvailable = bookingAvailableDates.includes(date);
                    const isSelected = selectedDate === date;
                    const dateId = formatBookingDateId(activeMonth.year, activeMonth.monthIndex, date);
                    const dateBand = bookingDateToBand[dateId];
                    const accent = dateBand?.accent ?? "#95f53a";
                    const glow = dateBand?.glow ?? "rgba(149, 245, 58, 0.2)";
                    return (
                      <button
                        key={`${activeMonth.monthName}-${date}`}
                        type="button"
                        className={`ga2-booking-date ${isAvailable ? "is-available" : ""} ${isSelected ? "is-selected" : ""}`}
                        style={isAvailable ? { "--ga2-date-accent": accent, "--ga2-date-glow": glow } : undefined}
                        onClick={() => {
                          if (isAvailable) {
                            submitHauntPayDateSelection(dateId);
                          }
                        }}
                        disabled={!isAvailable}
                      >
                        <span>{date}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="ga2-ticket-info-shell" aria-label="Compare ticket options">
                  <div className="ga2-ticket-info-row">
                    {ticketInfoPanels.map((panel) => (
                      <article
                        key={panel.id}
                        className={`ga2-ticket-info-card ga2-ticket-info-card--${panel.accentVariant}`}
                      >
                        <div className="ga2-ticket-info-copy">
                          <span className="ga2-ticket-info-pill">{panel.eyebrow}</span>
                          <h3>{panel.title}</h3>

                          {panel.bullets ? (
                            <ul className="ga2-ticket-info-list">
                              {panel.bullets.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : null}

                          {panel.paragraphs ? (
                            <div className="ga2-ticket-info-paragraphs">
                              {panel.paragraphs.map((item) => (
                                <p key={item}>{item}</p>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <a
                          className="ga2-ticket-info-action"
                          href="https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789287"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Buy Now
                        </a>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="ga2-booking-pricing" aria-label="Night pricing tiers">
                  {bookingScheduleBands.map((band) => (
                    <article
                      key={band.id}
                      className="ga2-booking-pricing-card"
                      style={{ "--ga2-pricing-accent": band.accent, "--ga2-pricing-glow": band.glow }}
                    >
                      <header className="ga2-booking-pricing-head">
                        <strong>{band.name}</strong>
                        <small>({band.crowdLabel.toUpperCase()})</small>
                      </header>
                      <div className="ga2-booking-pricing-copy">
                        <p>Online tickets:</p>
                        <ul>
                          {band.onlinePrices.map((price) => (
                            <li key={price}>{price}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="ga2-booking-pricing-copy">
                        <p>In-person tickets:</p>
                        <ul>
                          {band.inPersonPrices.map((price) => (
                            <li key={price}>{price}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="ga2-ticket-disclaimer" aria-label="Things to know">
          <div className="ga2-ticket-disclaimer-shell">
            <p className="ga2-ticket-disclaimer-kicker">Things to Know</p>
            <ul className="ga2-ticket-disclaimer-list">
              {ticketThingsToKnow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
