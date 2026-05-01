import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const delta = y - lastScrollY.current;
      if (y > 80 && delta > 4) setHidden(true);
      else if (delta < -4) setHidden(false);
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/soluciones", label: t("nav.solutions") },
    { to: "/contacto", label: t("nav.contact") },
  ] as const;

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    if (q.includes("contact")) navigate({ to: "/contacto" });
    else if (q.includes("sol") || q.includes("plan") || q.includes("pos") || q.includes("site"))
      navigate({ to: "/soluciones" });
    else navigate({ to: "/" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a href="#main" className="skip-link">
        {t("nav.skip")}
      </a>
      <div className="container-x flex items-center justify-between h-16 md:h-20 gap-4">
        <Link to="/" aria-label="NEXVIA" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors data-[status=active]:text-lime"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <form
          onSubmit={onSearch}
          className="hidden md:flex items-center gap-2 rounded-full border border-border px-3 py-1.5 bg-transparent focus-within:border-mint transition-colors"
          style={{ width: 200 }}
          role="search"
        >
          <Search size={14} className="text-muted-foreground shrink-0" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar..."
            aria-label="Buscar"
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </form>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <LangToggle />
          <ThemeToggle />
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("nav.menu")}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-background border-l border-border md:hidden p-6 pt-20 flex flex-col gap-6"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              <X size={18} />
            </button>
            <nav className="flex flex-col gap-4 text-2xl font-display">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="data-[status=active]:text-lime"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
