import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware() {
  },
  {
    
    // Middleware still runs on all routes, but doesn't protect the given routes
    publicPaths: ["/"],
  }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
  //this matcher means run the middleware on all routes except the ones that start with _next or static files
}