import ServicePage, { type ServiceContent } from "@/components/service-page";
import { alternatesFor } from "@/lib/site";

const PATH = "/es/servicios/automatizacion-de-procesos";

export const metadata = {
  title: "Automatización de procesos para pequeñas empresas",
  description:
    "Deja de copiar datos entre herramientas y de repetir las mismas tareas cada semana. Automatizo tareas administrativas para pequeñas empresas y organizaciones benéficas en el Reino Unido, con software libre siempre que es posible. Precio cerrado.",
  alternates: alternatesFor("/services/workflow-automation", "es"),
  openGraph: { locale: "es_ES" },
};

const c: ServiceContent = {
  path: PATH,
  serviceType: "Automatización de procesos de negocio",
  crumbs: [
    { name: "Inicio", href: "/es" },
    { name: "Automatización de procesos", href: PATH },
  ],
  eyebrow: "Servicio",
  title: "Deja que el ordenador haga el trabajo aburrido",
  intro:
    "Copiar datos de un sitio a otro, enviar los mismos recordatorios, preparar el mismo informe cada mes. Si una tarea sigue siempre los mismos pasos, normalmente se puede automatizar, y tu equipo puede dedicar ese tiempo a lo que de verdad importa.",
  problem: {
    title: "Señales de que necesitas automatizar",
    items: [
      "Alguien copia y pega entre el correo, los formularios y las hojas de cálculo todos los días.",
      "El mismo informe mensual se rehace a mano cada mes.",
      "Los recordatorios y seguimientos dependen de que alguien se acuerde.",
      "Se cuelan errores porque la información se vuelve a teclear.",
      "Pagas varias suscripciones que no se comunican entre sí.",
    ],
  },
  forWho: {
    title: "Para quién es",
    items: [
      "Equipos pequeños en los que una o dos personas pasan horas a la semana en tareas repetitivas.",
      "Organizaciones benéficas y servicios que informan con regularidad a financiadores o donantes.",
      "Negocios con formularios, reservas o pedidos online que tienen que acabar en un sitio ordenado.",
      "Quien quiera una automatización propia, no otra herramienta de pago mensual.",
    ],
  },
  get: {
    title: "Qué recibes",
    items: [
      { title: "Un mapa de tus tareas rutinarias", text: "Listamos las tareas que se repiten, cuánto tiempo llevan y cuáles conviene automatizar primero." },
      { title: "Automatizaciones que funcionan solas", text: "Los datos pasan solos entre tus formularios, archivos y herramientas, con comprobaciones para que no se cuelen errores." },
      { title: "Notas claras y entrega", text: "Todo queda por escrito: qué se ejecuta, cuándo y cómo cambiarlo, conmigo o sin mí." },
    ],
  },
  steps: {
    title: "Cómo funciona",
    items: [
      { title: "Hablamos", text: "Me cuentas cómo es una semana normal y en qué se va el tiempo." },
      { title: "Elegimos", text: "Escogemos primero las una o dos tareas donde automatizar ahorra más." },
      { title: "Plan con precio cerrado", text: "Recibes un plan claro y un precio cerrado antes de empezar." },
      { title: "Construyo y entrego", text: "Construyo y pruebo las automatizaciones contigo, y te las entrego con notas sencillas." },
    ],
  },
  proof: {
    title: "Relacionado: de hojas de cálculo a una sola fuente de verdad",
    text: "La automatización funciona mejor con datos limpios. Para un servicio comunitario de asesoría, primero reorganicé sus datos para que todo se introduzca una sola vez, y así los informes se volvieron sencillos.",
    href: "/es/casos/app-datos-servicio-comunitario",
    linkText: "Leer el caso →",
  },
  price: {
    title: "Precio",
    text: "Recibes un precio cerrado por cada trabajo, acordado después de hablar, no una tarifa por horas. Uso software libre siempre que encaja, para que las automatizaciones no traigan una nueva factura mensual.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Qué tipo de tareas se pueden automatizar?", a: "Cualquier cosa que siga siempre los mismos pasos: pasar respuestas de formularios a una hoja de cálculo o base de datos, enviar recordatorios, crear documentos a partir de una plantilla, preparar informes periódicos o sincronizar información entre herramientas." },
      { q: "¿Tengo que cambiar las herramientas que ya uso?", a: "No necesariamente. Empiezo por lo que tienes. Si una herramienta hace que automatizar sea difícil o caro, te explico las opciones, incluidas alternativas de software libre, y tú decides." },
      { q: "¿Y si algo falla?", a: "Las automatizaciones incluyen comprobaciones y avisos, para que los problemas se detecten en lugar de empeorar sin que nadie lo note. Todo está documentado, así que tú, yo u otro desarrollador podemos arreglarlo." },
      { q: "¿Están seguros mis datos?", a: "Siempre que es posible, tus datos se quedan en herramientas que controlas, y solo conecto lo necesario para cada tarea. Acordamos desde el principio dónde se guardan." },
    ],
  },
  cta: {
    title: "¿En qué se te va la semana?",
    text: "Cuéntame qué tarea te gustaría no volver a hacer a mano nunca más. Te responderé por correo, en español o en inglés.",
    button: "Cuéntame cómo trabajas hoy",
    href: "/es/contacto",
  },
};

export default function Page() {
  return <ServicePage c={c} />;
}
