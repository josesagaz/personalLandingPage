import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import { alternatesFor } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Tell me what you use today and what's slowing you down. Fixed price, agreed after a chat. English or Spanish.",
  alternates: alternatesFor("/contact", "en"),
};

export default function Contact() {
  return (
    <>
      <div className="px-4 sm:px-6">
        <PageHeader
          eyebrow="Contact"
          title="Tell me about your setup"
          intro="Send a few lines about what you use today and what's getting in the way. I'll reply by email, and if it sounds like something I can help with, we'll arrange a chat and agree a fixed price."
        />
      </div>
      <ContactForm lang="en" />
    </>
  );
}
