import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const p of PAGES.filter((p) => p.sitemap !== false)) {
    const languages = p.es
      ? { "en-GB": SITE_URL + p.en, es: SITE_URL + p.es }
      : undefined;
    out.push({ url: SITE_URL + p.en, alternates: languages ? { languages } : undefined });
    if (p.es) out.push({ url: SITE_URL + p.es, alternates: { languages: languages! } });
  }
  return out;
}
