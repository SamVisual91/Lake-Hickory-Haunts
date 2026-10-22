import { buildMetadata } from "../../lib/seo";

const jobsApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSff7tZNJSOAJ-qrkF13y2ptqF4mcOZDW9OiSYQMGdLgWIY6ug/viewform";

export const metadata = buildMetadata({
  title: "Jobs and Careers - Lake Hickory Haunts",
  description:
    "Apply to join the Lake Hickory Haunts team. Explore seasonal job opportunities at North Carolina's premier haunted attraction.",
  path: "/jobs",
});

export default function JobsPage() {
  return (
    <main className="interior-page jobs-page-shell">
      <section className="jobs-page page-width">
        <p className="jobs-page-eyebrow">Join the Haunt Team</p>
        <h1>Jobs at Lake Hickory Haunts</h1>
        <p className="jobs-page-copy">
          Lake Hickory Haunts is looking for energetic team members to help create unforgettable nights of fear and fun. Submit an application to be considered for seasonal opportunities.
        </p>
        <a
          className="jobs-page-cta"
          href={jobsApplicationUrl}
          target="_blank"
          rel="noreferrer"
        >
          Apply Now
        </a>
      </section>
    </main>
  );
}
