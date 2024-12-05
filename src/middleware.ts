// import { isAuthenticated } from "@/Utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const canPreview = false;

export const config = {
  matcher: ['/dashboard/:path*'],
}

export default function middleware(req: NextRequest) {
  if (!canPreview) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
