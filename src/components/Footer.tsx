import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/10 bg-coal">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-smoke sm:px-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-3xl font-bold text-bone">{siteConfig.brand}</p>
          <p className="mt-3">{siteConfig.city}</p>
          <p className="mt-2">E-mail: {siteConfig.email}</p>
          <p className="mt-2">[TEXTO: inserir CNPJ ou dados comerciais, se houver.]</p>
          <p className="mt-6">Copyright {year}. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-bone hover:text-ember"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-bone hover:text-ember"
          >
            <Instagram size={17} />
            Instagram
          </a>
          <Link href="/privacy" className="focus-ring text-bone hover:text-ember">
            Politica de privacidade/cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
