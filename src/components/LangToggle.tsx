import { useTranslation } from "react-i18next";

export function LangToggle() {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("en") ? "en" : "es";
  const toggle = () => i18n.changeLanguage(current === "es" ? "en" : "es");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("common.toggleLang")}
      className="inline-flex items-center gap-1 h-10 rounded-full border border-border px-3 text-xs font-semibold tracking-wider bg-background/40 backdrop-blur hover:border-mint transition-colors"
    >
      <span className={current === "es" ? "text-lime" : "opacity-50"}>ES</span>
      <span className="opacity-30">/</span>
      <span className={current === "en" ? "text-lime" : "opacity-50"}>EN</span>
    </button>
  );
}
