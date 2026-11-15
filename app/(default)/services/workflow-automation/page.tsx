import ServicePage, { type ServiceContent } from "@/components/service-page";
import { alternatesFor } from "@/lib/site";

const PATH = "/services/workflow-automation";

export const metadata = {
  title: "Workflow automation for small businesses",
  description:
    "Stop copying data between tools and doing the same admin every week. I automate repetitive tasks for UK small businesses and charities, using free software where possible. Fixed price.",
  alternates: alternatesFor(PATH, "en"),
};

const c: ServiceContent = {
  path: PATH,
  serviceType: "Business process automation",
  crumbs: [
    { name: "Home", href: "/" },
    { name: "Workflow automation", href: PATH },
  ],
  eyebrow: "Service",
  title: "Let the computer do the boring admin",
  intro:
    "Copying data from one place to another, chasing the same reminders, building the same report every month. If a task follows the same steps every time, it can usually be automated, so your team can spend that time on the work that matters.",
  problem: {
    title: "Signs you need automation",
    items: [
      "Someone copies and pastes between email, forms and spreadsheets every day.",
      "The same monthly report is rebuilt by hand, every month.",
      "Reminders and follow-ups depend on someone remembering.",
      "Mistakes creep in because information is retyped.",
      "You pay for several subscriptions that don't talk to each other.",
    ],
  },
  forWho: {
    title: "Who it's for",
    items: [
      "Small teams where one or two people spend hours a week on repetitive admin.",
      "Charities and services that report regularly to funders or donors.",
      "Businesses with online forms, bookings or orders that need to land somewhere tidy.",
      "Anyone who wants automation they own, not another monthly tool.",
    ],
  },
  get: {
    title: "What you get",
    items: [
      { title: "A map of your routine work", text: "We list the tasks that repeat, how long they take, and which are worth automating first." },
      { title: "Automations that run on their own", text: "Data moves between your forms, files and tools automatically, with checks so mistakes don't slip through." },
      { title: "Clear notes and a handover", text: "Everything is written down, so you know what runs, when, and how to change it, with or without me." },
    ],
  },
  steps: {
    title: "How it works",
    items: [
      { title: "Chat", text: "You walk me through a normal week and where the time goes." },
      { title: "Pick", text: "We choose the one or two tasks where automation saves the most, first." },
      { title: "Fixed-price plan", text: "You get a clear plan and a fixed price before I start." },
      { title: "Build & hand over", text: "I build and test the automations with you, then hand over with simple notes." },
    ],
  },
  proof: {
    title: "Related: from spreadsheets to one source of truth",
    text: "Automation works best on clean data. For a community advice service, I first redesigned their data so everything is entered once, which made reports straightforward.",
    href: "/work/community-advice-data-app",
    linkText: "Read the case study →",
  },
  price: {
    title: "Price",
    text: "You get a fixed price for each piece of work, agreed after a chat, not an hourly rate. I use free software where it fits, so the automations don't come with a new monthly bill.",
  },
  faq: {
    title: "Questions people ask",
    items: [
      { q: "What kind of tasks can be automated?", a: "Anything that follows the same steps every time: moving form answers into a spreadsheet or database, sending reminders, creating documents from a template, building regular reports, or syncing information between tools." },
      { q: "Do I need to change the tools I already use?", a: "Not necessarily. I start from what you have. If a tool makes automation hard or expensive, I'll explain the options, including free software alternatives, and you decide." },
      { q: "What if something breaks?", a: "Automations include checks and alerts, so problems are noticed instead of silently getting worse. Everything is documented, so you, me or another developer can fix it." },
      { q: "Is my data safe?", a: "I keep your data in tools you control wherever possible, and only connect what's needed for each task. We agree up front where data is stored." },
    ],
  },
  cta: {
    title: "Where does your week go?",
    text: "Tell me about the task you'd most like to never do by hand again. I'll reply by email, in English or Spanish.",
    button: "Tell me about your setup",
    href: "/contact",
  },
};

export default function Page() {
  return <ServicePage c={c} />;
}
