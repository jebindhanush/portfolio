import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function Education() {
  const section = portfolio.content.sections.education;

  return (
    <AnimatedSection id="education" className="section shell education-section">
      <SectionHeading
        index={section.index}
        eyebrow={section.eyebrow}
        title={section.title}
      />
      <div className="education-list">
        {portfolio.education.map((item) => (
          <article key={`${item.degree}-${item.period}`}>
            <span>{item.period}</span>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
