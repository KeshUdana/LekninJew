"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";

type ProductFilterGridProps = {
  products: Product[];
};

export function ProductFilterGrid({ products }: ProductFilterGridProps) {
  const [gemstone, setGemstone] = useState("All");
  const [category, setCategory] = useState("All");

  const gemstones = ["All", ...new Set(products.map((product) => product.gemstone))];
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const gemMatch = gemstone === "All" || product.gemstone === gemstone;
      const categoryMatch = category === "All" || product.category === category;
      return gemMatch && categoryMatch;
    });
  }, [products, gemstone, category]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {gemstones.map((item) => (
          <button
            key={item}
            onClick={() => setGemstone(item)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              gemstone === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              category === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
