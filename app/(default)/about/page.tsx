import Link from "next/link";
import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import { alternatesFor, OWNER, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "About Jose Sagarnaga",
  description:
    "I'm Jose Sagarnaga, a London-based developer helping UK small businesses and charities move their data and admin onto tools they own. I work in English and Spanish.",
  alternates: alternatesFor("/about", "en"),
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: OWNER,
  url: `${SITE_URL}/about`,
  jobTitle: "Developer and automation consultant",
  worksFor: { "@type": "ProfessionalService", name: "System's SagaZ", url: SITE_URL },
  homeLocation: { "@type": "Place", name: "London, UK" },
  knowsLanguage: ["en", "es"],
  sameAs: ["https://github.com/josesagaz"],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <div className="px-4 sm:px-6">
        <PageHeader
          eyebrow="About"
          title="Hi, I'm Jose Sagarnaga"
          intro="I help small businesses and charities in the UK get their data and day-to-day admin into tools they own, in English or Spanish."
        />
      </div>
      <Prose>
        <h2>What I do</h2>
        <p>
          I build practical systems for small teams. That usually means one of three things: turning a pile of
          spreadsheets into an app people actually use, automating the repetitive admin that eats your week, or moving
          you off expensive licences onto free software.
        </p>
        <p>
          My tools are the modern web (React, Next.js, Tailwind CSS) and proper databases. Where it makes sense, I use free
          and open-source software, so you&apos;re not paying rent for tools you could own.
        </p>

        <h2>How I work</h2>
        <ul>
          <li>We start with a chat about what you use today and what&apos;s getting in the way.</li>
          <li>I look at your current setup and propose a plan with a fixed price.</li>
          <li>I build it step by step, so your team can keep working while things change.</li>
          <li>You keep your data in open formats, and nothing is locked to me.</li>
        </ul>

        <h2>Recent work</h2>
        <p>
          For a community advice &amp; support service, I replaced a tangle of spreadsheets with one clean data structure
          and an app the team of five uses on phone and desktop. Information is entered once, reports come from one
          place, and it costs them £0 in licences.
        </p>

        <h2>English and Spanish</h2>
        <p>
          I speak English and Spanish, so we can work in whichever you&apos;re more comfortable with. Many of the businesses
          I want to help are run by Spanish speakers in the UK, and good tech help in your own language is hard to find.
        </p>

        <p className="pt-6">
          <Link href="/contact">Tell me about your setup →</Link>
        </p>
      </Prose>
    </>
  );
}
