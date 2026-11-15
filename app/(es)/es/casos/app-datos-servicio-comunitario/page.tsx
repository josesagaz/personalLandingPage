import CaseStudy, { type CaseContent } from "@/components/case-study";
import { alternatesFor } from "@/lib/site";

const PATH = "/es/casos/app-datos-servicio-comunitario";

export const metadata = {
  title: "Caso: de hojas de cálculo desordenadas a una sola fuente de verdad",
  description:
    "Cómo un servicio comunitario de asesoría y apoyo de 5 personas sustituyó hojas de cálculo duplicadas por una estructura de datos limpia y una app para móvil y ordenador, con £0 en licencias.",
  alternates: alternatesFor("/work/community-advice-data-app", "es"),
  openGraph: { type: "article", locale: "es_ES" },
};

const c: CaseContent = {
  path: PATH,
  lang: "es",
  crumbs: [
    { name: "Inicio", href: "/es" },
    { name: "Caso", href: PATH },
  ],
  eyebrow: "Caso · Servicio comunitario de asesoría y apoyo",
  title: "De hojas de cálculo desordenadas a una sola fuente de verdad",
  intro: "Una app de datos para un servicio comunitario de asesoría y apoyo. El nombre del cliente se mantiene en reserva por confidencialidad.",
  stats: [
    { value: "5", label: "personas la usan" },
    { value: "Móvil + ordenador", label: "acceso desde cualquier sitio" },
    { value: "4 meses", label: "a tiempo parcial" },
    { value: "£0", label: "en licencias" },
  ],
  sections: [
    {
      title: "El problema",
      paras: [
        "A medida que el servicio crecía, también crecían sus hojas de cálculo. La misma información se escribía más de una vez, los informes tardaban en prepararse y nadie sabía con certeza cuál era el archivo más reciente. Las cifras para los donantes eran cada vez menos fiables.",
      ],
    },
    {
      title: "Lo que hice",
      items: [
        "Reorganicé la estructura de sus datos para que cada dato se introduzca una sola vez.",
        "Construí una app sobre esa base que el equipo usa en el móvil y en el ordenador, con acceso inmediato a la información.",
        "Usé herramientas sin coste para organizaciones benéficas: £0 en licencias de software.",
      ],
    },
    {
      title: "Qué cambió",
      items: [
        "Se acabó introducir los mismos datos dos veces.",
        "Los informes salen directamente de un único conjunto de datos limpio, en lugar de armarse a partir de varios archivos.",
        "Menos errores, e informes para donantes en los que se puede confiar.",
        "El equipo siente que puede hacer más, y se han abierto nuevas oportunidades de crecimiento.",
      ],
    },
    {
      title: "Próximo paso",
      paras: ["Migrar la app a software libre, para que la organización sea dueña de todas sus partes."],
    },
  ],
  related: { text: "Cómo convierto hojas de cálculo en apps →", href: "/es/servicios/de-hojas-de-calculo-a-app" },
  cta: { text: "¿Te suena este problema con las hojas de cálculo? Hablemos de tus datos →", href: "/es/contacto" },
};

export default function Page() {
  return <CaseStudy c={c} />;
}
