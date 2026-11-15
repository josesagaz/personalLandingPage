import Home, { type HomeContent } from "@/components/home";
import { alternatesFor, OWNER } from "@/lib/site";

export const metadata = {
  title: { absolute: "System's SagaZ | Deja de alquilar software. Sé dueño de tus herramientas y tus datos." },
  description:
    "Ayudo a pequeñas empresas y organizaciones benéficas en el Reino Unido a dejar atrás las hojas de cálculo desordenadas y las suscripciones de software con sistemas propios: apps, automatización y software libre. En español e inglés.",
  alternates: alternatesFor("/", "es"),
  openGraph: { locale: "es_ES" },
};

const c: HomeContent = {
  hero: {
    title: "Deja de alquilar software. Sé dueño de tus herramientas y tus datos.",
    sub: "Ayudo a pequeñas empresas y organizaciones benéficas en el Reino Unido a cambiar hojas de cálculo desordenadas y facturas mensuales de software por sistemas propios, paso a paso, en español o en inglés.",
    cta: "Cuéntame cómo trabajas hoy",
    ctaHref: "/es/contacto",
    note: "Precio cerrado, acordado después de hablar.",
  },
  pains: {
    eyebrow: "¿Te suena?",
    title: "Cuando tu forma de trabajar empieza a jugar en tu contra",
    items: [
      "La misma información se escribe dos veces, o tres.",
      "Nadie sabe con certeza cuál es la hoja de cálculo más reciente.",
      "Los informes tardan una eternidad y no te fías del todo de las cifras.",
      "Otra suscripción mensual por un software que nunca será tuyo.",
    ],
  },
  services: {
    eyebrow: "Qué hago",
    title: "Tres formas de ayudarte",
    intro: "Cada una empieza por cómo trabajas hoy, no por un producto que venderte.",
    items: [
      {
        title: "De hojas de cálculo a app",
        href: "/es/servicios/de-hojas-de-calculo-a-app",
        text: "Convierte un lío de hojas de cálculo en un único conjunto de datos limpio y una app sencilla que tu equipo usa en el móvil y en el ordenador. Introduce cada dato una vez y encuéntralo al instante.",
      },
      {
        title: "Automatización de procesos",
        text: "Deja que el ordenador haga las tareas repetitivas: copiar datos entre herramientas, enviar recordatorios, preparar el mismo informe cada mes.",
      },
      {
        title: "Pasarte a software libre",
        text: "Cambia licencias caras por software libre como LibreOffice y Nextcloud, paso a paso y con tus archivos a salvo en formatos abiertos.",
      },
    ],
  },
  proof: {
    eyebrow: "Trabajo reciente",
    title: "Un servicio comunitario de asesoría, sin hojas de cálculo desordenadas",
    text: "Sus datos crecían, el trabajo se duplicaba y las cifras para los donantes no eran fiables. Reorganicé la estructura de sus datos para que todo se introduzca una sola vez y construí una app que el equipo usa en el móvil y en el ordenador.",
    stats: [
      { value: "5", label: "personas la usan a diario" },
      { value: "4 meses", label: "a tiempo parcial" },
      { value: "£0", label: "en licencias" },
    ],
    href: "/es/casos/app-datos-servicio-comunitario",
    linkText: "Leer el caso →",
  },
  steps: {
    eyebrow: "Cómo trabajo",
    title: "Pasos pequeños, sin sorpresas",
    items: [
      { title: "Hablamos", text: "Me cuentas qué usas hoy y qué te está frenando." },
      { title: "Reviso", text: "Miro tu sistema actual: archivos, herramientas y cómo trabaja de verdad tu equipo." },
      { title: "Plan con precio cerrado", text: "Recibes un plan claro y un precio cerrado antes de empezar." },
      { title: "Construyo y formo", text: "Lo construyo paso a paso, para que tu equipo siga trabajando y aprenda sobre la marcha." },
    ],
  },
  why: {
    eyebrow: "Por qué software libre",
    title: "Software que puedes hacer tuyo",
    text: [
      "El software libre es software que tienes permiso para usar, estudiar, modificar y compartir. En la práctica significa no pagar alquiler por licencias, no sufrir actualizaciones obligatorias y tener tus datos en formatos que cualquier herramienta puede abrir.",
      "No es una idea marginal: el Gobierno británico adoptó el formato abierto de documentos como estándar en 2014, y administraciones públicas de toda Europa, desde Dinamarca hasta Schleswig-Holstein en Alemania, se están pasando al software libre por los mismos motivos.",
    ],
    href: "/es/por-que-software-libre",
    linkText: "¿Por qué software libre? Lee la guía →",
  },
  about: {
    eyebrow: "Con quién vas a trabajar",
    title: `Hola, soy ${OWNER}`,
    text: "Soy desarrollador en Londres y construyo sistemas prácticos para equipos pequeños. Trabajo en español y en inglés, y prefiero dejarte algo que sea tuyo antes que algo que me tengas que alquilar.",
    href: "/es/sobre-mi",
    linkText: "Más sobre mí →",
  },
  final: {
    title: "¿Listo para ser dueño de tus herramientas?",
    text: "Escríbeme unas líneas sobre cómo trabajas hoy. Te responderé por correo, en español o en inglés.",
    cta: "Cuéntame cómo trabajas hoy",
    ctaHref: "/es/contacto",
  },
};

export default function Page() {
  return <Home c={c} lang="es" />;
}
