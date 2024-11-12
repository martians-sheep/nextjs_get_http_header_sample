import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-middleware-request-cd1", "1234567890");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
