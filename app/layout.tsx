import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sirisha Neelam | AI/ML Product Portfolio",
  description: "Sirisha Neelam’s AI/ML product portfolio featuring the Spotlight Speakers 0→1 AI Lab, applied learning, and responsible change leadership.",
  openGraph: {
    title: "Sirisha Neelam | AI/ML Product Portfolio",
    description: "AI/ML product thinker, change leader, and 0→1 builder.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Sirisha Neelam AI/ML Product Portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
