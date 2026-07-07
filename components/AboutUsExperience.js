"use client";

import { useEffect, useState } from "react";

const aboutReviewsWidgetId = "ndrsl-5f370bac03f8820eafd74f79";

const aboutSlides = [
  {
    eyebrow: "Lake Hickory Haunts",
    title: "WE BELIEVE IN INNOVATION, NOT DUPLICATION",
    body:
      "Lake Hickory Haunts is not simply a haunted house, it is a haunted theme park; providing a unique experience for anyone seeking an entertaining, thrilling, scary, and fun-filled experience. At Lake Hickory Haunts, we believe in innovation, not duplication. Since 2012, our team has continuously worked more and more each year to make Lake Hickory Haunts bigger, better, scarier, and more fun each year. Beginning as the first lakeside haunted theme park in the Carolina’s, Lake Hickory Haunts and its team is consistently delivering new and never-before-seen entertainment unlike anything the haunt industry has ever seen. From the first true haunted boat ride at a haunted attraction, to 100% underground attractions, to overwater attractions; Lake Hickory Haunts and its team strives to innovate, create, and deliver the most insanely awesome haunted experience the Carolina’s has ever seen. We will continue to hold true to our motto from day one; We believe in innovation, not duplication. Visit Lake Hickory Haunts and experience the best and most unique haunted theme park the Carolina’s has to offer!",
  },
  {
    eyebrow: "Lake Hickory Haunts",
    title: "SCARING IS CARING",
    body:
      "At Lake Hickory Haunts, customer satisfaction is our priority. We know that our fans and customers are the heart of our success, and no matter how successful we become; Our customers will always come first. We are dedicated to bringing each customer a safe, entertaining, and frightfully-fun experience! Our mission is that every customer leaves with a fear-filled smile! Our actors are trained to scare those who are not scared and entertain those who are scared. This is part of how we deliver a frightful, thrilling, yet fun experience! This ensures that we can bring the most desirable experience possible to each individual guest, based on their specific wants and needs. Although scaring is our goal, it is more important that we provide a memorable and enjoyable experience to our guests. If you are easily scared and are worried about being relentlessly harassed by actors to the point of misery, that will not happen at Lake Hickory Haunts. As a way to give back, we are constantly conducting giveaways, discount nights, and more, in order to show special appreciation to our customers. We also offer discounts to our veterans, police, fire, and EMS. Check out our calendar for more information about special discount! THANK YOU for your interest in Lake Hickory Haunts and as always: BE PREPARED TO BE SCARED!!",
  },
  {
    eyebrow: "Lake Hickory Haunts",
    title: "YOUR OPINION MATTERS",
    body:
      "Each year, we take customer feedback into consideration and apply it to our products and services, so we can give you: the customer, everything you desire and more! To further ensure this, we have customer management representatives available at all times. If there is ever anything we can do to improve your experience during your visit, please ask to speak with customer management and we will do whatever is necessary to make you satisfied. We love to hear your feedback! If you would like to leave feedback about your experience during your visit to Lake Hickory Haunts, visit our feedback form. You (the customer) are what make Lake Hickory Haunts what it is! We will never forget the importance of our customers and fans!",
    cta: {
      href: "https://forms.dripreviews.com/form/5f74c107223c151ce6268a55",
      label: "Open Feedback Form",
    },
  },
  {
    eyebrow: "Lake Hickory Haunts",
    title: "SAFETY FIRST",
    body:
      "Safety is key when it comes to providing an enjoyable, scary, and thrilling experience. This is why we take the necessary steps to ensure safety throughout Lake Hickory Haunts and its attractions. Our management has attended and received its Certified Haunted Attraction Operator Safety (C.H.A.O.S.) certificate. This crisis awareness and safety course further ensures our ability to provide a safe environment to each of our guests, in addition to preparing our staff to handle crisis situations in the best way possible, if they ever were to occur. Also, our management meets with its Fire Marshall and building inspector each year; collaborating and planning, ensuring that all operations are safe and exceed safety standards and regulations. We have security and safety personnel in place at all times, ready to act in case of an emergency. If there is ever an accident within any of our attractions (fire, hostile situation, panic attack, medical issue, etc.) our trained staff is prepared to take action and assist in every way necessary. Another way we ensure safety to our guests is by conducting a metal detection and security check on each customer that visits Lake Hickory Haunts. Upon your arrival, please know that the following items are not allowed inside our attractions: weapons, knives, lighters, flashlights, and glow-items. Finally, we guarantee that our scare actors are fake monsters, and not real monsters. We interview each of our employees and conduct background checks on each employee we hire. We refuse to hire any employee who has been charged with a criminal offense. In addition, we train each of our actors on the art and safety of haunted house acting. All in all, we guarantee that you are safe throughout your entire visit at Lake Hickory Haunts. You may rest assured that you can experience the thrill of being scared, while knowing you are in a safe environment that presents no true threat.",
  },
];

