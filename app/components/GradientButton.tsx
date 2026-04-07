import Link from "next/link";

interface GradientButtonProps {
  href: string;
  children: string;
  fullWidth?: boolean;
}

export default function GradientButton({
  href,
  children,
  fullWidth = false,
}: GradientButtonProps) {
  return (
    <Link
      href={href === "/" ? "/#contact" : href}
      className={`${
        fullWidth ? "w-full" : ""
      } inline-block text-center py-4 px-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white rounded-md bg-gradient-to-r from-brand-pink to-brand-purple transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_-4px_rgba(168,139,201,0.4)] hover:scale-[1.02]`}
    >
      {children}
    </Link>
  );
}
