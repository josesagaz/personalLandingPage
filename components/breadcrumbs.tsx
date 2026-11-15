import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE_URL + it.href,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-4 pt-8 text-sm text-gray-400 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ol className="flex flex-wrap gap-2">
        {items.map((it, i) => (
          <li key={it.href} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.href} className="hover:text-white">{it.name}</Link>
            ) : (
              <span aria-current="page" className="text-gray-300">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
