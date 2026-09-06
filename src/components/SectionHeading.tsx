type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ember">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] text-bone sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-smoke sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
