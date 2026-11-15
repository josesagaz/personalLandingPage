import Home, { type HomeContent } from "@/components/home";
import { alternatesFor, OWNER, SITE_URL } from "@/lib/site";

export const metadata = {
  title: { absolute: "System's SagaZ | Stop renting software. Own your tools and your data." },
  description:
    "I help UK small businesses and charities replace messy spreadsheets and software subscriptions with systems they own: apps, automation and free software. English and Spanish.",
  alternates: alternatesFor("/", "en"),
};

const c: HomeContent = {
  hero: {
    title: "Stop renting software. Own your tools and your data.",
    sub: "I help small businesses and charities in the UK replace messy spreadsheets and monthly software bills with systems they own, built step by step, in English or Spanish.",
    cta: "Tell me about your setup",
    ctaHref: "/contact",
    note: "Fixed price, agreed after a chat.",
  },
  pains: {
    eyebrow: "Sound familiar?",
    title: "When the way you work starts working against you",
    items: [
      "The same information gets typed in twice, or three times.",
      "Nobody is quite sure which spreadsheet is the latest.",
      "Reports take ages, and you don't fully trust the numbers.",
      "Another monthly subscription for software you'll never own.",
    ],
  },
  services: {
    eyebrow: "What I do",
    title: "Three ways I can help",
    intro: "Each one starts with how you work today, not with a product to sell you.",
    items: [
      {
        title: "Spreadsheets → app",
        href: "/services/spreadsheets-to-app",
        text: "Turn a tangle of spreadsheets into one clean set of data and a simple app your team can use on phone and computer. Enter information once, find it instantly.",
      },
      {
        title: "Workflow automation",
        href: "/services/workflow-automation",
        text: "Let the computer do the repetitive admin: copying data between tools, sending reminders, building the same report every month.",
      },
      {
        title: "Move to free software",
        href: "/services/free-software",
        text: "Swap expensive licences for free software like LibreOffice and Nextcloud, step by step, with your files kept safe in open formats.",
      },
    ],
  },
  proof: {
    eyebrow: "Recent work",
    title: "A community advice service, off messy spreadsheets",
    text: "Their data was growing, work was being duplicated and the figures for donors weren't reliable. I redesigned how their data is organised so everything is entered once, and built an app the team uses on mobile and desktop.",
    stats: [
      { value: "5", label: "people use it daily" },
      { value: "4 months", label: "part-time build" },
      { value: "£0", label: "in licences" },
    ],
    href: "/work/community-advice-data-app",
    linkText: "Read the case study →",
  },
  steps: {
    eyebrow: "How I work",
    title: "Small steps, no surprises",
    items: [
      { title: "Chat", text: "You tell me what you use today and what's getting in the way." },
      { title: "Look", text: "I look at your current setup: files, tools and how your team actually works." },
      { title: "Fixed-price plan", text: "You get a clear plan and a fixed price before any work starts." },
      { title: "Build & train", text: "I build it step by step, so your team keeps working and learns as we go." },
    ],
  },
  why: {
    eyebrow: "Why free software",
    title: "Software you're allowed to own",
    text: [
      "Free software (\"libre\", not just free of charge) is software you're allowed to use, study, change and share. In practice that means no licence rent, no forced upgrades, and your data in formats any tool can open.",
      "It isn't a fringe idea: the UK government made the open document format its standard in 2014, and public bodies across Europe, from Denmark to Schleswig-Holstein in Germany, are moving to free software for the same reasons.",
    ],
    href: "/why-free-software",
    linkText: "Why free software? Read the guide →",
  },
  about: {
    eyebrow: "Who you'll work with",
    title: `Hi, I'm ${OWNER}`,
    text: "I'm a London-based developer who builds practical systems for small teams. I work in English and Spanish, and I'd rather leave you with something you own than something you rent from me.",
    href: "/about",
    linkText: "More about me →",
  },
  final: {
    title: "Ready to own your tools?",
    text: "Send me a few lines about how you work today. I'll reply by email, in English or Spanish.",
    cta: "Tell me about your setup",
    ctaHref: "/contact",
  },
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
      <Home c={c} lang="en" />
    </>
  );
}
