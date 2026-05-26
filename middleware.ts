import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/" || pathname === "") {
    return NextResponse.next();
  }
  const first = pathname.split("/").filter(Boolean)[0];
  if (
    first &&
    !isLocale(first) &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.includes(".")
  ) {
    return NextResponse.redirect(new URL("/hr", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
