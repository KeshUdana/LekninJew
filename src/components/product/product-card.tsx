import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border/70 bg-card">
      <Link href={`/collections/${product.slug}`}>
        <div className="relative h-72">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {product.gemstone} · {product.category}
        </p>
        <h3 className="mt-2 text-2xl leading-tight">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-primary">
            From ${product.priceFromUsd.toLocaleString()}
          </p>
          <Link
            href={`/collections/${product.slug}`}
            className="rounded-full border border-primary px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
