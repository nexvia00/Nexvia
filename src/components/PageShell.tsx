import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <>
      <Header />
      <motion.main
        id="main"
        initial={reduce ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pt-16 md:pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
