import PageHeader from "@/components/page-header";
import Prose from "@/components/prose";
import Link from "next/link";
import { alternatesFor, OWNER } from "@/lib/site";

export const metadata = {
  title: "Política de privacidad",
  description: "Cómo System's SagaZ trata la información personal que envías a través de esta web.",
  alternates: alternatesFor("/privacy", "es"),
  openGraph: { locale: "es_ES" },
};

export default function Privacidad() {
  return (
    <>
      <div className="px-4 sm:px-6">
        <PageHeader title="Política de privacidad" intro="Última actualización: 15 de noviembre de 2026" />
      </div>
      <Prose>
        <h2>Quién soy</h2>
        <p>
          Esta web la gestiona {OWNER}, con el nombre comercial System&apos;s SagaZ, con sede en Londres (Reino Unido). Soy
          responsable de la información personal que envías a través de ella. Puedes contactarme mediante el{" "}
          <Link href="/es/contacto">formulario de contacto</Link>.
        </p>

        <h2>Qué datos recojo</h2>
        <p>
          Solo lo que escribes en el formulario de contacto: tu nombre, tu correo electrónico, tu organización (si la
          indicas), tu mensaje y el idioma en que prefieres la respuesta. No uso cookies publicitarias ni de seguimiento.
        </p>

        <h2>Para qué los uso</h2>
        <p>
          Para responder a tu consulta y, si decidimos trabajar juntos, para preparar una propuesta. La base legal es mi
          interés legítimo en responder a los mensajes que recibo y las gestiones que me pidas antes de firmar un contrato.
          Nunca venderé tus datos ni te añadiré a una lista de correo.
        </p>

        <h2>Dónde se guardan</h2>
        <p>
          La web está alojada en Netlify, que recibe y guarda los mensajes del formulario en mi nombre y me los reenvía por
          correo. Netlify puede tratar datos fuera del Reino Unido, con las garantías que reconoce la ley de protección de
          datos británica.
        </p>

        <h2>Cuánto tiempo los guardo</h2>
        <p>
          Guardo las consultas hasta 12 meses y después las borro, salvo que empecemos a trabajar juntos; en ese caso
          conservo lo necesario para el proyecto y para mis registros contables.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes pedirme ver, corregir o borrar la información que tengo sobre ti, u oponerte a cómo la uso. Solo tienes que
          escribirme por el formulario de contacto. Si no estás conforme con cómo trato tus datos, puedes reclamar ante la
          Information Commissioner&apos;s Office (<a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a>), la autoridad
          británica de protección de datos.
        </p>
      </Prose>
    </>
  );
}
