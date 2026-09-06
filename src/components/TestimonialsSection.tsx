import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/content/site";

export function TestimonialsSection() {
  return (
    <section className="border-y border-bone/10 bg-bone/[0.03] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Espaco para deixar a prova social pronta quando os relatos chegarem."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-sm border border-bone/10 bg-coal/62 p-6">
              <Quote className="text-ember" size={28} />
              <p className="mt-5 text-lg leading-8 text-bone/86">{testimonial.quote}</p>
              <p className="mt-6 font-extrabold text-bone">{testimonial.author}</p>
              <p className="text-sm text-smoke">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
