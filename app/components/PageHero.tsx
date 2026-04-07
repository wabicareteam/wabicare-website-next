import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 relative pt-24 bg-[#FAFAFA]">
      <div className="text-center mb-12 pointer-events-none">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight lowercase mb-6 text-black">
          {title}
        </h1>
        <p className="font-serif text-black/60 text-xl md:text-3xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="pointer-events-auto px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-md transition-all duration-300 shadow-[0_6px_16px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02]"
        >
          {cta.label}
        </Link>
      )}
    </section>
  );
}
