import Link from "next/link";
import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import Breadcrumbs from "@/components/breadcrumbs";
import { OWNER, SITE_URL } from "@/lib/site";

export type CaseContent = {
  path: string;
  lang: "en" | "es";
  crumbs: { name: string; href: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  sections: { title: string; paras?: string[]; items?: string[] }[];
  related: { text: string; href: string };
  cta: { text: string; href: string };
};

export default function CaseStudy({ c }: { c: CaseContent }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.intro,
    inLanguage: c.lang === "es" ? "es" : "en-GB",
    url: SITE_URL + c.path,
    datePublished: "2026-11-15",
    author: { "@type": "Person", name: OWNER, url: `${SITE_URL}/about` },
    publisher: { "@type": "Organization", name: "System's SagaZ", url: SITE_URL },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumbs items={c.crumbs} />
      <div className="px-4 sm:px-6">
        <PageHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      </div>
      <div className="mx-auto w-full max-w-3xl px-4 pb-6 sm:px-6">
        <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-center md:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-sm text-gray-400">{s.label}</dt>
              <dd className="font-nacelle text-2xl font-semibold text-red-300">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Prose>
        {c.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.paras?.map((p) => <p key={p}>{p}</p>)}
            {s.items && (
              <ul>
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}
          </section>
        ))}
        <p className="pt-6">
          <Link href={c.related.href}>{c.related.text}</Link>
        </p>
        <p>
          <Link href={c.cta.href}>{c.cta.text}</Link>
        </p>
      </Prose>
    </>
  );
}
