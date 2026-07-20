"use client";

export function HomeVipTextSignup({
  className = "",
  keyword = "LHH",
  number = "888-908-1438",
} = {}) {
  const shellClassName = ["vip-home-signup", className].filter(Boolean).join(" ");

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
        <p className="vip-home-signup-note">
          Send <strong>{keyword}</strong> manually to <strong>{number}</strong> to join the VIP text list.
        </p>
      </div>
    </div>
  );
}
