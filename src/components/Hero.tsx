import { Instagram, MessageCircle, Play } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { finalWhatsappUrl, siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="film-frame overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-ember">
            Video Maker Mobile em Araguaina
          </p>
          <h1 className="mt-5 font-display text-6xl font-bold leading-[0.92] text-bone sm:text-7xl lg:text-8xl">
            Pedro Queiroz
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-bone/86 sm:text-2xl">
            Videos curtos com olhar cinematografico, gravacao no celular e ritmo
            certo para redes sociais.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-smoke">
            [TEXTO: inserir frase curta de efeito do Pedro aqui.]
          </p>

          <div className="mt-9 grid gap-3 sm:flex">
            <ButtonLink href={finalWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <Instagram size={18} />
              Ver Instagram
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-ember/10 blur-3xl" />
          <div className="relative mx-auto max-w-[390px] border border-bone/14 bg-graphite/82 p-3 shadow-glow">
            <div className="aspect-[9/16] border border-bone/12 bg-[linear-gradient(155deg,#27231d,#12110f_52%,#3a2a18)] p-5">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.22em] text-bone/58">
                <span>Frame 01</span>
                <span>Mobile</span>
              </div>
              <div className="mt-20 space-y-3">
                <div className="h-1 w-24 bg-ember" />
                <p className="font-display text-4xl font-bold leading-none text-bone">
                  seu projeto em formato de video
                </p>
                <p className="text-sm leading-6 text-smoke">
                  [TEXTO: espaco visual temporario para thumbnail ou video de destaque.]
                </p>
              </div>
              <div className="mt-16 grid size-16 place-items-center rounded-full border border-ember/70 bg-coal/70 text-ember">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index} className="h-2 bg-bone/14" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
