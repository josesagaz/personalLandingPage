export default function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl pb-10 pt-12 text-center md:pb-14 md:pt-20">
      {eyebrow && (
        <p className="pb-3 text-sm font-medium text-red-400">{eyebrow}</p>
      )}
      <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">{title}</h1>
      {intro && <p className="text-lg text-gray-300">{intro}</p>}
    </div>
  );
}
