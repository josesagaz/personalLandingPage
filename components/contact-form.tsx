"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/site";

const T = {
  en: {
    name: "Your name",
    email: "Email",
    org: "Business or organisation (optional)",
    message: "What would you like to fix or change?",
    messageHint: "A few lines is plenty: what you use today and what's getting in the way.",
    language: "Reply in",
    send: "Send message",
    sending: "Sending…",
    error: "Sorry, that didn't go through. Please try again in a minute.",
    privacy: "I'll only use your details to reply to you. See the",
    privacyLink: "privacy policy",
    privacyHref: "/privacy",
    thanks: "/contact/thanks",
  },
  es: {
    name: "Tu nombre",
    email: "Correo electrónico",
    org: "Negocio u organización (opcional)",
    message: "¿Qué te gustaría resolver o cambiar?",
    messageHint: "Unas líneas bastan: qué usas hoy y qué te está frenando.",
    language: "Responder en",
    send: "Enviar mensaje",
    sending: "Enviando…",
    error: "Lo siento, no se pudo enviar. Inténtalo de nuevo en un minuto.",
    privacy: "Solo usaré tus datos para responderte. Consulta la",
    privacyLink: "política de privacidad",
    privacyHref: "/es/privacidad",
    thanks: "/es/contacto/gracias",
  },
} as const;

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = T[lang];
  const router = useRouter();
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    try {
      // Netlify Forms: posts to the static form definition in public/__forms.html
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push(t.thanks);
    } catch {
      setState("error");
    }
  }

  const field = "form-input w-full";
  const label = "mb-1 block text-sm font-medium text-gray-200";

  return (
    <form name="contact" onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-5 px-4 pb-16 sm:px-6 md:pb-24">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div>
        <label className={label} htmlFor="name">{t.name}</label>
        <input id="name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="email">{t.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="organisation">{t.org}</label>
        <input id="organisation" name="organisation" type="text" autoComplete="organization" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="message">{t.message}</label>
        <p id="message-hint" className="mb-2 text-sm text-gray-400">{t.messageHint}</p>
        <textarea id="message" name="message" rows={6} required aria-describedby="message-hint" className="form-textarea w-full" />
      </div>
      <div>
        <label className={label} htmlFor="language">{t.language}</label>
        <select id="language" name="language" defaultValue={lang === "es" ? "Español" : "English"} className="form-select w-full">
          <option>English</option>
          <option>Español</option>
        </select>
      </div>
      <p className="text-sm text-gray-400">
        {t.privacy} <a href={t.privacyHref} className="text-red-300 underline underline-offset-4">{t.privacyLink}</a>.
      </p>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-300">{t.error}</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="btn w-full bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-60"
      >
        {state === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
