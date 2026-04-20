import { Reveal } from "@/components/motion/Reveal";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <Reveal className="mb-8">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}

