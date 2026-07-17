"use client";

import { useEffect, useState } from "react";
import { submitHauntPayDateSelection } from "../lib/hauntpay";

const ticketSaleNotes = [
  {
    label: "Ticket Update",
    title: "Buy early and lock the lower online rate.",
  },
  {
    label: "Weekend Tip",
    title: "Orange nights move fastest once prime arrival slots open.",
  },
  {
    label: "Group Note",
    title: "Groups of 10+ should plan early for the smoothest entry.",
  },
];

const pricingPanels = [
  {
    name: "General Admission",
    variant: "general",
    iconSrc: "/assets/ticket-icon-general-green.png",
    title: (
      <>
        <span>General</span>
        <span>Admission</span>
      </>
    ),
    description: "Access to all attractions.",
    price: "$32.99",
    priceValue: 32.99,
    purchaseLabel: "Online",
    purchaseNote: "$39.99 at the gate",
  },
  {
    name: "Fast Pass",
    variant: "fastpass",
    iconSrc: "/assets/ticket-icon-fastpass-green.png",
    badge: "Most Popular",
    title: (
      <>
        <span>Fast</span>
        <span>Pass</span>
      </>
    ),
    description: "Skip the regular lines once per attraction.",
    price: "$59.99",
    priceValue: 59.99,
    purchaseLabel: "Online",
    purchaseNote: "$69.99 at the gate",
  },
  {
    name: "VIP Experience",
    variant: "vip",
    iconSrc: "/assets/ticket-icon-vip-orange.png",
    title: (
      <>
        <span>VIP</span>
        <span>Experience</span>
      </>
    ),
    description: "Unlimited priority access all night long.",
    price: "$89.99",
    priceValue: 89.99,
    purchaseLabel: "Online",
    purchaseNote: "$99.99 at the gate",
  },
  {
    name: "Group Rate",
    variant: "group",
    iconSrc: null,
    title: (
      <>
        <span>Group</span>
        <span>Rate</span>
      </>
    ),
    description: "Save big with groups of 15 or more.",
    price: "$27.99",
    priceValue: 27.99,
    purchaseLabel: "Each",
    purchaseNote: "Online only",
  },
];

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
    name: "Green Night",
    accent: "#8cf245",
    glow: "rgba(140, 242, 69, 0.28)",
    hours: "8:00 PM - 10:00 PM",
    note: "Earlier-season night with lighter crowds and a tighter box-office window.",
    legend: "Lower-demand night",
    timeOptions: ["7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"],
    dates: ["2026-09-12", "2026-09-18"],
  },
  {
    id: "yellow-night",
    name: "Yellow Night",
    accent: "#ffd84a",
    glow: "rgba(255, 216, 74, 0.28)",
    hours: "7:30 PM - 10:30 PM",
    note: "Extended September schedule with more breathing room on the midway.",
    legend: "Extended September run",
    timeOptions: ["7:30 PM", "8:00 PM", "8:30 PM", "9:30 PM"],
    dates: ["2026-09-19", "2026-09-25", "2026-09-26"],
  },
  {
    id: "purple-night",
    name: "Purple Night",
    accent: "#d545ff",
    glow: "rgba(213, 69, 255, 0.24)",
    hours: "7:00 PM - 10:00 PM",
    note: "Prime-season standard haunt night with a strong crowd and full scare pacing.",
    legend: "Prime standard night",
    timeOptions: ["7:00 PM", "7:30 PM", "8:00 PM", "9:00 PM"],
    dates: ["2026-10-11", "2026-10-18", "2026-10-25", "2026-10-29", "2026-11-01"],
  },
  {
    id: "orange-night",
    name: "Orange Night",
    accent: "#ff8b1f",
    glow: "rgba(255, 139, 31, 0.24)",
    hours: "7:00 PM - 11:00 PM",
    note: "Peak October demand night with the latest closing window of the season.",
    legend: "Peak-demand night",
    timeOptions: ["7:00 PM", "8:00 PM", "9:30 PM", "11:00 PM"],
    dates: ["2026-10-02", "2026-10-03", "2026-10-09", "2026-10-10", "2026-10-16", "2026-10-17", "2026-10-23", "2026-10-24", "2026-10-30", "2026-10-31"],
  },
  {
    id: "red-night",
    name: "Red Night",
    accent: "#ff3b32",
    glow: "rgba(255, 59, 50, 0.28)",
    hours: "7:00 PM - 9:30 PM",
    note: "Finale weekend with a shorter nightly window before the season closes.",
    legend: "Finale weekend",
    timeOptions: ["7:00 PM", "7:30 PM", "8:00 PM", "9:00 PM"],
    dates: ["2026-11-06", "2026-11-07"],
  },
];

