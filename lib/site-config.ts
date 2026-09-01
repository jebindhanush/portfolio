const defaultRepositoryName = "jebin-portfolio";
const defaultSiteUrl = "https://jebindhanush.github.io/jebin-portfolio";

const repositoryName = (
  process.env.NEXT_PUBLIC_REPOSITORY_NAME ?? defaultRepositoryName
)
  .trim()
  .replace(/^\/+|\/+$/g, "");

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl)
  .trim()
  .replace(/\/+$/g, "");

export const siteConfig = {
  repositoryName,
  siteUrl,
} as const;
