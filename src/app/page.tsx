import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="sobre" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Sobre"
          title="Um olhar pratico para videos que precisam sair do papel."
          description="Pedro trabalha com producao mobile para transformar ideias, negocios e momentos em conteudos prontos para redes sociais."
        />
        <div className="mt-8 grid gap-5 text-base leading-8 text-smoke md:grid-cols-2">
          <p>
            [TEXTO: inserir bio do Pedro aqui. Conte em poucas linhas quem ele e,
            como comecou com video mobile e que tipo de cliente costuma atender em
            Araguaina e outras cidades.]
          </p>
          <p>
            [TEXTO: inserir bio do Pedro aqui. Reforce o jeito de trabalhar:
            planejamento simples, gravacao com celular, edicao agil e entrega
            pensada para Instagram, TikTok, YouTube Shorts e WhatsApp.]
          </p>
        </div>
      </section>

      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
