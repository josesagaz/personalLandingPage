import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/hero.png";
import PageIllustration from "@/components/page-illustration";
import type { Lang } from "@/lib/site";

type Item = { title: string; text: string; href?: string };

export type HomeContent = {
  hero: { title: string; sub: string; cta: string; ctaHref: string; note: string };
  pains: { eyebrow: string; title: string; items: string[] };
  services: { eyebrow: string; title: string; intro: string; items: Item[] };
  proof: { eyebrow: string; title: string; text: string; stats: { value: string; label: string }[]; href?: string; linkText?: string };
  steps: { eyebrow: string; title: string; items: Item[] };
  why: { eyebrow: string; title: string; text: string[]; href?: string; linkText?: string };
  about: { eyebrow: string; title: string; text: string; href: string; linkText: string };
  final: { title: string; text: string; cta: string; ctaHref: string };
};

const ctaClass =
  "btn group bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]";
const card = "rounded-2xl border border-gray-800 bg-gray-900/60 p-6";

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
      <p className="pb-3 text-sm font-medium text-red-400">{eyebrow}</p>
      <h2 className="font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">{title}</h2>
      {intro && <p className="pt-4 text-lg text-gray-300">{intro}</p>}
    </div>
  );
}

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-20">
      {children}
    </section>
  );
}

export default function Home({ c, lang }: { c: HomeContent; lang: Lang }) {
  return (
    <>
      <PageIllustration />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-20">
        <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-red-200),var(--color-gray-50),var(--color-red-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            {c.hero.title}
          </h1>
          <p className="mb-8 text-xl text-gray-300">{c.hero.sub}</p>
          <Link href={c.hero.ctaHref} className={ctaClass}>
            <span className="relative inline-flex items-center">
              {c.hero.cta}
              <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">-&gt;</span>
            </span>
          </Link>
          <p className="pt-4 text-sm text-gray-400">{c.hero.note}</p>
        </div>
        <Image
          src={HeroImage}
          priority
          sizes="(max-width: 1152px) 100vw, 1104px"
          alt={lang === "es" ? "Logo de System's SagaZ: software libre, estándares abiertos, automatización" : "System's SagaZ logo: free software, open standards, automation"}
          className="mx-auto"
        />
      </section>

      {/* Pains */}
      <Section>
        <SectionHead eyebrow={c.pains.eyebrow} title={c.pains.title} />
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {c.pains.items.map((p) => (
            <li key={p} className={`${card} flex gap-3 text-gray-200`}>
              <span aria-hidden="true" className="text-red-400">✕</span>
              {p}
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section id="services">
        <SectionHead eyebrow={c.services.eyebrow} title={c.services.title} intro={c.services.intro} />
        <div className="grid gap-6 md:grid-cols-3">
          {c.services.items.map((s) => (
            <article key={s.title} className={card}>
              <h3 className="pb-2 font-nacelle text-xl font-semibold text-gray-100">
                {s.href ? <Link href={s.href} className="hover:text-red-300">{s.title}</Link> : s.title}
              </h3>
              <p className="text-gray-300">{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Proof */}
      <Section>
        <div className={`${card} mx-auto max-w-4xl p-8 md:p-12`}>
          <p className="pb-3 text-sm font-medium text-red-400">{c.proof.eyebrow}</p>
          <h2 className="pb-4 font-nacelle text-2xl font-semibold text-gray-100 md:text-3xl">{c.proof.title}</h2>
          <p className="pb-8 text-lg text-gray-300">{c.proof.text}</p>
          <dl className="grid grid-cols-3 gap-4 text-center">
            {c.proof.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-sm text-gray-400">{s.label}</dt>
                <dd className="font-nacelle text-3xl font-semibold text-red-300">{s.value}</dd>
              </div>
            ))}
          </dl>
          {c.proof.href && (
            <p className="pt-8">
              <Link href={c.proof.href} className="text-red-300 underline underline-offset-4">{c.proof.linkText}</Link>
            </p>
          )}
        </div>
      </Section>

      {/* How I work */}
      <Section>
        <SectionHead eyebrow={c.steps.eyebrow} title={c.steps.title} />
        <ol className="grid gap-6 md:grid-cols-4">
          {c.steps.items.map((s, i) => (
            <li key={s.title} className={card}>
              <span className="font-nacelle text-sm font-semibold text-red-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pb-2 pt-1 font-nacelle text-lg font-semibold text-gray-100">{s.title}</h3>
              <p className="text-gray-300">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why free software */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="pb-3 text-sm font-medium text-red-400">{c.why.eyebrow}</p>
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-100">{c.why.title}</h2>
          {c.why.text.map((t) => (
            <p key={t} className="pb-4 text-lg text-gray-300">{t}</p>
          ))}
          {c.why.href && (
            <Link href={c.why.href} className="text-red-300 underline underline-offset-4">{c.why.linkText}</Link>
          )}
        </div>
      </Section>

      {/* About */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="pb-3 text-sm font-medium text-red-400">{c.about.eyebrow}</p>
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-100">{c.about.title}</h2>
          <p className="pb-4 text-lg text-gray-300">{c.about.text}</p>
          <Link href={c.about.href} className="text-red-300 underline underline-offset-4">{c.about.linkText}</Link>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 text-center md:py-16">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">{c.final.title}</h2>
          <p className="mx-auto max-w-2xl pb-8 text-lg text-gray-300">{c.final.text}</p>
          <Link href={c.final.ctaHref} className={ctaClass}>{c.final.cta}</Link>
        </div>
      </section>
    </>
  );
}
