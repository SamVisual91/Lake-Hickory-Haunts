import { FaqRulesExperience } from "../../components/FaqRulesExperience";

export const metadata = {
  title: "FAQ | Lake Hickory Haunts",
};

export default function FaqPage() {
  return (
    <main className="page-width interior-page faq-page-shell">
      <FaqRulesExperience />
    </main>
  );
}
