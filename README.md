# Jebin T — Developer Portfolio

A premium, dark-first developer portfolio built with Next.js, TypeScript,
Tailwind CSS, Motion, and Lucide icons. It is responsive, statically exported,
and ready for GitHub Pages.

## Tech stack

- Next.js with the App Router and static export
- TypeScript
- Tailwind CSS
- Motion
- Lucide React
- GitHub Actions and GitHub Pages

## Local development

Requirements: Node.js 22 or later and npm.


```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Updating portfolio content

All editable portfolio content is centralized in:

```text
data/portfolio.ts
```

Update this file to change:

- Personal details, title, location, and contact information
- Navigation and section headings
- Skills and creative tools
- Featured projects
- Experience and education
- Social links, contact copy, and footer text

Components in `components/` control presentation only. Avoid hardcoding
portfolio copy inside components.

## Configuration

Copy `.env.example` to `.env.local` for local production testing:

```powershell
Copy-Item .env.example .env.local
```

On macOS or Linux, use `cp .env.example .env.local`.

Replace:

```env
NEXT_PUBLIC_REPOSITORY_NAME=YOUR_REPOSITORY_NAME
NEXT_PUBLIC_SITE_URL=https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

Do not add a trailing slash to `NEXT_PUBLIC_SITE_URL`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production build writes the static site to `out/`.

## GitHub Pages deployment

The deployment workflow is located at:

```text
.github/workflows/deploy.yml
```

Before deploying:

1. Replace `NEXT_PUBLIC_REPOSITORY_NAME` and `NEXT_PUBLIC_SITE_URL` in the
   workflow.
2. Push the project to the `main` branch of the target GitHub repository.
3. Open **Settings → Pages** in GitHub.
4. Set **Source** to **GitHub Actions**.
5. Push another commit or run the workflow manually from the Actions tab.

The workflow installs dependencies, runs ESLint, checks TypeScript, builds the
static export, uploads `out/`, and deploys it through GitHub Pages.

For a repository named `my-portfolio`, the expected URL is:

```text
https://YOUR_GITHUB_USERNAME.github.io/my-portfolio/
```

## AI-assisted updates

Reusable request templates are available in `PROMPT_GUIDE.md`. They tell an AI
assistant to update the central data file, preserve existing design behavior,
avoid invented information, and run the appropriate checks.
