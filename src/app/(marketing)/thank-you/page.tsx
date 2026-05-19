import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container-shell py-24">
      <div className="mx-auto max-w-3xl luxury-card p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Thank You</p>
        <h1 className="mt-3 text-5xl">Your inquiry has been received.</h1>
        <p className="mt-4 text-muted-foreground">
          Our team will review your request and respond with next steps shortly.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
