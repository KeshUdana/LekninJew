import type { Metadata } from "next";
import { AnimatedSection } from "@/components/motion/animated-section";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Craft",
  description: "Explore our in-house process from raw gemstone to finished jewel.",
};

const timeline = [
  {
    title: "Gem Selection",
    text: "We source and evaluate each gemstone for color, clarity, and cut potential.",
  },
  {
    title: "Design Translation",
    text: "Your concept and our artisan references become sketches and proportion studies.",
  },
  {
    title: "Handcrafting",
    text: "Metalwork, stone setting, and finishing are completed in-house by our team.",
  },
  {
    title: "Final Polish",
    text: "Each piece is quality checked, packaged, and prepared for insured delivery.",
  },
];

export default function CraftPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="The Process"
        title="From raw gem to finished heirloom."
        description="Our workflow remains human, meticulous, and deeply rooted in Sri Lankan craftsmanship."
      />

      <div className="mt-10 space-y-6">
        {timeline.map((item, idx) => (
          <AnimatedSection key={item.title} delay={idx * 0.08} className="luxury-card p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Stage {idx + 1}
            </p>
            <h2 className="mt-2 text-3xl">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
          </AnimatedSection>
        ))}
      </div>

      <section className="mt-12 luxury-card p-6 sm:p-8">
        <h2 className="text-3xl">Workshop Footage</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Add your process reel here from YouTube or Vimeo.
        </p>
        <div className="mt-4 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Video placeholder (embed with an iframe when final media is ready)
        </div>
      </section>
    </div>
  );
}
