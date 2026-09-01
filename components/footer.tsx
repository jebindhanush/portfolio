import { portfolio } from "@/data/portfolio";

export function Footer() {
  const content = portfolio.content.footer;

  return (
    <footer className="site-footer shell">
      <p>© {new Date().getFullYear()} {portfolio.person.name}</p>
      <p>{content.technology}</p>
      <a href="#home">{content.backToTop}</a>
    </footer>
  );
}
