"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const policySections = [
  {
    id: "warnings",
    label: "Event Warnings",
    title: "Event Warning",
    intro:
      "This attraction reserves the right to refuse admission to anyone.",
    detail: (
      <>
        You will experience intense audio, lighting, extreme low visibility, strobe lights, fog, damp or wet
        conditions, moving floors, special effects, sudden actions, and an overall physically demanding environment.
        You should NOT ENTER a haunted house if you suffer from asthma, heart conditions, prone to seizures, physical
        ailments, respiratory or any type of medical problems, or are pregnant or suffer from any type of mental
        issues including claustrophobia.
        <br />
        <br />
        THERE ARE NO REFUNDS! ENTER AT YOUR OWN RISK!
        <br />
        <br />
        Your ticket is a revocable license and may be taken and admission refused upon refund of purchase price.
        Holder of this ticket understands that there is inherent risk involved when attending the attraction. Holder
        voluntarily assumes all risk and dangers associated with participation in this attraction. In consideration
        and acceptance of entrance into this attraction holder agrees to release the operator, it's parent
        corporations, affiliates, officers, directors, and employees and landlord from any liability, harm, injury
        or death, cost or expense whatsoever that may arise directly or indirectly, from attending this attraction or
        any of the attractions at this location.
        <br />
        <br />
        By buying a ticket and attending our events, you acknowledge the contagious nature of COVID-19 and voluntarily
        assume the risk that I may be exposed to or infected by COVID-19 by my employment and that such exposure or
        infection may result in personal injury, illness, permanent disability, and death. I understand that the risk
        of becoming exposed to or infected by COVID-19 may result from the actions, omissions, or negligence of
        myself and others, including, but not limited to, employees, volunteers, and participants and their families.
      </>
    ),
    image: "/assets/faq-clown.png",
    points: [
      "Strobe lights and fog are used throughout the event.",
      "Tickets are a revocable license and may be refused at any time.",
      "No refunds are issued for admission refusal or early exit.",
      "Guests voluntarily assume the risks associated with attending.",
    ],
    highlights: ["Strobe lights and fog used", "High-intensity effects", "No refunds on refusal"],
    statLabel: "Risk level",
    statValue: "High intensity",
    accent: "acid",
  },
  {
    id: "rules",
    label: "Attraction Rules",
    title: "What every guest must follow inside the haunt.",
    intro:
      "The fastest way to keep the night moving is to follow the event rules exactly. These policies protect guests, actors, and the attraction itself.",
    detail:
      "You will not be admitted or will be asked to leave the property if any of the rules are not followed.",
    image: "/assets/faq-factory.png",
    points: [
      "DO NOT touch actors, customers, or attraction props.",
      "NO video or flash photography inside of attractions.",
      "Sanitize hands prior to and after experience.",
      "No running.",
      "No eating or drinking inside of attractions.",
      "You must wear close toed shoes.",
      "No heels.",
      "Remove jewelry.",
      "We are not responsible for lost or stolen items.",
      "Cover your mouth if coughing or sneezing.",
      "Absolutely NO WEAPONS, NO SMOKING, and NO ALCOHOL.",
      "You will not be admitted or asked to leave the property if any of the rules are not followed!",
    ],
    highlights: ["Zero-touch policy", "No filming inside", "Removal without refund"],
    statLabel: "Guest conduct",
    statValue: "Zero tolerance",
    accent: "mint",
  },
  {
    id: "health",
    label: "Do Not Enter",
    title: "Some guests should not experience the attraction.",
    intro:
      "Do not enter if any of the following conditions apply to you.",
    detail: (
      <>
        You will not be admitted if any of these conditions are to be noticed by our staff.
        <br />
        <br />
        WE USE STROBE LIGHTS AND FOG!
        <br />
        WE ARE NOT RESPONSIBLE FOR ANY INJURY!
        <br />
        NO REFUNDS FOR ANY REASON!
        <br />
        <br />
        ENTER AT YOUR OWN RISK!!!
      </>
    ),
    image: "/assets/faq-rat.png",
    points: [
      "If you have a fever or flu-like symptoms or a cough.",
      "If you suffer from pre-existing health conditions including respiratory, heart, or have any physical ailments or medical problems.",
      "If you are pregnant.",
      "If you have casts, a medical brace, or broken bones.",
      "If you have neck or back injuries.",
      "If you have heart conditions or high blood pressure.",
      "If you are prone to dizziness, seizures, or motion sickness.",
      "If you have had a recent surgery.",
      "If you take medication that can cause drowsiness.",
      "If you have been drinking alcohol or using any type of drugs.",
      "If you suffer from any mental health problems, specifically fear of the dark, tight spaces, or claustrophobia.",
    ],
    highlights: ["Strobe lights and fog used", "No refunds for any reason", "Enter at your own risk"],
    statLabel: "Best for",
    statValue: "Healthy guests",
    accent: "gold",
  },
  {
    id: "warning-posters",
    label: "Warning Posters",
    title: "Official Warning Signs",
    intro:
      "Review the posted warning graphics before entering the attraction. These signs highlight the key safety, health, and rule information guests need to know.",
    detail:
      "These warning posters are part of the attraction safety guidance and are provided here for guests to review before arriving.",
    posterImages: [
      {
        src: "/assets/codex-clipboard-cf40fe33-e3c5-49ed-b9b5-7695e4a82eaf.png",
        alt: "Lake Hickory Haunts main warning poster",
        width: 683,
        height: 1024,
        featured: true,
      },
      {
        src: "/assets/codex-clipboard-2541110a-20df-4d4d-833e-89942963f1f7.png",
        alt: "Lake Hickory Haunts fever and flu-like symptoms warning poster",
        width: 382,
        height: 592,
      },
      {
        src: "/assets/codex-clipboard-50b91d4d-915d-4ee6-98c5-27cf164eec4b.png",
        alt: "Lake Hickory Haunts fever and flu-like symptoms safety poster",
        width: 382,
        height: 592,
      },
    ],
    points: [],
    highlights: ["Posted warning signs", "Health and safety notices", "Read before entering"],
    statLabel: "Posted signs",
    statValue: "3 warning posters",
    accent: "gold",
  },
];

