import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bone/10 bg-coal/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="focus-ring group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm border border-ember/60 bg-ember/10 font-display text-xl font-bold text-ember">
            PQ
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold uppercase tracking-[0.18em] text-bone">
              Pedro Queiroz
            </span>
            <span className="block text-xs text-smoke">Video Maker Mobile</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-semibold text-smoke transition hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram"
            className="focus-ring grid size-10 place-items-center rounded-sm border border-bone/12 text-smoke transition hover:border-ember/70 hover:text-bone"
          >
            <Instagram size={18} />
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="focus-ring grid size-10 place-items-center rounded-sm bg-ember text-coal transition hover:bg-bone"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
