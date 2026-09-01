import { Code2, Cloud, Gauge, Layers3 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const factIcons = [Layers3, Code2, Cloud, Gauge];

export function About() {
  const section = portfolio.content.sections.about;

  return (
    <AnimatedSection id="about" className="section shell">
      <SectionHeading
        index={section.index}
        eyebrow={section.eyebrow}
        title={section.title}
      />
      <div className="about-layout">
        <p className="about-lead">{portfolio.person.introduction}</p>
        <div>
          <p className="body-copy">{portfolio.person.focus}</p>
          <div className="facts-grid">
            {portfolio.content.aboutFacts.map(({ label, value }, index) => {
              const Icon = factIcons[index];
              return (
              <div className="fact" key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
