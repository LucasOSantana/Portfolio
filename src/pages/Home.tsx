import { Link } from "react-router-dom";
import { personalInfo } from "../data/personal";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import WorkCard from "../components/WorkCard";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const homeExperiences = experiences.slice(0, 2);

  return (
    <>
      <section className="intro-section container-pad">
        <div className="intro-header">
          <div>
            <h1 className="intro-name">
              {personalInfo.name}
            </h1>
            <div className="location-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{personalInfo.location}</span>
            </div>
          </div>
          <div className="experience-stat">
            {personalInfo.yearsOfExperience}+ years of engineering
          </div>
        </div>
        
        <p className="tagline">{personalInfo.tagline}</p>
      </section>

      <section className="what-i-do-section container-pad">
        <h2 className="section-title">What I do</h2>
        <div className="expertise-grid">
          {personalInfo.skillsList.map((skill) => (
            <div key={skill.title} className="expertise-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        
        {personalInfo.exploring.length > 0 && (
          <p className="exploring-text">
            Currently exploring <strong>{personalInfo.exploring.join(", ")}</strong>.{" "}
            <Link to="/now" className="company-link">
              More on /now
            </Link>
          </p>
        )}
      </section>

      <section className="experience-list-section container-pad">
        <div className="section-header">
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Experience
          </h2>
          <Link to="/work" className="see-all">
            See all work →
          </Link>
        </div>
        
        <div className="experience-timeline">
          {homeExperiences.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="featured-project-section container-pad" style={{ borderBottom: "none" }}>
          <div className="section-header">
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Featured Projects
            </h2>
            <Link to="/projects" className="see-all">
              See all projects →
            </Link>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
