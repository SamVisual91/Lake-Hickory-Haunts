import "./globals.css";
import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HistoryNavigationReloader } from "../components/HistoryNavigationReloader";
import { DripReviewsWidget } from "../components/DripReviewsWidget";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/seo";

const GTM_ID = "GTM-WL2RMD";

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
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "512x512" },
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
    shortcut: ["/icon"],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
