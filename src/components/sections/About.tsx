import { profile } from "@/content/profile";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About" eyebrow="Profile">
      <Card className="p-6 sm:p-8">
        <p className="text-base leading-7 text-white/75">{profile.summary}</p>
      </Card>
    </Section>
  );
}

