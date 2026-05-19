import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-card">
      <div className="container-shell grid gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="font-heading text-2xl tracking-widest">
            Leknin <span className="text-primary">Jewels</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Sri Lankan artisan jewelry, designed around certified Ceylon
            gemstones and handcrafted in-house.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/collections">Collections</Link>
            <Link href="/gemstones">Gemstones</Link>
            <Link href="/bespoke">Bespoke</Link>
            <Link href="/craft">The Craft</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Colombo, Sri Lanka
            <br />
            hello@lekninjewels.com
            <br />
            +94 71 000 0000
          </p>
        </div>
      </div>
    </footer>
  );
}
