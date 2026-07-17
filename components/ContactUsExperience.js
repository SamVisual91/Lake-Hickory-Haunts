"use client";

import { useState } from "react";

const inquiryTypes = [
  "General Question",
  "Ticket Help",
  "Group Booking",
  "Accessibility Request",
  "Media or Partnership",
];
const supportEmail = "lakehickoryhaunts@gmail.com";

export function ContactUsExperience() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: inquiryTypes[0],
    message: "",
  });
  const [contactStatus, setContactStatus] = useState({ type: "idle", message: "" });
  const [vipSignup, setVipSignup] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [vipStatus, setVipStatus] = useState({ type: "idle", message: "" });

  const submitToInbox = async (payload) => {
    const response = await fetch(`https://formsubmit.co/ajax/${supportEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === "false") {
      throw new Error(result.message || "Unable to send right now.");
    }
  };

  const openMailDraft = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setContactStatus({
        type: "error",
        message: "Please fill in your name, email, and message before sending.",
      });
      return;
    }

    setContactStatus({ type: "sending", message: "Sending your message..." });

    try {
      await submitToInbox({
        name: form.name,
        email: form.email,
        inquiryType: form.inquiryType,
        message: form.message,
        _subject: `${form.inquiryType} - ${form.name || "Lake Hickory Haunts guest"}`,
        _replyto: form.email,
      });
      setForm({
        name: "",
        email: "",
        inquiryType: inquiryTypes[0],
        message: "",
      });
      setContactStatus({
        type: "success",
        message: "Your message was sent to the haunt team.",
      });
    } catch {
      setContactStatus({
        type: "error",
        message: `We could not send your message right now. Please email ${supportEmail} directly.`,
      });
    }
  };

  const openVipSignupDraft = async () => {
    if (!vipSignup.name.trim() || !vipSignup.mobile.trim() || !vipSignup.email.trim()) {
      setVipStatus({
        type: "error",
        message: "Please fill in your name, mobile number, and email address before joining.",
      });
      return;
    }

    setVipStatus({ type: "sending", message: "Sending your VIP sign-up..." });

    try {
      await submitToInbox({
        name: vipSignup.name,
        mobile: vipSignup.mobile,
        email: vipSignup.email,
        requestType: "VIP Text List Sign Up",
        message: "Please add me to the VIP text list for sales, offers, and discounts.",
        _subject: `VIP Text List Sign Up - ${vipSignup.name || "Lake Hickory Haunts guest"}`,
        _replyto: vipSignup.email,
      });
      setVipSignup({
        name: "",
        mobile: "",
        email: "",
      });
      setVipStatus({
        type: "success",
        message: "Your VIP sign-up was sent to the haunt team.",
      });
    } catch {
      setVipStatus({
        type: "error",
        message: `We could not send your VIP sign-up right now. Please email ${supportEmail} directly.`,
      });
    }
  };

  return (
    <section className="contactx-page">
      <div className="page-width contactx-shell">
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
              <button
                type="button"
                className="contactx-submit"
                onClick={openMailDraft}
                disabled={contactStatus.type === "sending"}
              >
                Send Contact Request
              </button>
              <p>
                This sends your message directly to <strong>{supportEmail}</strong>.
              </p>
              {contactStatus.type !== "idle" ? <p>{contactStatus.message}</p> : null}
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
              <button
                type="button"
                className="contactx-submit"
                onClick={openVipSignupDraft}
                disabled={vipStatus.type === "sending"}
              >
                Join VIP Text List
              </button>
              <p>
                This sends your VIP sign-up directly to the haunt team so they can add you to the sales, offers, and discounts list.
              </p>
              {vipStatus.type !== "idle" ? <p>{vipStatus.message}</p> : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
