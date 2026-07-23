import { techStackData } from "../data/techstack";

export default function TechStack() {
  return (
    <>
      <section className="intro-section container-pad uses-header">
        <h1 className="intro-name">Tech Stack</h1>
        <p className="tagline">
          The languages, frameworks, databases, and devops tools I specialize in to build high-performance APIs and distributed architectures.
        </p>
      </section>

      <section className="container-pad" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {techStackData.map((category) => (
          <div key={category.title} className="uses-category-section" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <h2 className="uses-category-title">{category.title}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.75rem" }}>
              {category.items.map((item) => (
                <span
                  key={item}
                  className="tech-tag"
                  style={{
                    fontSize: "0.95rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "6px",
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    fontFamily: "var(--font-mono)"
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
