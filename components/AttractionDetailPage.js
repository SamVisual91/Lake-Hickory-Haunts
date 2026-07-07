"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDefaultAttractionGallery } from "../data/attractions";

function BackLink({ href = "/attractions", children }) {
  return (
    <Link href={href} className="attraction-detail-backlink">
      <span aria-hidden="true">&lt;</span>
      <span>{children}</span>
    </Link>
  );
}

function SkullIcon({ className = "" }) {
  return <span className={`attraction-detail-skull ${className}`.trim()} aria-hidden="true" />;
}

function PlusCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeroTitle({ title, subtitle, tagline }) {
  return (
    <div className="attraction-detail-titleblock">
      <h1>{title}</h1>
      {subtitle ? (
        <div className="attraction-detail-subtitle-row">
          <p>{subtitle}</p>
        </div>
      ) : null}
      {tagline ? <p className="attraction-detail-tagline">{tagline}</p> : null}
    </div>
  );
}

function UnderVideoMeta({ videoUpdate }) {
  if (!videoUpdate) {
    return null;
  }

  return (
    <div className="attraction-detail-under-video">
      {videoUpdate ? (
        <div className="attraction-detail-video-note">
          <DescriptionContent description={videoUpdate} />
        </div>
      ) : null}
    </div>
  );
}

function DescriptionBlock({ block }) {
  if (typeof block === "string") {
    return <p className="attraction-detail-description">{block}</p>;
  }

  if (block?.type === "label") {
    return <p className="attraction-detail-video-note-label">{block.text}</p>;
  }

  if (block?.type === "feature") {
    return <p className="attraction-detail-video-note-feature">{block.text}</p>;
  }

  if (block?.type === "title") {
    return <h2 className="attraction-detail-description-title">{block.text}</h2>;
  }

  if (block?.type === "rich") {
    return (
      <p className="attraction-detail-description">
        {block.segments?.map((segment, index) => {
          if (typeof segment === "string") {
            return <span key={`${segment}-${index}`}>{segment}</span>;
          }

          if (segment?.type === "link") {
            return (
              <Link
                key={`${segment.href}-${index}`}
                href={segment.href}
                className="attraction-detail-inline-link"
              >
                {segment.label}
              </Link>
            );
          }

          return null;
        })}
      </p>
    );
  }

  return <p className="attraction-detail-description">{block?.text ?? ""}</p>;
}

function DescriptionContent({ description }) {
  if (Array.isArray(description)) {
    return (
      <div className="attraction-detail-description-stack">
        {description.map((block, index) => (
          <DescriptionBlock
            key={`${typeof block === "string" ? block : block?.text ?? block?.type ?? "description"}-${index}`}
            block={block}
          />
        ))}
      </div>
    );
  }

  return <p className="attraction-detail-description">{description}</p>;
}

