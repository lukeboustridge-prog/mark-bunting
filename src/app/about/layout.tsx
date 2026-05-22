import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mark Bunting",
  description:
    "Meet Mark Bunting — New Zealand communication trainer, keynote speaker, and coach. His story, his approach, and why he teaches people to get on with each other.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://markbunting.co.nz/about",
    title: "About Mark Bunting",
    description:
      "Mark Bunting's story, approach, and why he teaches people to get on with each other.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
