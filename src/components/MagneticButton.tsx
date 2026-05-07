import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "secondary";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  variant?: Variant;
  asLink?: { href: string; external?: boolean };
  children: ReactNode;
}

const MAX_OFFSET = 15;

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20, mass: 0.6, restDelta: 0.001 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHovering = useRef(false);

  const applyOffset = (e: React.MouseEvent) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.4;
    const dy = (e.clientY - cy) * 0.4;
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy)));
  };

  const handleEnter = (e: React.MouseEvent) => {
    if (reduce) return;
    isHovering.current = true;
    if (enterTimer.current) clearTimeout(enterTimer.current);
    const event = e;
    enterTimer.current = setTimeout(() => {
      enterTimer.current = null;
      if (isHovering.current) applyOffset(event);
    }, 100);
  };

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !isHovering.current) return;
    if (enterTimer.current) return;
    applyOffset(e);
  };

  const handleLeave = () => {
    isHovering.current = false;
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: springX, y: springY }}
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
