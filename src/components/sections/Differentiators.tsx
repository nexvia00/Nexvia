import { useTranslation } from "react-i18next";
import { MapPin, Tag, MessageCircle, Key } from "lucide-react";
import { Reveal } from "../Reveal";

export function Differentiators() {
  const { t } = useTranslation();
  const items = t("diff.items", { returnObjects: true }) as { title: string; desc: string }[];
  const icons = [MapPin, Tag, MessageCircle, Key];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">
            {t("diff.eyebrow")}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-3xl">{t("diff.title")}</h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((it, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-mint hover:shadow-[0_20px_50px_-20px_var(--mint)]">
                  <span className="absolute top-0 left-8 right-8 h-px bg-mint/40 group-hover:left-0 group-hover:right-0 transition-all duration-500" />
                  <div className="flex items-start justify-between">
                    <Icon size={28} className="text-lime" />
                  </div>
                  <h3 className="mt-8 text-2xl font-display font-semibold">{it.title}</h3>
                  <p className="mt-3 text-muted-foreground">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
