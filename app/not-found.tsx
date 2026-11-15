import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header lang="en" />
      <main className="relative flex grow flex-col items-center px-4 py-24 text-center sm:px-6">
        <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-100">Page not found</h1>
        <p className="pb-8 text-gray-300">
          That page doesn&apos;t exist. <span lang="es">Esta página no existe.</span>
        </p>
        <Link href="/" className="text-red-300 underline underline-offset-4">Go to the home page</Link>
      </main>
      <Footer lang="en" />
    </>
  );
}
