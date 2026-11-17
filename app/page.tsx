import HomePage from "@/components/home/HomePage";
import { homeEn } from "@/content/home";
import { alternatesFor, OWNER, SITE_URL } from "@/lib/site";

export const metadata = {
  title: { absolute: "System's SagaZ | Stop renting software. Own your tools and your data." },
  description:
    "I help UK small businesses and charities replace messy spreadsheets and software subscriptions with systems they own: apps, automation and free software. English and Spanish.",
  alternates: alternatesFor("/", "en"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "System's SagaZ",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo-dragon-40x40.png`,
  image: `${SITE_URL}/images/hero.png`,
  description:
    "Apps, workflow automation and free software for UK small businesses and charities, so you own your tools and your data. English and Spanish.",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  availableLanguage: ["en", "es"],
  founder: { "@type": "Person", name: OWNER, url: `${SITE_URL}/about` },
  sameAs: ["https://github.com/josesagaz"],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage t={homeEn} />
    </>
  );
}
