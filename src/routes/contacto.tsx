import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";
import { Check, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { EMAIL, PHONE_DISPLAY, waLink } from "@/lib/constants";

const searchSchema = z.object({
  plan: z.string().optional(),
});

export const Route = createFileRoute("/contacto")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Contacto — NEXVIA · Hunucmá, Yucatán" },
      {
        name: "description",
        content:
          "Hablemos de tu negocio. Atención por WhatsApp, correo o en persona en Hunucmá, Yucatán.",
      },
      { property: "og:title", content: "Contacto — NEXVIA" },
      {
        property: "og:description",
        content: "Atención local por WhatsApp, correo o en persona en Hunucmá.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation();
  const { plan: planParam } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    business: "",
    plan: planParam ?? "",
    message: "",
  });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\nWhatsApp: ${form.whatsapp}\nNegocio: ${form.business}\nPlan: ${form.plan || "—"}\n\nMensaje:\n${form.message}`,
    );
    const subject = encodeURIComponent(`Nuevo contacto NEXVIA — ${form.name || "sin nombre"}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-mint transition-colors";

  return (
    <PageShell>
      <section className="py-20 md:py-28 grain">
        <div className="container-x">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-mint font-semibold">
              {t("nav.contact")}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4">{t("contact.title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-muted-foreground text-lg">{t("contact.sub")}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <Reveal>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border bg-card/50 p-8 md:p-10"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="h-16 w-16 rounded-full bg-lime text-deep flex items-center justify-center"
                  >
                    <Check size={32} strokeWidth={3} />
                  </motion.div>
                  <p className="mt-6 text-xl font-display font-semibold">
                    {t("contact.form.success")}
                  </p>
                </motion.div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-2" htmlFor="f-name">
                        {t("contact.form.name")}
                      </label>
                      <input id="f-name" required value={form.name} onChange={onChange("name")} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2" htmlFor="f-email">
                        {t("contact.form.email")}
                      </label>
                      <input id="f-email" type="email" required value={form.email} onChange={onChange("email")} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-2" htmlFor="f-wa">
                        {t("contact.form.whatsapp")}
                      </label>
                      <input id="f-wa" value={form.whatsapp} onChange={onChange("whatsapp")} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2" htmlFor="f-biz">
                        {t("contact.form.business")}
                      </label>
                      <input id="f-biz" value={form.business} onChange={onChange("business")} className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2" htmlFor="f-plan">
                      {t("contact.form.plan")}
                    </label>
                    <select id="f-plan" value={form.plan} onChange={onChange("plan")} className={inputCls}>
                      <option value="">{t("contact.form.planNone")}</option>
                      {planParam && !["Nexvia Site Básico","Nexvia Site Comercial","Nexvia Site Pro","Nexvia POS Esencial","Nexvia POS Cocina","Nexvia POS Full"].includes(planParam) && (
                        <option value={planParam}>{planParam}</option>
                      )}
                      <option>Nexvia Site Básico</option>
                      <option>Nexvia Site Comercial</option>
                      <option>Nexvia Site Pro</option>
                      <option>Nexvia POS Esencial</option>
                      <option>Nexvia POS Cocina</option>
                      <option>Nexvia POS Full</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2" htmlFor="f-msg">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="f-msg"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange("message")}
                      className={inputCls}
                    />
                  </div>

                  <div className="mt-2">
                    <MagneticButton variant="primary" className="w-full">
                      {t("contact.form.submit")}
                    </MagneticButton>
                  </div>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-forest text-cream p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-display font-semibold">{t("contact.card.title")}</h3>

              <div className="mt-8 space-y-5 text-cream/90">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">{t("contact.card.whatsapp")}</div>
                    <div className="font-semibold">{PHONE_DISPLAY}</div>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">{t("contact.card.email")}</div>
                    <div className="font-semibold break-all">{EMAIL}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream shrink-0">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">{t("contact.card.address")}</div>
                    <div>Calle 27 x 36 y 38 #223b<br />Col. Santa Rosa, Hunucmá<br />Yucatán CP 97350</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream shrink-0">
                    <Clock size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">{t("contact.card.hours")}</div>
                    <div>{t("contact.card.hoursValue")}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-cream/10 aspect-video">
                <iframe
                  title={t("contact.card.mapLabel")}
                  src="https://www.google.com/maps?q=Hunucm%C3%A1%2C%20Yucat%C3%A1n%2C%20Mexico&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
