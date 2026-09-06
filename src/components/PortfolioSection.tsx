import { ExternalLink, Play } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioProjects } from "@/content/site";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Quatro espacos prontos para receber os melhores projetos."
        description="Por enquanto sem imagens reais, mas ja no formato aproximado dos thumbnails e links que vao entrar depois."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioProjects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring group block rounded-sm border border-bone/10 bg-graphite/70 p-3 transition hover:-translate-y-1 hover:border-ember/60"
          >
            <div className="aspect-[9/16] overflow-hidden border border-bone/10 bg-[linear-gradient(155deg,#292520,#141311_55%,#3b2a16)] p-4">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                <span>{project.category}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-16 grid size-14 place-items-center rounded-full border border-ember/60 bg-coal/70 text-ember transition group-hover:scale-105">
                <Play size={22} fill="currentColor" />
              </div>
              <div className="mt-14">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">
                  thumbnail aqui
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-bone">
                  {project.title}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between gap-3 px-1 pt-4">
              <p className="text-sm leading-6 text-smoke">{project.description}</p>
              <ExternalLink className="mt-1 shrink-0 text-ember" size={17} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
