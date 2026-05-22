import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markbunting.co.nz"),
  title: {
    default: "Mark Bunting Human Communications",
    template: "%s | Mark Bunting Human Communications",
  },
  description:
    "Mark Bunting teaches people to get on with each other. Communication training, keynote speaking, and coaching for teams and leaders across New Zealand.",
  keywords: [
    "communication training",
    "keynote speaker",
    "New Zealand",
    "team communication",
    "leadership coaching",
    "Mark Bunting",
    "human communications",
  ],
  authors: [{ name: "Mark Bunting" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://markbunting.co.nz",
    siteName: "Mark Bunting Human Communications",
    title: "Mark Bunting Human Communications",
    description:
      "I teach people to get on with each other. Communication training, keynote speaking, and coaching for teams and leaders across New Zealand.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Bunting Human Communications",
    description:
      "I teach people to get on with each other. Communication training, keynote speaking, and coaching for teams and leaders across New Zealand.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const SITE_URL = "https://markbunting.co.nz";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Bunting",
  jobTitle: "Communication Trainer, Keynote Speaker & Coach",
  url: SITE_URL,
  image: `${SITE_URL}/images/mark-portrait-bw.png`,
  description:
    "Mark Bunting teaches people to get on with each other — communication training, keynote speaking, and coaching for teams and leaders across New Zealand.",
  worksFor: {
    "@type": "Organization",
    name: "Mark Bunting Human Communications",
    url: SITE_URL,
  },
  address: { "@type": "PostalAddress", addressCountry: "NZ" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mark Bunting Human Communications",
  url: SITE_URL,
  inLanguage: "en-NZ",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mark Bunting Human Communications",
  url: SITE_URL,
  logo: `${SITE_URL}/images/mark-portrait-bw.png`,
  founder: { "@type": "Person", name: "Mark Bunting" },
  areaServed: "NZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
