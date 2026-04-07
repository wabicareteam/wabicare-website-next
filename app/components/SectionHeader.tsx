interface SectionHeaderProps {
  label: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 flex items-center gap-4 mb-6 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="w-8 h-px bg-black/20" />
        {label}
        {centered && <span className="w-8 h-px bg-black/20" />}
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-light lowercase text-black">
        {title}
      </h2>
    </div>
  );
}
