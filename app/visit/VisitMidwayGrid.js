"use client";

import Image from "next/image";

function setCardMotion(card, xRatio, yRatio) {
  const rotateX = (0.5 - yRatio) * 10;
  const rotateY = (xRatio - 0.5) * 12;
  const mediaShiftX = (0.5 - xRatio) * 18;
  const mediaShiftY = (0.5 - yRatio) * 18;
  const copyShiftX = (xRatio - 0.5) * 10;
  const copyShiftY = (yRatio - 0.5) * 8;
  const iconShiftX = (xRatio - 0.5) * 12;
  const iconShiftY = (yRatio - 0.5) * 10;

  card.style.setProperty("--pointer-x", `${(xRatio * 100).toFixed(2)}%`);
  card.style.setProperty("--pointer-y", `${(yRatio * 100).toFixed(2)}%`);
  card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
  card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  card.style.setProperty("--media-shift-x", `${mediaShiftX.toFixed(2)}px`);
  card.style.setProperty("--media-shift-y", `${mediaShiftY.toFixed(2)}px`);
  card.style.setProperty("--copy-shift-x", `${copyShiftX.toFixed(2)}px`);
  card.style.setProperty("--copy-shift-y", `${copyShiftY.toFixed(2)}px`);
  card.style.setProperty("--icon-shift-x", `${iconShiftX.toFixed(2)}px`);
  card.style.setProperty("--icon-shift-y", `${iconShiftY.toFixed(2)}px`);
}

function handleCardPointerMove(event) {
  if (event.pointerType === "touch") {
    return;
  }

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const xRatio = (event.clientX - rect.left) / rect.width;
  const yRatio = (event.clientY - rect.top) / rect.height;

  setCardMotion(card, Math.min(Math.max(xRatio, 0), 1), Math.min(Math.max(yRatio, 0), 1));
}

function resetCardMotion(event) {
  setCardMotion(event.currentTarget, 0.5, 0.5);
}

export default function VisitMidwayGrid({ boxes }) {
  return (
    <div className="visit-midway-grid-wrap">
      <section className="visit-midway-grid" aria-label="Things to do at the Midway of Mayhem">
        {boxes.map((box, index) => (
          <article
            className={`visit-midway-card visit-midway-card-${box.tone}`}
            key={box.title}
            onPointerMove={handleCardPointerMove}
            onPointerLeave={resetCardMotion}
            onPointerCancel={resetCardMotion}
            onFocus={resetCardMotion}
            style={{ "--card-index": index }}
            tabIndex={0}
          >
            <span className="visit-midway-card-frame" aria-hidden="true" />

            {box.image ? (
              <div className="visit-midway-card-media" aria-hidden="true">
                <Image src={box.image} alt="" fill sizes="432px" />
              </div>
            ) : null}

            <span className="visit-midway-card-icon" aria-hidden="true">
              {box.icon ? <Image src={box.icon} alt="" fill sizes="54px" /> : null}
            </span>

            <div className="visit-midway-card-copy">
              <h2>{box.title}</h2>
              {box.description ? <p>{box.description}</p> : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
