import Link from "next/link";
import Logo from "./logo";
import LangSwitch from "./lang-switch";
import MenuCloser from "./menu-closer";
import { NAV, homeFor, type Lang } from "@/lib/site";

const ctaClass =
  "btn-sm bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]";
const link = "text-sm text-gray-300 hover:text-white";
const panel = "rounded-xl border border-gray-800 bg-gray-900 p-2 shadow-xl";
const panelLink = "block rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-gray-800";

export default function Header({ lang = "en" }: { lang?: Lang }) {
  const n = NAV[lang];
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <MenuCloser />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          <div className="flex flex-1 items-center">
            <Logo href={homeFor(lang)} />
          </div>
          <nav aria-label={lang === "es" ? "Principal" : "Main"} className="flex items-center gap-4">
            {/* Desktop */}
            <ul className="hidden items-center gap-5 lg:flex">
              <li className="relative">
                <details className="group">
                  <summary className={`${link} cursor-pointer list-none marker:hidden`}>
                    {n.services.label} <span aria-hidden="true" className="inline-block transition group-open:rotate-180">▾</span>
                  </summary>
                  <ul className={`${panel} absolute left-0 top-8 z-40 w-60`}>
                    {n.services.items.map((s) => (
                      <li key={s.href}><Link href={s.href} className={panelLink}>{s.label}</Link></li>
                    ))}
                  </ul>
                </details>
              </li>
              {n.links.map((l) => (
                <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>
              ))}
            </ul>
            <LangSwitch />
            <Link href={n.contact.href} className={ctaClass}>{n.contact.label}</Link>
            {/* Mobile */}
            <details className="relative lg:hidden">
              <summary className={`${link} cursor-pointer list-none rounded-lg border border-gray-700 px-3 py-1 marker:hidden`}>
                {n.menu}
              </summary>
              <div className={`${panel} absolute right-0 top-10 z-40 w-64`}>
                <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-gray-500">{n.services.label}</p>
                <ul>
                  {n.services.items.map((s) => (
                    <li key={s.href}><Link href={s.href} className={panelLink}>{s.label}</Link></li>
                  ))}
                </ul>
                <hr className="my-2 border-gray-800" />
                <ul>
                  {n.links.map((l) => (
                    <li key={l.href}><Link href={l.href} className={panelLink}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </details>
          </nav>
        </div>
      </div>
    </header>
  );
}
