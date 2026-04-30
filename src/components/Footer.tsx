import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { EMAIL, FACEBOOK, INSTAGRAM, PHONE_DISPLAY, waLink } from "@/lib/constants";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-mint hover:text-mint transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-mint hover:text-mint transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">{t("nav.home")}</Link></li>
            <li><Link to="/soluciones" className="hover:text-foreground">{t("nav.solutions")}</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">{t("footer.productsCol")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/soluciones" className="hover:text-foreground">NEXVIA SITE</Link></li>
            <li><Link to="/soluciones" className="hover:text-foreground">NEXVIA POS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">{t("footer.contactCol")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone size={14} className="mt-1 shrink-0" />
              <a href={waLink()} className="hover:text-foreground">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex gap-2">
              <Mail size={14} className="mt-1 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground break-all">{EMAIL}</a>
            </li>
            <li className="flex gap-2">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>{t("footer.address")}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} NEXVIA. {t("footer.rights")}</span>
          <span>Hunucmá · Mérida · Yucatán</span>
        </div>
      </div>
    </footer>
  );
}
