import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications" eyebrow="Credentials">
      <Card className="p-6 sm:p-8">
        <ul className="space-y-3 text-sm text-white/75">
          {profile.certifications.map((c) => (
            <li key={c} className="flex gap-3">
              <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}

