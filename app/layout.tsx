import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains-mono", display: "swap" });



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
    <html lang="en-GB" className="scroll-pt-24">
  <body
    className={`${inter.variable} ${nacelle.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
  >
    <div className="flex min-h-screen flex-col overflow-clip">
      {children}
    </div>
  </body>
</html>
  );
}

