import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
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
    "border border-cream/30 dark:border-cream/30 text-foreground hover:border-mint hover:text-mint",
  secondary: "bg-mint text-deep hover:bg-mint/90",
};

export const MagneticButton = forwardRef<HTMLDivElement, Props>(function MagneticButton(
  { variant = "primary", asLink, children, className, ...props },
  ref,
) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 80) {
      x.set(dx * 0.3);
      y.set(dy * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: springX, y: springY }}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-base transition-all duration-300 cursor-pointer select-none",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={(node) => {
        wrapperRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
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
