"use client";

export function HomeVipTextSignup({
  className = "",
  height = 798,
  title = "Lake Hickory Haunts VIP text list signup",
} = {}) {
  const shellClassName = ["vip-home-signup", className].filter(Boolean).join(" ");

  return (
    <div className={shellClassName}>
      <iframe
        className="vip-home-signup-embed"
        src="https://slicktext.com/widget/v2/ba72069446b05b3579f86202cae19a76"
        title={title}
        width="400"
        height={height}
        frameBorder="0"
        loading="lazy"
      />
    </div>
  );
}
