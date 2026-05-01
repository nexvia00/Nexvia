import { useEffect, useState } from "react";
import logoDark from "@/assets/nexvia-letras-dark.png";
import logoLight from "@/assets/nexvia-letras-light.png";

export function Logo({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={isDark ? logoLight : logoDark}
      alt="NEXVIA"
      width={1680}
      height={204}
      className={`h-7 md:h-8 w-auto select-none object-contain ${className}`}
      draggable={false}
    />
  );
}
