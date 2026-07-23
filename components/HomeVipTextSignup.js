"use client";

const SLICKTEXT_FORM_SRC = "https://slicktext.com/widget/v2/ba72069446b05b3579f86202cae19a76";

export function HomeVipTextSignup({
  className = "",
  keyword = "LHH",
  number = "888-908-1438",
} = {}) {
  const shellClassName = ["vip-home-signup", className].filter(Boolean).join(" ");

  return (
    <div className={shellClassName}>
      <div className="vip-home-signup-card">
        <iframe
          className="vip-home-signup-embed"
          src={SLICKTEXT_FORM_SRC}
          title="Lake Hickory Haunts VIP Text Signup"
          loading="lazy"
          width="100%"
          height="760"
          frameBorder="0"
        />
        <p className="vip-home-signup-note">
          If the form does not load, text <strong>{keyword}</strong> to <strong>{number}</strong> directly from your phone.
        </p>
      </div>
    </div>
  );
}