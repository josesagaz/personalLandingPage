import Link from "next/link";
import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import Breadcrumbs from "@/components/breadcrumbs";
import ArticleLd from "@/components/article-ld";
import { alternatesFor } from "@/lib/site";

const PATH = "/why-free-software";
const TITLE = "Why free software? A plain-English guide for small businesses";
const DESC =
  "What free software (and open source) actually means, what it changes for a small business or charity, real examples from the UK and Europe, and the honest downsides.";

export const metadata = {
  title: "Why free software?",
  description: DESC,
  alternates: alternatesFor(PATH, "en"),
  openGraph: { type: "article" },
};

const box = "my-6 rounded-2xl border border-gray-800 bg-gray-900/60 p-6";

export default function Page() {
  return (
    <>
      <ArticleLd title={TITLE} description={DESC} path={PATH} lang="en" />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Why free software?", href: PATH }]} />
      <div className="px-4 sm:px-6">
        <PageHeader
          eyebrow="Guide"
          title="Why free software?"
          intro="Free software is software you're allowed to use, study, change and share. For a small business, that means you're never locked in, never forced to upgrade, and never paying rent for tools you could own."
        />
      </div>
      <Prose>
        <h2>&quot;Free&quot; as in freedom, not just price</h2>
        <p>
          In English, &quot;free&quot; is confusing: it sounds like &quot;costs nothing&quot;. Free software often <em>is</em> free of
          charge, but that&apos;s not the point. The point is the freedoms you get with it:
        </p>
        <ul>
          <li><strong>Use it</strong> for any purpose, on as many computers as you like.</li>
          <li><strong>Study it</strong>: the source code is open, so anyone can check what it does.</li>
          <li><strong>Change it</strong> to fit how you work, or pay someone to.</li>
          <li><strong>Share it</strong>, including your improvements.</li>
        </ul>
        <p>In Spanish there&apos;s no confusion: it&apos;s <em>software libre</em>, free as in liberty.</p>

        <div className={box}>
          <h3 className="pb-2 font-nacelle text-lg font-semibold text-gray-100">Free software vs open source: what&apos;s the difference?</h3>
          <p className="pb-0">
            Mostly the emphasis. They cover almost the same software and licences. The free software movement talks about
            your <em>freedoms</em> as a user; &quot;open source&quot; talks about the practical benefits of developing software in the
            open. If you search for &quot;open source alternatives&quot;, you&apos;ll find the same tools I&apos;m talking about here.
          </p>
        </div>

        <h2>What it changes for a small business</h2>
        <ul>
          <li><strong>No licence rent.</strong> No paying per user, per month, forever, just to keep opening your own files.</li>
          <li><strong>Your data in open formats.</strong> Documents, spreadsheets and data that any tool can open, today and in 20 years.</li>
          <li><strong>No lock-in.</strong> If you&apos;re unhappy with a supplier, including me, someone else can pick up where they left off.</li>
          <li><strong>No forced upgrades.</strong> You decide when to change, not a vendor&apos;s sales calendar.</li>
          <li><strong>Money stays local.</strong> What you&apos;d spend on licences can go on support and improvements that fit your team.</li>
        </ul>

        <h2>It works at scale</h2>
        <p>Free software isn&apos;t a hobby project. Some of the most careful organisations in Europe rely on it:</p>
        <ul>
          <li>
            <strong>UK Government (2014).</strong> The Cabinet Office selected the Open Document Format (ODF) as the standard for
            sharing and editing documents across government, after considering Microsoft&apos;s format too.
          </li>
          <li>
            <strong>Schleswig-Holstein, Germany.</strong> The state is moving around 30,000 public-sector PCs from Microsoft
            Office and Windows to LibreOffice and Linux. It reports saving more than €15 million in licensing costs, and has
            moved its whole email system (more than 44,000 mailboxes) to open-source tools.
          </li>
          <li>
            <strong>Denmark&apos;s Ministry of Digital Affairs (2025).</strong> Announced a move from Microsoft Office 365 to
            LibreOffice, following Copenhagen and Aarhus, the country&apos;s two largest cities.
          </li>
          <li>
            <strong>French Gendarmerie.</strong> Moved tens of thousands of desktops to Ubuntu Linux step by step: office
            software first, then email and the browser, then the operating system. It reported each desktop costing around 40%
            less to run.
          </li>
        </ul>

        <h2>The honest part</h2>
        <p>
          Switching isn&apos;t magic, and it has gone wrong before. <strong>Munich</strong> moved almost 15,000 council desktops to
          Linux by 2013, then voted in 2017 to go back to Windows, citing staff unhappiness, missing software and the cost of
          running two systems side by side. In 2020 a new city government turned back towards open standards and free
          software, and Munich now has its own open-source office.
        </p>
        <p>The lessons are the same for a five-person team as for a city:</p>
        <ul>
          <li><strong>Go step by step.</strong> Change one thing at a time, like the Gendarmerie did, and keep the old tools until the new ones are proven.</li>
          <li><strong>Check your files.</strong> Most documents move across fine. Complex spreadsheets with macros may need work, so test them first.</li>
          <li><strong>Bring people along.</strong> Habits matter more than features. A bit of training and a reason to switch go a long way.</li>
          <li><strong>Mix where it makes sense.</strong> If one specialist program only runs on Windows, keep it. Free software is a direction, not a purity test.</li>
        </ul>

        <h2>Free software you can use today</h2>
        <ul>
          <li><strong>LibreOffice</strong>: documents, spreadsheets and presentations, and it opens Word and Excel files.</li>
          <li><strong>Nextcloud</strong>: shared files, calendars and contacts, on a server you control.</li>
          <li><strong>Thunderbird</strong>: email and calendar on your computer.</li>
          <li><strong>Firefox</strong>: a web browser that isn&apos;t built around advertising.</li>
          <li><strong>Linux</strong> (for example Ubuntu): a full operating system that runs well on older computers.</li>
        </ul>

        <h2>Where I come in</h2>
        <p>
          I help small businesses and charities move to free software in small, safe steps, and build tools on top of it that
          fit how you work. See <Link href="/services/spreadsheets-to-app">turning spreadsheets into an app</Link>, or{" "}
          <Link href="/contact">tell me about your setup</Link>.
        </p>

        <h2>Sources</h2>
        <ul className="text-sm">
          <li><a href="https://www.gov.uk/government/news/open-document-formats-selected-to-meet-user-needs">GOV.UK: Open document formats selected to meet user needs (2014)</a></li>
          <li><a href="https://www.computerweekly.com/news/2240225262/Microsoft-attacks-UK-government-decision-to-adopt-ODF-for-document-formats">Computer Weekly: UK government adopts ODF</a></li>
          <li><a href="https://www.thedroptimes.com/node/70889">The Drop Times: Schleswig-Holstein advances open-source migration</a></li>
          <li><a href="https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/schleswig-holsteins-open-source-strategy-year">EU Open Source Observatory: Schleswig-Holstein&apos;s strategy, a year on</a></li>
          <li><a href="https://www.computing.co.uk/news/2025/denmark-digital-ministry-drops-microsoft">Computing: Denmark&apos;s Digital Ministry shifts to LibreOffice</a></li>
          <li><a href="https://lwn.net/Articles/322905/">LWN: French Gendarmerie migration</a></li>
          <li><a href="https://www.htxt.co.za/2013/10/01/french-armed-forces-switch-to-ubuntu-saves-40-it-costs/">htxt: Gendarmerie says Ubuntu cuts IT costs by 40%</a></li>
          <li><a href="https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/document/munichs-long-history-open-source-public-administration">EU Open Source Observatory: Munich&apos;s long history with open source</a></li>
        </ul>
      </Prose>
    </>
  );
}
