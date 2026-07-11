import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sirisha Neelam | AI/ML Product Portfolio",
  description: "Product-minded AI/ML portfolio featuring the Spotlight Speakers 0→1 AI Lab, an AI/ML timeline, and a responsible AI practice.",
  openGraph: {
    title: "Sirisha Neelam | AI/ML Product Portfolio",
    description: "Turning emerging technology into useful, human-centered products.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Sirisha Neelam AI/ML Product Portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
