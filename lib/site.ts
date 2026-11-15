export const SITE_URL = "https://systems-sagaz.co.uk";
export const OWNER = "Jose Sagarnaga";

export type Lang = "en" | "es";

/**
 * English path → Spanish twin. Add a pair here when both versions exist;
 * the header switcher, hreflang tags and sitemap all read from this list.
 */
export const PAGES: { en: string; es?: string; sitemap?: boolean }[] = [
  { en: "/", es: "/es" },
  { en: "/about", es: "/es/sobre-mi" },
  { en: "/contact", es: "/es/contacto" },
  { en: "/privacy", es: "/es/privacidad" },
  { en: "/services/spreadsheets-to-app", es: "/es/servicios/de-hojas-de-calculo-a-app" },
  { en: "/work/community-advice-data-app", es: "/es/casos/app-datos-servicio-comunitario" },
];

export function twinOf(path: string): { lang: Lang; twin?: string } {
  const clean = path !== "/" ? path.replace(/\/$/, "") : path;
  for (const p of PAGES) {
    if (p.en === clean) return { lang: "en", twin: p.es };
    if (p.es === clean) return { lang: "es", twin: p.en };
  }
  return { lang: clean === "/es" || clean.startsWith("/es/") ? "es" : "en" };
}

/** canonical + hreflang alternates for a page, given its English path. */
export function alternatesFor(enPath: string, lang: Lang) {
  const page = PAGES.find((p) => p.en === enPath);
  const es = page?.es;
  const self = lang === "es" && es ? es : enPath;
  return {
    canonical: self,
    languages: es
      ? { "en-GB": enPath, es, "x-default": enPath }
      : undefined,
  };
}

export const NAV = {
  en: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact", cta: true },
  ],
  es: [
    { href: "/es/sobre-mi", label: "Sobre mí" },
    { href: "/es/contacto", label: "Contacto", cta: true },
  ],
} as const;

export const FOOTER = {
  en: { place: "London, UK", links: [{ href: "/about", label: "About" }, { href: "/contact", label: "Contact" }, { href: "/privacy", label: "Privacy" }] },
  es: { place: "Londres, Reino Unido", links: [{ href: "/es/sobre-mi", label: "Sobre mí" }, { href: "/es/contacto", label: "Contacto" }, { href: "/es/privacidad", label: "Privacidad" }] },
} as const;

/** Home link for a language (falls back to English home until /es exists). */
export function homeFor(lang: Lang): string {
  const es = PAGES.find((p) => p.en === "/")?.es;
  return lang === "es" && es ? es : "/";
}
