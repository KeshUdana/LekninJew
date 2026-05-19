import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Leknin Jewels for product and bespoke inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Speak with our team."
        description="Tell us about your requirement and we will reply within one business day."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="luxury-card p-6 sm:p-8">
          <h2 className="text-3xl">Direct channels</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            For urgent requests, message us directly on WhatsApp.
          </p>
          <Link
            href="https://wa.me/94710000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-primary px-5 py-3 text-sm uppercase tracking-[0.2em] text-primary"
          >
            Open WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
