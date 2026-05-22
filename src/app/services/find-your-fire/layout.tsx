import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Fire — Personal & Team Workshops",
  description:
    "Find Your Fire workshops help individuals and teams uncover what drives their connection, motivation, and communication. Delivered across New Zealand by Mark Bunting.",
  alternates: { canonical: "/services/find-your-fire" },
  openGraph: {
    url: "https://markbunting.co.nz/services/find-your-fire",
    title: "Find Your Fire — Personal & Team Workshops",
    description:
      "Uncover what drives connection, motivation, and communication in your team.",
  },
};

export default function FindYourFireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
