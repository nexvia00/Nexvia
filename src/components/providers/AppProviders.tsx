import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";
import "@/i18n";

export function AppProviders({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Inject Google Fonts once on client
    if (document.getElementById("nexvia-fonts")) return;
    const link = document.createElement("link");
    link.id = "nexvia-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
