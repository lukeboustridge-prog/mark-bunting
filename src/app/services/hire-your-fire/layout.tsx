import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Your Fire — Recruitment & Onboarding Workshops",
  description:
    "Hire Your Fire workshops help organisations hire for cultural and communication fit — improving recruitment, onboarding, and team chemistry. Delivered across New Zealand.",
  alternates: { canonical: "/services/hire-your-fire" },
  openGraph: {
    url: "https://markbunting.co.nz/services/hire-your-fire",
    title: "Hire Your Fire — Recruitment & Onboarding Workshops",
    description:
      "Hire for cultural and communication fit. Build stronger teams from day one.",
  },
};

export default function HireYourFireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