const aboutGalleryItems = [
  {
    title: "Guest Reactions",
    caption: "Real guest reactions and memorable moments from the midway.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-4b4e6a52-66f0-41ab-852c-8990805f7a0f.png",
  },
  {
    title: "Midway Icons",
    caption: "Guests meeting unforgettable Lake Hickory Haunts characters.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-3ef6c6bf-e51e-4d47-b1dd-813431a1fbac.png",
  },
  {
    title: "Laughs And Lanterns",
    caption: "The midway brings together spooky characters and smiling guests.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-46811671-d216-42e4-8134-71b53bf804f5.png",
  },
  {
    title: "Family Night",
    caption: "A fun night out packed with photo-worthy moments across the park.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-9fda1b2c-e435-4d7b-a5c0-5bd78cacd879.png",
  },
  {
    title: "Selfie Scares",
    caption: "Even the monsters are camera-ready in the middle of the action.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-62f4ed2b-80c4-44f4-862f-a6419f140edf.png",
  },
  {
    title: "Monster Meetups",
    caption: "Guests get up close with the creatures that make each visit unforgettable.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-4ef58d5e-8bab-4d62-9d15-9da5363b7b7a.png",
  },
  {
    title: "Midway Energy",
    caption: "High-energy moments keep the atmosphere alive while guests explore.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-606336f9-d88c-4dbc-8928-523eefd7d890.png",
  },
  {
    title: "While You Scream",
    caption: "The fun keeps going everywhere you turn around the park.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-5217f6a9-7244-4111-915f-4750f4bc7799.png",
  },
  {
    title: "Shock And Smiles",
    caption: "Guests never know whether the next moment will be hilarious or terrifying.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-504f15b9-10e0-42da-8b20-5e8d454f1894.png",
  },
  {
    title: "Frights For All Ages",
    caption: "Lake Hickory Haunts creates shared memories for families and friends.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-1e25c28e-664f-4038-87d9-b457262ef8ef.png",
  },
  {
    title: "Haunted Hallways",
    caption: "Inside the attractions, every corner is built for suspense and surprise.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-cf1f1e64-9510-4bdf-b89f-d735dd555d0f.png",
  },
  {
    title: "Purple Panic",
    caption: "The attraction paths deliver intense scenes, lighting, and live scares.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-06054a30-8c85-4741-b550-c60ad995e257.png",
  },
  {
    title: "Close Calls",
    caption: "Every visit is packed with heart-racing moments guests will talk about later.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-2a797684-c78b-4aa3-9448-9ab344eff31d.png",
  },
  {
    title: "Dark Corners",
    caption: "The scares hit hardest when guests least expect them deep inside the haunt.",
    imageSrc: "/assets/about-us-gallery/codex-clipboard-1f30039a-6f42-4889-b5fb-7a069f08621e.png",
  },
];

