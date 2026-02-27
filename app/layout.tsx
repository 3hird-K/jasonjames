import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "aos/dist/aos.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Jason James Sta. Rita - Web Developer",
  description: "Portfolio of Jason James Sta. Rita — web developer specializing in Next.js, React, and modern frontend technologies. View projects, skills, and experience.",
  keywords: [
    "Jason James Sta. Rita",
    "Web Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
    "Philippines",
  ],
  authors: [{ name: "Jason James Sta. Rita" }],
  creator: "Jason James Sta. Rita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    title: "Jason James Sta. Rita - Web Developer",
    description:
      "Web developer crafting modern, performant web experiences. Explore my projects, skills, and professional journey.",
    siteName: "Jason James Sta. Rita Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason James Sta. Rita - Web Developer",
    description:
      "Web developer crafting modern, performant web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#home" className="skip-to-content">
          Skip to content
        </a>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
