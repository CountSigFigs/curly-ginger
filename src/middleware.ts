import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const cookieStore = await cookies()
  const entryGranted = cookieStore.get('entryGranted');
  const path = req.nextUrl.pathname;

  if (path === '/') {
    if (entryGranted?.value === 'true') {
      const absoluteURL = new URL("/dashboard/login", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  if (path.startsWith('/dashboard')) {
    if (entryGranted?.value !== 'true') {
      const absoluteURL = new URL("/", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }
}
