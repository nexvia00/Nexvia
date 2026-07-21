import { motion, useReducedMotion } from "framer-motion";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "secondary";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  variant?: Variant;
  asLink?: { href: string; external?: boolean };
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-lime text-deep hover:shadow-[0_0_40px_-10px_var(--lime)] focus-visible:ring-2 ring-lime",
  ghost:
    "border border-cream/30 dark:border-cream/30 text-foreground hover:border-[#74C69D] hover:text-[#74C69D] hover:shadow-[0_0_30px_-10px_#74C69D]",
  secondary: "bg-mint text-deep hover:bg-mint/90",
};

export const MagneticButton = forwardRef<HTMLDivElement, Props>(function MagneticButton(
  { variant = "primary", asLink, children, className, ...props },
  ref,
) {
  const reduce = useReducedMotion();

  const inner = (
    <motion.span
      whileHover={reduce ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-base transition-colors duration-300 cursor-pointer select-none",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </motion.span>
  );

  return (
    <div ref={ref} className="inline-block">
      {asLink ? (
        <a
          href={asLink.href}
          target={asLink.external ? "_blank" : undefined}
          rel={asLink.external ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      ) : (
        <button type="button" {...props}>
          {inner}
        </button>
      )}
    </div>
  );
});
