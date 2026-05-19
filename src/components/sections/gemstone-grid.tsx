"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Gemstone, Product } from "@/lib/data";

type GemstoneGridProps = {
  gemstones: Gemstone[];
  products: Product[];
};

export function GemstoneGrid({ gemstones, products }: GemstoneGridProps) {
  const [selected, setSelected] = useState<string>("All");

  const displayed = useMemo(() => {
    return selected === "All"
      ? gemstones
      : gemstones.filter((item) => item.name === selected);
  }, [gemstones, selected]);

  const options = ["All", ...gemstones.map((gem) => gem.name)];

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              option === selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {displayed.map((gem) => (
          <article key={gem.slug} className="luxury-card overflow-hidden">
            <div className="relative h-60">
              <Image src={gem.image} alt={gem.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                {gem.color}
              </p>
              <h3 className="mt-2 text-3xl">{gem.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{gem.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {products
                  .filter((product) => product.gemstone === gem.name)
                  .map((product) => (
                    <Link
                      key={product.slug}
                      href={`/collections/${product.slug}`}
                      className="rounded-full border border-primary px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary"
                    >
                      {product.name}
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
