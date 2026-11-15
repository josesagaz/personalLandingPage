export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 text-gray-300 sm:px-6 md:pb-24 [&_a]:text-red-300 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:pb-3 [&_h2]:pt-10 [&_h2]:font-nacelle [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-100 [&_li]:pb-1 [&_p]:pb-4 [&_ul]:list-disc [&_ul]:pb-4 [&_ul]:pl-6">
      {children}
    </div>
  );
}
