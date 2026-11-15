"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twinOf } from "@/lib/site";

export default function LangSwitch() {
  const { lang, twin } = twinOf(usePathname() || "/");
  if (!twin) return null;
  return (
    <Link
      href={twin}
      hrefLang={lang === "en" ? "es" : "en-GB"}
      lang={lang === "en" ? "es" : "en"}
      className="text-sm text-gray-300 underline-offset-4 hover:text-white hover:underline"
    >
      {lang === "en" ? "Español" : "English"}
    </Link>
  );
}
