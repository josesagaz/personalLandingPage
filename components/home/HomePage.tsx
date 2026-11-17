import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";

const container = "mx-auto w-full max-w-[1200px] px-6";
const kicker = "font-mono text-[13px] uppercase tracking-wide text-accent";
const h2 = "font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-5xl";
const btnPrimary =
  "inline-flex min-h-12 items-center gap-2.5 rounded-[10px] bg-accent px-6 font-semibold text-ink transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function HomePage({ t }: { t: HomeContent }) {
  return (
    <div className="bg-ink text-fg">
      <Nav t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <Stack t={t.stack} />
        <Pains t={t.pains} />
        <Services t={t.services} />
        <Work t={t.work} />
        <Process t={t.process} />
        <FreeSoftware t={t.free} />
        <About t={t.about} />
        <Cta t={t.cta} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}

function Nav({ t }: { t: HomeContent["nav"] }) {
  return (
    <header className="relative z-10 border-b border-line">
      <nav aria-label="Main" className={`${container} flex flex-wrap items-center justify-between gap-4 py-[18px]`}>
        <Link href="/" className="flex items-center gap-3 font-display text-xl font-bold tracking-[-0.01em]">
          <Image src="/images/logo-dragon.png" alt="" width={40} height={40} priority />
          <span>
            {t.brand}
            <span className="text-accent">{t.brandAccent}</span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px]">
          {t.links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href={t.langHref} className="rounded-md border border-line-3 px-2 py-1 font-mono text-[13px] text-muted hover:text-white">
            {t.langLabel}
          </Link>
          <Link href={t.contact.href} className="inline-flex min-h-11 items-center rounded-lg bg-accent px-[18px] font-semibold text-ink hover:brightness-110">
            {t.contact.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Hero({ t }: { t: HomeContent["hero"] }) {
  const d = t.diagram;
  return (
    <section className="grid-bg border-b border-line">
      <div className={`${container} flex flex-wrap items-center gap-16 py-20 md:py-28`}>
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
          <p className="flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-wide text-subtle">
            <span className="inline-block size-2 rounded-full bg-accent" aria-hidden="true" />
            {t.eyebrow}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl">
            {t.titleA}
            <br />
            <span className="text-accent">{t.titleAccent}</span>
            {t.titleB}
          </h1>
          <p className="max-w-[540px] text-[19px] text-muted">{t.lead}</p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link href={t.primary.href} className={btnPrimary}>
              {t.primary.label} <span aria-hidden="true">→</span>
            </Link>
            <Link href={t.secondary.href} className="inline-flex min-h-12 items-center rounded-[10px] border border-line-3 px-6 hover:border-subtle">
              {t.secondary.label}
            </Link>
          </div>
          <p className="font-mono text-[13px] text-subtle">{t.note}</p>
        </div>

        <figure
          aria-label="Diagram: scattered spreadsheets become one clean dataset and an app you own"
          className="m-0 min-w-0 flex-[1_1_420px] overflow-hidden rounded-2xl border border-line-2 bg-panel"
        >
          <div className="flex items-center justify-between border-b border-line-2 px-4 py-3 font-mono text-xs text-subtle">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-line-3" />
              <span className="size-2.5 rounded-full bg-line-3" />
              <span className="size-2.5 rounded-full bg-line-3" />
            </span>
            <span>{d.file}</span>
          </div>
          <div className="flex flex-col gap-[18px] p-7 font-mono text-[13px]">
            <p className="text-subtle">{d.before}</p>
            <div className="flex flex-wrap gap-2">
              {d.files.map((f) => (
                <span key={f} className="rounded-md border border-dashed border-[#3A3F47] px-2.5 py-1.5 text-muted">
                  {f}
                </span>
              ))}
            </div>
            <div aria-hidden="true" className="flex items-center gap-2.5 text-accent">
              <span className="h-px flex-1 bg-line-3" />
              {d.arrow}
              <span className="h-px flex-1 bg-line-3" />
            </div>
            <p className="text-subtle">{d.after}</p>
            <div className="grid grid-cols-2 gap-3">
              {d.cards.map((c) => (
                <div key={c.k} className="flex flex-col gap-1 rounded-[10px] border border-line-3 bg-ink p-3.5">
                  <span className="text-[11px] text-subtle">{c.k}</span>
                  <span className="font-sans text-[15px] font-semibold">{c.title}</span>
                  <span className="text-[11px] text-subtle">{c.sub}</span>
                </div>
              ))}
            </div>
            <dl className="flex flex-col gap-1.5 border-t border-line-2 pt-4">
              {d.rows.map((r) => (
                <div key={r.k} className="flex justify-between gap-4">
                  <dt className="text-subtle">{r.k}</dt>
                  <dd className={r.accent ? "text-accent" : "text-fg"}>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Stack({ t }: { t: HomeContent["stack"] }) {
  return (
    <section aria-label="Built with" className="border-b border-line">
      <div className={`${container} flex flex-wrap items-center gap-x-9 gap-y-3 py-7 font-mono text-[13px] text-subtle`}>
        <span className="uppercase text-[#8A9097]">{t.label}</span>
        {t.items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </section>
  );
}

function Pains({ t }: { t: HomeContent["pains"] }) {
  return (
    <section className={`${container} flex flex-col gap-12 py-24 md:py-30`}>
      <div className="flex max-w-[720px] flex-col gap-3.5">
        <p className={kicker}>{t.kicker}</p>
        <h2 className={h2}>{t.title}</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px overflow-hidden rounded-[14px] border border-line bg-line">
        {t.items.map((p) => (
          <div key={p.code} className="flex flex-col gap-2.5 bg-ink p-7">
            <span className="font-mono text-xs text-subtle">{p.code}</span>
            <p className="text-[17px]">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: "data" | "automation" | "free" }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "text-accent",
  };
  if (name === "data")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
        <path d="M11 7h4a2 2 0 0 1 2 2v4" />
      </svg>
    );
  if (name === "automation")
    return (
      <svg {...common}>
        <path d="M4 12a8 8 0 0 1 14-5.3" />
        <path d="M18 3v4h-4" />
        <path d="M20 12a8 8 0 0 1-14 5.3" />
        <path d="M6 21v-4h4" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 7.5-2" />
    </svg>
  );
}

function Services({ t }: { t: HomeContent["services"] }) {
  return (
    <section id="services" className="scroll-mt-8 border-y border-line bg-ink-2">
      <div className={`${container} flex flex-col gap-12 py-24 md:py-30`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <p className={kicker}>{t.kicker}</p>
            <h2 className={h2}>{t.title}</h2>
          </div>
          <p className="max-w-[380px] text-muted">{t.intro}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {t.items.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col gap-[18px] rounded-2xl border border-line-2 bg-panel p-8 transition hover:-translate-y-0.5 hover:border-accent/60"
            >
              <span className="flex items-center justify-between">
                <ServiceIcon name={s.icon} />
                <span className="font-mono text-xs text-subtle">/{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="font-display text-[26px] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="text-muted">{s.text}</p>
              <span className="mt-auto font-medium text-accent">{t.more}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work({ t }: { t: HomeContent["work"] }) {
  return (
    <section id="work" className={`${container} flex scroll-mt-8 flex-col gap-10 py-24 md:py-30`}>
      <p className={kicker}>{t.kicker}</p>
      <div className="flex flex-wrap overflow-hidden rounded-[20px] border border-line-2">
        <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-5 bg-panel p-8 md:p-12">
          <span className="font-mono text-xs uppercase text-subtle">{t.tag}</span>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-[40px]">{t.title}</h2>
          <Link href={t.link.href} className="font-medium text-accent hover:underline">
            {t.link.label}
          </Link>
        </div>
        <dl className="grid min-w-0 flex-[1_1_320px] grid-cols-1 gap-px bg-line-2">
          {t.stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-4 bg-ink px-9 py-7">
              <dd className={`font-display text-5xl font-semibold tracking-[-0.03em] ${s.accent ? "text-accent" : ""}`}>{s.value}</dd>
              <dt className="text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Process({ t }: { t: HomeContent["process"] }) {
  return (
    <section className="border-y border-line bg-ink-2">
      <div className={`${container} flex flex-col gap-12 py-24 md:py-30`}>
        <div className="flex flex-col gap-3.5">
          <p className={kicker}>{t.kicker}</p>
          <h2 className={h2}>{t.title}</h2>
        </div>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          {t.steps.map((s, i) => (
            <li key={s.title} className={`flex flex-col gap-2 border-t-2 pt-5 ${i === 0 ? "border-accent" : "border-line-3"}`}>
              <span className="font-mono text-xs text-subtle">STEP {String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-2xl font-semibold">{s.title}</span>
              <span className="text-muted">{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FreeSoftware({ t }: { t: HomeContent["free"] }) {
  return (
    <section id="free-software" className={`${container} flex scroll-mt-8 flex-wrap gap-16 py-24 md:py-30`}>
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
        <p className={kicker}>{t.kicker}</p>
        <h2 className={h2}>{t.title}</h2>
        <p className="text-lg text-muted">{t.text}</p>
        <Link href={t.link.href} className="font-medium text-accent hover:underline">
          {t.link.label}
        </Link>
      </div>
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
        {t.facts.map((f) => (
          <div key={f.k} className="flex items-start gap-5 rounded-[14px] border border-line-2 bg-panel px-7 py-6">
            <span className="min-w-14 font-mono text-sm text-accent">{f.k}</span>
            <span>{f.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ t }: { t: HomeContent["about"] }) {
  return (
    <section id="about" className="scroll-mt-8 border-t border-line">
      <div className={`${container} flex flex-wrap items-center gap-14 py-24 md:py-30`}>
        <div className="relative aspect-[476/386] w-full max-w-[476px] flex-[0_1_476px]">
          <div aria-hidden="true" className="absolute inset-0 left-4 top-4 rounded-[20px] border border-accent" />
          <div className="absolute inset-0 right-4 bottom-4 overflow-hidden rounded-[20px] bg-panel">
            <Image
              src="/images/jose-desk.png"
              alt={t.photoAlt}
              fill
              sizes="(max-width: 640px) 100vw, 476px"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute bottom-3 left-3 rounded-md border border-line-3 bg-ink px-2.5 py-1.5 font-mono text-xs">
              <span className="text-accent">$</span> {t.badge}
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
          <p className={kicker}>{t.kicker}</p>
          <h2 className={h2}>{t.title}</h2>
          <p className="max-w-[620px] text-lg text-muted">{t.text}</p>
          <Link href={t.link.href} className="font-medium text-accent hover:underline">
            {t.link.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Cta({ t }: { t: HomeContent["cta"] }) {
  return (
    <section id="contact" className="px-6 pb-24 md:pb-30">
      <div className="grid-bg mx-auto flex max-w-[1152px] flex-col items-center gap-6 rounded-3xl border border-line-2 bg-panel px-6 py-16 text-center md:px-12 md:py-22">
        <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-6xl">{t.title}</h2>
        <p className="max-w-[560px] text-lg text-muted">{t.text}</p>
        <Link href={t.button.href} className={`${btnPrimary} min-h-13 px-7 text-[17px]`}>
          {t.button.label} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

function Footer({ t }: { t: HomeContent["footer"] }) {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-wrap justify-between gap-4 py-8 text-sm text-subtle`}>
        <span>{t.copy}</span>
        <span className="flex flex-wrap gap-6">
          {t.links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
          <a href={t.github.href} className="font-mono hover:text-white">
            {t.github.label}
          </a>
        </span>
      </div>
    </footer>
  );
}
