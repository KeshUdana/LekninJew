import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  message: z.string().min(6),
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
    subject: "New Contact Inquiry",
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${payload.data.name}</p>
      <p><strong>Email:</strong> ${payload.data.email}</p>
      <p><strong>Country:</strong> ${payload.data.country}</p>
      <p><strong>Message:</strong> ${payload.data.message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