function CarouselArrow({ direction = "left" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutUsExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current === aboutSlides.length - 1 ? 0 : current + 1));
    }, 9000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const mountReviewsWidget = () => {
      if (cancelled) {
        return;
      }

      const widgetElement = document.getElementById(aboutReviewsWidgetId);

      if (!widgetElement) {
        return;
      }

      if (widgetElement.childElementCount > 0) {
        return;
      }

      if (typeof window !== "undefined" && typeof window.NDRSL?.renderElement === "function") {
        window.NDRSL.renderElement(aboutReviewsWidgetId);
        return;
      }

      attempts += 1;

      if (attempts < 20) {
        window.setTimeout(mountReviewsWidget, 250);
      }
    };

    mountReviewsWidget();

    return () => {
      cancelled = true;
    };
  }, []);

  const activeSlide = aboutSlides[activeIndex];
  const activeGalleryItem = lightboxIndex === null ? null : aboutGalleryItems[lightboxIndex];

  const goToIndex = (nextIndex) => {
    const total = aboutSlides.length;
    const normalizedIndex = (nextIndex + total) % total;
    setActiveIndex(normalizedIndex);
  };

  return (
    <section className="about-page-shell">
      <div className="about-hero page-width">
        <p className="about-kicker">Lake Hickory Haunts</p>
        <h1>About Us</h1>
        <p className="about-intro">
          The story, philosophy, and guest-first mindset behind the haunted theme park we keep
          building bigger every season.
        </p>
      </div>

      <div className="about-carousel-shell page-width">
        <div className="about-carousel-header">
          <p className="about-carousel-label">Inside Lake Hickory Haunts</p>
          <div className="about-carousel-controls" aria-label="About Us carousel controls">
            <button type="button" className="about-carousel-arrow" onClick={() => goToIndex(activeIndex - 1)}>
              <CarouselArrow direction="left" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button type="button" className="about-carousel-arrow" onClick={() => goToIndex(activeIndex + 1)}>
              <CarouselArrow direction="right" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>

        <div className="about-carousel-card">
          <p className="about-carousel-kicker">{activeSlide.eyebrow}</p>
          <h2>{activeSlide.title}</h2>
          <p>{activeSlide.body}</p>
          {activeSlide.cta ? (
            <a
              className="about-carousel-link"
              href={activeSlide.cta.href}
              target="_blank"
              rel="noreferrer"
            >
              {activeSlide.cta.label}
            </a>
          ) : null}
        </div>

        <div className="about-carousel-dots" aria-label="About Us slide navigation">
          {aboutSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`about-carousel-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => goToIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <div className="about-gallery-shell page-width">
        <div className="about-gallery-header">
          <p className="about-carousel-label">Photo Gallery</p>
          <h2>About Us Photos</h2>
          <p className="about-gallery-intro">
            A look at the screams, laughs, characters, and guest moments that make Lake
            Hickory Haunts unforgettable. Click any photo to open it in a full lightbox view.
          </p>
        </div>

        <div className="about-gallery-grid">
          {aboutGalleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className="about-gallery-card"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open photo ${index + 1}`}
            >
              {item.imageSrc ? (
                <img
                  src={item.imageSrc}
                  alt={`Lake Hickory Haunts gallery photo ${index + 1}`}
                  className="about-gallery-image"
                />
              ) : (
                <div className="about-gallery-placeholder" aria-hidden="true">
                  <span>{`Photo ${String(index + 1).padStart(2, "0")}`}</span>
                  <strong>{item.title}</strong>
                  <small>Upload image here later</small>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="about-reviews-shell page-width">
        <div className="about-reviews-header">
          <p className="about-carousel-label">Guest Reviews</p>
          <h2>What Guests Are Saying</h2>
          <p className="about-reviews-intro">
            A featured set of Google reviews from Drip Reviews, displayed right here under
            the About Us gallery while the floating review widget stays live site-wide.
          </p>
        </div>

        <div className="about-reviews-card">
          <div id={aboutReviewsWidgetId} className="ndrsl-widget" />
        </div>
      </div>


      {activeGalleryItem ? (
        <div
          className="about-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeGalleryItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="about-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="about-lightbox-close"
              onClick={() => setLightboxIndex(null)}
            >
              <span aria-hidden="true">x</span>
              <span className="sr-only">Close lightbox</span>
            </button>

            <div className="about-lightbox-media">
              {activeGalleryItem.imageSrc ? (
                <img
                  src={activeGalleryItem.imageSrc}
                  alt={`Lake Hickory Haunts gallery photo ${lightboxIndex + 1}`}
                />
              ) : (
                <div className="about-lightbox-placeholder">
                  <span>Image Slot Ready</span>
                  <strong>{activeGalleryItem.title}</strong>
                  <p>{activeGalleryItem.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

