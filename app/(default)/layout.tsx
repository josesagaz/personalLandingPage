import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer lang="en" />
    </>
  );
}
