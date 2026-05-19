import { cookies } from "next/headers";

export async function CurrencyStrip() {
  const currency = (await cookies()).get("currency")?.value ?? "USD";

  return (
    <div className="border-b border-border/70 bg-secondary text-secondary-foreground">
      <div className="container-shell py-2 text-center text-xs uppercase tracking-[0.25em]">
        Prices shown in {currency} — We ship worldwide
      </div>
    </div>
  );
}