const faqCategories = [
  {
    id: "tickets-pricing-more",
    label: "Tickets, Pricing and More",
    title: "How tickets, arrival, pricing, and purchase details work before you arrive.",
    summary:
      "These answers cover the most common planning questions in one place: VIP and Fast Pass options, arrival windows, color nights, online ticketing, pricing, parking, taxes, and group purchases.",
    accent: "acid",
    highlights: [
      "Color nights affect pricing",
      "Cards, parking, and group details included",
      "Cards and Apple Pay accepted",
      "Group rates start at 20 guests",
      "Parking is paid on-site",
    ],
    statLabel: "Most asked",
    statValue: "Tickets + pricing",
    faqs: [
      {
        id: "vip-pass",
        question: "What is the VIP Pass?",
        answer:
          "VIP admission is our premium package designed for our fans and victims! We highly recommend VIP pass(es) for anyone looking to make the most out of their Lake Hickory Haunts visit. Included with VIP Pass:",
        details: ["Included with VIP Pass:"],
        detailList: [
          "Immediate Access to the Haunt with no wait time on Midway or in queue (Faster than Fast Pass).",
          "Exclusive Access to the VIP Lounge with a snack and water included.",
          "A FREE VIP Sticker or Trading card.",
          "ONE FREE Midway Attraction ticket for a Midway Attraction of your choice. (Does not include escape rooms)",
          "$5 Credit for the Gift Shop, Concessions, or Midway Ticket Booth.",
          "Free Printed Photo.",
        ],
      },
      {
        id: "fast-pass",
        question: "What is the Fast Pass?",
        answer:
          "Fast Pass admission is an upgrade to a MUCH shorter line which moves MUCH faster than the General Admission line. Plus, no wait on the Midway",
      },
      {
        id: "time-slot-why",
        question: "Why do I have to choose a time slot to purchase tickets online?",
        answer:
          "Lake Hickory Haunts has implemented a timeslot reservation system in order to improve crowd levels and create a better experience for our customers.",
      },
      {
        id: "night-colors",
        question: "What is the difference between Green, Yellow, and Orange nights?",
        answer:
          "Green nights are least crowded, Yellow nights are more crowded, Orange nights are most crowded. As a result, ticket pricing varies depending on which color night you visit. Your ticket will be valid for a one-time admission on your selecting night. If you were unable to attend on your day, your ticket will be valid on any other night that matches your dates color.",
        details: [
          "Tickets are valid for one-time admission on the selected night.",
          "If you switch nights later, your ticket needs to match the same night color.",
        ],
      },
      {
        id: "change-date",
        question: "What if I cannot make it during the date or timeslot I purchased tickets for?",
        answer:
          "Email us at lakehickoryhaunts@gmail.com with your Name, ticket information, and transaction ID. Please include when you would like to change your date and timeslot. Fees may apply depending on which night you choose.",
      },
      {
        id: "arrive-when",
        question: "When should you arrive at Lake Hickory Haunts in relation to your timeslot?",
        answer:
          "You should arrive within the one-hour timeslot you selected which you choose when you purchase your tickets. (There is a 10 - 15 minute grace period before/after your timeslot.) If your time is at 7:00, we recommend that you arrive 10-15 minutes early to see the opening ceremony!",
      },
      {
        id: "timeslot-entry",
        question: "Is my timeslot the exact time I enter the haunt?",
        answer:
          "No. The timeslot is the time you should arrive on the property at Lake Hickory Haunts, not the exact moment you enter the attraction.",
      },
      {
        id: "latest-arrival",
        question: "How late can I arrive and still get in?",
        answer:
          "If you are in the parking lot and at the box office by the posted closing time, you can still enter the haunt.",
        details: [
          <>
            Closing windows vary by date, with common cutoff times around 10:00 PM, 10:30 PM, or 11:00 PM. Please check our{" "}
            <Link href="/hours-events">Hours and Events</Link> schedule for closing times on selected dates.
          </>,
          "Closing time refers to the parking lot and box office cutoff, not when the attraction itself stops running.",
        ],
      },
      {
        id: "hours-operation",
        question: "What are your hours of operation?",
        answer: (
          <>
            Visit the <Link href="/hours-events">Hours and Events</Link> page for the full operating calendar and nightly
            closing times so you can pick the date and arrival window that fits your night best.
          </>
        ),
      },
      {
        id: "credit-cards",
        question: "Does Lake Hickory Haunts accept credit cards?",
        answer: (
          <>
            Yes, our box office, gift shop, and concessions accept all major credit cards, debit cards, and Apple Pay.
            Tickets may also be purchased online <Link href="/tickets">HERE</Link>.
          </>
        ),
      },
      {
        id: "online-tickets",
        question: "Can I purchase tickets online?",
        answer: (
          <>
            Yes, tickets should be <Link href="/tickets">purchased online</Link> and in advance.
            In-person ticket availability is limited and will sell out quickly.
          </>
        ),
      },
      {
        id: "children-pricing",
        question: "Do you offer special pricing for children?",
        answer:
          "No, Lake Hickory Haunts does not offer children pricing or special discounts. Lake Hickory Haunts is a scary and thrilling attraction, and it may not be suitable for some young children.",
      },
      {
        id: "military-first-responder",
        question: "Do you offer a military or first responder discount?",
        answer:
          "Yes, we offer a $5 discount for military, police, fire and ems.",
      },
      {
        id: "any-night",
        question: "If I purchase tickets, are they good for any night?",
        answer:
          "No. When you purchase tickets online, you will select which color that corresponds with your ticket. The ticket must be redeemed on a night corresponding with the same color as the ticket.",
      },
      {
        id: "group-rates",
        question: "Does Lake Hickory Haunts offer group rates?",
        answer:
          "Yes, we offer a special price for groups of 20 or greater on Green and Yellow Nights! Group rate tickets are $30 per person on Green Nights and $34 per person on Yellow Nights. To order group tickets please contact us at lakehickoryhaunts@gmail.com, group tickets must be purchased at least 48 hours in advance.",
      },
      {
        id: "parking-cost",
        question: "How much is parking?",
        answer:
          "Parking is $5 for standard parking and $10 for premier parking, which is the best available spot (premier parking is the closest and best parking possible). For vehicles with 20 or more passengers, parking is $20 - Cash or card is accepted.",
      },
      {
        id: "pricing-varies",
        question: "Why are General Admission prices different on certain nights?",
        answer:
          "Online ticket pricing is lower on nights with less crowds and higher on nights with more crowds. This helps to alleviate long wait times and large crowds. If tickets are purchased in-person, ticket pricing is the same regardless of the night.",
      },
      {
        id: "included-attractions",
        question: "Are all the attractions included with admission?",
        answer:
          "Yes, all 13 main attractions are included with admission. The only attractions not included with admission are the Midway attractions. (4D Asylum Experience, Curse Of The Mummy & Pharaoh's Treasure Escape Room, Axe Throwing, Dracula's Dizzy Darts, Coffin Rides, and Monster Mash)",
      },
      {
        id: "worth-price",
        question: "Is it worth the admission price?",
        answer:
          "According to haunt industry standards, a haunted attraction should charge $1 per minute. At Lake Hickory Haunts, we charge less than $0.50 per minute. Yes, it's worth it!",
      },
      {
        id: "sales-tax",
        question: "Does Lake Hickory Haunts charge tax?",
        answer: "Yes. Sales tax is 6.75%.",
      },
    ],
  },
  {
    id: "safety-accessibility",
    label: "Safety and Accessibility",
    title: "Health, security, accessibility, and guest safety.",
    summary:
      "These are the answers to read if your group has accessibility needs, health concerns, weather questions, or needs to know what is and is not allowed on the property.",
    accent: "gold",
    highlights: [
      "Security check for every guest",
      "Wheelchair tours require advance email",
      "Fog, strobe lights, and water effects are used",
      "Open rain or shine in most conditions",
      "No alcohol, smoking, or weapons",
      "Photography allowed only in Midway areas",
    ],
    statLabel: "Accessibility",
    statValue: "Green-night assisted tours",
    faqs: [
      {
        id: "security",
        question: "Do your attractions have security and safety personnel?",
        answer:
          "Yes, Lake Hickory Haunts has a security team, in addition to hired police officers. In addition, we have a Registered Nurse and EMT on duty at all times. NOTE: All guests must go through a security check, including a metal detection check. Knives, guns, lighters, flashlights, glo-bands, and all other type of weapons are not allowed, NO EXCEPTIONS.",
      },
      {
        id: "actors-touch",
        question: "Are the actors/monsters allowed to touch you?",
        answer:
          "NO. The actors in Lake Hickory Haunts will not touch you during the tour and you may not touch them. However, they do get very close. Occasionally you may brush up against their costumes or props. You may also come into contact with set pieces, designed to deliver a 4D scare.",
      },
      {
        id: "water-effects",
        question: "Does the attraction use water to create scares?",
        answer:
          "Yes. Some areas use water effects, so dress appropriately and wear footwear suited for safety and comfort.",
      },
      {
        id: "restrooms",
        question: "Does Lake Hickory Haunts have restrooms?",
        answer:
          "Yes. The property has indoor heated and air-conditioned restrooms as well as portable restrooms around the property.",
      },
      {
        id: "wheelchair",
        question: "Is Lake Hickory Haunts wheelchair accessible?",
        answer:
          "Lake Hickory Haunts offers special tours for guests who are in a wheelchair and/or are unable to walk through the entire tour. These tours are only offered on green nights. To arrange an assisted tour, email us at LakeHickoryHaunts@gmail.com at least 24 hours in advance with the date you would like to visit and we will get back with you as soon as possible.",
        details: [
          "Persons with Disabilities: Haunted Amusement facilities are making strides in addressing the needs of visitors with disabilities, but it's not always possible to include everybody and also keep the masses safe. The forces exerted by some scares, amusement devices, and/or rides can be dangerous to a visitor who cannot maintain the posture required.",
          "Upon entering an amusement facility, a guest with a disability should visit an information desk and request any information regarding access to the facilities. Lake Hickory Haunts LLC. will provide you with a guide of the physical requirements required to safely enjoy the scares, amusements, devices, and/or rides at its facility(s).",
          "Many scares at a haunted amusement facility are of a dynamic nature. Guests with disabilities should refer to an amusement facilities safety guide available at the Box office, Queue Line, and our Homepage. Participate responsibly. You should be in good health to participate safely. You know your physical abilities. If you suspect that your health could be at risk for any reason, or you could aggravate a pre-existing condition of any kind by experiencing a scare, amusement device and/or ride at Lake Hickory Haunts LLC. DO NOT RIDE!",
        ],
      },
      {
        id: "fog-strobe-lights",
        question: "Are there fog machines and strobe lights?",
        answer:
          "Yes to both. Fog and strobe lighting are part of the experience.",
      },
      {
        id: "pregnancy",
        question: "Can I go through if I am pregnant or have health concerns?",
        answer: (
          <>
            Lake Hickory Haunts is not recommended for visitors who are pregnant, have heart conditions or are in
            general poor health. Please read our <Link href="/faq#disclaimers-rules">Warnings and Regulations Page</Link>.
          </>
        ),
      },
      {
        id: "leave-tour",
        question: "If I get too scared, can I end my tour early?",
        answer:
          "Yes, at any point in time during your tour you may ask the nearest actor or staff member to assist you in leaving the tour... We will immediately assist in escorting you out of the tour and away from the scares. Remember, there are no refunds once your ticket is purchased!",
      },
      {
        id: "rain",
        question: "Are the attractions open if it rains?",
        answer: (
          <>
            Lake Hickory Haunts is generally open rain or shine. While we are an indoor and outdoor attraction, our
            grounds are kept in a way that makes the tour safe even when it rains. Please remember to wear appropriate
            shoes for outdoor conditions. However, if there is heavy rain, storms, and/or wind that create dangerous
            conditions then we must close for safety purposes. In the event of closure due to rain on a night of your
            intended visit, your ticket will be valid on any other night matching your nights color. Connect with us on{" "}
            <a href="https://www.facebook.com/lakehickoryhaunts/" target="_blank" rel="noreferrer">Facebook</a>,{" "}
            <a href="https://www.instagram.com/lakehickoryhaunts/" target="_blank" rel="noreferrer">Instagram</a>,
            Snapchat, and Twitter to be notified of these things on an hourly basis. If we are closed due to inclement
            weather pre-purchased tickets may be used on another date we are open.
          </>
        ),
      },
      {
        id: "costumes",
        question: "Can my group wear Halloween costumes?",
        answer:
          "Yes. Costumes are allowed, but masks that hide your face or identity are not permitted.",
      },
      {
        id: "photos",
        question: "Can we take photos and videos of your haunted house?",
        answer:
          "Guests are encouraged to take photos and videos at our Midway, Ghost Town, and various photo ops. However, there is no photography or videography allowed throughout the main haunted attractions (from Nightmare Factory through Chop Shop). This includes but is not limited to handheld cameras, smart glasses, or smart phones. If you're interested in contacting us about promotional/collaborative filming, please email us at lakehickoryhaunts@gmail.com at least 36 hours in advance.",
      },
      {
        id: "bring-items",
        question: "What can't we bring with us inside your haunted houses?",
        answer: (
          <>
            - No pets
            <br />
            - No weapons of any type (knives, guns, brass knuckles, etc.)
            <br />
            - No drugs or alcohol
            <br />
            - No lighters
            <br />
            - No smoking or lighters.
            <br />
            - No laser pointers or flashlights
            <br />
            - No outside food or beverage.
          </>
        ),
      },
      {
        id: "thrown-out",
        question: "Can we be thrown out of the park for any reason?",
        answer: (
          <>
            Yes. We do not allow physical or emotion violence, weapons of any kind, alcohol, or drugs. Please see our{" "}
            <Link href="/faq#disclaimers-rules">Warnings and Regulations Page</Link>. If these rules are broken, we will
            attempt to correct the situation without ejecting the violator from the park. We do not want to throw anyone
            out but if we must eject the violating guest, there is no refund.
          </>
        ),
      },
      {
        id: "alcohol-smoking",
        question: "Do you serve alcohol, and is smoking allowed?",
        answer:
          "No to both. Alcohol is not sold or allowed, and smoking, including vaping, is not allowed on the property.",
      },
      {
        id: "employment",
        question: "How do I work at Lake Hickory Haunts?",
        answer: (
          <>
            Visit the employment <Link href="https://lakehickoryhaunts.com/contact/">application page</Link> to apply.
            Applicants must be at least 16 years old.
          </>
        ),
      },
      {
        id: "background-checks",
        question: "Does Lake Hickory Haunts Conduct Background Checks on its Employees?",
        answer:
          "Yes. We do not employ people who have been convicted of a felony in the past 5 years, or those who have ever been convicted of a \"threatening\" crime. Your safety is our priority.",
      },
    ],
  },
  {
    id: "experience-amenities",
    label: "Plan Your Visit",
    title: "What the night feels like once you are inside.",
    summary:
      "These answers focus on the length of the haunt, waiting system, Midway attractions, shopping, food, and what changes season to season.",
    accent: "violet",
    highlights: ["Typical haunt time: 45 to 60 minutes", "Queue text system used on General Admission", "Midway and gift shop stay part of the night"],
    statLabel: "Tour length",
    statValue: "45 to 60 min",
    faqs: [
      {
        id: "tour-length",
        question: "How long does it take to go through the attraction?",
        answer:
          "Typically, our haunt lasts 45 minutes to 1 hour from start to finish, not counting time spent on the Midway of Mayhem, wait time, etc.",
      },
      {
        id: "wait-time",
        question: "How long is the wait time?",
        answer:
          "Short Answer: It depends on the night. The earlier in the season you visit, the shorter the wait time. Arrive at 7PM to avoid long wait times and experience our opening ceremonies.",
        details: [
          "Long Answer: First, it is important to know that Lake Hickory Haunts features a Midway with a unique waiting system. You will receive a text message notifying your group when to proceed to the Midway of Mayhem.",
          "While you are waiting you may enjoy our midway attractions, photo-ops with midway monsters, tasty concessions, fire-pits, gift shop, midway attractions, and more!",
          "Once you enter the queue line, your way should always be less than 15 minutes.",
          "If you choose to purchase a Fast Pass, you may enter the Fast Pass queue line as soon as you would like. The Fast Pass line moves at a much faster rate than the general admission line.",
          "If you purchase a VIP Pass, you are free to enter the attraction immediately whenever you choose.",
          "Best Answer: If you would like to shorten your wait time, purchase a Fast Pass for a faster moving line with no extra wait time on the midway. If you would like to enter immediately with no wait time, purchase a VIP Pass.",
        ],
      },
      {
        id: "midway-attractions",
        question: "How do I experience the Midway attractions?",
        answer:
          "You may purchase Midway attraction tickets at our midway box office or online during checkout (when purchasing admission tickets, add-ons are available to choose at check-out).",
      },
      {
        id: "concessions",
        question: "Do you sell concessions and souvenirs?",
        answer:
          "Yes! We offer both concessions and souvenirs. Our Kraken's Kitchen serves plenty of food and drink for you, your friends, and your family to snack on during the night. Additionally, our Monster Mart offers clothing, and collectables available for purchase that will help you remember the night!",
      },
      {
        id: "same-every-year",
        question: "Are the attractions the same every year?",
        answer:
          "No, we add and change our attractions yearly, creating a new experience every year!",
      },
      {
        id: "scary-fun",
        question: "Is Lake Hickory Haunts scary and is it fun?",
        answer:
          "Yes! We are a fun and scary attraction! Lake hickory haunts is a frightening enviornment that is fun for the fear seeker and still a family friendly place!",
      },
      {
        id: "other-attractions",
        question: "Do you recommend any other local attractions?",
        answer:
          "Yes. If you want a year-round option, Lake Hickory Escape is the sister attraction and a fun next stop beyond haunt season.",
      },
    ],
  },
];

