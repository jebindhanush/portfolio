"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reduceMotion = useReducedMotion();
  const content = portfolio.content.navigation;

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Jebin T, home">
          <span>{portfolio.person.shortName}</span>
          <strong>{portfolio.person.name}</strong>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? "is-active" : undefined}
              aria-current={activeSection === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="button button-small desktop-contact" href="#contact">
            {content.contactCta}
          </a>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <p className="mono-label">{content.menuLabel}</p>
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    activeSection === item.href ? "is-active" : undefined
                  }
                  aria-current={
                    activeSection === item.href ? "location" : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${portfolio.person.email}`}
              onClick={() => setOpen(false)}
              className="mobile-email"
            >
              {portfolio.person.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
