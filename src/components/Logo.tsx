import { useEffect, useState } from "react";
// Wordmark banners cropped from the full square brand files
// ("logo nexvia green light.png" / "logo nexvia light green.png").
import wordmarkDarkBg from "@/assets/logos/wordmark-dark-bg.png";
import wordmarkLightBg from "@/assets/logos/wordmark-light-bg.png";

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
      src={isDark ? wordmarkDarkBg : wordmarkLightBg}
      alt="NEXVIA"
      width={1860}
      height={380}
      className={`h-4 md:h-5 w-auto select-none object-contain ${className}`}
      draggable={false}
    />
  );
}
