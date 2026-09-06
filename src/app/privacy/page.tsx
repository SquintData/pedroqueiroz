import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Politica de Privacidade | Pedro Queiroz",
  description: "Politica de privacidade e cookies do site de Pedro Queiroz."
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Privacidade"
        title="Politica de Privacidade e Cookies"
        description="[TEXTO: revisar este texto antes de publicar, especialmente se houver outro servico de formulario ou analytics.]"
      />
      <div className="mt-10 space-y-7 text-base leading-8 text-smoke">
        <p>
          Este site coleta apenas os dados enviados voluntariamente pelo
          formulario de contato: nome, telefone/WhatsApp ou e-mail, tipo de
          servico e mensagem. Esses dados sao usados para responder pedidos de
          orcamento e atendimento.
        </p>
        <p>
          O site pode usar Google Analytics 4 para medir visitas e melhorar a
          experiencia, mas somente depois do consentimento no banner de cookies.
          Voce pode rejeitar cookies analiticos e continuar navegando normalmente.
        </p>
        <p>
          O formulario usa protecao anti-spam por campo invisivel e pode enviar
          os dados para um servico externo configurado pelo responsavel do site.
          Nenhuma chave sensivel deve ficar exposta no codigo do front-end.
        </p>
        <p>
          Para solicitar alteracao ou exclusao de dados enviados, entre em contato
          pelo WhatsApp de atendimento:{" "}
          <a className="text-bone underline decoration-ember underline-offset-4" href={siteConfig.whatsappUrl}>
            +55 63 99243-5592
          </a>
          .
        </p>
      </div>
    </main>
  );
}
