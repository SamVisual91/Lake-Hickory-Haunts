import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HistoryNavigationReloader } from "../components/HistoryNavigationReloader";
import SplashScreen from "../components/SplashScreen";

export const metadata = {
  title: "Lake Hickory Haunts",
  description:
    "A multi-page Next.js concept site for Lake Hickory Haunts inspired by the big destination feel of studio park websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!window.sessionStorage.getItem("lhh-splash-dismissed")) {
                  document.documentElement.classList.add("splash-pending");
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body>
        <HistoryNavigationReloader />
        <SplashScreen />
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
