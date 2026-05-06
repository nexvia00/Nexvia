import { useTranslation } from "react-i18next";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { waLink, mailLink } from "@/lib/constants";
import nLight from "@/assets/nexvia-n-light.png";

export function FinalCta() {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest text-cream px-8 py-20 md:px-16 md:py-28 border border-mint shadow-[0_30px_80px_-30px_var(--mint)]">
            <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-mint/10 to-lime/30" />
            <img
              src={nLight}
              alt=""
              aria-hidden
              className="pointer-events-none absolute right-6 bottom-6 w-[320px] max-w-[45%] object-contain opacity-[0.06] select-none"
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
