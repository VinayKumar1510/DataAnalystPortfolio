import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";

export function Education() {
  const e = profile.education;
  return (
    <Section id="education" title="Education" eyebrow="Background">
      <Card className="p-6 sm:p-8">
        <p className="text-base font-semibold text-white">{e.degree}</p>
        <p className="mt-2 text-sm text-white/70">
          {e.institution} • {e.location}
        </p>
        <p className="mt-3 text-sm text-white/60">{e.dateRange}</p>
      </Card>
    </Section>
  );
}

