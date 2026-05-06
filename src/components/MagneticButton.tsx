import { motion, useMotionValue, useSpring, useReducedMotion, useAnimationControls } from "framer-motion";
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
  const springX = useSpring(x, { stiffness: 1200, damping: 35, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 1200, damping: 35, mass: 0.1 });
  const controls = useAnimationControls();

  const handleEnter = () => {
    if (reduce) return;
    controls.start({
      scale: [1, 1.15, 1.04],
      transition: { duration: 0.45, times: [0, 0.55, 1], ease: "easeOut" },
    });
  };

  const handleMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const maxX = rect.width / 2;
    const maxY = rect.height / 2;
    x.set(Math.max(-maxX, Math.min(maxX, dx * 0.4)));
    y.set(Math.max(-maxY, Math.min(maxY, dy * 0.4)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    controls.start({ scale: 1, transition: { duration: 0.25, ease: "easeOut" } });
  };

  const inner = (
    <motion.span
      style={{ x: springX, y: springY }}
      animate={controls}
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
    <div
      ref={(node) => {
        wrapperRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      onMouseEnter={handleEnter}
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
