import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { isKnownTech, TechIcon } from "@/components/icons/TechIcon";

function LogoPill({ tech }: { tech: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/[0.035] ring-1 ring-white/10 px-4 py-4 sm:px-5">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(300px_160px_at_30%_20%,rgba(168,85,247,0.30),transparent_60%)]" />
      <div className="relative flex items-center gap-3">
        <span className="[&>svg]:h-7 [&>svg]:w-7 text-white/90">
          <TechIcon tech={tech} className="!bg-transparent !ring-0 !px-0 !py-0 !text-white/90" />
        </span>
        <div>
          <div className="text-sm font-semibold text-white">{tech}</div>
          <div className="text-xs text-white/55">Tooling</div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const byTitle = new Map(profile.skills.map((g) => [g.title, g.items]));
  const languages = byTitle.get("Languages") ?? [];
  const bi = byTitle.get("BI & Visualization") ?? [];
  const tools = byTitle.get("Other Tools") ?? [];
  const competencies = byTitle.get("Core Competencies") ?? [];

  // Big logo grid: show recognizable tools as large “logo cards”.
  const logoItems = [
    ...languages,
    ...bi,
    ...tools,
    // add a couple implied tools from the resume/projects
    "Pandas",
    "NumPy",
    "scikit-learn",
  ]
    .flatMap((s) =>
      // split combined strings like "Python (NumPy, Pandas, ...)" into a few key logos
      s.includes("Python") ? ["Python", "Pandas", "NumPy"] : [s],
    )
    .map((s) => s.replace(/\s*\(.*\)\s*/g, "").trim())
    .filter(Boolean)
    .filter((s, idx, arr) => arr.indexOf(s) === idx);

  return (
    <Section id="skills" title="Technical skills" eyebrow="Toolkit">
      <div className="grid gap-5 lg:grid-cols-12">
        <Card className="p-6 sm:p-7 lg:col-span-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Tools I use</h3>
              <p className="mt-1 text-sm text-white/60">
                Languages, visualization, and workflow tools.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-white/50">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70" />
              <span>Hover for glow</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {logoItems.map((item) =>
              isKnownTech(item) ? (
                <LogoPill key={item} tech={item} />
              ) : (
                <div
                  key={item}
                  className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-4 py-4 sm:px-5"
                >
                  <div className="text-sm font-semibold text-white">{item}</div>
                  <div className="mt-1 text-xs text-white/55">Tooling</div>
                </div>
              ),
            )}
          </div>
        </Card>

        <div className="lg:col-span-4 grid gap-5">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Core competencies</h3>
            <p className="mt-1 text-sm text-white/60">
              The analysis skills I bring to projects.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {competencies.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Focus areas</h3>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <div className="flex gap-3">
                <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <span>Dashboards & reporting</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <span>Churn & risk analytics</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <span>SQL insights & segmentation</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

