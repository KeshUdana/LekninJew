"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function onSubmit(formData: FormData) {
    try {
      setStatus("sending");
      const payload = Object.fromEntries(formData);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action={onSubmit} className="luxury-card grid gap-4 p-6 sm:p-8">
      <input
        required
        name="name"
        placeholder="Name"
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
      />
      <input
        required
        name="country"
        placeholder="Country"
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
      />
      <textarea
        required
        name="message"
        placeholder="Message"
        className="min-h-32 rounded-xl border border-input bg-background px-4 py-3 text-sm"
      />
      <button
        disabled={status === "sending"}
        type="submit"
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "done" && (
        <p className="text-sm text-accent">Message sent. We reply within 24h.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Could not send. Please try again.
        </p>
      )}
    </form>
  );
}
