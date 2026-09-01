import { ArrowUpRight, ContactRound, GitBranch, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";

const socialIcons = { GitHub: GitBranch, LinkedIn: ContactRound, Email: Mail };

export function Contact() {
  const content = portfolio.content.contact;

  return (
    <AnimatedSection id="contact" className="contact-section">
      <div className="shell contact-inner">
        <p className="mono-label">
          {content.index} · {content.eyebrow}
        </p>
        <h2>
          {content.headingStart}
          <br aria-hidden="true" />{" "}
          <em>{content.headingEmphasis}</em>
        </h2>
        <div className="contact-bottom">
          <p>
            {content.description}
          </p>
          <a className="button button-light" href={`mailto:${portfolio.person.email}`}>
            {portfolio.person.email} <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-socials">
          {portfolio.socials.map((social) => {
            const Icon = socialIcons[social.label as keyof typeof socialIcons];
            return (
              <a key={social.label} href={social.href} target={social.label === "Email" ? undefined : "_blank"} rel="noreferrer">
                <Icon size={17} /> {social.label}
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
