import type { Product } from "@/lib/data";

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Leknin Jewels",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.priceFromUsd,
      availability: "https://schema.org/InStock",
    },
  };
}
