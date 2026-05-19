import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description: "Guides and stories on Ceylon gems, design, and bespoke jewelry.",
};

export default function BlogPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Journal"
        title="Insights from our gem and design studio."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="luxury-card p-6">
            <h2 className="text-3xl">{post.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex text-xs uppercase tracking-[0.2em] text-primary"
            >
              Read article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
