import type { Metadata } from "next";
import { AnimatedSection } from "@/components/motion/animated-section";
import { ProductFilterGrid } from "@/components/product/product-filter-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore handcrafted fine jewelry collections by Leknin Jewels.",
};

export default function CollectionsPage() {
  return (
    <div className="container-shell py-16">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Collections"
          title="Fine jewelry crafted in Sri Lanka for global clients."
          description="Filter by gemstone and category to find your next signature piece."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-10">
        <ProductFilterGrid products={products} />
      </AnimatedSection>
    </div>
  );
}
