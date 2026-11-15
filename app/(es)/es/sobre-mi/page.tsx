import Link from "next/link";
import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import { alternatesFor } from "@/lib/site";

export const metadata = {
  title: "Sobre mí: Jose Sagarnaga",
  description:
    "Soy Jose Sagarnaga, desarrollador en Londres. Ayudo a pequeñas empresas y organizaciones benéficas en el Reino Unido a pasar sus datos y su gestión diaria a herramientas propias. Trabajo en español e inglés.",
  alternates: alternatesFor("/about", "es"),
  openGraph: { locale: "es_ES" },
};

export default function SobreMi() {
  return (
    <>
      <div className="px-4 sm:px-6">
        <PageHeader
          eyebrow="Sobre mí"
          title="Hola, soy Jose Sagarnaga"
          intro="Ayudo a pequeñas empresas y organizaciones benéficas en el Reino Unido a pasar sus datos y su gestión diaria a herramientas que les pertenecen, en español o en inglés."
        />
      </div>
      <Prose>
        <h2>Qué hago</h2>
        <p>
          Construyo sistemas prácticos para equipos pequeños. Normalmente es una de estas tres cosas: convertir un montón
          de hojas de cálculo en una app que la gente realmente usa, automatizar las tareas administrativas repetitivas
          que se comen tu semana, o pasarte de licencias caras a software libre.
        </p>
        <p>
          Trabajo con tecnología web moderna (React, Next.js, Tailwind CSS) y bases de datos de verdad. Siempre que tiene
          sentido uso software libre, para que no pagues alquiler por herramientas que podrían ser tuyas.
        </p>

        <h2>Cómo trabajo</h2>
        <ul>
          <li>Empezamos con una conversación sobre lo que usas hoy y lo que te está frenando.</li>
          <li>Reviso tu sistema actual y te propongo un plan con precio cerrado.</li>
          <li>Lo construyo paso a paso, para que tu equipo pueda seguir trabajando mientras todo cambia.</li>
          <li>Tus datos quedan en formatos abiertos y nada depende de mí.</li>
        </ul>

        <h2>Trabajo reciente</h2>
        <p>
          Para un servicio comunitario de asesoría y apoyo, sustituí un lío de hojas de cálculo por una única estructura de
          datos y una app que el equipo de cinco personas usa en el móvil y en el ordenador. Cada dato se introduce una sola
          vez, los informes salen de un solo sitio y les cuesta £0 en licencias.
        </p>

        <h2>Español e inglés</h2>
        <p>
          Hablo español e inglés, así que podemos trabajar en el idioma en el que te sientas más cómodo. Muchos de los
          negocios a los que quiero ayudar están dirigidos por hispanohablantes en el Reino Unido, y encontrar buena ayuda
          tecnológica en tu propio idioma no es fácil.
        </p>

        <p className="pt-6">
          <Link href="/es/contacto">Cuéntame cómo trabajas hoy →</Link>
        </p>
      </Prose>
    </>
  );
}
