import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <section className="intro-section container-pad" style={{ borderBottom: "1px dashed var(--border-color)" }}>
        <h1 className="intro-name">Projects</h1>
        <p className="tagline">
          Open-source projects, tools, libraries, and experimental packages I've designed and released.
        </p>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="container-pad" style={{ borderBottom: others.length > 0 ? "1px solid var(--border-color)" : "none" }}>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>
            Featured
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {others.length > 0 && (
        <section className="container-pad">
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            Other Projects
          </h2>
          
          <div className="other-projects-grid">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
