export interface Block {
  tag: "h1" | "h2" | "h3" | "p" | "li";
  text: string;
}

/**
 * Long-form content renderer used by the legal/security pages and blog
 * posts. Consecutive `li` blocks are grouped into a single list.
 */
export default function ProseSection({ blocks }: { blocks: Block[] }) {
  const nodes: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flush = (key: string) => {
    if (!bullets.length) return;
    nodes.push(
      <ul key={`ul-${key}`} className="list-disc pl-6 space-y-2 my-6">
        {bullets.map((b, i) => (
          <li key={i} className="font-serif text-black/75 text-lg leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
    );
    bullets = [];
  };

  blocks.forEach((b, i) => {
    if (b.tag === "li") {
      bullets.push(b.text);
      return;
    }
    flush(String(i));
    if (b.tag === "h2") {
      nodes.push(
        <h2 key={i} className="font-serif text-2xl text-black font-normal mt-12 mb-4 lowercase">
          {b.text}
        </h2>
      );
    } else if (b.tag === "h3") {
      nodes.push(
        <h3 key={i} className="font-mono text-[11px] uppercase tracking-[0.15em] text-black/70 mt-8 mb-3">
          {b.text}
        </h3>
      );
    } else {
      nodes.push(
        <p key={i} className="font-serif text-black/75 text-lg leading-relaxed mb-6">
          {b.text}
        </p>
      );
    }
  });
  flush("end");

  return <div className="max-w-3xl mx-auto">{nodes}</div>;
}
