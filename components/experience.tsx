"use client";

import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { TechnologyIcon } from "./technology-icon";

export function Experience() {
  const [expanded, setExpanded] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const shouldScroll = useRef(false);
  const reduceMotion = useReducedMotion();
  const section = portfolio.content.sections.experience;

  useEffect(() => {
    if (!shouldScroll.current || expanded < 0) return;

    itemRefs.current[expanded]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    shouldScroll.current = false;
  }, [expanded, reduceMotion]);

  function toggleExperience(index: number, isOpen: boolean) {
    shouldScroll.current = !isOpen;
    setExpanded(isOpen ? -1 : index);
  }

  return (
    <AnimatedSection id="experience" className="section shell">
      <SectionHeading
        index={section.index}
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="timeline">
        {portfolio.experience.map((experience, index) => {
          const isOpen = expanded === index;
          const detailsId = `experience-${index}`;
          return (
            <article
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              className={`timeline-item ${isOpen ? "is-open" : ""}`}
              key={experience.company}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => toggleExperience(index, isOpen)}
              >
                <span className="timeline-period">{experience.period}</span>
                <span>
                  <strong>{experience.role}</strong>
                  <em>{experience.company}</em>
                </span>
                <ChevronDown size={20} />
              </button>
              <div id={detailsId} className="timeline-details" hidden={!isOpen}>
                {experience.projects.map((project) => (
                  <div className="work-project" key={project.name}>
                    {"status" in project && project.status && (
                      <span className="project-status">{project.status}</span>
                    )}
                    <h3>{project.name}</h3>
                    {project.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <ul>
                      {project.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      {project.technologies.map((technology) => {
                        return (
                          <span key={technology}>
                            <TechnologyIcon name={technology} size={12} />
                            {technology}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
