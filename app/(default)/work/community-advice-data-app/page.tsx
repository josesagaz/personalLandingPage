import CaseStudy, { type CaseContent } from "@/components/case-study";
import { alternatesFor } from "@/lib/site";

const PATH = "/work/community-advice-data-app";

export const metadata = {
  title: "Case study: from messy spreadsheets to one source of truth",
  description:
    "How a 5-person community advice & support service replaced duplicated spreadsheets with one clean data structure and a mobile and desktop app, at £0 in licences.",
  alternates: alternatesFor(PATH, "en"),
  openGraph: { type: "article" },
};

const c: CaseContent = {
  path: PATH,
  lang: "en",
  crumbs: [
    { name: "Home", href: "/" },
    { name: "Case study", href: PATH },
  ],
  eyebrow: "Case study · Community advice & support service",
  title: "From messy spreadsheets to one source of truth",
  intro: "A data app for a community advice & support service. The client's name is withheld for confidentiality.",
  stats: [
    { value: "5", label: "people use it" },
    { value: "Mobile + desktop", label: "anywhere access" },
    { value: "4 months", label: "part-time build" },
    { value: "£0", label: "in licences" },
  ],
  sections: [
    {
      title: "The problem",
      paras: [
        "As the service grew, so did its spreadsheets. The same information was typed in more than once, reports were slow to put together, and nobody was quite sure which file was the latest. The figures going to donors were getting harder to trust.",
      ],
    },
    {
      title: "What I did",
      items: [
        "Redesigned how their data is organised, so every piece of information is entered once and only once.",
        "Built an app on top of it that the team uses on their phones and computers, with instant access to the records they need.",
        "Used no-cost tools available to charities, so the service pays £0 in software licences.",
      ],
    },
    {
      title: "What changed",
      items: [
        "No more duplicated data entry.",
        "Reports come straight from one clean set of data, instead of being pieced together from several files.",
        "Fewer mistakes, so donor reports they can stand behind.",
        "The team says they can get more done, and it has opened up new opportunities to grow.",
      ],
    },
    {
      title: "What's next",
      paras: [
        "The next step is moving the app onto fully free and open-source software, so the organisation owns every part of it.",
      ],
    },
  ],
  related: { text: "How I turn spreadsheets into apps →", href: "/services/spreadsheets-to-app" },
  cta: { text: "Recognise the spreadsheet problem? Let's talk about your data →", href: "/contact" },
};

export default function Page() {
  return <CaseStudy c={c} />;
}
