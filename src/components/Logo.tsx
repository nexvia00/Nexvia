export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold tracking-tight text-xl select-none ${className}`}
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      NEXVIA<span className="text-lime">.</span>
    </span>
  );
}