const bookingDateToBand = bookingScheduleBands.reduce((lookup, band) => {
  band.dates.forEach((date) => {
    lookup[date] = band;
  });
  return lookup;
}, {});

const ticketPricingByBand = {
  "green-night": {
    general: 32,
    fastpass: 48,
    vip: 66,
  },
  "yellow-night": {
    general: 36,
    fastpass: 52,
    vip: 69,
  },
  "orange-night": {
    general: 39,
    fastpass: 56,
    vip: 74,
  },
  "purple-night": {
    general: 39,
    fastpass: 56,
    vip: 74,
  },
  "red-night": {
    general: 39,
    fastpass: 56,
    vip: 74,
  },
};

function formatTicketPrice(value) {
  return `$${value}`;
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

const addOnPanels = [
  {
    id: "vip-parking",
    name: "VIP Parking",
    description: "Closest parking to the front gate.",
    price: "+$20",
    priceValue: 20,
    icon: "parking",
  },
  {
    id: "escape-rooms",
    name: "Escape Rooms",
    description: "Add a private horror escape challenge.",
    price: "+$25",
    priceValue: 25,
    icon: "escape",
  },
  {
    id: "midway-games",
    name: "Mid-Way Games",
    description: "Play carnival-style games between scares.",
    price: "+$15",
    priceValue: 15,
    icon: "games",
  },
  {
    id: "merch-bundle",
    name: "Merch Bundles",
    description: "Haunt tee, lanyard & mystery item.",
    price: "+$30",
    priceValue: 30,
    icon: "merch",
  },
];

const ticketInfoPanels = [
  {
    id: "vip-info",
    accentVariant: "vip-highlight",
    linkedVariant: "vip",
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
    linkedVariant: "fastpass",
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
    linkedVariant: "general",
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

function TicketCardIcon({ panel }) {
  if (panel.iconSrc) {
    return <img src={panel.iconSrc} alt="" aria-hidden="true" />;
  }

  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="28" r="16" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="28" cy="42" r="13" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="92" cy="42" r="13" fill="none" stroke="currentColor" strokeWidth="6" />
      <path
        d="M38 88c0-13.2 9.8-24 22-24s22 10.8 22 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M8 84c0-11 8.2-20 18.6-20 6.4 0 11.8 2.8 15.2 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M112 84c0-11-8.2-20-18.6-20-6.4 0-11.8 2.8-15.2 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AddOnIcon({ type }) {
  if (type === "parking") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="11" y="8" width="42" height="48" rx="12" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M24 45V19h11c5.3 0 9 3.2 9 8.1S40.3 35 35 35h-11" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 34h11" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "escape") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 12h28a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H18z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M18 12v40" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="39" cy="32" r="2.8" fill="currentColor" />
        <path d="M11 32h18" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
        <path d="m24 24 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "games") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="24" width="40" height="20" rx="10" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M22 34h10" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M27 29v10" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="40" cy="31" r="2.5" fill="currentColor" />
        <circle cx="45" cy="36" r="2.5" fill="currentColor" />
        <path d="m18 24 5-8m23 8 5-8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 19h28l-4 34H22l-4-34Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 19c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M26 30h12m-12 8h12m-12 8h8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function GeneralAdmissionPage({ titleClassName = "", initialDate = null }) {
  const initialSelection = resolveInitialBookingSelection(initialDate);
  const syncedFromParkHours = Boolean(initialDate);
  const [saleNoteIndex, setSaleNoteIndex] = useState(0);
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(initialSelection.monthIndex);
  const [selectedDate, setSelectedDate] = useState(initialSelection.day);
  const [adultCount, setAdultCount] = useState(2);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([]);
  const [subtotalTick, setSubtotalTick] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const activeMonth = bookingMonths[selectedMonthIndex] ?? bookingMonths[0];
  const bookingCalendarCells = buildCalendarCells(activeMonth.year, activeMonth.monthIndex);
  const bookingAvailableDates = activeMonth.availableDates;
  const activeSaleNote = ticketSaleNotes[saleNoteIndex] ?? ticketSaleNotes[0];
  const selectedDateLabel = `${activeMonth.monthName} ${selectedDate}, ${activeMonth.year}`;
  const canGoPrevMonth = selectedMonthIndex > 0;
  const canGoNextMonth = selectedMonthIndex < bookingMonths.length - 1;
  const selectedDateId = formatBookingDateId(activeMonth.year, activeMonth.monthIndex, selectedDate);
  const selectedBand = bookingDateToBand[selectedDateId] ?? bookingScheduleBands[0];
  const bandPricing = ticketPricingByBand[selectedBand.id] ?? ticketPricingByBand["orange-night"];
  const displayedPricingPanels = pricingPanels.map((panel) => {
    const dynamicPriceValue = bandPricing[panel.variant];

    if (typeof dynamicPriceValue !== "number") {
      return panel;
    }

    return {
      ...panel,
      price: formatTicketPrice(dynamicPriceValue),
      priceValue: dynamicPriceValue,
    };
  });
  const selectedPanel = displayedPricingPanels[selectedPanelIndex] ?? displayedPricingPanels[0];
  const selectedAddOns = addOnPanels.filter((panel) => selectedAddOnIds.includes(panel.id));
  const addOnSubtotal = selectedAddOns.reduce((sum, panel) => sum + panel.priceValue, 0);
  const ticketLineTotal = selectedPanel.priceValue * adultCount;
  const subtotal = ticketLineTotal + addOnSubtotal;
  const minimumGuests = selectedPanel.variant === "group" ? 15 : 1;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSaleNoteIndex((current) => (current + 1) % ticketSaleNotes.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!bookingAvailableDates.includes(selectedDate)) {
      setSelectedDate(bookingAvailableDates[0]);
    }
  }, [bookingAvailableDates, selectedDate]);

  useEffect(() => {
    if (adultCount < minimumGuests) {
      setAdultCount(minimumGuests);
    }
  }, [adultCount, minimumGuests]);

  useEffect(() => {
    setSubtotalTick(true);
    const timer = window.setTimeout(() => {
      setSubtotalTick(false);
    }, 240);

    return () => window.clearTimeout(timer);
  }, [subtotal, selectedPanelIndex, selectedDate, adultCount, selectedAddOnIds]);

  useEffect(() => {
    document.body.classList.toggle("ga2-checkout-open", checkoutDrawerOpen);
    return () => document.body.classList.remove("ga2-checkout-open");
  }, [checkoutDrawerOpen]);

  const toggleAddOn = (addOnId) => {
    setSelectedAddOnIds((current) =>
      current.includes(addOnId) ? current.filter((id) => id !== addOnId) : [...current, addOnId],
    );
  };

  const updateAdultCount = (nextValue) => {
    if (Number.isNaN(nextValue)) {
      setAdultCount(minimumGuests);
      return;
    }

    setAdultCount(Math.max(minimumGuests, nextValue));
  };

  const resetBooking = () => {
    setSelectedPanelIndex(0);
    setSelectedMonthIndex(initialSelection.monthIndex);
    setSelectedDate(initialSelection.day);
    setAdultCount(2);
    setSelectedAddOnIds([]);
    setCheckoutStep("cart");
  };

  const handleTicketCheckoutSubmit = (event) => {
    event.preventDefault();
    setCheckoutStep("confirmation");
  };

  const openCheckoutDrawer = () => {
    setCheckoutDrawerOpen(true);
    setCheckoutStep("cart");
  };

  const handleTicketInfoSelect = (linkedVariant) => {
    const matchedIndex = displayedPricingPanels.findIndex((panel) => panel.variant === linkedVariant);
    if (matchedIndex !== -1) {
      setSelectedPanelIndex(matchedIndex);
    }
    openCheckoutDrawer();
  };

  const closeCheckoutDrawer = () => {
    setCheckoutDrawerOpen(false);
    setCheckoutStep("cart");
  };

  return (
    <main className="page-shell ga2-page">
      <section className="ga2-shell">
        <div className="ga2-backdrop" aria-hidden="true" />

        <section className="page-width ga2-hero">
          <div className="ga2-copy">
            <h1 className={`${titleClassName} ga2-title-single`.trim()}>Secure your tickets</h1>
            <p className="ga2-lede">
              Plan a fun-filled night of spooky adventures and unforgettable experiences at The Premier <span>Haunted Attraction</span> of the Carolinas
            </p>
          </div>
        </section>

        <section className="page-width ga2-sale-strip">
          <div className="ga2-sale-card" aria-live="polite">
            <div className="ga2-sale-copy">
              <p>{activeSaleNote.label}</p>
              <strong key={activeSaleNote.title}>{activeSaleNote.title}</strong>
            </div>
            <div className="ga2-sale-dots" aria-hidden="true">
              {ticketSaleNotes.map((note, index) => (
                <span key={note.title} className={index === saleNoteIndex ? "is-active" : ""} />
              ))}
            </div>
          </div>
        </section>

        <section className="page-width ga2-grid">
          <div className="ga2-main">
            <div className="ga2-select-heading">
              <h2>Choose your Experience</h2>
              <span className="ga2-select-heading-brush" aria-hidden="true" />
              <p>Select your ticket and choose a night to visit.</p>
            </div>

            <section className="ga2-art-row" aria-label="Ticket option panels">
              {displayedPricingPanels.map((panel, index) => (
                <button
                  key={panel.variant}
                  type="button"
                  className={`ga2-art-card ga2-art-card--${panel.variant} ${selectedPanelIndex === index ? "is-active" : ""}`}
                  onClick={() => setSelectedPanelIndex(index)}
                  aria-pressed={selectedPanelIndex === index}
                >
                  {panel.badge ? <span className="ga2-art-card-badge">{panel.badge}</span> : null}
                  <div className="ga2-art-card-copy">
                    <h2>{panel.title}</h2>
                    <span className="ga2-art-card-icon">
                      <TicketCardIcon panel={panel} />
                    </span>
                    <p>{panel.description}</p>
                    <div className="ga2-art-card-price">
                      <strong>{panel.price}</strong>
                      <span>{panel.purchaseLabel}</span>
                    </div>
                    <small>{panel.purchaseNote}</small>
                    <span className="ga2-art-card-action">
                      Select Ticket
                    </span>
                  </div>
                </button>
              ))}
            </section>

            <p className="ga2-art-disclaimer">
              All ticket prices are per person. Ages 4 &amp; under are free. Discounted parking available online.
            </p>

            <div className="ga2-next-step-heading">
              <h2>Select your date</h2>
              <span className="ga2-next-step-brush" aria-hidden="true" />
            </div>

            {syncedFromParkHours ? (
              <div className="ga2-sync-note" aria-live="polite">
                <span className="ga2-sync-note-label">Date carried over from Park Hours</span>
                <strong>{selectedDateLabel}</strong>
                <small>Your ticket date has already been matched to the same operating night.</small>
              </div>
            ) : null}

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
                    Ã¢â‚¬Â¹
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
                    Ã¢â‚¬Âº
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

                <div className="ga2-booking-legend" aria-label="Night color legend">
                  {bookingScheduleBands.map((band) => (
                    <div key={band.id} className="ga2-booking-legend-item">
                      <span
                        className="ga2-booking-legend-dot"
                        style={{ "--ga2-legend-accent": band.accent, "--ga2-legend-glow": band.glow }}
                      />
                      <div className="ga2-booking-legend-copy">
                        <strong>{band.name}</strong>
                        <small>{band.legend}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="ga2-ticket-info-shell" aria-label="Compare ticket options">
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

                    <button
                      type="button"
                      className="ga2-ticket-info-action"
                      onClick={() => handleTicketInfoSelect(panel.linkedVariant)}
                    >
                      Buy Now
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="ga2-addon-shell" aria-label="Enhance your night add-ons">
              <div className="ga2-addon-heading">
                <h2>Enhance your night</h2>
              </div>
              <div className="ga2-addon-row">
                {addOnPanels.map((panel) => (
                  <button
                    key={panel.id}
                    type="button"
                    className={`ga2-addon-card ${selectedAddOnIds.includes(panel.id) ? "is-selected" : ""}`}
                    onClick={() => toggleAddOn(panel.id)}
                    aria-pressed={selectedAddOnIds.includes(panel.id)}
                  >
                    <span className="ga2-addon-icon">
                      <AddOnIcon type={panel.icon} />
                    </span>
                    <div className="ga2-addon-copy">
                      <h3>{panel.name}</h3>
                      <p>{panel.description}</p>
                      <strong>{panel.price}</strong>
                      <small>{selectedAddOnIds.includes(panel.id) ? "Added to booking" : "Tap to add"}</small>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="ga2-checkout-strip" aria-label="Booking summary">
              <div className="ga2-checkout-meta ga2-checkout-party">
                <span className="ga2-checkout-icon" aria-hidden="true">
                  <svg viewBox="0 0 64 64">
                    <circle cx="24" cy="23" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="42" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M10 49c1.9-8.6 8.8-13 16.3-13 8 0 14.7 4.3 16.6 13" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M35 47c1.4-5.7 5.6-9.1 11-9.1 4.2 0 7.8 1.9 10 5.8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="ga2-checkout-party-copy">
                  <strong>{adultCount} Adults</strong>
                  <span>{selectedPanel.price} Each{minimumGuests > 1 ? ` | ${minimumGuests}+ required` : ""}</span>
                </div>
                <div className="ga2-checkout-counter" aria-label="Adult count selector">
                  <button type="button" onClick={() => updateAdultCount(adultCount + 1)} aria-label="Add one adult">
                    +
                  </button>
                  <input
                    type="number"
                    min={minimumGuests}
                    value={adultCount}
                    onChange={(event) => updateAdultCount(Number.parseInt(event.target.value, 10))}
                    aria-label="Adult count"
                  />
                  <button type="button" onClick={() => updateAdultCount(adultCount - 1)} aria-label="Remove one adult">
                    -
                  </button>
                </div>
              </div>

              <div className="ga2-checkout-meta">
                <strong>{selectedDateLabel}</strong>
                <span>{selectedBand.hours}</span>
              </div>

              <div className="ga2-checkout-meta">
                <strong>{selectedPanel.name}</strong>
                <span>{selectedAddOns.length ? `${selectedAddOns.length} add-on${selectedAddOns.length === 1 ? "" : "s"} selected` : "No add-ons yet"}</span>
              </div>

              <div className="ga2-checkout-meta ga2-checkout-subtotal">
                <strong>Subtotal</strong>
                <span className={subtotalTick ? "is-ticking" : ""}>${subtotal.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="ga2-checkout-button"
                onClick={openCheckoutDrawer}
              >
                Continue To Checkout
              </button>
            </section>

            <div className="ga2-mobile-summary" aria-label="Mobile booking summary">
              <div className="ga2-mobile-summary-copy">
                <strong>{selectedPanel.name}</strong>
                <span>{adultCount} Adults | ${subtotal.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="ga2-mobile-summary-button"
                onClick={openCheckoutDrawer}
              >
                Checkout
              </button>
            </div>
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

      <div
        className={`ga2-checkout-backdrop ${checkoutDrawerOpen ? "is-open" : ""}`}
        aria-hidden={!checkoutDrawerOpen}
        onClick={closeCheckoutDrawer}
      />

      <aside
        className={`ga2-checkout-drawer ${checkoutDrawerOpen ? "is-open" : ""}`}
        id="ga2-checkout-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!checkoutDrawerOpen}
        aria-labelledby="ga2-checkout-title"
      >
        <div className="ga2-checkout-drawer-head">
          <div>
            <p className="ga2-checkout-preview-kicker">Ticket Checkout</p>
            <h2 id="ga2-checkout-title">{adultCount} ticket{adultCount === 1 ? "" : "s"}</h2>
          </div>
          <button type="button" className="ga2-checkout-close" onClick={closeCheckoutDrawer} aria-label="Close checkout">
            X
          </button>
        </div>

        {checkoutStep === "cart" ? (
          <>
            <div className="ga2-ticket-cart-list">
              <article className="ga2-ticket-cart-item">
                <div className="ga2-ticket-cart-icon" aria-hidden="true">
                  <svg viewBox="0 0 64 64">
                    <circle cx="24" cy="23" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="42" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M10 49c1.9-8.6 8.8-13 16.3-13 8 0 14.7 4.3 16.6 13" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M35 47c1.4-5.7 5.6-9.1 11-9.1 4.2 0 7.8 1.9 10 5.8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="ga2-ticket-cart-copy">
                  <div className="ga2-ticket-cart-top">
                    <div>
                      <h3>{selectedPanel.name}</h3>
                      <p>{selectedDateLabel}</p>
                    </div>
                    <strong>${ticketLineTotal.toFixed(2)}</strong>
                  </div>
                  <div className="ga2-ticket-cart-meta">
                    <span>{selectedBand.name}</span>
                    <span>{adultCount} guest{adultCount === 1 ? "" : "s"}</span>
                    <span>{selectedBand.hours}</span>
                  </div>
                  <div className="ga2-ticket-cart-item-actions">
                    <div className="ga2-ticket-qty-controls" aria-label="Guest count controls">
                      <button
                        type="button"
                        onClick={() => updateAdultCount(adultCount - 1)}
                        aria-label="Decrease guest count"
                      >
                        -
                      </button>
                      <span>{adultCount}</span>
                      <button
                        type="button"
                        onClick={() => updateAdultCount(adultCount + 1)}
                        aria-label="Increase guest count"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="ga2-ticket-remove-button"
                      onClick={resetBooking}
                    >
                      Reset Booking
                    </button>
                  </div>
                </div>
              </article>

              {selectedAddOns.map((panel) => (
                <article className="ga2-ticket-cart-item is-addon" key={panel.id}>
                  <div className="ga2-ticket-cart-icon is-addon" aria-hidden="true">
                    <AddOnIcon type={panel.icon} />
                  </div>
                  <div className="ga2-ticket-cart-copy">
                    <div className="ga2-ticket-cart-top">
                      <div>
                        <h3>{panel.name}</h3>
                        <p>{panel.description}</p>
                      </div>
                      <strong>${panel.priceValue.toFixed(2)}</strong>
                    </div>
                    <div className="ga2-ticket-cart-item-actions">
                      <span className="ga2-ticket-addon-tag">Add-on</span>
                      <button
                        type="button"
                        className="ga2-ticket-remove-button"
                        onClick={() => toggleAddOn(panel.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {!selectedAddOns.length ? (
                <div className="ga2-ticket-cart-empty-note">
                  No add-ons selected yet. Choose extras above and they will show here automatically.
                </div>
              ) : null}
            </div>

            <div className="ga2-ticket-cart-summary">
              <div className="ga2-ticket-cart-summary-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <p>Your selected tickets and haunt add-ons stay together here, just like the merch cart flow.</p>
              <div className="ga2-ticket-cart-actions">
                <button type="button" className="ga2-secondary-action" onClick={closeCheckoutDrawer}>
                  Keep Browsing
                </button>
                <button type="button" className="ga2-primary-action" onClick={() => setCheckoutStep("checkout")}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : null}

        {checkoutStep === "checkout" ? (
          <form className="ga2-checkout-form ga2-checkout-drawer-form" onSubmit={handleTicketCheckoutSubmit}>
            <div className="ga2-checkout-form-top">
              <button
                type="button"
                className="ga2-inline-action"
                onClick={() => setCheckoutStep("cart")}
              >
                Back to Cart
              </button>
              <div className="ga2-checkout-form-total">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
            </div>

            <label className="ga2-field">
              <span>Full Name</span>
              <input
                type="text"
                value={checkoutForm.fullName}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, fullName: event.target.value }))}
                required
              />
            </label>

            <label className="ga2-field">
              <span>Email</span>
              <input
                type="email"
                value={checkoutForm.email}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, email: event.target.value }))}
                required
              />
            </label>

            <label className="ga2-field">
              <span>Phone</span>
              <input
                type="tel"
                value={checkoutForm.phone}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, phone: event.target.value }))}
                placeholder="Optional"
              />
            </label>

            <label className="ga2-field">
              <span>Booking Notes</span>
              <textarea
                rows="4"
                value={checkoutForm.notes}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, notes: event.target.value }))}
                placeholder="Arrival requests, accessibility notes, or group details"
              />
            </label>

            <p className="ga2-checkout-note">
              This is a functional ticket checkout step for the site experience, but it still needs a payment provider to process real ticket orders.
            </p>

            <button type="submit" className="ga2-primary-action">
              Submit Checkout Details
            </button>
          </form>
        ) : null}

        {checkoutStep === "confirmation" ? (
          <div className="ga2-checkout-confirmation ga2-checkout-drawer-confirmation">
            <h3>Checkout details captured.</h3>
            <p>
              {checkoutForm.fullName || "Your"} ticket booking is now ready for payment integration.
              Connect your live provider next to turn this into a real checkout.
            </p>
            <div className="ga2-checkout-confirmation-actions">
              <button
                type="button"
                className="ga2-secondary-action"
                onClick={() => setCheckoutStep("cart")}
              >
                Back to Cart
              </button>
              <button type="button" className="ga2-primary-action" onClick={closeCheckoutDrawer}>
                Continue Browsing
              </button>
            </div>
          </div>
        ) : null}
      </aside>
    </main>
  );
}
