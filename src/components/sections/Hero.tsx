import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "../MagneticButton";
import { waLink } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import nLight from "@/assets/nexvia-n-light.png";

function GradientMesh() {
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let start = performance.now();
    const tick = (now: number) => {
      setT(((now - start) / 30000) % 1);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const a = t * Math.PI * 2;
  const x1 = 30 + Math.cos(a) * 20;
  const y1 = 40 + Math.sin(a) * 20;
  const x2 = 70 + Math.sin(a) * 25;
  const y2 = 60 + Math.cos(a) * 15;

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${x1}% ${y1}%, var(--mint) 0%, transparent 40%), radial-gradient(circle at ${x2}% ${y2}%, var(--lime) 0%, transparent 35%)`,
          opacity: 0.35,
          filter: "blur(80px)",
        }}
      />
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
}

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 240]);

  const title = t("hero.title");
  const words = title.split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center grain overflow-hidden"
    >
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0">
        <GradientMesh />
      </motion.div>

      <img
        src={nLight}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-6%] bottom-[-10%] w-[55vw] max-w-[700px] opacity-[0.05] select-none z-0"
      />

      <div className="container-x relative z-10 py-32">
        <h1 className="max-w-5xl">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: words.length * 0.06 + 0.1 }}
          className="mt-6 max-w-[60ch] text-lg text-muted-foreground"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: words.length * 0.06 + 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/soluciones">
            <MagneticButton variant="primary">{t("hero.ctaPrimary")}</MagneticButton>
          </Link>
          <MagneticButton variant="ghost" asLink={{ href: waLink(), external: true }}>
            {t("hero.ctaSecondary")}
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
