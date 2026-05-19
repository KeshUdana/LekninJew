import { NextResponse } from "next/server";

export function middleware() {
  // Temporary no-op middleware to prevent runtime invocation failures.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
