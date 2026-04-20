import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { HoverLift } from "@/components/motion/HoverLift";
import { ProjectCover } from "@/components/sections/ProjectCover";
import { TechIcon } from "@/components/icons/TechIcon";

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Featured work">
      <div className="grid gap-5">
        {profile.projects.map((p) => (
          <HoverLift key={p.title}>
            <Card className="group relative overflow-hidden p-5 sm:p-6 hover:ring-white/20 transition duration-200">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(420px_220px_at_25%_18%,rgba(168,85,247,0.30),transparent_60%)]" />
              <div className="relative grid gap-5 md:grid-cols-12 md:items-start">
                <div className="md:col-span-4">
                  <ProjectCover title={p.title} tools={p.tools} />
                </div>
                <div className="md:col-span-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {p.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tools.map((t) => (
                          <TechIcon key={t} tech={t} showLabel />
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <ButtonLink href={p.github} variant="secondary" size="sm">
                        View on GitHub
                      </ButtonLink>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-white/70">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </HoverLift>
        ))}
      </div>
    </Section>
  );
}

