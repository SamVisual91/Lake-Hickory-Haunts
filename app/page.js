import Image from "next/image";
import Link from "next/link";
import { HomePageEnhancer } from "../components/HomePageEnhancer";
import { HomeAttractionRowCarousel } from "../components/HomeAttractionRowCarousel";
import { HomeVipTextSignup } from "../components/HomeVipTextSignup";
import { HeroEventSlider } from "../components/HeroEventSlider";
import { VideoFeatureCard } from "../components/VideoFeatureCard";
import { buildMetadata, staticPageSeo } from "../lib/seo";

export const metadata = buildMetadata(staticPageSeo.home);

export default function HomePage() {
  return (
    <main className="page-shell home-page-shell">
      <HomePageEnhancer />

      <section className="hero">
        <div className="hero-media">
          <iframe
            className="hero-video"
            src="https://www.youtube.com/embed/KZhnnYQI93c?autoplay=1&mute=1&controls=0&loop=1&playlist=KZhnnYQI93c&modestbranding=1&playsinline=1&rel=0"
            title="Lake Hickory Haunts background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-grid page-width">
          <div className="hero-copy">
            <Image
              className="hero-brand-mark"
              src="/assets/logo-transparent.png"
              alt="Lake Hickory Haunts logo"
              width={2048}
              height={682}
              priority
            />
            <h1 className="hero-copy-title">
              <span className="hero-copy-line hero-copy-line-top hero-copy-accent">Premier Haunt</span>
              <span className="hero-copy-line hero-copy-line-bottom">of the Carolinas</span>
            </h1>
          </div>
        </div>
        <HeroEventSlider />
        <p className="hero-season-label">WHAT&apos;S NEW THIS YEAR</p>
        <div className="hero-tabs">
          <Link className="hero-tab is-active" href="/attractions/shipwrecked">Shipwrecked</Link>
          <Link className="hero-tab" href="/attractions/decent">Descent</Link>
          <Link className="hero-tab" href="/attractions/aquaphobia">Aquaphobia Expansion</Link>
        </div>
      </section>

      <section className="page-width stack home-reveal home-promo-section">
        <div className="promo-header">
          <p className="eyebrow">Featured Offers</p>
          <h2>Choose your tickets. Secure your night.</h2>
        </div>
        <div className="promo-grid">
          <article className="promo-card promo-card--vip">
            <div className="promo-copy">
              <span className="promo-title promo-title--stacked">
                <span className="promo-title-word">VIP</span>{" "}
                <span className="promo-title-word">Pass</span>
              </span>
              <ul className="promo-subtext promo-subtext--list">
                <li>Immediate Access to the Haunt with no wait time on Midway or in queue (Faster than Fast Pass).</li>
                <li>Exclusive Access to the VIP Lounge with a snack and water included.</li>
                <li>A FREE VIP Sticker or Trading card.</li>
                <li>ONE FREE Midway Attraction ticket for a Midway Attraction of your choice. (Does not include escape rooms)</li>
                <li>$5 Credit for the Gift Shop, Concessions, or Midway Ticket Booth.</li>
                <li>Free Printed Photo.</li>
              </ul>
            </div>
            <a className="promo-link" href="/tickets">
              Get VIP Pass
            </a>
          </article>

          <article className="promo-card promo-card--fastpass">
            <div className="promo-copy">
              <span className="promo-title">Fast Pass</span>
              <p className="promo-subtext">Fast Pass admission is an upgrade to a MUCH shorter line which moves MUCH faster than the General Admission to all 13 main attractions with a standard wait time.</p>
            </div>
            <a className="promo-link" href="/tickets">
              Get Fast Pass
            </a>
          </article>

          <article className="promo-card promo-card--events">
            <div className="promo-copy">
              <span className="promo-title">General Admission</span>
              <p className="promo-subtext">General admission includes admission to all 13 main attractions with a standard wait time.</p>
            </div>
            <a className="promo-link" href="/tickets">
              Get General Admission
            </a>
          </article>

          <article className="promo-card promo-card--tickets">
            <div className="promo-copy">
              <span className="promo-title">While You Wait</span>
              <p className="promo-subtext">Explore midway food, roaming characters, photo moments, and extra things to do between your haunt runs.</p>
            </div>
            <a className="promo-link" href="/whileyouwait">
              Explore the Midway
            </a>
          </article>
        </div>
      </section>

      <section className="page-width stack home-reveal">
        <div className="event-highlight-header">
          <p className="eyebrow">Stay in Touch with LHH!</p>
          <h2>Follow the story behind the screams.</h2>
        </div>

        <div className="event-highlight-grid">
          <article className="event-highlight-card">
            <VideoFeatureCard
              thumbnailSrc="/assets/doc-thumb-base.jpg"
              thumbnailAlt="Lake Hickory Haunts 2026 documentary video thumbnail"
              embedUrl="https://www.youtube.com/embed/videoseries?list=PL_CYx58_0jydvSSxjiRpRQWQhqwUGBhp8&autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1"
            />
            <div className="event-highlight-copy">
              <h3>Lake Hickory Haunts 2026</h3>
              <p className="event-meta">A cinematic look at the attractions, the monsters, and the atmosphere behind the 2026 season</p>
            </div>
          </article>

          <article className="event-highlight-card">
            <VideoFeatureCard
              thumbnailSrc="https://img.youtube.com/vi/7vooID_N95w/maxresdefault.jpg"
              thumbnailAlt="Road to Lake Hickory Haunts 2026 video thumbnail"
              embedUrl="https://www.youtube.com/embed/videoseries?list=PLR-C8Cvs2FCk&autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1"
            />
            <div className="event-highlight-copy">
              <h3>Road to Lake Hickory Haunts 2026</h3>
              <p className="event-meta">A preview of the build season, progress updates, and the push toward opening night</p>
              <p>
                Join us on the road to 2026 as Lake Hickory Haunts comes back to life
                from the early setup to the growing excitement, building the suspense
                one step at a time until opening night.
              </p>
            </div>
          </article>
        </div>
      </section>

      <HomeAttractionRowCarousel />

      <section className="page-width home-reveal">
        <div className="kraken-banner vip-text-banner">
          <div className="kraken-banner-backdrop" aria-hidden="true" />

          <div className="kraken-banner-copy vip-text-banner-copy">
            <h2>Join our VIP Text list</h2>
            <HomeVipTextSignup />
          </div>
        </div>
      </section>
    </main>
  );
}






