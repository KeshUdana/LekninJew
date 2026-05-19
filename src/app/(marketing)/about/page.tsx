import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Leknin Jewels, our Sri Lankan roots, and our in-house artisan team.",
};

export default function AboutPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Our Story"
        title="A Sri Lankan house of gemstone artistry."
        description="Leknin Jewels was founded to present the richness of Ceylon gemstones through modern, handcrafted fine jewelry."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="luxury-card p-6">
          <h2 className="text-3xl">What defines us</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>In-house design and production in Colombo.</li>
            <li>Certified natural gemstones with transparent sourcing.</li>
            <li>International client experience and secure global shipping.</li>
            <li>A balance of traditional motifs and contemporary restraint.</li>
          </ul>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-3xl border border-border/70">
          <Image
            src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80"
            alt="Jewelry workshop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