const jumpLinks = [
  { id: "general-questions", label: "General Questions", tone: "acid" },
  { id: "disclaimers-rules", label: "Warnings and Disclaimers", tone: "gold" },
];

export function FaqRulesExperience() {
  const [activePolicyId, setActivePolicyId] = useState(policySections[0].id);
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const [openQuestionId, setOpenQuestionId] = useState(faqCategories[0].faqs[0].id);

  const activePolicy = useMemo(
    () => policySections.find((section) => section.id === activePolicyId) ?? policySections[0],
    [activePolicyId],
  );

  const activeCategory = useMemo(
    () => faqCategories.find((category) => category.id === activeCategoryId) ?? faqCategories[0],
    [activeCategoryId],
  );

  return (
    <section className="faq-exp faq-exp-hub">
      <section className="faq-exp-hero">
        <div className="faq-exp-hero-copy">
          <p className="faq-exp-kicker">General Questions</p>
          <h1>
            Questions or Concerns
            <br />
            Before the Fear Begins.
          </h1>
          <p className="faq-exp-lede">
            Find the most important Lake Hickory Haunts information in one place, including ticket
            details, safety policies, and common guest questions before your visit.
          </p>
          <div className="faq-exp-inline-alerts" aria-label="Top planning reminders">
            <span>Buy online in advance</span>
            <span>Arrive 10 to 15 minutes early</span>
            <span>Fog and strobe lights are used</span>
          </div>
        </div>
      </section>

      <nav className="faq-exp-jump-nav" aria-label="FAQ sections">
        {jumpLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`faq-exp-jump-link is-${link.tone}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <section className="faq-exp-signal" aria-label="Important guest acknowledgements">
        <p>Timeslots are arrival windows, not guaranteed entry timestamps.</p>
        <p>Online pricing and ticket validity change based on Green, Yellow, and Orange nights.</p>
        <p>Security checks, fog, strobe lights, and intense scare effects are part of the event.</p>
      </section>

      <section className="faq-exp-block faq-exp-general-block" id="general-questions">
        <div className="faq-exp-block-head">
          <p className="faq-exp-kicker">General Questions</p>
          <h2>Browse the answers the way guests actually plan their night.</h2>
          <p>
            The official Lake Hickory Haunts FAQ covers a lot of ground. To make it flow better,
            the information is grouped by planning topic so guests can jump straight to tickets,
            pricing, safety, policies, or experience details.
          </p>
        </div>

        <div className="faq-exp-general-stage">
          <aside className="faq-exp-nav faq-exp-general-nav" aria-label="General question categories">
            {faqCategories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                className={`faq-exp-nav-item ${activeCategoryId === category.id ? "is-active" : ""}`}
                onClick={() => {
                  setActiveCategoryId(category.id);
                  setOpenQuestionId(category.faqs[0].id);
                }}
              >
                <span className="faq-exp-nav-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-exp-nav-copy">
                  <strong>{category.label}</strong>
                  <small>{category.faqs.length} answers</small>
                </span>
              </button>
            ))}
          </aside>

          <div className={`faq-exp-general-panel is-${activeCategory.accent}`}>
            <div className="faq-exp-general-feature">
              <div className="faq-exp-general-copy">
                <h3>{activeCategory.label}</h3>
                <p>{activeCategory.summary}</p>
              </div>

              <div className="faq-exp-general-meta">
                <div className="faq-exp-general-highlights" aria-label="Category highlights">
                  {activeCategory.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="faq-exp-qa-list">
              {activeCategory.faqs.map((item) => {
                const isOpen = openQuestionId === item.id;

                return (
                  <article key={item.id} className={`faq-exp-qa ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="faq-exp-qa-trigger"
                      onClick={() => setOpenQuestionId(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <span>{item.question}</span>
                      <span className="faq-exp-qa-icon" aria-hidden="true">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    <div
                      className="faq-exp-qa-answer"
                      id={`faq-answer-${item.id}`}
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                      {item.details?.map((detail, index) => (
                        <p key={`${item.id}-detail-${index}`}>{detail}</p>
                      ))}
                      {item.detailList?.length ? (
                        <ul className="faq-exp-qa-list">
                          {item.detailList.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="faq-exp-general-actions">
              <Link href="/hours-events" className="faq-exp-action-link is-primary">
                View Park Hours
              </Link>
              <Link href="/whileyouwait" className="faq-exp-action-link">
                Plan Your Visit
              </Link>
              <Link href="/tickets" className="faq-exp-action-link">
                See Ticket Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-exp-block" id="disclaimers-rules">
        <div className="faq-exp-block-head">
          <p className="faq-exp-kicker">Warnings and Disclaimers</p>
          <h2>Read Before You Enter Section</h2>
          <p>
            The attraction policies still matter just as much as the ticket details. This section
            keeps the original warning and rules view intact so guests can scan the safety guidance
            before the rest of the planning questions.
          </p>
        </div>

        <section className="faq-exp-stage">
          <div className="faq-exp-nav" role="tablist" aria-label="Policy categories">
            {policySections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                className={`faq-exp-nav-item ${activePolicyId === section.id ? "is-active" : ""}`}
                onClick={() => setActivePolicyId(section.id)}
                role="tab"
                aria-selected={activePolicyId === section.id}
                aria-controls={`faq-panel-${section.id}`}
                id={`faq-tab-${section.id}`}
              >
                <span className="faq-exp-nav-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-exp-nav-copy">
                  <strong>{section.label}</strong>
                  <small>Open guidance</small>
                </span>
              </button>
            ))}
          </div>

          <article
            className={`faq-exp-general-panel faq-exp-policy-panel is-${activePolicy.accent}`}
            id={`faq-panel-${activePolicy.id}`}
            role="tabpanel"
            aria-labelledby={`faq-tab-${activePolicy.id}`}
          >
            <div className="faq-exp-general-feature faq-exp-policy-feature">
              <div className="faq-exp-general-copy">
                <h3>{activePolicy.label}</h3>
                <p>{activePolicy.intro}</p>
                <p>{activePolicy.detail}</p>
              </div>

              <div className="faq-exp-policy-visual-meta">
                <div className="faq-exp-general-meta">
                  <div className="faq-exp-general-highlights" aria-label="Policy highlights">
                    {activePolicy.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {activePolicy.posterImages?.length ? (
              <div className="faq-exp-policy-gallery" aria-label={`${activePolicy.label} poster gallery`}>
                {activePolicy.posterImages.map((poster) => (
                  <figure
                    key={poster.src}
                    className={`faq-exp-policy-poster ${poster.featured ? "is-featured" : ""}`}
                  >
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      width={poster.width}
                      height={poster.height}
                    />
                  </figure>
                ))}
              </div>
            ) : null}

            {activePolicy.points?.length ? (
              <div className="faq-exp-policy-points">
                {activePolicy.points.map((point) => (
                  <div className="faq-exp-policy-point" key={point}>
                    <span aria-hidden="true" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        </section>
      </section>
    </section>
  );
}
