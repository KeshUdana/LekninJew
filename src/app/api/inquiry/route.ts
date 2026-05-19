import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  gemPreference: z.string().min(2),
  metalPreference: z.string().min(2),
  budgetRange: z.string().min(2),
  timeline: z.string().min(2),
  notes: z.string().min(8),
});

export async function POST(request: Request) {
  const payload = schema.safeParse(await request.json());
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: true, mocked: true });
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "Leknin Jewels <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL ?? "hello@lekninjewels.com"],
    subject: "New Bespoke Inquiry",
    html: `
      <h2>New Bespoke Inquiry</h2>
      <p><strong>Name:</strong> ${payload.data.name}</p>
      <p><strong>Email:</strong> ${payload.data.email}</p>
      <p><strong>Country:</strong> ${payload.data.country}</p>
      <p><strong>Gem:</strong> ${payload.data.gemPreference}</p>
      <p><strong>Metal:</strong> ${payload.data.metalPreference}</p>
      <p><strong>Budget:</strong> ${payload.data.budgetRange}</p>
      <p><strong>Timeline:</strong> ${payload.data.timeline}</p>
      <p><strong>Notes:</strong> ${payload.data.notes}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
