import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Keynotes, Workshops & Coaching",
  description:
    "Mark Bunting's communication services: keynote speaking, team workshops, leadership coaching, and culture work — built around the Find / Hire / Spread Your Fire framework.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "https://markbunting.co.nz/services",
    title: "Services — Keynotes, Workshops & Coaching",
    description:
      "Keynote speaking, team workshops, leadership coaching, and culture work across New Zealand.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
