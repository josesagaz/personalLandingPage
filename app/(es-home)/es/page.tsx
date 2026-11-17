import HomePage from "@/components/home/HomePage";
import { homeEs } from "@/content/home.es";
import { alternatesFor } from "@/lib/site";

export const metadata = {
  title: { absolute: "System's SagaZ | Deja de alquilar software. Sé dueño de tus herramientas y tus datos." },
  description:
    "Ayudo a pequeñas empresas y organizaciones benéficas en el Reino Unido a dejar atrás las hojas de cálculo desordenadas y las suscripciones de software con sistemas propios: apps, automatización y software libre. En español e inglés.",
  alternates: alternatesFor("/", "es"),
  openGraph: { locale: "es_ES" },
};

export default function Page() {
  return (
    <div lang="es">
      <HomePage t={homeEs} />
    </div>
  );
}
