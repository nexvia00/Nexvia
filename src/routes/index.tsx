import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/sections/Hero";
import { WhyExist } from "@/components/sections/WhyExist";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { Differentiators } from "@/components/sections/Differentiators";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXVIA — Sistemas y sitios web para negocios en Yucatán" },
      {
        name: "description",
        content:
          "Tecnología local para negocios reales en Yucatán. Sin complicaciones, sin tecnicismos — solo resultados.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <WhyExist />
      <ProductsPreview />
      <Differentiators />
      <Faq />
      <FinalCta />
    </PageShell>
  );
}
