import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProseSection from "../../components/ProseSection";
import { posts, getPost } from "../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article — WabiCare" };
  return {
    title: `${post.title} — WabiCare`,
    description: post.blocks.find((b) => b.tag === "p")?.text.slice(0, 155),
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="pt-32 pb-32 px-8 md:px-12 bg-[#FAFAFA] min-h-screen">
      <header className="max-w-3xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6 font-mono text-[9px] uppercase tracking-[0.15em] text-black/50">
          <span className="text-brand-purple">{post.category}</span>
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-black mb-4">
          {post.title}
        </h1>
      </header>
      <ProseSection blocks={post.blocks} />
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-black/10">
        <Link
          href="/blog"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/60 hover:text-brand-purple transition-colors"
        >
          ← All articles
        </Link>
      </div>
    </main>
  );
}
