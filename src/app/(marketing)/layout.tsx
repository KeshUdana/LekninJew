import type { PropsWithChildren } from "react";
import { CurrencyStrip } from "@/components/layout/currency-strip";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

export default async function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <CurrencyStrip />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
