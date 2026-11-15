import ServicePage, { type ServiceContent } from "@/components/service-page";
import { alternatesFor } from "@/lib/site";

const PATH = "/services/free-software";

export const metadata = {
  title: "Move your business to free software",
  description:
    "Swap Microsoft 365 and other licences for free software like LibreOffice and Nextcloud, step by step, with your files kept safe in open formats. For UK small businesses and charities. Fixed price.",
  alternates: alternatesFor(PATH, "en"),
};

const c: ServiceContent = {
  path: PATH,
  serviceType: "Free and open-source software migration",
  crumbs: [
    { name: "Home", href: "/" },
    { name: "Move to free software", href: PATH },
  ],
  eyebrow: "Service",
  title: "Move to free software, one safe step at a time",
  intro:
    "Swap expensive licences for free software like LibreOffice and Nextcloud, with your files kept safe in open formats. I plan the move around your team, test it before anyone switches, and keep what genuinely needs to stay.",
  problem: {
    title: "Why people come to me",
    items: [
      "Licence costs go up every year, per user, and you can't stop paying.",
      "Your files and email live on someone else's platform, on their terms.",
      "Forced upgrades change how things work just when you're busy.",
      "Older computers are being written off because new software won't run on them.",
      "You'd like to use free software but don't know where to start safely.",
    ],
  },
  forWho: {
    title: "Who it's for",
    items: [
      "Small businesses and charities paying for office, email or file-sharing licences.",
      "Teams that mostly write documents, use spreadsheets, email and share files.",
      "Organisations that care about where their data lives.",
      "Anyone who wants to try free software without betting the whole business on day one.",
    ],
  },
  get: {
    title: "What you get",
    items: [
      { title: "An honest check-up", text: "A list of what you use today, what can move easily, what needs work, and what should stay as it is." },
      { title: "A step-by-step move", text: "Office files, file sharing, email and calendars moved one at a time, with your existing files tested in the new tools first." },
      { title: "Your team on board", text: "Short, practical training and a cheat sheet, so people know where things are on day one." },
    ],
  },
  steps: {
    title: "How it works",
    items: [
      { title: "Check-up", text: "I look at your tools, files and licences, and how your team uses them." },
      { title: "Fixed-price plan", text: "You get a step-by-step plan and a fixed price, with what moves first and why." },
      { title: "Pilot", text: "One or two people try the new tools with real work before anyone else switches." },
      { title: "Move & train", text: "We move the rest of the team in stages, with training and support as we go." },
    ],
  },
  proof: {
    title: "It works at scale, and here's what can go wrong",
    text: "Governments from the UK to Denmark and Germany are moving to free software, and some have stumbled on the way. I've written a plain-English guide with real examples and the honest lessons.",
    href: "/why-free-software",
    linkText: "Read: Why free software? →",
  },
  price: {
    title: "Price",
    text: "You get a fixed price for the plan and for each step of the move, agreed after a chat. The software itself is free, so once you've moved, there's no licence bill to keep paying.",
  },
  faq: {
    title: "Questions people ask",
    items: [
      { q: "Will my Word and Excel files still open?", a: "Most do, without problems. LibreOffice opens and saves Word and Excel files. Complex spreadsheets with macros may need some work, which is why I test your real files before anyone switches." },
      { q: "Do we have to change everything at once?", a: "No, and I'd advise against it. We usually start with one thing, like office documents or shared files, and only move on when that's working well." },
      { q: "What if we still need one program that only runs on Windows?", a: "Then you keep it. The goal is less lock-in and lower costs, not purity. Free software and a few specialist programs can live side by side." },
      { q: "Where will our files and email live?", a: "We decide together. Options range from a reputable hosting provider in the UK or Europe to a small server you own. Either way, you have full access to your data in open formats." },
      { q: "Who supports us afterwards?", a: "I can, if you want ongoing help. But because it's free software in open formats, you're not tied to me: any competent supplier can pick it up." },
    ],
  },
  cta: {
    title: "Curious what you could move?",
    text: "Tell me what you use today and what you pay for. I'll reply by email, in English or Spanish.",
    button: "Tell me about your setup",
    href: "/contact",
  },
};

export default function Page() {
  return <ServicePage c={c} />;
}
