import Link from "next/link";
import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import Breadcrumbs from "@/components/breadcrumbs";
import ArticleLd from "@/components/article-ld";
import { alternatesFor } from "@/lib/site";

const PATH = "/es/por-que-software-libre";
const TITLE = "¿Por qué software libre? Guía sencilla para pequeñas empresas";
const DESC =
  "Qué significa de verdad el software libre (y el código abierto), qué cambia para una pequeña empresa u organización benéfica, ejemplos reales del Reino Unido y Europa, y sus inconvenientes.";

export const metadata = {
  title: "¿Por qué software libre?",
  description: DESC,
  alternates: alternatesFor("/why-free-software", "es"),
  openGraph: { type: "article", locale: "es_ES" },
};

const box = "my-6 rounded-2xl border border-gray-800 bg-gray-900/60 p-6";

export default function Page() {
  return (
    <>
      <ArticleLd title={TITLE} description={DESC} path={PATH} lang="es" />
      <Breadcrumbs items={[{ name: "Inicio", href: "/es" }, { name: "¿Por qué software libre?", href: PATH }]} />
      <div className="px-4 sm:px-6">
        <PageHeader
          eyebrow="Guía"
          title="¿Por qué software libre?"
          intro="El software libre es software que tienes permiso para usar, estudiar, modificar y compartir. Para una pequeña empresa significa no quedar nunca atrapado, no sufrir actualizaciones obligatorias y no pagar alquiler por herramientas que podrían ser tuyas."
        />
      </div>
      <Prose>
        <h2>Libre de libertad, no solo de gratis</h2>
        <p>
          El software libre muchas veces es gratuito, pero eso no es lo importante. Lo importante son las libertades que te da:
        </p>
        <ul>
          <li><strong>Usarlo</strong> para lo que quieras, en todos los ordenadores que quieras.</li>
          <li><strong>Estudiarlo</strong>: el código es abierto, así que cualquiera puede comprobar qué hace.</li>
          <li><strong>Modificarlo</strong> para adaptarlo a tu forma de trabajar, o pagar a alguien para que lo haga.</li>
          <li><strong>Compartirlo</strong>, incluidas tus mejoras.</li>
        </ul>
        <p>
          En inglés la palabra <em>free</em> confunde, porque suena a &quot;gratis&quot;. En español no hay duda: <em>libre</em>, de libertad.
        </p>

        <div className={box}>
          <h3 className="pb-2 font-nacelle text-lg font-semibold text-gray-100">Software libre y código abierto: ¿cuál es la diferencia?</h3>
          <p className="pb-0">
            Sobre todo el enfoque. Abarcan casi el mismo software y las mismas licencias. El movimiento del software libre habla de
            tus <em>libertades</em> como usuario; el &quot;código abierto&quot; (<em>open source</em>) habla de las ventajas prácticas de
            desarrollar software de forma abierta. Si buscas &quot;alternativas de código abierto&quot;, encontrarás las mismas herramientas
            de las que hablo aquí.
          </p>
        </div>

        <h2>Qué cambia para una pequeña empresa</h2>
        <ul>
          <li><strong>Sin alquiler de licencias.</strong> No pagas por usuario y por mes, para siempre, solo para seguir abriendo tus propios archivos.</li>
          <li><strong>Tus datos en formatos abiertos.</strong> Documentos, hojas de cálculo y datos que cualquier herramienta puede abrir, hoy y dentro de 20 años.</li>
          <li><strong>Sin quedar atrapado.</strong> Si no estás contento con un proveedor, yo incluido, otra persona puede continuar donde lo dejó.</li>
          <li><strong>Sin actualizaciones obligatorias.</strong> Tú decides cuándo cambiar, no el calendario comercial de una empresa.</li>
          <li><strong>El dinero se queda cerca.</strong> Lo que gastarías en licencias puede ir a soporte y mejoras pensadas para tu equipo.</li>
        </ul>

        <h2>Funciona a gran escala</h2>
        <p>El software libre no es un proyecto de aficionados. Algunas de las organizaciones más exigentes de Europa lo usan:</p>
        <ul>
          <li>
            <strong>Gobierno del Reino Unido (2014).</strong> La Cabinet Office eligió el formato abierto de documentos (ODF) como
            estándar para compartir y editar documentos en toda la administración, después de valorar también el formato de Microsoft.
          </li>
          <li>
            <strong>Schleswig-Holstein, Alemania.</strong> El estado está pasando unos 30.000 ordenadores públicos de Microsoft
            Office y Windows a LibreOffice y Linux. Afirma ahorrar más de 15 millones de euros en licencias, y ya ha migrado todo su
            correo (más de 44.000 buzones) a herramientas de código abierto.
          </li>
          <li>
            <strong>Ministerio de Asuntos Digitales de Dinamarca (2025).</strong> Anunció el paso de Microsoft Office 365 a
            LibreOffice, siguiendo a Copenhague y Aarhus, las dos ciudades más grandes del país.
          </li>
          <li>
            <strong>Gendarmería francesa.</strong> Pasó decenas de miles de ordenadores a Ubuntu Linux poco a poco: primero el
            software de oficina, después el correo y el navegador, y por último el sistema operativo. Informó de que cada puesto
            le costaba alrededor de un 40% menos.
          </li>
        </ul>

        <h2>La parte honesta</h2>
        <p>
          Cambiar no es magia, y ya ha salido mal antes. <strong>Múnich</strong> pasó casi 15.000 ordenadores municipales a Linux
          hasta 2013 y en 2017 votó volver a Windows, alegando el descontento del personal, programas que faltaban y el coste de
          mantener dos sistemas a la vez. En 2020 un nuevo gobierno municipal volvió a apostar por los estándares abiertos y el
          software libre, y hoy Múnich tiene su propia oficina de código abierto.
        </p>
        <p>Las lecciones sirven igual para un equipo de cinco personas que para una ciudad:</p>
        <ul>
          <li><strong>Paso a paso.</strong> Cambia una cosa cada vez, como la Gendarmería, y conserva las herramientas antiguas hasta comprobar las nuevas.</li>
          <li><strong>Revisa tus archivos.</strong> La mayoría de documentos pasan sin problema. Las hojas de cálculo complejas con macros pueden necesitar trabajo, así que pruébalas primero.</li>
          <li><strong>Acompaña a las personas.</strong> Los hábitos pesan más que las funciones. Un poco de formación y un buen motivo para cambiar ayudan mucho.</li>
          <li><strong>Combina cuando tenga sentido.</strong> Si un programa especializado solo funciona en Windows, consérvalo. El software libre es un rumbo, no un examen de pureza.</li>
        </ul>

        <h2>Software libre que puedes usar hoy</h2>
        <ul>
          <li><strong>LibreOffice</strong>: documentos, hojas de cálculo y presentaciones; abre archivos de Word y Excel.</li>
          <li><strong>Nextcloud</strong>: archivos compartidos, calendarios y contactos, en un servidor que controlas.</li>
          <li><strong>Thunderbird</strong>: correo y calendario en tu ordenador.</li>
          <li><strong>Firefox</strong>: un navegador que no está construido alrededor de la publicidad.</li>
          <li><strong>Linux</strong> (por ejemplo Ubuntu): un sistema operativo completo que funciona bien en ordenadores antiguos.</li>
        </ul>

        <h2>Dónde entro yo</h2>
        <p>
          Ayudo a pequeñas empresas y organizaciones benéficas a pasarse al software libre en pasos pequeños y seguros, y construyo
          herramientas encima que se adaptan a cómo trabajas. Mira cómo{" "}
          <Link href="/es/servicios/de-hojas-de-calculo-a-app">convierto hojas de cálculo en una app</Link>, o{" "}
          <Link href="/es/contacto">cuéntame cómo trabajas hoy</Link>.
        </p>

        <h2>Fuentes (en inglés)</h2>
        <ul className="text-sm">
          <li><a href="https://www.gov.uk/government/news/open-document-formats-selected-to-meet-user-needs">GOV.UK: Open document formats selected to meet user needs (2014)</a></li>
          <li><a href="https://www.computerweekly.com/news/2240225262/Microsoft-attacks-UK-government-decision-to-adopt-ODF-for-document-formats">Computer Weekly: UK government adopts ODF</a></li>
          <li><a href="https://www.thedroptimes.com/node/70889">The Drop Times: Schleswig-Holstein advances open-source migration</a></li>
          <li><a href="https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/schleswig-holsteins-open-source-strategy-year">EU Open Source Observatory: Schleswig-Holstein&apos;s strategy, a year on</a></li>
          <li><a href="https://www.computing.co.uk/news/2025/denmark-digital-ministry-drops-microsoft">Computing: Denmark&apos;s Digital Ministry shifts to LibreOffice</a></li>
          <li><a href="https://lwn.net/Articles/322905/">LWN: French Gendarmerie migration</a></li>
          <li><a href="https://www.htxt.co.za/2013/10/01/french-armed-forces-switch-to-ubuntu-saves-40-it-costs/">htxt: Gendarmerie says Ubuntu cuts IT costs by 40%</a></li>
          <li><a href="https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/document/munichs-long-history-open-source-public-administration">EU Open Source Observatory: Munich&apos;s long history with open source</a></li>
        </ul>
      </Prose>
    </>
  );
}
