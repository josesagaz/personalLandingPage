import ServicePage, { type ServiceContent } from "@/components/service-page";
import { alternatesFor } from "@/lib/site";

const PATH = "/services/spreadsheets-to-app";

export const metadata = {
  title: "Turn your spreadsheets into an app",
  description:
    "Replace a tangle of Google Sheets or Excel files with one clean set of data and a simple app your team uses on phone and computer. For UK small businesses and charities. Fixed price.",
  alternates: alternatesFor(PATH, "en"),
};

const c: ServiceContent = {
  path: PATH,
  serviceType: "Custom business app development",
  crumbs: [
    { name: "Home", href: "/" },
    { name: "Spreadsheets → app", href: PATH },
  ],
  eyebrow: "Service",
  title: "Turn your spreadsheets into an app your team trusts",
  intro:
    "Spreadsheets are a great start. But once several people depend on them, they turn into copies, conflicts and reports nobody fully trusts. I turn them into one clean set of data and a simple app your team can use on phone and computer.",
  problem: {
    title: "Signs you've outgrown spreadsheets",
    items: [
      "The same information is typed into more than one file.",
      "People ask \"which version is the latest?\"",
      "Reports take hours to piece together, and the numbers don't always match.",
      "Only one person really understands how the sheets work.",
      "The files are getting slow, and you're worried about mistakes.",
    ],
  },
  forWho: {
    title: "Who it's for",
    items: [
      "Small businesses and charities with roughly 2–20 people sharing the same data.",
      "Teams that collect information through forms: clients, cases, orders, stock, volunteers.",
      "Organisations that need reliable reports, for donors, funders, or your own decisions.",
      "Anyone who'd rather own their system than pay per user, per month, forever.",
    ],
  },
  get: {
    title: "What you get",
    items: [
      { title: "One clean data structure", text: "Each piece of information lives in one place and is entered once. No more copies drifting apart." },
      { title: "A simple app for your team", text: "Forms and screens designed around how your team actually works, on phone and computer, with each person seeing what they need." },
      { title: "Reports from one source", text: "Reports come straight from the same data, so the numbers match every time." },
    ],
  },
  steps: {
    title: "How it works",
    items: [
      { title: "Chat", text: "You show me your spreadsheets and tell me what's going wrong." },
      { title: "Map", text: "I map your data and how it flows, and agree with you what the app needs to do." },
      { title: "Fixed-price plan", text: "You get a clear plan and a fixed price before I start." },
      { title: "Build & move", text: "I build it in stages, move your existing data across, and show your team how to use it." },
    ],
  },
  proof: {
    title: "Example: a community advice service",
    text: "A team of five was drowning in growing spreadsheets: duplicated work, slow reports and figures for donors they couldn't rely on. I redesigned their data so everything is entered once and built an app they use on mobile and desktop, at £0 in licences.",
    href: "/work/community-advice-data-app",
    linkText: "Read the case study →",
  },
  price: {
    title: "Price",
    text: "Every project is different, so I don't charge by the hour. After a chat and a look at your spreadsheets, you get a fixed price for the whole job. Where it fits, I use free and no-cost tools, so there's no monthly licence bill afterwards.",
  },
  faq: {
    title: "Questions people ask",
    items: [
      { q: "Will we lose our existing data?", a: "No. I move your existing data into the new structure and you keep your original spreadsheets. Before anything goes live, we check together that everything came across." },
      { q: "Can we still get our data out as a spreadsheet?", a: "Yes. Your data stays in formats you can export at any time (CSV, which opens in Excel, Google Sheets or LibreOffice), so you're never locked in." },
      { q: "Which tools do you use?", a: "It depends on your size and budget. I build with free and open-source software (a web app and a proper database), or with no-cost tools when that's the simplest option for a small team. I'll explain the trade-offs before you decide." },
      { q: "How long does it take?", a: "It depends on how many forms and reports you need. As a guide, the community advice project took about four months of part-time work. You'll get a timeline with your fixed price." },
      { q: "Does my team need training?", a: "The app is built around how they already work, so it should feel familiar. I show everyone how to use it, and I build in stages so nobody has to change everything at once." },
    ],
  },
  cta: {
    title: "Show me your spreadsheets",
    text: "Send me a few lines about what you track today and what's going wrong. I'll reply by email, in English or Spanish.",
    button: "Tell me about your setup",
    href: "/contact",
  },
};

export default function Page() {
  return <ServicePage c={c} />;
}
