// All homepage copy lives here. For the Spanish version, copy this file to
// home.es.ts, translate the strings, and pass it to <HomePage t={homeEs} />.

export type HomeContent = typeof homeEn;

export const homeEn = {
  nav: {
    brand: "System's Saga",
    brandAccent: "Z",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "Why free software", href: "/#free-software" },
      { label: "About", href: "/about" },
    ],
    langLabel: "EN / ES",
    langHref: "/es",
    contact: { label: "Contact", href: "/contact" },
  },
  hero: {
    eyebrow: "Open systems for small businesses & charities · London",
    titleA: "Stop renting software.",
    titleAccent: "Own",
    titleB: " your tools and your data.",
    lead: "I replace messy spreadsheets and monthly subscriptions with systems you own — built step by step, in English or Spanish.",
    primary: { label: "Tell me about your setup", href: "/contact" },
    secondary: { label: "See recent work", href: "/#work" },
    note: "Fixed price, agreed after a chat · English / Español",
    diagram: {
      file: "migration.plan",
      before: "// before",
      files: ["clients_v3_FINAL.xlsx", "clients_v3_FINAL(2).xlsx", "monthly_report.xlsx", "bookings_old.csv"],
      arrow: "↓ merge · clean · automate",
      after: "// after",
      cards: [
        { k: "DATA", title: "One clean dataset", sub: "entered once · easy to find" },
        { k: "APP", title: "Phone + computer", sub: "simple · yours to keep" },
      ],
      rows: [
        { k: "licences", v: "owned, not rented", accent: true },
        { k: "formats", v: "open standards" },
        { k: "language", v: "EN · ES" },
      ],
    },
  },
  stack: {
    label: "Built on open tools →",
    items: ["LibreOffice", "Nextcloud", "OpenDocument", "React", "Next.js", "MySQL", "Tailwind"],
  },
  pains: {
    kicker: "01 / Sound familiar?",
    title: "When the way you work starts working against you.",
    items: [
      { code: "ERR_DUPLICATE", text: "The same data typed into three different places." },
      { code: "ERR_WHICH_VERSION", text: "Nobody is sure which spreadsheet is the latest." },
      { code: "ERR_SLOW_REPORT", text: "Reports take hours — and still aren't fully trusted." },
      { code: "ERR_RENTED", text: "Paying every month for software you'll never own." },
    ],
  },
  services: {
    kicker: "02 / What I do",
    title: "Three ways I can help.",
    intro: "Each one starts from how you work today — not from a product.",
    more: "Learn more →",
    items: [
      {
        icon: "data" as const,
        title: "Spreadsheets → app",
        text: "Turn a pile of spreadsheets into one clean dataset and a simple app for phone and computer. Enter information once; find it instantly.",
        href: "/services/spreadsheets-to-app",
      },
      {
        icon: "automation" as const,
        title: "Workflow automation",
        text: "Hand the repetitive admin to the machine: copying data between tools, sending reminders, building the same monthly report.",
        href: "/services/workflow-automation",
      },
      {
        icon: "free" as const,
        title: "Move to free software",
        text: "Swap expensive licences for free software like LibreOffice and Nextcloud — step by step, with your files kept in open formats.",
        href: "/services/free-software",
      },
    ],
  },
  work: {
    kicker: "03 / Recent work",
    tag: "Case study · Community advice service",
    title: "A community advice service, off messy spreadsheets.",
    link: { label: "Read the case study →", href: "/work/community-advice-data-app" },
    stats: [
      { value: "5", label: "people using it daily" },
      { value: "4 mo", label: "part-time build" },
      { value: "£0", label: "in licences", accent: true },
    ],
  },
  process: {
    kicker: "04 / How I work",
    title: "Small steps, no surprises.",
    steps: [
      { title: "Chat", text: "You tell me what you use today and what's getting in the way." },
      { title: "Look", text: "I look at your current setup: files, tools and how your team actually works." },
      { title: "Fixed-price plan", text: "You get a clear plan and a fixed price before any work starts." },
      { title: "Build & train", text: "I build it step by step, so your team keeps working and learns as we go." },
    ],
  },
  free: {
    kicker: "05 / Why free software",
    title: "Software you're allowed to own.",
    text: "Free as in libre: free to use, study, change and share. No lock-in, no surprise price rises, and your files stay readable for decades.",
    link: { label: "Read the guide →", href: "/why-free-software" },
    facts: [
      { k: "2014", text: "The UK government adopted the OpenDocument Format as its standard for documents." },
      { k: "DK", text: "Public bodies in Denmark are moving to free software." },
      { k: "DE", text: "So is the German state of Schleswig-Holstein." },
    ],
  },
  about: {
    kicker: "06 / Who you'll work with",
    title: "Hi, I'm Jose Sagarnaga.",
    text: "A London developer helping small businesses and charities own their systems. I work in English and Spanish, and you'll deal with me directly from first chat to handover.",
    link: { label: "More about me →", href: "/about" },
    photoAlt: "Jose Sagarnaga working at his laptop",
    badge: "whoami → jose · london · en/es",
  },
  cta: {
    title: "Ready to own your tools?",
    text: "Send a short message about how you work. I'll reply by email — in English or Spanish.",
    button: { label: "Tell me about your setup", href: "/contact" },
  },
  footer: {
    copy: "© 2026 System's SagaZ · Jose Sagarnaga · London, UK",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
    github: { label: "github/josesagaz", href: "https://github.com/josesagaz" },
  },
};
