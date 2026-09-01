"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, ContactRound, GitBranch } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const content = portfolio.content.hero;
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.58,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.p className="mono-label status" variants={itemVariants}>
          <span className="status-dot" />
          {content.eyebrow}
        </motion.p>
        <motion.h1 variants={itemVariants}>
          {content.headingStart} <em>{content.headingEmphasis}</em>
          <br aria-hidden="true" />{" "}
          {content.headingEnd}
        </motion.h1>
        <motion.div className="hero-bottom" variants={itemVariants}>
          <div>
            <p className="hero-title">{portfolio.person.descriptor}</p>
            <p className="hero-copy">{portfolio.person.statement}</p>
          </div>
          <div className="hero-actions">
            <a className="button" href="#projects">
              {content.projectsCta} <ArrowDown size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              {content.contactCta} <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-rail">
        <p className="mono-label">{portfolio.person.location}</p>
        <div>
          <a
            href={portfolio.socials[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={portfolio.socials[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <ContactRound size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
