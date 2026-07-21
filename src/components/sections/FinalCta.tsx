import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "../MagneticButton";
import { waLink, mailLink } from "@/lib/constants";
import nLight from "@/assets/nexvia-n-light.png";

export function FinalCta() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  return (
    <section className="py-12">
      <div className="container-x">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#437652] text-cream px-8 py-20 md:px-16 md:py-28 border border-[#74C69D] shadow-[0_20px_50px_-20px_#74C69D]">
            <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-mint/10 to-mint/30" />
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
                <MagneticButton
                  variant="ghost"
                  asLink={{ href: mailLink }}
                  className="hover:border-[#74C69D] hover:text-[#74C69D] hover:shadow-[0_0_30px_-10px_#74C69D]"
                >
                  {t("finalCta.email")}
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
