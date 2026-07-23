import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (project.featured) {
    return (
      <article className="featured-project-card">
        <div className="project-img-container">
          {project.image ? (
            <img src={project.image} alt={project.title} className="project-image" />
          ) : (
            <div className="project-img-placeholder">
              <span className="placeholder-icon">✦</span>
              <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>Backend only project</p>
            </div>
          )}
        </div>
        
        <div className="project-details">
          <div>
            <div className="project-header">
              <div className="project-badge-row">
                {project.isNew && <span className="badge-new">New</span>}
                {project.platforms && (
                  <span className="project-platform">{project.platforms}</span>
                )}
              </div>
              
              <a
                href={project.url || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title-link"
              >
                {project.title}
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
            
            <p className="project-description">{project.description}</p>
          </div>
          
          <div className="project-tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="project-card-simple">
      <div>
        <h3 style={{ margin: "0 0 0.5rem" }}>{project.title}</h3>
        <p className="project-description" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
          {project.description}
        </p>
      </div>
      
      <div>
        <div className="project-tech-tags" style={{ marginBottom: "1rem" }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag" style={{ fontSize: "0.7rem", padding: "0.15rem 0.35rem" }}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
              style={{ fontSize: "0.8rem" }}
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
              style={{ fontSize: "0.8rem" }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
