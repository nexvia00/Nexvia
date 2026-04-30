import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import { AppProviders } from "@/components/providers/AppProviders";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NEXVIA — Sistemas y sitios web para negocios en Yucatán" },
      {
        name: "description",
        content:
          "Tecnología local para negocios reales en Yucatán. Sistemas POS y sitios web sin tecnicismos, con soporte humano en Hunucmá y Mérida.",
      },
      { name: "author", content: "NEXVIA" },
      { property: "og:title", content: "NEXVIA — Tecnología local para Yucatán" },
      {
        property: "og:description",
        content:
          "Sistemas POS y sitios web para pequeños negocios. Sin complicaciones, con soporte local.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "icon",
        type: "image/svg+xml",
        href:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%231B2E22'/><circle cx='16' cy='16' r='6' fill='%23B7FF6E'/></svg>",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AppProviders>
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </AppProviders>
  );
}
