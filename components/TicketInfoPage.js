import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

function VipBoltIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m18.5 3-9 13.2h5.7L13.4 29 23 15.8h-5.8L18.5 3Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    </svg>
  );
}

function VipLoungeIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 16.2h16v5.2A2.6 2.6 0 0 1 21.4 24H10.6A2.6 2.6 0 0 1 8 21.4v-5.2Zm2.2 0V12a2.8 2.8 0 1 1 5.6 0v4.2m.4 0V12a2.8 2.8 0 1 1 5.6 0v4.2M7.4 24.6h17.2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VipGiftIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M7.6 13.2h16.8v11.2H7.6zM16 13.2v11.2M6.6 9.2h18.8v4H6.6z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M16 9.2c0-3.2 1.8-5 4-5 1.6 0 2.8 1.1 2.8 2.6 0 2.1-2 2.4-6.8 2.4Zm0 0c0-3.2-1.8-5-4-5C10.4 4.2 9.2 5.3 9.2 6.8c0 2.1 2 2.4 6.8 2.4Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VipCrownIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m7 22 2.2-11 6.8 5 6.8-5L25 22H7Zm3.2 4h11.6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.4" cy="10" r="1.4" fill="currentColor" />
      <circle cx="16" cy="8.2" r="1.4" fill="currentColor" />
      <circle cx="22.6" cy="10" r="1.4" fill="currentColor" />
    </svg>
  );
}

const vipBenefitIcons = [VipBoltIcon, VipLoungeIcon, VipGiftIcon, VipCrownIcon];

const vipFlowSteps = [
  {
    step: "1",
    title: "Purchase Your VIP Pass",
    copy: "Reserve online in advance so your night starts in the premium lane.",
  },
  {
    step: "2",
    title: "Arrive & Check In",
    copy: "Skip the standard wait and head straight into the VIP arrival flow.",
  },
  {
    step: "3",
    title: "Enjoy the Full Upgrade",
    copy: "Move faster, recharge in the lounge, and cash in your built-in extras.",
  },
];

function VipExperienceTicketPage({ page }) {
  return (
    <main className="page-shell page-width interior-page ticket-page-shell vip-ticket-shell">
      <section className="vip-ticket-hero">
        <div className="vip-ticket-hero-backdrop" aria-hidden="true">
          <Image
            src="/assets/vip-lounge-hero-banner-green.png"
            alt=""
            width={1664}
            height={1024}
            priority
          />
        </div>
        <div className="vip-ticket-hero-overlay" aria-hidden="true" />

        <div className="vip-ticket-hero-copy">
          <p className="vip-ticket-kicker-top">{page.eyebrow}</p>
          <h1>
            <span>Lake Hickory Haunts</span>
            <span>VIP Experience</span>
          </h1>
          <p className="vip-ticket-kicker">{page.kicker}</p>
          <p className="vip-ticket-description">{page.description}</p>

          <div className="vip-ticket-cta-row">
            <Link className="vip-ticket-primary" href={page.primaryCta.href}>
              {page.primaryCta.label}
            </Link>
            <Link className="vip-ticket-secondary" href="/tickets/general-admission">
              View Tickets
            </Link>
          </div>

        </div>
      </section>

      <section className="vip-ticket-benefits">
        <div className="vip-ticket-section-heading">
          <p>VIP Benefits</p>
          <span aria-hidden="true" />
        </div>

        <div className="vip-ticket-benefit-grid">
          {page.quickFacts.map((fact, index) => {
            const Icon = vipBenefitIcons[index] ?? vipBenefitIcons[vipBenefitIcons.length - 1];

            return (
              <article className="vip-ticket-benefit-card" key={fact.label}>
                <div className="vip-ticket-benefit-icon">
                  <Icon />
                </div>
                <p>{fact.label}</p>
                <h2>{fact.value}</h2>
              </article>
            );
          })}
        </div>
      </section>

      <section className="vip-ticket-middle-grid">
        <article className="vip-ticket-panel vip-ticket-panel-plain">
          <div className="vip-ticket-section-heading">
            <p>What's Included</p>
            <span aria-hidden="true" />
          </div>

          <ul className="vip-ticket-included-list">
            {page.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="vip-ticket-panel vip-ticket-panel-plain">
          <div className="vip-ticket-section-heading">
            <p>The VIP Flow</p>
            <span aria-hidden="true" />
          </div>

          <div className="vip-ticket-flow-grid">
            {vipFlowSteps.map((step) => (
              <article className="vip-ticket-flow-card" key={step.step}>
                <div className="vip-ticket-flow-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="vip-ticket-lower-grid">
        <div className="vip-ticket-side-stack">
          {page.detailCards.map((card) => (
            <article className="vip-ticket-side-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <article className="vip-ticket-faq-panel">
          <div className="vip-ticket-section-heading">
            <p>Common Questions</p>
            <span aria-hidden="true" />
          </div>

          <div className="vip-ticket-faq-list">
            {page.faq.map((item, index) => (
              <details className="vip-ticket-faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export function TicketInfoPage({ page }) {
  if (!page) {
    return null;
  }

  if (page.slug === "vip-experience") {
    return <VipExperienceTicketPage page={page} />;
  }

  return (
    <main className="page-shell page-width interior-page ticket-page-shell">
      <section className="ticket-page-hero">
        <div className="ticket-page-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="ticket-page-kicker">{page.kicker}</p>
          <p className="ticket-page-description">{page.description}</p>
          <Link className="ticket-page-primary" href={page.primaryCta.href}>
            {page.primaryCta.label}
          </Link>
        </div>

        <div className="ticket-quickfacts-grid">
          {page.quickFacts.map((fact) => (
            <article className="ticket-quickfact-card" key={fact.label}>
              <p className="ticket-quickfact-label">{fact.label}</p>
              <h2>{fact.value}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="ticket-content-grid">
        <div className="ticket-content-main">
          <section className="ticket-content-section">
            <SectionHeading
              eyebrow="What's Included"
              title="The essentials guests should understand first."
              text="This section is designed for fast scanning so guests can figure out value without hunting through long copy."
            />
            <div className="ticket-list-card">
              <ul className="ticket-detail-list">
                {page.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ticket-content-section">
            <SectionHeading
              eyebrow="Planning Notes"
              title="The practical details that reduce purchase hesitation."
              text="This is where timing, purchase expectations, and the most useful guest notes stay visible."
            />
            <div className="ticket-list-card">
              <ul className="ticket-detail-list">
                {page.planningNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <aside className="ticket-content-side">
          {page.detailCards.map((card) => (
            <article className="ticket-side-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className="ticket-content-section">
        <SectionHeading
          eyebrow="Common Questions"
          title="Quick answers close to the booking decision."
          text="These FAQ blocks are intentionally short so guests can keep moving without losing context."
        />
        <div className="ticket-faq-grid">
          {page.faq.map((item) => (
            <article className="ticket-faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
