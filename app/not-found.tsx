import Link from "next/link";

// Unknown routes previously rendered the homepage with a 200, so shared
// links like /pricing silently "worked" and search engines saw duplicates.
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 bg-[#FAFAFA] text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 mb-6">
        Error 404
      </p>
      <h1 className="font-serif text-5xl md:text-6xl font-light lowercase text-black mb-6">
        page not found
      </h1>
      <p className="font-serif text-black/60 text-xl max-w-lg mb-10">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-md"
      >
        Back to home
      </Link>
    </main>
  );
}
