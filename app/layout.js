import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HistoryNavigationReloader } from "../components/HistoryNavigationReloader";
import { DripReviewsWidget } from "../components/DripReviewsWidget";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AmusementPark",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  telephone: "+1-828-212-1442",
  email: "lakehickoryhaunts@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "520 Carolina Ave",
    addressLocality: "Hickory",
    addressRegion: "NC",
    postalCode: "28601",
    addressCountry: "US",
  },
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <HistoryNavigationReloader />
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
        <DripReviewsWidget />
      </body>
    </html>
  );
}

