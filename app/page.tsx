import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CreativeStudio } from "@/components/creative-studio";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { GitHubSection } from "@/components/github-section";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <CreativeStudio />
        <Projects />
        <Experience />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
