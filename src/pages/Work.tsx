import { experiences } from "../data/experiences";
import WorkCard from "../components/WorkCard";

export default function Work() {
  return (
    <>
      <section className="intro-section container-pad" style={{ borderBottom: "1px dashed var(--border-color)" }}>
        <h1 className="intro-name">Work</h1>
        <p className="tagline">
          My professional journey. A timeline of companies, products, roles, and engineering challenges I've tackled.
        </p>
      </section>

      <section className="container-pad" style={{ minHeight: "300px" }}>
        <div className="experience-timeline">
          {experiences.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>
    </>
  );
}
