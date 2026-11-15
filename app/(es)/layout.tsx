import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="es" className="flex grow flex-col">
      <Header lang="es" />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer lang="es" />
    </div>
  );
}
