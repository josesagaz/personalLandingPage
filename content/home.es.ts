import type { HomeContent } from "./home";

// Spanish homepage copy. Same shape as home.ts — edit freely.

export const homeEs: HomeContent = {
  nav: {
    brand: "System's Saga",
    brandAccent: "Z",
    links: [
      { label: "Servicios", href: "/es#services" },
      { label: "Trabajos", href: "/es#work" },
      { label: "Por qué software libre", href: "/es#free-software" },
      { label: "Sobre mí", href: "/es/sobre-mi" },
    ],
    langLabel: "ES / EN",
    langHref: "/",
    contact: { label: "Contacto", href: "/es/contacto" },
  },
  hero: {
    eyebrow: "Sistemas abiertos para pequeñas empresas y organizaciones benéficas · Londres",
    titleA: "Deja de alquilar software.",
    titleAccent: "Sé dueño",
    titleB: " de tus herramientas y tus datos.",
    lead: "Reemplazo hojas de cálculo desordenadas y suscripciones mensuales por sistemas que son tuyos — paso a paso, en español o en inglés.",
    primary: { label: "Cuéntame cómo trabajas hoy", href: "/es/contacto" },
    secondary: { label: "Ver trabajos recientes", href: "/es#work" },
    note: "Precio cerrado, acordado después de hablar · Español / English",
    diagram: {
      file: "plan.migracion",
      before: "// antes",
      files: ["clientes_v3_FINAL.xlsx", "clientes_v3_FINAL(2).xlsx", "informe_mensual.xlsx", "reservas_antiguas.csv"],
      arrow: "↓ unir · limpiar · automatizar",
      after: "// después",
      cards: [
        { k: "DATOS", title: "Un solo conjunto de datos", sub: "se introduce una vez · fácil de encontrar" },
        { k: "APP", title: "Móvil + ordenador", sub: "sencilla · tuya para siempre" },
      ],
      rows: [
        { k: "licencias", v: "tuyas, no alquiladas", accent: true },
        { k: "formatos", v: "estándares abiertos" },
        { k: "idioma", v: "ES · EN" },
      ],
    },
  },
  stack: {
    label: "Construido con herramientas abiertas →",
    items: ["LibreOffice", "Nextcloud", "OpenDocument", "React", "Next.js", "MySQL", "Tailwind"],
  },
  pains: {
    kicker: "01 / ¿Te suena?",
    title: "Cuando tu forma de trabajar empieza a jugar en tu contra.",
    items: [
      { code: "ERR_DUPLICADO", text: "La misma información se escribe dos veces, o tres." },
      { code: "ERR_CUAL_VERSION", text: "Nadie sabe con certeza cuál es la hoja de cálculo más reciente." },
      { code: "ERR_INFORME_LENTO", text: "Los informes tardan una eternidad y no te fías del todo de las cifras." },
      { code: "ERR_ALQUILADO", text: "Otra suscripción mensual por un software que nunca será tuyo." },
    ],
  },
  services: {
    kicker: "02 / Qué hago",
    title: "Tres formas de ayudarte.",
    intro: "Cada una empieza por cómo trabajas hoy, no por un producto que venderte.",
    more: "Saber más →",
    items: [
      {
        icon: "data",
        title: "De hojas de cálculo a app",
        text: "Convierte un lío de hojas de cálculo en un único conjunto de datos limpio y una app sencilla que tu equipo usa en el móvil y en el ordenador. Introduce cada dato una vez y encuéntralo al instante.",
        href: "/es/servicios/de-hojas-de-calculo-a-app",
      },
      {
        icon: "automation",
        title: "Automatización de procesos",
        text: "Deja que el ordenador haga las tareas repetitivas: copiar datos entre herramientas, enviar recordatorios, preparar el mismo informe cada mes.",
        href: "/es/servicios/automatizacion-de-procesos",
      },
      {
        icon: "free",
        title: "Pasarte a software libre",
        text: "Cambia licencias caras por software libre como LibreOffice y Nextcloud, paso a paso y con tus archivos a salvo en formatos abiertos.",
        href: "/es/servicios/software-libre",
      },
    ],
  },
  work: {
    kicker: "03 / Trabajo reciente",
    tag: "Caso · Servicio comunitario de asesoría",
    title: "Un servicio comunitario de asesoría, sin hojas de cálculo desordenadas.",
    link: { label: "Leer el caso →", href: "/es/casos/app-datos-servicio-comunitario" },
    stats: [
      { value: "5", label: "personas la usan a diario" },
      { value: "4 meses", label: "a tiempo parcial" },
      { value: "£0", label: "en licencias", accent: true },
    ],
  },
  process: {
    kicker: "04 / Cómo trabajo",
    title: "Pasos pequeños, sin sorpresas.",
    steps: [
      { title: "Hablamos", text: "Me cuentas qué usas hoy y qué te está frenando." },
      { title: "Reviso", text: "Miro tu sistema actual: archivos, herramientas y cómo trabaja de verdad tu equipo." },
      { title: "Plan con precio cerrado", text: "Recibes un plan claro y un precio cerrado antes de empezar." },
      { title: "Construyo y formo", text: "Lo construyo paso a paso, para que tu equipo siga trabajando y aprenda sobre la marcha." },
    ],
  },
  free: {
    kicker: "05 / Por qué software libre",
    title: "Software que puedes hacer tuyo.",
    text: "Software que tienes permiso para usar, estudiar, modificar y compartir. Sin alquiler de licencias, sin actualizaciones obligatorias, y con tus datos en formatos que cualquier herramienta puede abrir.",
    link: { label: "¿Por qué software libre? Lee la guía →", href: "/es/por-que-software-libre" },
    facts: [
      { k: "2014", text: "El Gobierno del Reino Unido adoptó el formato OpenDocument como su estándar para documentos." },
      { k: "DK", text: "Organismos públicos de Dinamarca se están pasando al software libre." },
      { k: "DE", text: "También el estado alemán de Schleswig-Holstein." },
    ],
  },
  about: {
    kicker: "06 / Con quién vas a trabajar",
    title: "Hola, soy Jose Sagarnaga.",
    text: "Soy desarrollador en Londres y construyo sistemas prácticos para equipos pequeños. Trabajo en español y en inglés, y prefiero dejarte algo que sea tuyo antes que algo que me tengas que alquilar.",
    link: { label: "Más sobre mí →", href: "/es/sobre-mi" },
    photoAlt: "Jose Sagarnaga trabajando con su portátil",
    badge: "whoami → jose · londres · es/en",
  },
  cta: {
    title: "¿Listo para ser dueño de tus herramientas?",
    text: "Escríbeme unas líneas sobre cómo trabajas hoy. Te responderé por correo, en español o en inglés.",
    button: { label: "Cuéntame cómo trabajas hoy", href: "/es/contacto" },
  },
  footer: {
    copy: "© 2026 System's SagaZ · Jose Sagarnaga · Londres, Reino Unido",
    links: [
      { label: "Sobre mí", href: "/es/sobre-mi" },
      { label: "Contacto", href: "/es/contacto" },
      { label: "Privacidad", href: "/es/privacidad" },
    ],
    github: { label: "github/josesagaz", href: "https://github.com/josesagaz" },
  },
};
