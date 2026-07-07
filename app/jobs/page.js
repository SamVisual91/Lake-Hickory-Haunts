import { redirect } from "next/navigation";

const jobsApplicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSff7tZNJSOAJ-qrkF13y2ptqF4mcOZDW9OiSYQMGdLgWIY6ug/viewform";

export default function JobsPage() {
  redirect(jobsApplicationUrl);
}
