import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Store } from "lucide-react";
import { Reveal } from "../Reveal";

export function ProductsPreview() {
  const { t } = useTranslation();
  const cards = [
    {
      icon: Globe,
      name: t("products.site.name"),
      tag: t("products.site.tagline"),
      desc: t("products.site.desc"),
    },
    {
      icon: Store,
      name: t("products.pos.name"),
      tag: t("products.pos.tagline"),
      desc: t("products.pos.desc"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">
                {t("products.eyebrow")}
              </span>
              <h2 className="mt-3 max-w-2xl">{t("products.title")}</h2>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name} delay={i * 0.1}>
                <Link
                  to="/soluciones"
                  className="group relative block h-[400px] sm:h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-forest text-cream border border-border hover:border-mint transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-30px_var(--mint)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/0 to-lime/0 group-hover:from-mint/20 group-hover:via-mint/10 group-hover:to-lime/30 transition-all duration-700" />
                  <div className="relative h-full p-8 md:p-10 flex flex-col">
                    <Icon size={36} className="text-lime dark:text-mint" />
                    <div className="mt-auto">
                      <span className="text-xs tracking-widest uppercase text-cream/70">
                        {c.tag}
                      </span>
                      <h3 className="mt-2 text-3xl md:text-4xl font-display font-bold">{c.name}</h3>
                      <p className="mt-3 text-cream/80 max-w-md">{c.desc}</p>
                      <span className="mt-6 inline-flex items-center gap-1 text-lime font-semibold">
                        {t("products.seePlans")}
                        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
