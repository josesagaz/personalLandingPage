import ServicePage, { type ServiceContent } from "@/components/service-page";
import { alternatesFor } from "@/lib/site";

const PATH = "/es/servicios/software-libre";

export const metadata = {
  title: "Pasa tu negocio al software libre",
  description:
    "Cambia Microsoft 365 y otras licencias por software libre como LibreOffice y Nextcloud, paso a paso y con tus archivos a salvo en formatos abiertos. Para pequeñas empresas y organizaciones benéficas en el Reino Unido. Precio cerrado.",
  alternates: alternatesFor("/services/free-software", "es"),
  openGraph: { locale: "es_ES" },
};

const c: ServiceContent = {
  path: PATH,
  serviceType: "Migración a software libre",
  crumbs: [
    { name: "Inicio", href: "/es" },
    { name: "Pasarte a software libre", href: PATH },
  ],
  eyebrow: "Servicio",
  title: "Pásate al software libre, paso a paso y sin riesgos",
  intro:
    "Cambia licencias caras por software libre como LibreOffice y Nextcloud, con tus archivos a salvo en formatos abiertos. Planifico el cambio pensando en tu equipo, lo pruebo antes de que nadie cambie y conservo lo que de verdad tiene que quedarse.",
  problem: {
    title: "Por qué me contactan",
    items: [
      "Las licencias suben cada año, por usuario, y no puedes dejar de pagar.",
      "Tus archivos y tu correo están en la plataforma de otro, con sus condiciones.",
      "Las actualizaciones obligatorias cambian cómo funcionan las cosas justo cuando estás más ocupado.",
      "Ordenadores antiguos acaban en la basura porque el software nuevo ya no funciona en ellos.",
      "Te gustaría usar software libre pero no sabes por dónde empezar sin riesgos.",
    ],
  },
  forWho: {
    title: "Para quién es",
    items: [
      "Pequeñas empresas y organizaciones benéficas que pagan licencias de ofimática, correo o archivos compartidos.",
      "Equipos que sobre todo escriben documentos, usan hojas de cálculo, correo y archivos compartidos.",
      "Organizaciones a las que les importa dónde están sus datos.",
      "Quien quiera probar el software libre sin jugarse todo el negocio el primer día.",
    ],
  },
  get: {
    title: "Qué recibes",
    items: [
      { title: "Una revisión honesta", text: "Una lista de lo que usas hoy, lo que se puede cambiar fácilmente, lo que necesita trabajo y lo que conviene dejar como está." },
      { title: "Un cambio paso a paso", text: "Documentos, archivos compartidos, correo y calendarios, uno a uno, probando antes tus archivos reales en las nuevas herramientas." },
      { title: "Tu equipo a bordo", text: "Formación breve y práctica y una guía rápida, para que todos sepan dónde está cada cosa desde el primer día." },
    ],
  },
  steps: {
    title: "Cómo funciona",
    items: [
      { title: "Revisión", text: "Reviso tus herramientas, archivos y licencias, y cómo las usa tu equipo." },
      { title: "Plan con precio cerrado", text: "Recibes un plan paso a paso y un precio cerrado: qué se cambia primero y por qué." },
      { title: "Prueba piloto", text: "Una o dos personas prueban las nuevas herramientas con trabajo real antes que nadie más." },
      { title: "Cambio y formación", text: "Pasamos al resto del equipo por etapas, con formación y apoyo sobre la marcha." },
    ],
  },
  proof: {
    title: "Funciona a gran escala, y esto es lo que puede fallar",
    text: "Gobiernos del Reino Unido, Dinamarca y Alemania se están pasando al software libre, y algunos han tropezado por el camino. He escrito una guía sencilla con ejemplos reales y las lecciones honestas.",
    href: "/es/por-que-software-libre",
    linkText: "Leer: ¿Por qué software libre? →",
  },
  price: {
    title: "Precio",
    text: "Recibes un precio cerrado por el plan y por cada paso del cambio, acordado después de hablar. El software en sí es libre, así que una vez hecho el cambio no hay factura de licencias que seguir pagando.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Se seguirán abriendo mis archivos de Word y Excel?", a: "La mayoría sí, sin problemas. LibreOffice abre y guarda archivos de Word y Excel. Las hojas de cálculo complejas con macros pueden necesitar algo de trabajo; por eso pruebo tus archivos reales antes de que nadie cambie." },
      { q: "¿Tenemos que cambiarlo todo a la vez?", a: "No, y no lo recomiendo. Normalmente empezamos por una cosa, como los documentos o los archivos compartidos, y solo seguimos cuando eso funciona bien." },
      { q: "¿Y si seguimos necesitando un programa que solo funciona en Windows?", a: "Entonces lo conservas. El objetivo es depender menos y pagar menos, no la pureza. El software libre y algunos programas especializados pueden convivir." },
      { q: "¿Dónde estarán nuestros archivos y el correo?", a: "Lo decidimos juntos. Las opciones van desde un proveedor de alojamiento fiable en el Reino Unido o Europa hasta un pequeño servidor propio. En cualquier caso, tienes acceso completo a tus datos en formatos abiertos." },
      { q: "¿Quién nos da soporte después?", a: "Yo, si quieres ayuda continua. Pero al ser software libre con formatos abiertos, no dependes de mí: cualquier proveedor competente puede continuar." },
    ],
  },
  cta: {
    title: "¿Te preguntas qué podrías cambiar?",
    text: "Cuéntame qué usas hoy y por qué pagas. Te responderé por correo, en español o en inglés.",
    button: "Cuéntame cómo trabajas hoy",
    href: "/es/contacto",
  },
};

export default function Page() {
  return <ServicePage c={c} />;
}
