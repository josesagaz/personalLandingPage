"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Closes the header's <details> menus after navigation, on outside click and on Escape. */
export default function MenuCloser() {
  const pathname = usePathname();
  useEffect(() => {
    const closeAll = (except?: Element | null) =>
      document.querySelectorAll("header details[open]").forEach((d) => {
        if (d !== except) d.removeAttribute("open");
      });
    closeAll();
    const onClick = (e: MouseEvent) => closeAll((e.target as Element).closest("header details"));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [pathname]);
  return null;
}
