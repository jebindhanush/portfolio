"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { portfolio, type FeaturedProject } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";
import { TechnologyIcon } from "./technology-icon";

function ProjectPreview({ project }: { project: FeaturedProject }) {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="preview-bar">
        <i />
        <i />
        <i />
        <span>{project.name.toLowerCase().replaceAll(" ", "-")}</span>
      </div>
      <div className="preview-body">
        <p>{project.eyebrow}</p>
        <strong>{project.name}</strong>
        <div>
          {project.technologies.slice(0, 3).map((technology) => (
            <span key={technology}>
              <TechnologyIcon name={technology} size={11} />
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  number,
}: {
  project: FeaturedProject;
  number: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`project-card project-${project.variant}`}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <ProjectPreview project={project} />
      <div className="project-content">
        <p className="mono-label">{number} · {project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="project-footer">
          <div>
            {project.technologies.map((technology) => (
              <span key={technology}>
                <TechnologyIcon name={technology} />
                {technology}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} GitHub repository`}
              >
                <GitBranch size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live site`}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const section = portfolio.content.sections.projects;

  return (
    <AnimatedSection id="projects" className="section shell">
      <SectionHeading
        index={section.index}
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="projects-layout">
        {portfolio.featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            number={`0${index + 1}`}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
