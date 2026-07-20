"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/attractions", label: "Attractions" },
  { href: "/characters", label: "Characters" },
  { href: "/whileyouwait", label: "While you wait" },
];

const faqLinks = [
  { label: "Disclaimers and Warnings", href: "/faq#disclaimers-rules" },
  { label: "General Questions", href: "/faq#general-questions" },
];

const mobileUtilityItems = [
  { label: "Book Your Night", href: "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789287", external: true },
  { label: "Directions", href: "/directions" },
  { label: "About Us", href: "/about-us" },
  { label: "Hours and Events", href: "/hours-events" },
];

const jobsApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSff7tZNJSOAJ-qrkF13y2ptqF4mcOZDW9OiSYQMGdLgWIY6ug/viewform";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpen(false);
        setFaqOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-drawer-open", open);
    if (!open) {
      setFaqOpen(false);
    }

    return () => document.body.classList.remove("nav-drawer-open");
  }, [open]);

  if (pathname?.startsWith("/attractions/") || pathname === "/shop") {
    return null;
  }

  return (
    <header className="header-wrap" ref={headerRef}>
      <div className="season-banner">
        <a
          href="https://lakehickoryescape.com/"
          target="_blank"
          rel="noreferrer"
        >
          DURING THE OFF-SEASON, VISIT LAKE HICKORY ESCAPE YEAR-ROUND.
        </a>
      </div>

      <div className="utility-bar">
        <div className="page-width utility-inner">
          <div className="utility-left">
            <a className="utility-book-link" href="https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789287">
              Book Your Night
            </a>
            <Link href="/directions">Directions</Link>
          </div>
          <div className="utility-right">
            <Link href="/about-us">About Us</Link>
            <Link href="/hours-events">Hours and Events</Link>
          </div>
        </div>
      </div>

      <div className="main-nav-shell">
        <div className="page-width">
          <nav className="nav">
            <Link
              className="brand"
              href="/"
              onClick={() => {
                setOpen(false);
                setFaqOpen(false);
              }}
            >
              <Image src="/assets/logo-2026-15-years-octopus.png" alt="Lake Hickory Haunts 2026 logo" width={2048} height={1375} priority />
            </Link>

            <button
              className="nav-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="nav-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
              <span className="sr-only">Toggle navigation</span>
            </button>

            <div className="nav-mobile-actions">
              <a
                className="nav-mobile-apply-link"
                href={jobsApplicationUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setOpen(false);
                  setFaqOpen(false);
                }}
              >
                Apply Now
              </a>

              <Link
                className="nav-mobile-ticket-button"
                href="/tickets"
                onClick={() => {
                  setOpen(false);
                  setFaqOpen(false);
                }}
              >
                Tickets
              </Link>
            </div>

            <div className={`nav-menu ${open ? "is-open" : ""}`} id="nav-menu">
              <div className="nav-menu-mobile-header">
                <span className="nav-menu-mobile-title sr-only">Menu</span>
                <button
                  type="button"
                  className="nav-menu-close"
                  aria-label="Close navigation"
                  onClick={() => {
                    setOpen(false);
                    setFaqOpen(false);
                  }}
                >
                  X
                </button>
              </div>

              <div className="nav-links-cluster">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setFaqOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="nav-mobile-arrow" aria-hidden="true">{">"}</span>
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => {
                    setOpen(false);
                    setFaqOpen(false);
                  }}
                >
                  <span>Contact Us</span>
                  <span className="nav-mobile-arrow" aria-hidden="true">{">"}</span>
                </Link>

                <Link
                  className="nav-menu-ticket-link"
                  href="/tickets"
                  onClick={() => {
                    setOpen(false);
                    setFaqOpen(false);
                  }}
                >
                  <span>Tickets</span>
                  <span className="nav-mobile-arrow" aria-hidden="true">{">"}</span>
                </Link>

                <div className={`nav-ticket-wrap ${faqOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="nav-ticket-trigger"
                    aria-expanded={faqOpen}
                    aria-controls="faq-menu"
                    onClick={() => {
                      setFaqOpen((value) => !value);
                    }}
                  >
                    <span>FAQ</span>
                    <span className={`nav-mobile-arrow ${faqOpen ? "is-open" : ""}`} aria-hidden="true">{">"}</span>
                    <span className="nav-ticket-caret" aria-hidden="true">v</span>
                  </button>
                  <div className="nav-ticket-inline" id="faq-menu">
                    {faqLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => {
                          setOpen(false);
                          setFaqOpen(false);
                        }}
                      >
                        <span>{link.label}</span>
                        <span className="nav-mobile-arrow" aria-hidden="true">{">"}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="nav-mobile-only nav-mobile-secondary">
                {mobileUtilityItems.map((item) => (
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => {
                        setOpen(false);
                        setFaqOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                      <span className="nav-mobile-arrow" aria-hidden="true">{">"}</span>
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        setFaqOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                      <span className="nav-mobile-arrow" aria-hidden="true">{">"}</span>
                    </Link>
                  )
                ))}
              </div>
            </div>

            <div className="nav-header-actions">
              <a
                className="nav-jobs-link"
                href={jobsApplicationUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setOpen(false);
                  setFaqOpen(false);
                }}
              >
                <Image
                  src="/assets/jobs-monsters-wanted.png"
                  alt="Monsters Wanted apply now"
                  width={2048}
                  height={834}
                />
                <span className="sr-only">Apply now</span>
              </a>

              <Link
                className="nav-cta nav-cta-tickets"
                href="/tickets"
                onClick={() => {
                  setOpen(false);
                  setFaqOpen(false);
                }}
              >
                Tickets
              </Link>
            </div>

            <button
              type="button"
              className={`nav-drawer-backdrop ${open ? "is-open" : ""}`}
              aria-label="Close navigation"
              onClick={() => {
                setOpen(false);
                setFaqOpen(false);
              }}
            />
          </nav>

          <div className={`nav-ticket-mega ${faqOpen ? "is-open" : ""}`}>
            <div className="nav-ticket-mega-grid">
              {faqLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setFaqOpen(false);
                    setOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


