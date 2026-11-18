import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: "reducing-administrative-burden",
    category: "Practice Management",
    title: "Reducing Administrative Burden in ABA Clinics",
    excerpt:
      "How automation and intelligent workflows can give clinicians back hours every week — without sacrificing compliance or data quality.",
    date: "2024-12-15",
    readTime: "6 min",
  },
  {
    slug: "data-collection-best-practices",
    category: "Clinical",
    title: "Data Collection Best Practices for RBTs",
    excerpt:
      "A practical guide to consistent, accurate behavioral data collection across session types — from DTT to naturalistic observation.",
    date: "2024-12-08",
    readTime: "8 min",
  },
  {
    slug: "hipaa-compliance-aba",
    category: "Compliance",
    title: "HIPAA Compliance in ABA: What You Need to Know",
    excerpt:
      "Understanding your obligations around protected health information, electronic records, and secure communication in ABA practices.",
    date: "2024-11-28",
    readTime: "5 min",
  },
  {
    slug: "school-based-aba-challenges",
    category: "Schools",
    title: "Navigating School-Based ABA Service Delivery",
    excerpt:
      "Balancing clinical rigor with classroom realities. Strategies for effective ABA implementation in educational settings.",
    date: "2024-11-20",
    readTime: "7 min",
  },
  {
    slug: "billing-denials-prevention",
    category: "Billing",
    title: "Preventing Common ABA Billing Denials",
    excerpt:
      "The top reasons ABA claims get denied and systematic approaches to preventing them before they happen.",
    date: "2024-11-12",
    readTime: "6 min",
  },
  {
    slug: "parent-engagement-outcomes",
    category: "Research",
    title: "Parent Engagement and Treatment Outcomes",
    excerpt:
      "Research-backed strategies for increasing parent involvement and how technology can bridge the clinic-home gap.",
    date: "2024-11-05",
    readTime: "9 min",
  },
];

const categories = [
  "All",
  "Clinical",
  "Practice Management",
  "Compliance",
  "Schools",
  "Billing",
  "Research",
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="insights & resources"
        subtitle="clinical knowledge, practice management strategies, and industry perspectives."
      />

      {/* Categories */}
      <section className="py-8 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest rounded-md transition-all duration-300 cursor-pointer ${
                  i === 0
                    ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-md"
                    : "bg-white text-black/60 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-pink hover:to-brand-purple shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-8 md:px-12 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="relative group rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(224,154,184,0.15)]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative z-10 bg-white rounded-xl p-10 h-full flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">
                      {post.category}
                    </span>
                    <span className="text-[8px] font-medium uppercase tracking-wider text-black/30">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-pink-soft group-hover:to-brand-purple transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose flex-grow mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-black/30 uppercase tracking-wider">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-black/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple transition-all duration-300">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 px-8 md:px-12 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader label="Stay Current" title="Subscribe to Updates" centered />
          <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-black/60 leading-loose mt-6 mb-10">
            Clinical insights, product updates, and industry news delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
