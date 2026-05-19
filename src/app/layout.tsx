import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { bodyFont, headingFont } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    default: "Leknin Jewels | Sri Lankan Artisan Jewelry",
    template: "%s | Leknin Jewels",
  },
  description:
    "Leknin Jewels crafts bespoke and fine jewelry in Sri Lanka using certified Ceylon gemstones for international clients.",
  metadataBase: new URL("https://leknin-jewels.vercel.app"),
  keywords: [
    "Sri Lanka jewelry",
    "Ceylon gemstones",
    "Bespoke jewelry",
    "Sapphire jewelry",
    "Artisan jewelry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
