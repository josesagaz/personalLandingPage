import Link from "next/link";
import Logo from "./logo";
import LangSwitch from "./lang-switch";
import { NAV, homeFor, type Lang } from "@/lib/site";

export default function Header({ lang = "en" }: { lang?: Lang }) {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          <div className="flex flex-1 items-center">
            <Logo href={homeFor(lang)} />
          </div>
          <nav aria-label={lang === "es" ? "Principal" : "Main"}>
            <ul className="flex items-center gap-4">
              <li>
                <LangSwitch />
              </li>
              {NAV[lang].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      "cta" in item && item.cta
                        ? "btn-sm bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                        : "text-sm text-gray-300 hover:text-white"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
