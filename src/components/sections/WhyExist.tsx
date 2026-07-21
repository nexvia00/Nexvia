import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../Reveal";

export function WhyExist() {
  const { t } = useTranslation();
  const pills = t("why.pills", { returnObjects: true }) as string[];
  const reduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">
            {t("why.eyebrow")}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-4xl font-display text-[32px] leading-tight tracking-tight">
            {t("why.statement")}
          </p>
        </Reveal>
        <ul className="mt-12 flex flex-wrap gap-3">
          {pills.map((p, i) => (
            <motion.li
              key={p}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:-translate-y-1 hover:border-mint hover:text-mint transition-all duration-300"
            >
              {p}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
