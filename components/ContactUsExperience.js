"use client";

import { useState } from "react";

const inquiryTypes = [
  "General Question",
  "Ticket Help",
  "Group Booking",
  "Accessibility Request",
  "Media or Partnership",
];

export function ContactUsExperience() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: inquiryTypes[0],
    message: "",
  });
  const [vipSignup, setVipSignup] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const openMailDraft = () => {
    const subject = `${form.inquiryType} - ${form.name || "Lake Hickory Haunts guest"}`;
    const body = [
      `Name: ${form.name || ""}`,
      `Email: ${form.email || ""}`,
      `Inquiry Type: ${form.inquiryType}`,
      "",
      "Message:",
      form.message || "",
    ].join("\n");

    window.location.href = `mailto:LakeHickoryHaunts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const openVipSignupDraft = () => {
    const subject = `VIP Text List Sign Up - ${vipSignup.name || "Lake Hickory Haunts guest"}`;
    const body = [
      "VIP Text List Sign Up",
      "",
      `Name: ${vipSignup.name || ""}`,
      `Mobile: ${vipSignup.mobile || ""}`,
      `Email: ${vipSignup.email || ""}`,
      "",
      "Please add me to the VIP text list for sales, offers, and discounts.",
    ].join("\n");

    window.location.href = `mailto:LakeHickoryHaunts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contactx-page">
      <section className="page-width contactx-shell">
        <div className="contactx-hero">
          <div className="contactx-copy">
            <p className="contactx-eyebrow">Contact Us</p>
            <h1>Reach the Haunt Team</h1>
            <p className="contactx-lede">
              Questions about tickets, accessibility, group visits, or your night at Lake Hickory Haunts? Send us a message and we will point you in the right direction.
            </p>
          </div>
        </div>

        <div className="contactx-grid">
          <section className="contactx-panel contactx-panel-form" aria-labelledby="contactx-form-title">
            <div className="contactx-panel-head">
              <p>Message the team</p>
              <h2 id="contactx-form-title">Send a quick contact request</h2>
            </div>

            <div className="contactx-form-grid">
              <label className="contactx-field">
                <span>Your name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                />
              </label>

              <label className="contactx-field">
                <span>Your email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                />
              </label>

              <label className="contactx-field contactx-field-full">
                <span>What can we help with?</span>
                <select
                  value={form.inquiryType}
                  onChange={(event) => setForm((current) => ({ ...current, inquiryType: event.target.value }))}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="contactx-field contactx-field-full">
                <span>Your message</span>
                <textarea
                  rows={7}
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Tell us what you need help with, your preferred date, or any details that will help the team respond faster."
                />
              </label>
            </div>

            <div className="contactx-actions">
              <button type="button" className="contactx-submit" onClick={openMailDraft}>
                Send Contact Request
              </button>
              <p>
                This opens your email app with your message filled in and sends it to <strong>LakeHickoryHaunts@gmail.com</strong>.
              </p>
            </div>
          </section>

          <aside className="contactx-panel contactx-panel-notes">
            <div className="contactx-panel-head">
              <p>VIP offers</p>
              <h2>Sign up for our VIP text list</h2>
            </div>

            <p className="contactx-vip-copy">
              Join our VIP text list to hear about special sales, limited-time offers, discounts, and event updates before everyone else.
            </p>

            <div className="contactx-note-stack">
              <label className="contactx-field">
                <span>Your name</span>
                <input
                  type="text"
                  value={vipSignup.name}
                  onChange={(event) => setVipSignup((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                />
              </label>

              <label className="contactx-field">
                <span>Mobile number</span>
                <input
                  type="tel"
                  value={vipSignup.mobile}
                  onChange={(event) => setVipSignup((current) => ({ ...current, mobile: event.target.value }))}
                  placeholder="(555) 555-5555"
                />
              </label>

              <label className="contactx-field">
                <span>Email address</span>
                <input
                  type="email"
                  value={vipSignup.email}
                  onChange={(event) => setVipSignup((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="contactx-actions contactx-actions-compact">
              <button type="button" className="contactx-submit" onClick={openVipSignupDraft}>
                Join VIP Text List
              </button>
              <p>
                This opens your email app with your VIP signup details filled in so the team can add you to the sales, offers, and discounts list.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
