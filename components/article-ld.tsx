import { OWNER, SITE_URL } from "@/lib/site";

export default function ArticleLd({ title, description, path, lang }: { title: string; description: string; path: string; lang: "en" | "es" }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: lang === "es" ? "es" : "en-GB",
    url: SITE_URL + path,
    datePublished: "2026-11-15",
    author: { "@type": "Person", name: OWNER, url: `${SITE_URL}/about` },
    publisher: { "@type": "Organization", name: "System's SagaZ", url: SITE_URL },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
