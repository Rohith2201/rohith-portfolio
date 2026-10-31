import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Rohith — Software & ML Developer",
  description:
    "Rohith Juluru is a software and ML developer building useful things for curious people.",
  generator: "v0.app",
  metadataBase: new URL("https://rohith.xyz"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rohith — Software & ML Developer",
    description:
      "Rohith Juluru builds useful digital products, AI tools, and thoughtful interfaces.",
    url: "https://rohith.xyz",
    siteName: "rohith.xyz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith — Software & ML Developer",
    description: "Useful things for curious people.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
