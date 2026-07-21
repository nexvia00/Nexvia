import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal } from "../Reveal";
import posShot1 from "@/assets/pos-screenshots/pos-1.png";
import posShot2 from "@/assets/pos-screenshots/punto-de-venta-ventana-de-cobro.png";

interface ShowcaseProps {
  anchor: "pos" | "site";
  tag: string;
  name: string;
  slogan: string;
  desc: string;
  from: string;
  cta: string;
  shots?: [string, string];
  placeholder?: string;
  index: number;
}

function ShowcaseCard({
  anchor,
  tag,
  name,
  slogan,
  desc,
  from,
  cta,
  shots,
  placeholder,
  index,
}: ShowcaseProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const yB = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
    >
      <div
        ref={ref}
        className="rounded-2xl bg-deep text-cream border border-cream/10 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
          <div>
            <span className="text-xs tracking-widest uppercase text-cream/70">{tag}</span>
            <h3 className="mt-2 text-3xl md:text-4xl font-display font-bold">{name}</h3>
            <p className="mt-4 text-lg font-display font-semibold text-mint">{slogan}</p>
            <p className="mt-3 text-cream/80 max-w-md">{desc}</p>
            <p className="mt-4 text-sm text-cream/60">{from}</p>
            <Link
              to="/soluciones"
              hash={anchor}
              className="mt-6 inline-flex items-center gap-2 text-mint font-semibold hover:gap-3 transition-all duration-300"
            >
              {cta}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative h-[240px] sm:h-[300px] md:h-[340px]">
            {shots ? (
              <>
                <motion.img
                  src={shots[0]}
                  alt={`${name} — pantalla 1`}
                  style={reduce ? { rotate: -2 } : { y: yA, rotate: -2 }}
                  className="absolute left-0 top-2 w-[72%] rounded-xl border border-cream/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
                />
                <motion.img
                  src={shots[1]}
                  alt={`${name} — pantalla 2`}
                  style={reduce ? { rotate: 2 } : { y: yB, rotate: 2 }}
                  className="absolute right-0 bottom-2 w-[72%] rounded-xl border border-cream/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  style={reduce ? { rotate: -2 } : { y: yA, rotate: -2 }}
                  className="w-full max-w-md aspect-video rounded-xl border border-cream/15 bg-forest/40 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] flex items-center justify-center"
                >
                  <span className="font-display text-xl text-cream/70 px-8 text-center">
                    {placeholder}
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsPreview() {
  const { t } = useTranslation();

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

        <div className="flex flex-col gap-8">
          <ShowcaseCard
            anchor="pos"
            tag={t("products.pos.tagline")}
            name={t("products.pos.name")}
            slogan={t("products.pos.slogan")}
            desc={t("products.pos.desc")}
            from={t("products.pos.from")}
            cta={t("products.cta")}
            shots={[posShot1, posShot2]}
            index={0}
          />
          <ShowcaseCard
            anchor="site"
            tag={t("products.site.tagline")}
            name={t("products.site.name")}
            slogan={t("products.site.slogan")}
            desc={t("products.site.desc")}
            from={t("products.site.from")}
            cta={t("products.cta")}
            placeholder={t("products.site.placeholder")}
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
