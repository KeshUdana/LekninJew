import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Bespoke",
  description:
    "Start your custom jewelry project with Leknin Jewels and our in-house Sri Lankan artisans.",
};

export default function BespokePage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Bespoke Orders"
        title="Your vision, our craft."
        description="Share your gemstone, style, and budget preferences. Our team will return with a curated concept and timeline."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            "Choose your gemstone and design direction.",
            "Review concept sketches and stone options.",
            "Approve craftsmanship details and timeline.",
            "Receive your finished piece with secure shipping.",
          ].map((step, idx) => (
            <div key={step} className="luxury-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Step {idx + 1}
              </p>
              <p className="mt-2 text-xl">{step}</p>
            </div>
          ))}
        </div>

        <InquiryForm />
      </div>
    </div>
  );
}
