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
  const { pathname } = request.nextUrl;
  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.[a-zA-Z0-9]+$/.test(pathname);

  if (isAsset) {
    return NextResponse.next();
  }

  const country = request.headers.get("x-vercel-ip-country") ?? null;
  const currency = getCurrency(country);
  const response = NextResponse.next();

  // Keep middleware fail-safe in production: never throw from cookie writes.
  try {
    response.cookies.set("currency", currency, {
      path: "/",
      sameSite: "lax",
      secure: true,
    });
  } catch {
    return NextResponse.next();
  }

  return response;
}

export const config = {
  matcher: ["/:path*"],
};