function ActionButton({ variant = "primary", href, children, leadingIcon, trailingIcon, className = "" }) {
  const actionClassName = `attraction-detail-action attraction-detail-action-${variant} ${className}`.trim();
  const content = (
    <>
      <span className="attraction-detail-action-leading" aria-hidden="true">{leadingIcon}</span>
      <span className="attraction-detail-action-label">{children}</span>
      {trailingIcon ? <span className="attraction-detail-action-trailing" aria-hidden="true">{trailingIcon}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={actionClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={actionClassName}>
      {content}
    </button>
  );
}

function GalleryImage({ item, onOpen }) {
  const isInteractive = Boolean(item.imageSrc && onOpen);
  const cardClassName = `attraction-detail-gallery-card ${item.className} ${item.cardClassName ?? ""}`.trim();

  return (
    <article className="attraction-detail-gallery-card-shell">
      {isInteractive ? (
        <button
          type="button"
          className={`${cardClassName} attraction-detail-gallery-button`.trim()}
          onClick={onOpen}
          aria-label={`Open image: ${item.caption ?? item.title}`}
        >
          <div className="attraction-detail-gallery-media">
            <Image
              src={item.imageSrc}
              alt={item.caption ?? item.title}
              fill
              sizes="(max-width: 760px) 74vw, (max-width: 1080px) 31vw, 19vw"
            />
          </div>
          {item.hideOverlay ? null : <div className="attraction-detail-gallery-overlay" />}
          <span className="attraction-detail-gallery-zoomhint" aria-hidden="true">View</span>
        </button>
      ) : (
        <div className={cardClassName} aria-label={item.caption}>
          {item.imageSrc ? (
            <div className="attraction-detail-gallery-media">
              <Image
                src={item.imageSrc}
                alt={item.caption ?? item.title}
                fill
                sizes="(max-width: 760px) 74vw, (max-width: 1080px) 31vw, 19vw"
              />
            </div>
          ) : null}
          {item.hideOverlay ? null : <div className="attraction-detail-gallery-overlay" />}
        </div>
      )}
    </article>
  );
}

function GalleryStrip({ items, onOpenImage }) {
  return (
    <section className="attraction-detail-gallery">
      {items.map((item, index) => (
        <GalleryImage
          key={item.title}
          item={item}
          onOpen={item.imageSrc ? () => onOpenImage(index) : undefined}
        />
      ))}
    </section>
  );
}

function Lightbox({ item, canGoPrevious, canGoNext, onPrevious, onNext, onClose }) {
  if (!item?.imageSrc) {
    return null;
  }

  return (
    <div
      className="attraction-detail-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption ?? item.title ?? "Attraction image"}
      onClick={onClose}
    >
      <button
        type="button"
        className="attraction-detail-lightbox-close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <span aria-hidden="true">x</span>
      </button>

      {canGoPrevious ? (
        <button
          type="button"
          className="attraction-detail-lightbox-nav attraction-detail-lightbox-nav-prev"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          aria-label="Previous image"
        >
          <span aria-hidden="true">&lt;</span>
        </button>
      ) : null}

      {canGoNext ? (
        <button
          type="button"
          className="attraction-detail-lightbox-nav attraction-detail-lightbox-nav-next"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <span aria-hidden="true">&gt;</span>
        </button>
      ) : null}

      <div className="attraction-detail-lightbox-frame" onClick={(event) => event.stopPropagation()}>
        <div className="attraction-detail-lightbox-media">
          <Image
            src={item.imageSrc}
            alt={item.caption ?? item.title}
            fill
            sizes="100vw"
            className="attraction-detail-lightbox-image"
          />
        </div>
      </div>
    </div>
  );
}

export function AttractionDetailPage({ attraction }) {
  const heroRef = useRef(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const gallery = attraction.gallery ?? getDefaultAttractionGallery();
  const galleryLightboxItems = gallery.filter((item) => item.imageSrc);
  const description =
    attraction.description ??
    `Step deeper into ${attraction.shortTitle ?? attraction.title}. ${attraction.tagline ?? "The night only gets worse from here."}`;
  const detailVideoEmbedUrl = attraction.detailVideoEmbedUrl ?? null;
  const videoUpdate = attraction.videoUpdate ?? null;
  const isShipwreckedTheme = attraction.detailThemeClass === "detail-theme-shipwrecked";
  const hasHeroBanner = Boolean(attraction.heroBannerImage);
  const detailVideoSources =
    attraction.detailVideoSources ??
    (attraction.detailVideoSrc
      ? [{ src: attraction.detailVideoSrc, type: attraction.detailVideoType }]
      : []);
  const hasDetailVideo = Boolean(detailVideoEmbedUrl) || detailVideoSources.length > 0;
  const videoPoster =
    attraction.detailVideoPoster ??
    attraction.heroImage ??
    gallery[0]?.imageSrc ??
    attraction.heroBannerImage ??
    null;
  const selectedGalleryItem =
    selectedGalleryIndex === null ? null : galleryLightboxItems[selectedGalleryIndex] ?? null;

  useEffect(() => {
    if (!isShipwreckedTheme) {
      return undefined;
    }

    const heroElement = heroRef.current;

    if (!heroElement || typeof window === "undefined") {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;

      if (reducedMotionQuery.matches) {
        heroElement.style.setProperty("--shipwrecked-parallax-offset", "0px");
        return;
      }

      const rect = heroElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centeredOffset = rect.top + rect.height * 0.5 - viewportHeight * 0.5;
      const normalizedOffset = Math.max(-1, Math.min(1, centeredOffset / viewportHeight));
      heroElement.style.setProperty("--shipwrecked-parallax-offset", `${normalizedOffset * -22}px`);
    };

    const requestParallaxFrame = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateParallax);
      }
    };

    requestParallaxFrame();
    window.addEventListener("scroll", requestParallaxFrame, { passive: true });
    window.addEventListener("resize", requestParallaxFrame);
    reducedMotionQuery.addEventListener?.("change", requestParallaxFrame);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      heroElement.style.removeProperty("--shipwrecked-parallax-offset");
      window.removeEventListener("scroll", requestParallaxFrame);
      window.removeEventListener("resize", requestParallaxFrame);
      reducedMotionQuery.removeEventListener?.("change", requestParallaxFrame);
    };
  }, [isShipwreckedTheme]);

  useEffect(() => {
    if (selectedGalleryItem === null || typeof document === "undefined") {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedGalleryIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        setSelectedGalleryIndex((currentIndex) => {
          if (currentIndex === null) {
            return currentIndex;
          }

          return currentIndex > 0 ? currentIndex - 1 : currentIndex;
        });
        return;
      }

      if (event.key === "ArrowRight") {
        setSelectedGalleryIndex((currentIndex) => {
          if (currentIndex === null) {
            return currentIndex;
          }

          return currentIndex < galleryLightboxItems.length - 1 ? currentIndex + 1 : currentIndex;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryLightboxItems.length, selectedGalleryItem]);

  return (
    <section className={`attraction-detail ${attraction.detailThemeClass ?? "detail-theme-nightmare-factory"}`}>
      <div className="attraction-detail-backdrop" aria-hidden="true" />
      <div className="attraction-detail-sparks" aria-hidden="true" />
      <div className="attraction-detail-chains" aria-hidden="true" />

      <div className="attraction-detail-inner">
        <div className="attraction-detail-topbar">
          <BackLink>Back to attractions</BackLink>

          <ActionButton
            variant="primary"
            href={attraction.primaryActionHref ?? "/tickets"}
            leadingIcon={<SkullIcon />}
            trailingIcon={<PlusCircleIcon />}
            className="attraction-detail-topbutton"
          >
            {attraction.primaryActionLabel ?? "Buy Tickets"}
          </ActionButton>
        </div>

        <div
          ref={heroRef}
          className={`attraction-detail-hero ${hasHeroBanner ? "attraction-detail-hero-banner-layout" : ""}`.trim()}
        >
          {hasHeroBanner ? (
            <div className="attraction-detail-herobanner" aria-hidden="true">
              <Image
                src={attraction.heroBannerImage}
                alt=""
                fill
                sizes="100vw"
                priority
              />
              {isShipwreckedTheme ? (
                <>
                  <div className="attraction-detail-hero-glow" />
                  <div className="attraction-detail-hero-shimmer" />
                </>
              ) : null}
            </div>
          ) : null}

          <div className="attraction-detail-copycolumn">
            <HeroTitle
              title={attraction.shortTitle ?? attraction.title}
              subtitle={attraction.subtitle}
              tagline={attraction.tagline ?? "Where torment is assembled."}
            />

            <DescriptionContent description={description} />

            <div className="attraction-detail-actions">
              <ActionButton
                variant="primary"
                href={attraction.primaryActionHref ?? "/tickets"}
                leadingIcon={<SkullIcon />}
                trailingIcon={<PlusCircleIcon />}
              >
                {attraction.primaryActionLabel ?? "Buy Tickets"}
              </ActionButton>

              <ActionButton
                variant="secondary"
                href="/attractions"
                leadingIcon={<span className="attraction-detail-arrow">&lt;</span>}
              >
                Back to attractions
              </ActionButton>
            </div>
          </div>

          <div className="attraction-detail-artcolumn">
            <div className={`attraction-detail-video-shell ${hasDetailVideo ? "has-video" : "is-placeholder"}`.trim()}>
              <div className="attraction-detail-video-frame">
                {detailVideoEmbedUrl ? (
                  <iframe
                    className="attraction-detail-video attraction-detail-video-embed"
                    src={detailVideoEmbedUrl}
                    title={`${attraction.shortTitle ?? attraction.title} video`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : hasDetailVideo ? (
                  <video
                    className="attraction-detail-video"
                    controls
                    preload="metadata"
                    playsInline
                    poster={videoPoster ?? undefined}
                  >
                    {detailVideoSources.map((source, index) => (
                      <source
                        key={`${source.src}-${index}`}
                        src={source.src}
                        type={source.type ?? undefined}
                      />
                    ))}
                  </video>
                ) : videoPoster ? (
                  <div className="attraction-detail-video-posterwrap">
                    <Image
                      src={videoPoster}
                      alt={`${attraction.shortTitle ?? attraction.title} preview still`}
                      fill
                      sizes="(max-width: 1080px) 100vw, 42vw"
                      className="attraction-detail-video-poster"
                    />
                  </div>
                ) : (
                  <div className="attraction-detail-video-fallback" aria-hidden="true" />
                )}

                <div className="attraction-detail-video-overlay" aria-hidden="true">
                  {!hasDetailVideo ? (
                    <span className="attraction-detail-video-playbadge">
                      <span className="attraction-detail-video-playtriangle" />
                    </span>
                  ) : null}
                  {!hasDetailVideo ? (
                    <div className="attraction-detail-video-copy">
                      <strong>Video Slot Ready</strong>
                      <span>Add attraction footage here</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <UnderVideoMeta
              videoUpdate={videoUpdate}
            />
          </div>
        </div>

        <GalleryStrip
          items={gallery}
          onOpenImage={(index) => {
            const interactiveIndex = gallery
              .slice(0, index + 1)
              .filter((item) => item.imageSrc).length - 1;
            setSelectedGalleryIndex(interactiveIndex >= 0 ? interactiveIndex : null);
          }}
        />
      </div>

      <Lightbox
        item={selectedGalleryItem}
        canGoPrevious={selectedGalleryIndex !== null && selectedGalleryIndex > 0}
        canGoNext={selectedGalleryIndex !== null && selectedGalleryIndex < galleryLightboxItems.length - 1}
        onPrevious={() => {
          setSelectedGalleryIndex((currentIndex) => {
            if (currentIndex === null) {
              return currentIndex;
            }

            return currentIndex > 0 ? currentIndex - 1 : currentIndex;
          });
        }}
        onNext={() => {
          setSelectedGalleryIndex((currentIndex) => {
            if (currentIndex === null) {
              return currentIndex;
            }

            return currentIndex < galleryLightboxItems.length - 1 ? currentIndex + 1 : currentIndex;
          });
        }}
        onClose={() => setSelectedGalleryIndex(null)}
      />
    </section>
  );
}
