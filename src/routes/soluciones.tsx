import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
import { motion, useReducedMotion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { waLink, waPlan } from "@/lib/constants";
import posLogin from "@/assets/pos-screenshots/pos-1.png";
import posCobro from "@/assets/pos-screenshots/punto-de-venta-ventana-de-cobro.png";
import posComprobante from "@/assets/pos-screenshots/punto-de-venta-comprobante.png";
import posComandas from "@/assets/pos-screenshots/captura-de-comandas.png";
import posCocinaSeguimiento from "@/assets/pos-screenshots/nexvia-cocina-seguimiento-de-ordenes.png";
import posReporte from "@/assets/pos-screenshots/reporte-de-nevia-para-cocinas.png";
import posCorte from "@/assets/pos-screenshots/corte-de-caja-y-reporteo.png";

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
  price: string;
  tag: string;
  features: string[];
  delivery: number;
};

/* ── Auto-cycling index for crossfade device screens ── */
function useCycle(length: number, interval = 3000, offset = 0) {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || length < 2) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      id = setInterval(() => setIdx((i) => (i + 1) % length), interval);
    }, offset);
    return () => {
      clearTimeout(start);
      if (id) clearInterval(id);
    };
  }, [length, interval, offset, reduce]);
  return idx;
}

type Shot = { src: string; alt: string };

/* ── Crossfade stack of screenshots (no sliding) ── */
function Fader({ images, idx, className }: { images: Shot[]; idx: number; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-black ${className ?? ""}`}>
      {images.map((im, i) => (
        <motion.img
          key={im.src}
          src={im.src}
          alt={im.alt}
          loading="lazy"
          initial={false}
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ))}
    </div>
  );
}

/* ── CSS-only browser window mockup with a fake business website inside ── */
function BrowserMock() {
  return (
    <div className="rounded-xl overflow-hidden border border-cream/10 bg-deep shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#141f18] border-b border-cream/10">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 h-6 flex-1 max-w-[220px] rounded-md bg-cream/5" />
      </div>
      <div className="bg-deep">
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream/5">
          <div className="h-4 w-24 rounded bg-mint/60" />
          <div className="hidden sm:flex gap-4">
            <div className="h-3 w-12 rounded bg-cream/15" />
            <div className="h-3 w-12 rounded bg-cream/15" />
            <div className="h-3 w-12 rounded bg-cream/15" />
          </div>
        </div>
        <div className="relative px-6 py-12 bg-gradient-to-br from-forest via-mint/25 to-deep">
          <div className="h-6 w-3/4 rounded bg-cream/80" />
          <div className="mt-3 h-3 w-1/2 rounded bg-cream/40" />
          <div className="mt-6 h-9 w-32 rounded-lg bg-lime" />
        </div>
        <div className="grid grid-cols-2 gap-4 p-6">
          {[0, 1].map((i) => (
            <div key={i} className="rounded-lg border border-cream/10 bg-card/40 p-4">
              <div className="h-8 w-8 rounded-lg bg-mint/40" />
              <div className="mt-3 h-3 w-2/3 rounded bg-cream/50" />
              <div className="mt-2 h-2.5 w-full rounded bg-cream/20" />
              <div className="mt-1.5 h-2.5 w-4/5 rounded bg-cream/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  family,
  waName,
  popular,
}: {
  plan: Plan;
  family: string;
  waName: string;
  popular?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-3xl border bg-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
        popular
          ? "border-[#B7FF6E] shadow-[0_20px_60px_-20px_#B7FF6E]"
          : "border-border hover:border-[#74C69D] hover:shadow-[0_20px_50px_-20px_#74C69D]"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime text-deep px-4 py-1 text-xs font-bold uppercase tracking-wide">
          {t("solutions.mostPopular")}
        </span>
      )}
      <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">{family}</span>
      <h3 className="mt-3 text-2xl font-display font-bold">{plan.name}</h3>
      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="text-sm text-muted-foreground">{t("solutions.from")}</span>
        <span className="text-3xl font-display font-bold text-mint">{plan.price}</span>
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{plan.tag}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.slice(0, 5).map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <Check size={18} className="text-mint shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Clock size={16} className="text-mint" />
        {t("solutions.delivery")}: {plan.delivery} {t("solutions.days")}
      </div>

      <a
        href={waPlan(waName)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-colors ${
          popular
            ? "bg-lime text-deep hover:shadow-[0_0_40px_-10px_var(--lime)]"
            : "border border-cream/30 text-foreground hover:border-mint hover:text-mint"
        }`}
      >
        <MessageCircle size={16} />
        {t("solutions.wantPlan")}
      </a>
    </motion.div>
  );
}

