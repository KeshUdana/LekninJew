import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { ProductGallery } from "@/components/product/product-gallery";
import { products } from "@/lib/data";
import { productJsonLd } from "@/lib/seo";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return {};
  }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div className="container-shell py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.gallery} name={product.name} />

        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {product.gemstone} · {product.category}
          </p>
          <h1 className="text-5xl leading-tight">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.description}</p>
          <p className="text-sm text-muted-foreground">{product.certificate}</p>
          <p className="text-sm text-muted-foreground">{product.dimensions}</p>
          <p className="text-xl font-semibold text-primary">
            From ${product.priceFromUsd.toLocaleString()}
          </p>
          <Link
            href="/bespoke"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Request This Piece
          </Link>
        </section>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl">You may also like</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
