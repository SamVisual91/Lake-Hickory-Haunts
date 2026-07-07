"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const footerGroups = [
  {
    title: "Destinations",
    links: [
      { label: "Lake Hickory Haunts", href: "https://lakehickoryhaunts.com/" },
      { label: "Lake Hickory Escape", href: "https://lakehickoryhaunts.com/about-us/" },
      { label: "Directions", href: "/directions" },
      { label: "View Attractions", href: "https://lakehickoryhaunts.com/attractions/" },
    ],
  },
  {
    title: "Tickets & Passes",
    links: [
      { label: "Buy Tickets", href: "/tickets" },
      { label: "VIP Upgrade", href: "/tickets" },
    ],
  },
  {
    title: "Beyond the Haunt",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "https://lakehickoryhaunts.com/contact-us/" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", href: "https://lakehickoryhaunts.com/contact-us/" },
      { label: "FAQs", href: "https://lakehickoryhaunts.com/faq/" },
      { label: "Accessibility", href: "https://lakehickoryhaunts.com/contact-us/" },
      { label: "Hours & Events", href: "/hours-events" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const sisterAttractionHref = "https://lakehickoryescape.com/";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/lakehickoryhaunts/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H7v3h2.7v7h3.8Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lakehickoryhaunts/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 8.2c-.2-1.3-1.2-2.3-2.5-2.5C16.9 5.4 14.5 5.3 12 5.3s-4.9.1-6.5.4C4.2 5.9 3.2 6.9 3 8.2c-.3 1.6-.3 3.3 0 4.9.2 1.3 1.2 2.3 2.5 2.5 1.6.3 4 .4 6.5.4s4.9-.1 6.5-.4c1.3-.2 2.3-1.2 2.5-2.5.3-1.6.3-3.3 0-4.9Z" fill="currentColor" />
        <path d="m10 15.4 5-3.4-5-3.4v6.8Z" fill="#061112" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.6 4c.4 1.5 1.3 2.6 2.7 3.4.8.4 1.6.6 2.4.7v2.9c-1.6 0-3.2-.5-4.6-1.4v5.1c0 3.1-2.3 5.4-5.5 5.4-3 0-5.3-2.2-5.3-5.1s2.3-5.2 5.2-5.2c.4 0 .8 0 1.2.1v3c-.4-.2-.8-.2-1.2-.2-1.3 0-2.2.9-2.2 2.2 0 1.2.9 2.1 2.1 2.1 1.4 0 2.2-1 2.2-2.5V4h3Z" fill="currentColor" />
      </svg>
    ),
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.8 4.5h2.5c.4 0 .8.3.9.7l.7 3.2c.1.4 0 .8-.3 1l-1.7 1.7c1.1 2.1 2.8 3.8 4.9 4.9l1.7-1.7c.3-.3.7-.4 1-.3l3.2.7c.4.1.7.5.7.9v2.5c0 .5-.4 1-.9 1C11.2 20 4 12.8 4 5.4c0-.5.4-.9.8-.9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/shop") {
    return null;
  }

  return (
    <footer className="footer-shell">
      <div className="page-width footer">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src="/assets/footer-haunt-logo-2026.png"
            alt="Lake Hickory Haunts logo"
            width={3454}
            height={1554}
          />
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a className="footer-sister-card" href={sisterAttractionHref} target="_blank" rel="noreferrer">
            <span className="footer-sister-eyebrow">Visit Our Sister Attraction!</span>
            <Image
              className="footer-sister-logo-image"
              src="/assets/escape-logo-black-outline.png"
              alt="Lake Hickory Escape logo"
              width={3454}
              height={1091}
            />
          </a>
        </div>

        <div className="footer-grid">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="footer-links">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="footer-group footer-group-contact">
            <h3>Contact</h3>
            <div className="footer-contact-block">
              <div className="footer-contact-list">
                <a className="footer-contact-item" href="tel:8282121442">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <span>828-212-1442</span>
                </a>
                <a className="footer-contact-item" href="mailto:lakehickoryhaunts@gmail.com">
                  <span className="footer-contact-icon" aria-hidden="true">
                    <MailIcon />
                  </span>
                  <span>lakehickoryhaunts@gmail.com</span>
                </a>
              </div>

              <div className="footer-address-block">
                <p className="footer-address-title">Address</p>
                <p className="footer-address-line">520 Carolina Ave, Hickory, NC 28601</p>
                <p className="footer-address-note">(NEW ENTRANCE: LAKE HICKORY HAUNTS DR)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal-links" aria-label="Legal links">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="footer-copyright">Copyright 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

