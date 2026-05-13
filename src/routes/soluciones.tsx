import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  Check,
  Clock,
  GraduationCap,
  MapPin,
  ShieldCheck,
  FileText,
  MessageCircle,
  Calendar,
  Code2,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

const searchSchema = z.object({
  plan: z.string().optional(),
});

export const Route = createFileRoute("/soluciones")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Soluciones — Nexvia Site & POS para Yucatán" },
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
      className="relative rounded-3xl border border-border bg-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[#74C69D] hover:shadow-[0_20px_50px_-20px_#74C69D]"
    >
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
          variant="ghost"
          asLink={{ href: `/contacto?plan=${encodeURIComponent(`${family} ${plan.name}`)}` }}
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
  const [tab, setTab] = useState<"site" | "pos">("site");

  const sitePlans: Plan[] = [
    { ...(t("solutions.site.basic", { returnObjects: true }) as Plan), key: "basic" },
    { ...(t("solutions.site.comercial", { returnObjects: true }) as Plan), key: "comercial" },
    { ...(t("solutions.site.pro", { returnObjects: true }) as Plan), key: "pro" },
  ];
  const posPlans: Plan[] = [
    { ...(t("solutions.pos.esencial", { returnObjects: true }) as Plan), key: "esencial" },
    { ...(t("solutions.pos.cocina", { returnObjects: true }) as Plan), key: "cocina" },
    { ...(t("solutions.pos.full", { returnObjects: true }) as Plan), key: "full" },
  ];

  const inclusions = t("solutions.inclusions", { returnObjects: true }) as string[];
  const inclusionIcons = [GraduationCap, MapPin, ShieldCheck, FileText, MessageCircle];

  const steps = [
    { icon: MessageCircle, label: t("process.steps.0"), num: "01" },
    { icon: Calendar, label: t("process.steps.1"), num: "02" },
    { icon: FileText, label: t("process.steps.2"), num: "03" },
    { icon: Code2, label: t("process.steps.3"), num: "04" },
    { icon: Wrench, label: t("process.steps.4"), num: "05" },
    { icon: GraduationCap, label: t("process.steps.5"), num: "06" },
  ];

  const showSite = tab === "site";
  const showPos = tab === "pos";

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
                  <h2 className="mb-10">Nexvia Site</h2>
                </Reveal>
                <p className="mb-8 text-muted-foreground">
                  Nuestros precios van desde <span className="text-[#74C69D] font-semibold">$1,500 MXN</span> hasta los <span className="text-[#74C69D] font-semibold">$6,000 MXN</span> ajustándonos a tus necesidades.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {sitePlans.map((p) => (
                    <PlanCard key={p.key} plan={p} family="Nexvia Site" />
                  ))}
                </div>
              </div>
            </section>
          )}

          {showPos && (
            <section className="py-16">
              <div className="container-x">
                <Reveal>
                  <h2 className="mb-10">Nexvia POS</h2>
                </Reveal>
                <p className="mb-8 text-muted-foreground">
                  Nuestros precios van desde <span className="text-[#74C69D] font-semibold">$1,200 MXN</span> hasta los <span className="text-[#74C69D] font-semibold">$5,000 MXN</span> ajustándonos a tus necesidades.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {posPlans.map((p) => (
                    <PlanCard key={p.key} plan={p} family="Nexvia POS" />
                  ))}
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">
              {t("process.eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-3xl">{t("process.title")}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.num} delay={i * 0.07}>
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-[#74C69D] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_#74C69D]">
                    <span className="absolute top-2 right-3 text-5xl font-display font-bold text-[#74C69D]/20 select-none">
                      {s.num}
                    </span>
                    <Icon size={28} className="text-lime relative z-10" />
                    <span className="mt-4 font-display font-semibold text-sm relative z-10">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

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
                    className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-card/50 p-6 hover:border-[#74C69D] hover:shadow-[0_20px_50px_-20px_#74C69D] hover:-translate-y-1 transition-all duration-300"
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

      <a
        href="https://wa.me/5219995115178"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_-4px_#25D366] hover:scale-110 transition-transform duration-300"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </PageShell>
  );
}
