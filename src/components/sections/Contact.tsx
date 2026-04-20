import { profile } from "@/content/profile";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Let’s talk">
      <Card className="p-6 sm:p-8">
        <p className="text-base text-white/80">
          Want to collaborate or hire me for a Data Analyst role? The fastest way
          to reach me is by email.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={`mailto:${profile.links.email}`} variant="primary">
            Email me
          </ButtonLink>
          <ButtonLink href={profile.links.linkedin} variant="secondary">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.links.github} variant="ghost">
            GitHub
          </ButtonLink>
        </div>
        <div className="mt-6 text-sm text-white/60">
          <div>{profile.links.email}</div>
          <div>{profile.links.phone}</div>
          <div>{profile.links.location}</div>
        </div>
      </Card>
    </Section>
  );
}

