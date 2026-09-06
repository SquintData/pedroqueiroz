import { BriefcaseBusiness, CalendarDays, Clapperboard, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/site";

const icons = [Smartphone, BriefcaseBusiness, CalendarDays, Clapperboard];

export function ServicesSection() {
  return (
    <section id="servicos" className="border-y border-bone/10 bg-bone/[0.03] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Servicos"
          title="Formatos pensados para quem precisa aparecer bem e rapido."
          description="Cada entrega pode ser ajustada ao objetivo: vender, apresentar, registrar, aquecer publico ou manter frequencia nas redes."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.id}
                className="rounded-sm border border-bone/10 bg-coal/62 p-5 transition hover:-translate-y-1 hover:border-ember/50"
              >
                <div className="grid size-11 place-items-center rounded-sm bg-ember/12 text-ember">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-bone">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-smoke">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
