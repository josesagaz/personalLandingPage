import Link from "next/link";
import PageHeader from "@/components/page-header";

export const metadata = {
  title: "Message sent",
  robots: { index: false, follow: true },
};

export default function Thanks() {
  return (
    <div className="px-4 pb-24 text-center sm:px-6">
      <PageHeader title="Thanks, your message is on its way" intro="I'll read it and reply by email." />
      <Link href="/" className="text-red-300 underline underline-offset-4">Back to the home page</Link>
    </div>
  );
}
