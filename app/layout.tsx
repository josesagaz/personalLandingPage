import "./css/style.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://systems-sagaz.co.uk"),
  title: {
    default: "System's SagaZ | Open-source automation for UK small businesses",
    template: "%s | System's SagaZ",
  },
  description:
    "Workflow automation for UK small businesses built on free and open-source software. Own your data and your workflows, with no monthly software rent. Service in English and Spanish.",
  openGraph: {
    type: "website",
    siteName: "System's SagaZ",
    locale: "en_GB",
    url: "/",
    images: [{ url: "/images/hero.png", alt: "System's SagaZ" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
