"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  gemPreference: z.string().min(2),
  metalPreference: z.string().min(2),
  budgetRange: z.string().min(2),
  timeline: z.string().min(2),
  notes: z.string().min(8),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const steps = ["Client", "Preferences", "Project"];

export function InquiryForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      gemPreference: "",
      metalPreference: "",
      budgetRange: "",
      timeline: "",
      notes: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      setStatus("sending");
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  });

  return (
    <form onSubmit={onSubmit} className="luxury-card p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        {steps.map((name, idx) => (
          <div
            key={name}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              idx <= step
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {name}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Full name"
            {...form.register("name")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
          />
          <input
            placeholder="Email"
            {...form.register("email")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
          />
          <input
            placeholder="Country"
            {...form.register("country")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm sm:col-span-2"
          />
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            placeholder="Gem preference (eg. Sapphire)"
            {...form.register("gemPreference")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
          />
          <input
            placeholder="Metal preference"
            {...form.register("metalPreference")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
          />
          <input
            placeholder="Budget range"
            {...form.register("budgetRange")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm sm:col-span-2"
          />
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4">
          <input
            placeholder="Expected timeline"
            {...form.register("timeline")}
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
          />
          <textarea
            placeholder="Describe your concept"
            {...form.register("notes")}
            className="min-h-36 rounded-xl border border-input bg-background px-4 py-3 text-sm"
          />
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="rounded-full border border-border px-4 py-2 text-sm"
        >
          Back
        </button>
        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(2, s + 1))}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit inquiry"}
          </button>
        )}
      </div>

      {status === "done" && (
        <p className="mt-4 text-sm text-accent">
          Thank you. Your inquiry has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
