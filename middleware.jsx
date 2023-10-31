export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/categories/:path*",
    "/home:path*",
    "/orders/:path*",
    "/products/:path*",
    "/settings:path*",
    "/contact:path*",
  ],
};
