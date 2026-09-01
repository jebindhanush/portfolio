# Portfolio Prompt Guide

Use these prompts when updating the portfolio with an AI coding assistant.
Replace all text inside square brackets with your values.

## General content update

```text
Update my portfolio content in data/portfolio.ts.

Change:
[describe the exact content to add, edit, or remove]

Requirements:
- Keep all editable content in data/portfolio.ts.
- Do not hardcode portfolio copy in components.
- Do not invent employers, projects, metrics, dates, technologies, or links.
- Preserve the existing design and responsive behavior.
- Use standard spelling and product names.
- Run TypeScript checks after the change.
```

## Add or update skills

```text
Update the [CATEGORY NAME] skill category in data/portfolio.ts.

Add: [SKILLS]
Remove: [SKILLS]

Group related skills together, avoid duplicates, and use official product
names. Create a new category only when the skills do not fit an existing one.
Keep the skill-card layout responsive.
```

## Add professional experience

```text
Update my experience in data/portfolio.ts.

Company: [COMPANY]
Role: [ROLE]
Period: [PERIOD]
Project: [PROJECT]
Status: [CURRENT OR PREVIOUS]
Description: [DESCRIPTION]
Responsibilities: [RESPONSIBILITIES]
Technologies: [TECHNOLOGIES]

Use only these facts. Rewrite them professionally without adding unsupported
claims or metrics. Add suitable generic Lucide icons for technology categories
when useful.
```

## Add a featured project

```text
Add this project to the Selected Work section in data/portfolio.ts:

Name: [PROJECT NAME]
Context/company: [CONTEXT]
Description: [DESCRIPTION]
Features: [FEATURES]
Technologies: [TECHNOLOGIES]
Repository: [OPTIONAL URL]
Live demo: [OPTIONAL URL]

Use an editorial card variant that balances the existing project layout.
Do not show repository or live-demo controls when a URL is not provided.
```

## Change design or layout

```text
Improve the [SECTION NAME] section.

Goal: [DESCRIBE THE VISUAL OR UX CHANGE]

Preserve:
- The premium neutral visual system and single accent color
- Dark and light themes
- Keyboard navigation and visible focus states
- prefers-reduced-motion behavior
- Mobile layouts from 320px upward
- Centralized content in data/portfolio.ts

Avoid excessive gradients, glassmorphism, animation, and decorative effects.
Run lint, TypeScript checks, and a production build.
```

## Prepare GitHub Pages deployment

```text
Configure this portfolio for GitHub Pages.

GitHub username: [USERNAME]
Repository name: [REPOSITORY]
Branch: [BRANCH]

Update the replaceable environment values in
.github/workflows/deploy.yml and update its branch trigger when needed. Preserve
Next.js static export, repository base path, asset prefix, sitemap, robots,
canonical URL, linting, TypeScript checks, and the official GitHub Pages
artifact deployment flow. Run a production build.
```

## Final release check

```text
Perform a final release check for this portfolio.

Run the existing lint, TypeScript, and production build commands. Confirm that
the static export uses the configured repository base path. Check navigation,
theme switching, accordions, external links, reduced motion, mobile overflow,
metadata, sitemap, and robots. Fix only issues caused by this portfolio.
```
