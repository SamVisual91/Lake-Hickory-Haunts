"use client";

export function HomeVipTextSignup({
  className = "",
  keyword = "LHH",
  number = "888-908-1438",
} = {}) {
  const shellClassName = ["vip-home-signup", className].filter(Boolean).join(" ");
  const smsHref = `sms:8889081438?body=${encodeURIComponent(keyword)}`;

  return (
    <div className={shellClassName}>
      <div className="vip-home-signup-card">
        <p className="vip-home-signup-label">Temporary VIP text signup</p>
        <p className="vip-home-signup-title">
          Text <strong>{keyword}</strong> to <strong>{number}</strong>
        </p>
        <p className="vip-home-signup-copy">
          Join the Lake Hickory Haunts VIP text list for special sales, discounts, and event updates sent straight to your phone.
        </p>
        <a className="vip-home-signup-link" href={smsHref}>
          Start Texting {keyword}
        </a>
        <p className="vip-home-signup-note">
          If the text button does not open on your device, send <strong>{keyword}</strong> manually to <strong>{number}</strong>.
        </p>
      </div>
    </div>
  );
}
