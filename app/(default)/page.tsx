import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";

export const metadata = {
  title: { absolute: "System's SagaZ | Open-source automation for UK small businesses" },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "System's SagaZ",
  url: "https://systems-sagaz.co.uk/",
  logo: "https://systems-sagaz.co.uk/images/logo-dragon-40x40.png",
  image: "https://systems-sagaz.co.uk/images/hero.png",
  description:
    "Workflow automation for UK small businesses built on free and open-source software, so you own your data and your workflows.",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  availableLanguage: ["en", "es"],
  founder: { "@type": "Person", name: "Jose Sagarnaga", url: "https://systems-sagaz.co.uk/about" },
  sameAs: ["https://github.com/josesagaz"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageIllustration />
      <Hero
        headline="Open Technology Powers the Modern World"
        subdeck="We build enterprise-grade automation for small businesses, technology built on freedom, engineered for growth"
        ctaText="Tell me about your setup"
        ctaUrl="/contact"
      />
      <Workflows />
    </>
  );
}
