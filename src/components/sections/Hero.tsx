import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { Typewriter } from "@/components/motion/Typewriter";
import { TechIcon } from "@/components/icons/TechIcon";

export function Hero() {
  return (
    <header id="top" className="pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge>Open to opportunities</Badge>
              <Badge>{profile.links.location}</Badge>
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              <span className="text-[color:var(--accent)]">{profile.name}</span>{" "}
              <span className="text-white/70">—</span>{" "}
              <span className="text-white">{profile.role}</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl leading-8 text-white/70 max-w-2xl">
              <Typewriter
                phrases={[
                  "Python • SQL • BI dashboards",
                  "EDA • Feature engineering • Data storytelling",
                  "Turning data into business decisions",
                ]}
              />
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Python",
                "Pandas",
                "NumPy",
                "SQL (MySQL)",
                "scikit-learn",
                "Power BI",
                "Tableau",
                "Zoho Analytics",
              ].map((t) => (
                <TechIcon key={t} tech={t} showLabel />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={profile.links.linkedin} variant="primary">
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.links.github} variant="secondary">
                View GitHub
              </ButtonLink>
              <ButtonLink href="#projects" variant="ghost">
                View projects
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.02] ring-1 ring-white/10 p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(500px_240px_at_30%_10%,rgba(168,85,247,0.30),transparent_60%),radial-gradient(420px_260px_at_80%_70%,rgba(255,255,255,0.10),transparent_60%)]" />
              <div className="relative">
                <p className="text-sm font-semibold text-white/85">Quick info</p>
                <dl className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-white/50">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-white">
                      {profile.links.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-white/50">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm text-white">
                      {profile.links.phone}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs uppercase tracking-wider text-white/50">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm text-white">
                      {profile.links.email}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

