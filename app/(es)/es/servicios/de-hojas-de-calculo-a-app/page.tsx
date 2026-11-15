import ServicePage, { type ServiceContent } from "@/components/service-page";
import { alternatesFor } from "@/lib/site";

const PATH = "/es/servicios/de-hojas-de-calculo-a-app";

export const metadata = {
  title: "Convierte tus hojas de cálculo en una app",
  description:
    "Sustituye un lío de hojas de Google Sheets o Excel por un único conjunto de datos limpio y una app sencilla que tu equipo usa en el móvil y en el ordenador. Para pequeñas empresas y organizaciones benéficas en el Reino Unido. Precio cerrado.",
  alternates: alternatesFor("/services/spreadsheets-to-app", "es"),
  openGraph: { locale: "es_ES" },
};

const c: ServiceContent = {
  path: PATH,
  serviceType: "Desarrollo de apps a medida para negocios",
  crumbs: [
    { name: "Inicio", href: "/es" },
    { name: "De hojas de cálculo a app", href: PATH },
  ],
  eyebrow: "Servicio",
  title: "Convierte tus hojas de cálculo en una app en la que tu equipo confíe",
  intro:
    "Las hojas de cálculo son un buen comienzo. Pero cuando varias personas dependen de ellas, se convierten en copias, conflictos e informes de los que nadie se fía del todo. Yo las convierto en un único conjunto de datos limpio y una app sencilla que tu equipo usa en el móvil y en el ordenador.",
  problem: {
    title: "Señales de que las hojas de cálculo se te han quedado pequeñas",
    items: [
      "La misma información se escribe en más de un archivo.",
      "Alguien siempre pregunta \"¿cuál es la versión más reciente?\"",
      "Los informes tardan horas en prepararse y las cifras no siempre cuadran.",
      "Solo una persona entiende de verdad cómo funcionan las hojas.",
      "Los archivos van cada vez más lentos y te preocupan los errores.",
    ],
  },
  forWho: {
    title: "Para quién es",
    items: [
      "Pequeñas empresas y organizaciones benéficas con unas 2–20 personas que comparten los mismos datos.",
      "Equipos que recogen información con formularios: clientes, casos, pedidos, inventario, voluntarios.",
      "Organizaciones que necesitan informes fiables, para donantes, financiadores o tus propias decisiones.",
      "Quien prefiera ser dueño de su sistema antes que pagar por usuario, cada mes, para siempre.",
    ],
  },
  get: {
    title: "Qué recibes",
    items: [
      { title: "Una estructura de datos limpia", text: "Cada dato vive en un solo sitio y se introduce una sola vez. Se acabaron las copias que no coinciden." },
      { title: "Una app sencilla para tu equipo", text: "Formularios y pantallas pensados para cómo trabaja de verdad tu equipo, en el móvil y en el ordenador, y cada persona ve lo que necesita." },
      { title: "Informes desde una sola fuente", text: "Los informes salen de los mismos datos, así que las cifras cuadran siempre." },
    ],
  },
  steps: {
    title: "Cómo funciona",
    items: [
      { title: "Hablamos", text: "Me enseñas tus hojas de cálculo y me cuentas qué está fallando." },
      { title: "Mapeo", text: "Mapeo tus datos y cómo se mueven, y acordamos qué tiene que hacer la app." },
      { title: "Plan con precio cerrado", text: "Recibes un plan claro y un precio cerrado antes de empezar." },
      { title: "Construyo y migro", text: "La construyo por etapas, paso tus datos actuales y enseño a tu equipo a usarla." },
    ],
  },
  proof: {
    title: "Ejemplo: un servicio comunitario de asesoría",
    text: "Un equipo de cinco personas se ahogaba en hojas de cálculo cada vez más grandes: trabajo duplicado, informes lentos y cifras para donantes poco fiables. Reorganicé sus datos para que todo se introduzca una sola vez y construí una app que usan en el móvil y en el ordenador, con £0 en licencias.",
    href: "/es/casos/app-datos-servicio-comunitario",
    linkText: "Leer el caso →",
  },
  price: {
    title: "Precio",
    text: "Cada proyecto es distinto, así que no cobro por horas. Después de hablar y revisar tus hojas de cálculo, recibes un precio cerrado por todo el trabajo. Siempre que encaja, uso herramientas libres y sin coste, para que después no haya factura mensual de licencias.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Perderemos los datos que ya tenemos?", a: "No. Paso tus datos actuales a la nueva estructura y conservas tus hojas de cálculo originales. Antes de ponerlo en marcha, comprobamos juntos que todo está bien." },
      { q: "¿Podremos seguir sacando los datos en una hoja de cálculo?", a: "Sí. Tus datos quedan en formatos que puedes exportar cuando quieras (CSV, que se abre en Excel, Google Sheets o LibreOffice), así que nunca quedas atrapado." },
      { q: "¿Qué herramientas usas?", a: "Depende de tu tamaño y presupuesto. Construyo con software libre (una app web y una base de datos de verdad), o con herramientas sin coste cuando es la opción más sencilla para un equipo pequeño. Te explico las ventajas e inconvenientes antes de decidir." },
      { q: "¿Cuánto tarda?", a: "Depende de cuántos formularios e informes necesites. Como referencia, el proyecto del servicio comunitario llevó unos cuatro meses a tiempo parcial. Recibirás un calendario junto con el precio cerrado." },
      { q: "¿Mi equipo necesitará formación?", a: "La app se construye según cómo ya trabajan, así que les resultará familiar. Enseño a todos a usarla y la construyo por etapas para que nadie tenga que cambiarlo todo de golpe." },
    ],
  },
  cta: {
    title: "Enséñame tus hojas de cálculo",
    text: "Escríbeme unas líneas sobre lo que registras hoy y lo que está fallando. Te responderé por correo, en español o en inglés.",
    button: "Cuéntame cómo trabajas hoy",
    href: "/es/contacto",
  },
};

export default function Page() {
  return <ServicePage c={c} />;
}
