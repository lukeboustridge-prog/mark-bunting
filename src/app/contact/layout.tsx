import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mark Bunting",
  description:
    "Book Mark Bunting for a keynote, workshop, or coaching engagement. Get in touch with Mark Bunting Human Communications, based in New Zealand.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "https://markbunting.co.nz/contact",
    title: "Contact Mark Bunting",
    description:
      "Book Mark Bunting for a keynote, workshop, or coaching engagement.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
