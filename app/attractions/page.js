import { AttractionsExplorer } from "../../components/AttractionsExplorer";

export const metadata = {
  title: "Attractions | Lake Hickory Haunts",
};

export default function AttractionsPage() {
  return (
    <main className="page-shell interior-page attractions-page-shell">
      <AttractionsExplorer />
    </main>
  );
}
