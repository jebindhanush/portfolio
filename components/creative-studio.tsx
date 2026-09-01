"use client";

import { motion, useReducedMotion } from "motion/react";
import { Clapperboard, Play, Scissors, Sparkles } from "lucide-react";
import { createElement } from "react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const capabilityIcons = [Scissors, Clapperboard, Sparkles];

export function CreativeStudio() {
  const section = portfolio.content.sections.creative;
  const visual = portfolio.creative.visual;
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="creative" className="section shell creative-section">
      <SectionHeading
        index={section.index}
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <div className="creative-layout">
        <motion.div
          className="editor-stage"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="editor-toolbar">
            <span>{visual.projectLabel}</span>
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="editor-preview">
            <div className="preview-frame">
              <span>{visual.eyebrow}</span>
              <strong>
                {visual.headingStart}
                <br />
                {visual.headingEnd}
              </strong>
              <span className="preview-play" aria-hidden="true">
                <Play size={19} fill="currentColor" />
              </span>
            </div>
          </div>

          <div className="edit-timeline" aria-hidden="true">
            <div className="timeline-ruler">
              <span>00:00</span>
              <span>00:10</span>
              <span>00:20</span>
              <span>00:30</span>
            </div>
            <div className="timeline-track">
              {visual.clips.map((clip, index) => (
                <motion.span
                  className={`clip clip-${index + 1}`}
                  key={clip}
                  initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.38,
                    delay: reduceMotion ? 0 : 0.14 + index * 0.1,
                  }}
                  style={{ transformOrigin: "left" }}
                >
                  {clip}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="playhead"
              initial={reduceMotion ? false : { left: "10%" }}
              whileInView={{ left: "72%" }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: reduceMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="creative-content"
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mono-label">{portfolio.creative.eyebrow}</p>
          <h3>{portfolio.creative.title}</h3>
          <p className="creative-statement">{portfolio.creative.statement}</p>

          <div className="creative-tools">
            {portfolio.creative.tools.map((tool, index) => (
              <div key={tool}>
                <span>0{index + 1}</span>
                <strong>{tool}</strong>
              </div>
            ))}
          </div>

          <div className="creative-capabilities">
            {portfolio.creative.capabilities.map((capability, index) => {
              return (
                <article key={capability.name}>
                  {createElement(capabilityIcons[index], {
                    size: 18,
                    "aria-hidden": true,
                  })}
                  <div>
                    <h4>{capability.name}</h4>
                    <p>{capability.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
