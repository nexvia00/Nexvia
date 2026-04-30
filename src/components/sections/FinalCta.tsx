import { useTranslation } from "react-i18next";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { waLink, mailLink } from "@/lib/constants";

export function FinalCta() {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest text-cream px-8 py-20 md:px-16 md:py-28">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, var(--lime) 0%, transparent 45%), radial-gradient(circle at 80% 70%, var(--mint) 0%, transparent 45%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative max-w-3xl">
              <h2 className="text-cream">{t("finalCta.title")}</h2>
              <p className="mt-4 text-cream/80 text-lg max-w-xl">{t("finalCta.sub")}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton variant="primary" asLink={{ href: waLink(), external: true }}>
                  {t("finalCta.whatsapp")}
                </MagneticButton>
                <MagneticButton variant="ghost" asLink={{ href: mailLink }}>
                  {t("finalCta.email")}
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
