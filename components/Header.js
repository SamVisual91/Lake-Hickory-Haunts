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

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setFaqOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  if (pathname?.startsWith("/attractions/") || pathname === "/shop") {
    return null;
  }

  return (
    <header className="header-wrap" ref={headerRef}>
      <div className="season-banner">
        DURING THE OFF SEASON, VISIT OUR YEAR ROUND ATTRACTIONS AT LAKE HICKORY ESCAPE
      </div>

      <div className="utility-bar">
        <div className="page-width utility-inner">
          <div className="utility-left">
            <a className="utility-book-link" href="https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789287">
              Book Your Night
            </a>
            <Link href="/directions">Direction</Link>
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
            <Link className="brand" href="/" onClick={() => setOpen(false)}>
              <Image src="/assets/logo-2026-15-years-octopus.png" alt="Lake Hickory Haunts 2026 logo" width={2048} height={1375} priority />
            </Link>

            <button
              className="nav-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="nav-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
              <span className="sr-only">Toggle navigation</span>
            </button>

            <div className={`nav-menu ${open ? "is-open" : ""}`} id="nav-menu">
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
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contact-us"
                  onClick={() => {
                    setOpen(false);
                    setFaqOpen(false);
                  }}
                >
                  Contact Us
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
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  className="nav-cta nav-cta-tickets"
                  href="/tickets/general-admission"
                  onClick={() => {
                    setOpen(false);
                    setFaqOpen(false);
                  }}
                >
                  Tickets
                </Link>
              </div>
            </div>
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
