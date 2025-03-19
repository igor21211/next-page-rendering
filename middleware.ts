import { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("middleware", request.url);
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
