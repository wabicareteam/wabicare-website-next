import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

// Required with `output: "export"` — emit at build time.
export const dynamic = "force-static";

const BASE = "https://wabicare.com";

// The previous deployment had no sitemap: /sitemap.xml fell through to the
// homepage, so search engines never received a map of the site.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/clinics", "/schools", "/features", "/blog", "/security", "/privacy", "/terms", "/cookies"];
  return [
    ...routes.map((r) => ({
      url: `${BASE}${r}`,
      lastModified: new Date(),
      changeFrequency: (r === "" || r === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: r === "" ? 1 : r === "/clinics" || r === "/schools" ? 0.9 : 0.6,
    })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
