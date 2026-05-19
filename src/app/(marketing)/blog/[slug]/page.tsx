import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="container-shell py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Journal</p>
      <h1 className="mt-3 max-w-4xl text-5xl leading-tight">{post.title}</h1>
      <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
        <p>
          This is a starter article page scaffold. Replace this content with CMS-backed
          content from Sanity as you publish posts.
        </p>
        <p>
          The layout is intentionally clean and readable for foreign audiences while
          preserving brand typography.
        </p>
      </div>
    </article>
  );
}
