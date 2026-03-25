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
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "Mark Bunting Human Communications",
    title: "Mark Bunting Human Communications",
    description:
      "I teach people to get on with each other. Communication training, keynote speaking, and coaching for teams and leaders across New Zealand.",
  },
  twitter: {
    card: "summary_large_image",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
