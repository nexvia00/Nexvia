import { useEffect, useState } from "react";
import logoDark from "@/assets/nexvia-letras-dark.svg";
import logoLight from "@/assets/nexvia-letras-light.svg";

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
      src={isDark ? logoDark : logoLight}
      alt="NEXVIA"
      width={840}
      height={102}
      className={`h-2 md:h-2.5 w-auto select-none object-contain ${className}`}
      draggable={false}
    />
  );
}
