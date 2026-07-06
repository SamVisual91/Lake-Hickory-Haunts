import Link from "next/link";

const directionsVideoEmbed =
  "https://www.youtube.com/embed/QA_uC_QgZDQ?controls=1&rel=0&modestbranding=1&playsinline=1";

const routeCards = [
  {
    title: "From I-40 East / West",
    body:
      "Take exit 123B Hwy. 321 North to 5th traffic light, take left on Clement Blvd. NW will turn into 9th Ave. Dr. NW then Airport Rhodhiss Rd. go to stop sign, make left on Burke St. Continue straight for appx 1/4-1/2 mile, turn Right Onto LAKE HICKORY HAUNTS DR.",
  },
  {
    title: "From 321 South",
    body:
      "Take Granite Falls exit, make left on Archer St. go to the stop sign, make right turn on Falls Ave. Go to 1st traffic light, make left on 321A S Main St. Go to 2nd traffic light, make right and continue to the traffic circle. Proceed around the traffic circle and take 3rd exit to go left onto Duke St., which will eventually turn into Burke St. After crossing Lake Hickory Bridge, continue straight for appx 1 mile, Turn Right onto LAKE HICKORY HAUNTS DR.",
  },
];

export const metadata = {
  title: "Directions | Lake Hickory Haunts",
};

export default function DirectionsPage() {
  return (
    <main className="page-width interior-page directions-page-shell">
      <section className="directions-page-hero">
        <h1>LOCATION AND DESCRIPTION</h1>
        <p className="directions-page-lede">NEW ENTRANCE: LAKE HICKORY HAUNTS DR.</p>
        <p className="directions-page-address">
          <strong>520 Carolina Ave, Hickory, NC 28601</strong>
        </p>
        <div className="directions-page-actions">
          <a href="tel:8282121442">828-212-1442</a>
          <a href="mailto:lakehickoryhaunts@gmail.com">lakehickoryhaunts@gmail.com</a>
        </div>
      </section>

      <section className="directions-page-media">
        <div className="directions-page-video-shell">
          <div className="directions-page-video-frame">
            <iframe
              className="directions-page-video-embed"
              src={directionsVideoEmbed}
              title="Lake Hickory Haunts directions video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="directions-page-grid directions-page-grid-plain">
        {routeCards.map((route) => (
          <article key={route.title} className="directions-page-card directions-page-card-plain">
            <p className="directions-page-card-kicker">Driving Directions</p>
            <h2>{route.title}</h2>
            <p>{route.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
