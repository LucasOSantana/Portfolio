import type { Experience } from "../data/experiences";

interface WorkCardProps {
  work: Experience;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <article className={`work-entry ${work.current ? "current" : ""}`}>
      <div className="work-date">{work.period}</div>
      <div className="work-info">
        <h3>
          <span>{work.company}</span>
          <a
            href={work.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            {work.companyUrl.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        </h3>
        <div className="work-role">{work.role}</div>
        <p className="work-desc">{work.description}</p>
        
        {work.highlights && (
          <div className="fun-note-box">
            <div className="fun-note-title">Highlights & Lessons</div>
            <p className="fun-note-text">{work.highlights}</p>
          </div>
        )}
      </div>
    </article>
  );
}
