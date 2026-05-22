import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spread Your Fire — Leadership & Culture",
  description:
    "Spread Your Fire engagements help leaders scale connection, communication, and culture across their organisations. Mark Bunting works with NZ teams of all sizes.",
  alternates: { canonical: "/services/spread-your-fire" },
  openGraph: {
    url: "https://markbunting.co.nz/services/spread-your-fire",
    title: "Spread Your Fire — Leadership & Culture",
    description:
      "Scale connection, communication, and culture across your organisation.",
  },
};

export default function SpreadYourFireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
