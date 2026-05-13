import { useTranslation } from "react-i18next";
import { Reveal } from "../Reveal";

export function WhyExist() {
  const { t } = useTranslation();
  const pills = t("why.pills", { returnObjects: true }) as string[];

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
        <Reveal delay={0.2}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {pills.map((p) => (
              <li
                key={p}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:-translate-y-1 hover:border-mint hover:text-mint transition-all duration-300"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
