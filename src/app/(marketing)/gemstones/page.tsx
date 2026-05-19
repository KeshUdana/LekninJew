import type { Metadata } from "next";
import { GemstoneGrid } from "@/components/sections/gemstone-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { gemstones, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gemstones",
  description:
    "Discover signature Ceylon gemstones and the jewelry crafted around each stone.",
};

export default function GemstonesPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Gemstones"
        title="Explore the character of iconic Ceylon gems."
        description="From cornflower sapphires to rare cat's eye gems, each stone drives the final design language of our jewelry."
      />

      <div className="mt-10">
        <GemstoneGrid gemstones={gemstones} products={products} />
      </div>
    </div>
  );
}
