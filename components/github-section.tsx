import { ArrowUpRight, GitBranch } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";

export function GitHubSection() {
  const content = portfolio.content.github;

  return (
    <AnimatedSection className="github-band shell">
      <div>
        <GitBranch size={26} />
        <p className="mono-label">{content.eyebrow}</p>
      </div>
      <h2>{content.title}</h2>
      <a
        className="text-link"
        href={portfolio.socials[0].href}
        target="_blank"
        rel="noreferrer"
      >
        {content.handle} <ArrowUpRight size={18} />
      </a>
    </AnimatedSection>
  );
}
