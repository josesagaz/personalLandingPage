import Link from "next/link";
import PageHeader from "@/components/page-header";

export const metadata = {
  title: "Mensaje enviado",
  robots: { index: false, follow: true },
};

export default function Gracias() {
  return (
    <div className="px-4 pb-24 text-center sm:px-6">
      <PageHeader title="Gracias, tu mensaje ya está en camino" intro="Lo leeré y te responderé por correo." />
      <Link href="/es/contacto" className="text-red-300 underline underline-offset-4">Volver</Link>
    </div>
  );
}
