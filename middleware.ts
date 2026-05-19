import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function getCurrency(country: string | null) {
  if (!country) return "USD";
  if (["GB"].includes(country)) return "GBP";
  if (["DE", "FR", "IT", "ES", "NL", "BE", "IE"].includes(country)) return "EUR";
  if (["AE", "SA", "QA"].includes(country)) return "USD";
  return "USD";
}

export function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");
  const currency = getCurrency(country);
  const response = NextResponse.next();
  response.cookies.set("currency", currency, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
