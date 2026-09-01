"use client";

import { motion, useReducedMotion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { TechnologyIcon } from "./technology-icon";

export function Skills() {
  const section = portfolio.content.sections.skills;
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="skills" className="section shell">
      <SectionHeading
        index={section.index}
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="skills-grid">
        {portfolio.skills.map((group, index) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.42,
              delay: reduceMotion ? 0 : Math.min(index * 0.055, 0.28),
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
          >
            <div className="skill-card-head">
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
            </div>
            <p>{group.description}</p>
            <ul aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <TechnologyIcon name={skill} />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
