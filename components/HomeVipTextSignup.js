"use client";

import { useState } from "react";

export function HomeVipTextSignup() {
  const [mobile, setMobile] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [consent, setConsent] = useState(false);

  const canSubmit = mobile.trim() && birthdate.trim() && consent;

  const openVipSignupDraft = () => {
    if (!canSubmit) {
      return;
    }

    const subject = "VIP Text List Sign Up - Lake Hickory Haunts";
    const body = [
      "VIP Text List Sign Up",
      "",
      `Mobile Number: ${mobile.trim()}`,
      `Birthdate: ${birthdate.trim()}`,
      `Consent Accepted: ${consent ? "Yes" : "No"}`,
      "",
      "Please add me to the VIP text list for sales, offers, discounts, and event updates.",
    ].join("\n");

    window.location.href = `mailto:LakeHickoryHaunts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="vip-home-signup">
      <p className="vip-home-signup-intro">
        Stay up to date with the latest information regarding Lake Hickory Haunts + SAVE BIG with Exclusive VIP Sales,
        Offers and Discounts!
      </p>

      <div className="vip-home-signup-fields">
        <label className="vip-home-signup-field">
          <span>Mobile Number</span>
          <input
            type="tel"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            placeholder=""
            autoComplete="tel"
          />
        </label>

        <label className="vip-home-signup-field">
          <span>Birthdate</span>
          <input
            type="text"
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
            placeholder="MM/DD/YYYY"
            inputMode="numeric"
            autoComplete="bday"
          />
        </label>
      </div>

      <label className="vip-home-signup-consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
        />
        <span>
          By submitting this form, you agree to receive automated promotional messages. Consent is not a condition of
          purchase. Message frequency varies. Reply STOP to opt out or HELP for help. Message & data rates apply.
          Terms and privacy policy found <a href="https://slkt.io/3RJ" target="_blank" rel="noreferrer">here</a>.
        </span>
      </label>

      <button
        type="button"
        className="vip-home-signup-button"
        onClick={openVipSignupDraft}
        disabled={!canSubmit}
      >
        Sign Me Up!
      </button>

      <p className="vip-home-signup-note">
        7 Msgs/Month. Reply STOP to cancel; HELP for help. Msg&data rates may apply. Terms:{" "}
        <a href="https://slkt.io/3RJ" target="_blank" rel="noreferrer">slkt.io/3RJ</a>.
      </p>
    </div>
  );
}
