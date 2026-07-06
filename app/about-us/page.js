import { AboutUsExperience } from "../../components/AboutUsExperience";

export const metadata = {
  title: "About Us | Lake Hickory Haunts",
};

export default function AboutUsPage() {
  return (
    <main className="page-shell interior-page about-page">
      <AboutUsExperience />
    </main>
  );
}
