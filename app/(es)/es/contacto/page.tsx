import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import { alternatesFor } from "@/lib/site";

export const metadata = {
  title: "Contacto",
  description:
    "Cuéntame qué usas hoy y qué te está frenando. Precio cerrado, acordado después de hablar. En español o en inglés.",
  alternates: alternatesFor("/contact", "es"),
  openGraph: { locale: "es_ES" },
};

export default function Contacto() {
  return (
    <>
      <div className="px-4 sm:px-6">
        <PageHeader
          eyebrow="Contacto"
          title="Cuéntame cómo trabajas hoy"
          intro="Escríbeme unas líneas sobre lo que usas hoy y lo que te está frenando. Te responderé por correo y, si es algo en lo que puedo ayudarte, hablamos y acordamos un precio cerrado."
        />
      </div>
      <ContactForm lang="es" />
    </>
  );
}
