import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import Link from "next/link";
import { alternatesFor, OWNER } from "@/lib/site";

export const metadata = {
  title: "Privacy policy",
  description: "How System's SagaZ handles the personal information you send through this website.",
  alternates: alternatesFor("/privacy", "en"),
};

export default function Privacy() {
  return (
    <>
      <div className="px-4 sm:px-6">
        <PageHeader title="Privacy policy" intro="Last updated: 15 November 2026" />
      </div>
      <Prose>
        <h2>Who I am</h2>
        <p>
          This website is run by {OWNER}, trading as System&apos;s SagaZ, based in London, UK. I am responsible for the
          personal information you send through it. You can reach me through the <Link href="/contact">contact form</Link>.
        </p>

        <h2>What I collect</h2>
        <p>
          Only what you type into the contact form: your name, email address, organisation (if you give it), your message
          and your preferred language. I don&apos;t use advertising or tracking cookies on this site.
        </p>

        <h2>Why I use it</h2>
        <p>
          To reply to your enquiry and, if we decide to work together, to prepare a proposal. The legal basis is my
          legitimate interest in answering messages sent to me, and taking steps you ask for before we enter into a
          contract. I will never sell your details or add you to a mailing list.
        </p>

        <h2>Where it is stored</h2>
        <p>
          The website is hosted by Netlify, which receives and stores form messages on my behalf and forwards them to my
          email. Netlify may process data outside the UK; it does so under safeguards recognised by UK data protection law.
        </p>

        <h2>How long I keep it</h2>
        <p>
          I keep enquiries for up to 12 months, then delete them, unless we start working together, in which case I keep
          what is needed for the project and for my business records.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask to see, correct or delete the information I hold about you, or object to how I use it. Just send a
          message through the contact form. If you&apos;re not happy with how I handle your data, you can complain to the
          Information Commissioner&apos;s Office (<a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a>).
        </p>
      </Prose>
    </>
  );
}
