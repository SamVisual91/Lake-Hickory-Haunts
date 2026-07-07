import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HistoryNavigationReloader } from "../components/HistoryNavigationReloader";

export const metadata = {
  title: "Lake Hickory Haunts",
  description:
    "A multi-page Next.js concept site for Lake Hickory Haunts inspired by the big destination feel of studio park websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <HistoryNavigationReloader />
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
