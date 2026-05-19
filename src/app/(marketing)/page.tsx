import Link from "next/link";
import { AnimatedSection } from "@/components/motion/animated-section";
import { ParallaxBanner } from "@/components/motion/parallax-banner";
import { ProductCard } from "@/components/product/product-card";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <div className="container-shell space-y-20 py-20">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Gem to Jewel"
            title="From ethically sourced Ceylon gems to handcrafted heirlooms."
            description="Every Leknin piece is shaped in-house by Sri Lankan artisans using generations of gem-cutting and jewelry-making expertise."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Select Gem", "Design Together", "Craft & Deliver"].map((step) => (
              <div key={step} className="luxury-card p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Step</p>
                <p className="mt-2 text-2xl">{step}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading
            eyebrow="Featured Collections"
            title="Designed around gemstone character and modern silhouettes."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </AnimatedSection>

        <ParallaxBanner imageUrl="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1800&q=80">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Leknin</p>
          <h3 className="mt-3 max-w-3xl text-4xl leading-tight">
            Traditional Sri Lankan craft, refined for global luxury clients.
          </h3>
          <p className="mt-4 max-w-2xl text-secondary/90">
            Certified gems, in-house production, transparent communication, and
            worldwide shipping.
          </p>
        </ParallaxBanner>

        <AnimatedSection>
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by collectors and bespoke clients worldwide."
            centered
          />
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </AnimatedSection>

        <AnimatedSection className="luxury-card p-8 text-center sm:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Join the Journal
          </p>
          <h3 className="mt-3 text-4xl">Insights on Ceylon gems and bespoke design.</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Subscribe for gemstone guides, collection previews, and behind-the-scenes
            craft stories.
          </p>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              placeholder="Email address"
              className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm"
            />
            <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Subscribe
            </button>
          </div>
          <div className="mt-6">
            <Link href="/collections" className="text-sm uppercase tracking-[0.2em] text-primary">
              Explore Collections
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
