import Link from "next/link";
import PageHeader from "@/components/page-header";
import Breadcrumbs from "@/components/breadcrumbs";
import { SITE_URL, OWNER } from "@/lib/site";

export type ServiceContent = {
  crumbs: { name: string; href: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  problem: { title: string; items: string[] };
  forWho: { title: string; items: string[] };
  get: { title: string; items: { title: string; text: string }[] };
  steps: { title: string; items: { title: string; text: string }[] };
  proof?: { title: string; text: string; href: string; linkText: string };
  price: { title: string; text: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; button: string; href: string };
  serviceType: string;
};

const card = "rounded-2xl border border-gray-800 bg-gray-900/60 p-6";
const h2 = "pb-6 font-nacelle text-2xl font-semibold text-gray-100 md:text-3xl";

export default function ServicePage({ c }: { c: ServiceContent }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.title,
    serviceType: c.serviceType,
    description: c.intro,
    url: SITE_URL + c.path,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    provider: {
      "@type": "ProfessionalService",
      name: "System's SagaZ",
      url: SITE_URL,
      founder: { "@type": "Person", name: OWNER },
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumbs items={c.crumbs} />
      <div className="px-4 sm:px-6">
        <PageHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
      </div>

      <div className="mx-auto w-full max-w-5xl space-y-16 px-4 pb-20 sm:px-6 md:space-y-20">
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className={h2}>{c.problem.title}</h2>
            <ul className="space-y-3">
              {c.problem.items.map((p) => (
                <li key={p} className="flex gap-3 text-gray-300"><span aria-hidden="true" className="text-red-400">✕</span>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={h2}>{c.forWho.title}</h2>
            <ul className="space-y-3">
              {c.forWho.items.map((p) => (
                <li key={p} className="flex gap-3 text-gray-300"><span aria-hidden="true" className="text-red-400">✓</span>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className={h2}>{c.get.title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {c.get.items.map((g) => (
              <div key={g.title} className={card}>
                <h3 className="pb-2 font-nacelle text-lg font-semibold text-gray-100">{g.title}</h3>
                <p className="text-gray-300">{g.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={h2}>{c.steps.title}</h2>
          <ol className="grid gap-6 md:grid-cols-4">
            {c.steps.items.map((s, i) => (
              <li key={s.title} className={card}>
                <span className="font-nacelle text-sm font-semibold text-red-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pb-2 pt-1 font-nacelle text-lg font-semibold text-gray-100">{s.title}</h3>
                <p className="text-gray-300">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {c.proof && (
          <section className={`${card} p-8 md:p-10`}>
            <h2 className="pb-4 font-nacelle text-2xl font-semibold text-gray-100">{c.proof.title}</h2>
            <p className="pb-6 text-lg text-gray-300">{c.proof.text}</p>
            <Link href={c.proof.href} className="text-red-300 underline underline-offset-4">{c.proof.linkText}</Link>
          </section>
        )}

        <section className="mx-auto max-w-3xl">
          <h2 className={h2}>{c.price.title}</h2>
          <p className="text-lg text-gray-300">{c.price.text}</p>
        </section>

        <section className="mx-auto max-w-3xl">
          <h2 className={h2}>{c.faq.title}</h2>
          <div className="space-y-3">
            {c.faq.items.map((f) => (
              <details key={f.q} className={`${card} group p-5`}>
                <summary className="cursor-pointer list-none font-medium text-gray-100 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span aria-hidden="true" className="text-red-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="pt-3 text-gray-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-linear-to-r from-transparent via-gray-800/50 py-12 text-center">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-100">{c.cta.title}</h2>
          <p className="mx-auto max-w-2xl pb-8 text-lg text-gray-300">{c.cta.text}</p>
          <Link
            href={c.cta.href}
            className="btn bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
          >
            {c.cta.button}
          </Link>
        </section>
      </div>
    </>
  );
}
