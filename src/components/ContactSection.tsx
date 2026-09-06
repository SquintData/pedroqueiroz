import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { finalWhatsappUrl } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
      <div>
        <SectionHeading
          eyebrow="Contato"
          title="Tem uma ideia de video? O caminho mais rapido e pelo WhatsApp."
          description="Envie uma mensagem com o tipo de video, data ou prazo desejado e uma referencia do que voce quer comunicar."
        />
        <ButtonLink
          href={finalWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 w-full sm:w-auto"
        >
          <MessageCircle size={20} />
          Pedir orcamento agora
        </ButtonLink>
      </div>
      <ContactForm />
    </section>
  );
}
