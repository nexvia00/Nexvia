import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, Clock, GraduationCap, MapPin, ShieldCheck, FileText, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { waLink } from "@/lib/constants";

export const Route = createFileRoute("/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones — NEXVIA SITE & POS para Yucatán" },
      {
        name: "description",
        content:
          "Planes claros para sitios web y sistemas POS. Precios accesibles y soporte local en Hunucmá y Mérida.",
      },
      { property: "og:title", content: "Soluciones — NEXVIA" },
      {
        property: "og:description",
        content: "Planes claros para sitios web y sistemas POS en Yucatán.",
      },
    ],
  }),
  component: Solutions,
});

type Plan = {
  key: string;
  name: string;
  tag: string;
  features: string[];
  delivery: number;
  popular?: boolean;
};

function PlanCard({ plan, family }: { plan: Plan; family: string }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-3xl border ${
        plan.popular ? "border-lime shadow-[0_0_40px_-15px_var(--lime)]" : "border-border"
      } bg-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-mint`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-8 rounded-full bg-lime text-deep px-3 py-1 text-xs font-bold uppercase tracking-wider">
          {t("solutions.popular")}
        </span>
      )}
      <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">{family}</span>
      <h3 className="mt-3 text-3xl font-display font-bold">{plan.name}</h3>
      <p className="mt-2 text-muted-foreground">{plan.tag}</p>

      <ul className="mt-8 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <Check size={18} className="text-lime shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Clock size={16} className="text-mint" />
        {t("solutions.delivery")}: {plan.delivery} {t("solutions.days")}
      </div>

      <div className="mt-6">
        <MagneticButton
          variant={plan.popular ? "primary" : "ghost"}
          asLink={{ href: waLink(`${family} ${plan.name}`), external: true }}
          className="w-full"
        >
          <MessageCircle size={16} />
          {t("solutions.quote")}
        </MagneticButton>
      </div>
    </motion.div>
  );
}

function Solutions() {
  const { t, i18n } = useTranslation();
  const [tab, setTab] = useState<"all" | "site" | "pos">("all");

  const sitePlans: Plan[] = [
    { ...(t("solutions.site.basic", { returnObjects: true }) as Plan), key: "basic" },
    { ...(t("solutions.site.comercial", { returnObjects: true }) as Plan), key: "comercial", popular: true },
    { ...(t("solutions.site.pro", { returnObjects: true }) as Plan), key: "pro" },
  ];
  const posPlans: Plan[] = [
    { ...(t("solutions.pos.esencial", { returnObjects: true }) as Plan), key: "esencial" },
    { ...(t("solutions.pos.cocina", { returnObjects: true }) as Plan), key: "cocina", popular: true },
    { ...(t("solutions.pos.full", { returnObjects: true }) as Plan), key: "full" },
  ];

  const inclusions = t("solutions.inclusions", { returnObjects: true }) as string[];
  const inclusionIcons = [GraduationCap, MapPin, ShieldCheck, FileText, MessageCircle];

  const showSite = tab === "all" || tab === "site";
  const showPos = tab === "all" || tab === "pos";

  return (
    <PageShell>
      <section className="py-20 md:py-28 grain">
        <div className="container-x">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">
              NEXVIA · {t("nav.solutions")}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-3xl">{t("solutions.title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-muted-foreground text-lg">{t("solutions.sub")}</p>
          </Reveal>

          <div className="mt-10 inline-flex p-1 rounded-full border border-border bg-card">
            {([
              ["all", t("solutions.tabAll")],
              ["site", t("solutions.tabSite")],
              ["pos", t("solutions.tabPos")],
            ] as const).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab === k ? "bg-lime text-deep" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${tab}-${i18n.language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {showSite && (
            <section className="py-16">
              <div className="container-x">
                <Reveal>
                  <h2 className="mb-10">NEXVIA SITE</h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-6">
                  {sitePlans.map((p) => (
                    <PlanCard key={p.key} plan={p} family="NEXVIA SITE" />
                  ))}
                </div>
              </div>
            </section>
          )}

          {showPos && (
            <section className="py-16">
              <div className="container-x">
                <Reveal>
                  <h2 className="mb-10">NEXVIA POS</h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-6">
                  {posPlans.map((p) => (
                    <PlanCard key={p.key} plan={p} family="NEXVIA POS" />
                  ))}
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container-x">
          <Reveal>
            <h2 className="text-center max-w-3xl mx-auto text-3xl md:text-4xl">
              {t("solutions.included")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
              {inclusions.map((it, i) => {
                const Icon = inclusionIcons[i] || Check;
                return (
                  <li
                    key={it}
                    className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-card/50 p-6 hover:border-mint hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={28} className="text-lime" />
                    <span className="text-sm font-medium">{it}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