function DevicePills({ pills }: { pills: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {pills.map((p) => (
        <li
          key={p}
          className="rounded-full border border-mint/40 text-mint px-4 py-2 text-sm font-medium"
        >
          ✓ {p}
        </li>
      ))}
    </ul>
  );
}

function Solutions() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const idxTienda = useCycle(3, 3000);
  const idxCocinaLeft = useCycle(2, 3000, 0);
  const idxCocinaRight = useCycle(2, 3000, 1500);

  const [active, setActive] = useState<string>("site");

  useEffect(() => {
    const ids = ["site", "pos-tienda", "pos-cocina"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!["site", "pos-tienda", "pos-cocina"].includes(hash)) return;
    const timer = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const sitePlans: Plan[] = [
    { ...(t("solutions.site.basic", { returnObjects: true }) as Plan), key: "basic" },
    { ...(t("solutions.site.comercial", { returnObjects: true }) as Plan), key: "comercial" },
    { ...(t("solutions.site.pro", { returnObjects: true }) as Plan), key: "pro", price: "$7,750 MXN" },
  ];
  const posEsencial = { ...(t("solutions.pos.esencial", { returnObjects: true }) as Plan), key: "esencial" };
  const posCocina = { ...(t("solutions.pos.cocina", { returnObjects: true }) as Plan), key: "cocina" };
  const posFullTienda = {
    ...(t("solutions.pos.full", { returnObjects: true }) as Plan),
    key: "full",
    price: "$6,128 MXN",
  };
  const posFullCocina = {
    ...(t("solutions.pos.full", { returnObjects: true }) as Plan),
    key: "full-cocina",
    name: "Full Cocina",
    price: "$7,230 MXN",
    features: [
      "Multi-sucursal",
      "KDS avanzado",
      "Reportes por cocinero",
      "Integración con POS Tienda",
    ],
  };

  const priceNote =
    "Todos los precios son referenciales. Cada instalación se cotiza según las necesidades específicas de tu negocio.";

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

  const tiendaShots: Shot[] = [
    { src: posLogin, alt: "Nexvia POS — inicio de sesión" },
    { src: posCobro, alt: "Nexvia POS — ventana de cobro" },
    { src: posComprobante, alt: "Nexvia POS — comprobante de venta" },
  ];
  const cocinaLeftShots: Shot[] = [
    { src: posComandas, alt: "Nexvia POS — captura de comandas" },
    { src: posCocinaSeguimiento, alt: "Nexvia Cocina — seguimiento de órdenes" },
  ];
  const cocinaRightShots: Shot[] = [
    { src: posReporte, alt: "Nexvia POS — reporte para cocinas" },
    { src: posCorte, alt: "Nexvia POS — corte de caja y reporteo" },
  ];

  const subnavTabs = [
    ["site", t("solutions.subnav.site")],
    ["pos-tienda", t("solutions.subnav.tienda")],
    ["pos-cocina", t("solutions.subnav.cocina")],
  ] as const;

  const entrance = (dir: "left" | "right", delay = 0) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, x: dir === "left" ? -60 : 60 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <PageShell>
      <section className="py-16 md:py-24 grain">
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
        </div>
      </section>

      {/* Sticky sub-navigation */}
      <div className="sticky top-0 z-50 bg-[#1B2E22] border-b border-white/10">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {subnavTabs.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === id ? "bg-mint text-deep" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Value statement */}
      <div className="container-x py-10 text-center">
        <p className="text-mint italic text-lg max-w-3xl mx-auto">{t("solutions.valueLine")}</p>
      </div>

      {/* ── SECTION 1: NEXVIA SITE ── */}
      <section id="site" className="py-16 md:py-24 scroll-mt-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-mint/60 mb-2 block">
              Nexvia Site — Presencia Digital
            </span>
            <h2 className="max-w-xl">{t("solutions.showcase.site.headline")}</h2>
            <p className="mt-5 max-w-xl text-muted-foreground text-lg">
              {t("solutions.showcase.site.sub")}
            </p>
          </div>
          <motion.div {...entrance("right")}>
            <BrowserMock />
          </motion.div>
        </div>
        <div className="container-x mt-14 grid md:grid-cols-3 gap-6">
          {sitePlans.map((p) => (
            <PlanCard
              key={p.key}
              plan={p}
              family="Nexvia Site"
              waName={`Nexvia Site ${p.name}`}
              popular={p.key === "comercial"}
            />
          ))}
        </div>
        <div className="container-x mt-4">
          <p className="text-sm text-mint/70 text-center">{priceNote}</p>
        </div>
      </section>

      {/* ── SECTION 2: POS TIENDA ── */}
      <section id="pos-tienda" className="py-16 md:py-24 scroll-mt-24 bg-muted/30">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 lg:order-1" {...entrance("left")}>
            <div className="mx-auto max-w-xl rounded-[1.5rem] border-[12px] border-[#0d1611] bg-[#0d1611] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
              <Fader images={tiendaShots} idx={idxTienda} className="rounded-md aspect-video" />
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {tiendaShots.map((s, i) => (
                <span
                  key={s.src}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === idxTienda ? "w-6 bg-mint" : "w-2.5 bg-cream/25"
                  }`}
                />
              ))}
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-mint/60 mb-2 block">
              Nexvia POS — Punto de Venta
            </span>
            <h2 className="max-w-xl">{t("solutions.showcase.tienda.headline")}</h2>
            <p className="mt-5 max-w-xl text-muted-foreground text-lg">
              {t("solutions.showcase.tienda.sub")}
            </p>
            <DevicePills pills={t("solutions.showcase.tienda.pills", { returnObjects: true }) as string[]} />
          </div>
        </div>
        <div className="container-x mt-14 grid md:grid-cols-2 gap-6 max-w-3xl">
          {[posEsencial, posFullTienda].map((p) => (
            <PlanCard
              key={p.key}
              plan={p}
              family="Nexvia POS"
              waName={`Nexvia POS ${p.name}`}
              popular={p.key === "esencial"}
            />
          ))}
        </div>
        <div className="container-x mt-4">
          <p className="text-sm text-mint/70 text-center">{priceNote}</p>
        </div>
      </section>

      {/* ── SECTION 3: POS COCINA ── */}
      <section id="pos-cocina" className="py-16 md:py-24 scroll-mt-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-mint/60 mb-2 block">
              Nexvia POS — Módulo Cocina
            </span>
            <h2>{t("solutions.showcase.cocina.headline")}</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              {t("solutions.showcase.cocina.sub")}
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
            <motion.div className="mx-auto w-full max-w-xs" {...entrance("left")}>
              <div className="rounded-[1.5rem] border-[12px] border-[#0d1611] bg-[#0d1611] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
                <Fader images={cocinaLeftShots} idx={idxCocinaLeft} className="rounded-md aspect-[3/4]" />
              </div>
            </motion.div>
            <motion.div {...entrance("right", 0.2)}>
              <div className="rounded-xl border-[12px] border-[#0d1611] bg-[#0d1611] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
                <Fader images={cocinaRightShots} idx={idxCocinaRight} className="rounded-md aspect-video" />
              </div>
              <div className="mx-auto mt-0 h-6 w-24 bg-[#0d1611]" />
              <div className="mx-auto h-1.5 w-44 rounded-full bg-[#0d1611]" />
            </motion.div>
          </div>

          <DevicePills pills={t("solutions.showcase.cocina.pills", { returnObjects: true }) as string[]} />
        </div>

        <div className="container-x mt-14 grid md:grid-cols-2 gap-6 max-w-3xl">
          {[posCocina, posFullCocina].map((p) => (
            <PlanCard
              key={p.key}
              plan={p}
              family="Nexvia POS"
              waName={`Nexvia POS ${p.name}`}
              popular={p.key === "cocina"}
            />
          ))}
        </div>
        <div className="container-x mt-4">
          <p className="text-sm text-mint/70 text-center">{priceNote}</p>
        </div>
        <div className="container-x mt-6 max-w-3xl">
          <p className="text-sm text-muted-foreground">{t("solutions.showcase.cocina.note")}</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-muted/40">
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
                  <div className="relative flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-card/50 p-6 pt-16 hover:border-mint hover:-translate-y-1 transition-all duration-300 h-full">
                    <Icon size={28} className="absolute top-4 left-4 text-mint" />
                    <span className="absolute top-2 right-3 text-5xl font-display font-bold text-[#74C69D]/20 select-none">
                      {s.num}
                    </span>
                    <span className="font-display font-semibold text-sm">{s.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Included in every plan */}
      <section className="py-20 md:py-28">
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
                    <Icon size={28} className="text-mint" />
                    <span className="text-sm font-medium">{it}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <a
        href={waLink()}
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
