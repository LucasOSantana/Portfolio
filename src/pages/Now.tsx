import { nowData } from "../data/now";

export default function Now() {
  return (
    <>
      <section className="intro-section container-pad now-header">
        <h1 className="intro-name">Now</h1>
        <p className="tagline">
          This is a page listing what I am focusing on right now at this point in my life.
        </p>
        <div className="now-meta">
          <span>Last updated: {nowData.lastUpdated}</span>
          <span>•</span>
          <span>Location: {nowData.location}</span>
        </div>
      </section>

      <section className="container-pad" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {nowData.currentFoci.map((focus) => (
          <div key={focus.category} className="now-section" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <h2 className="now-section-title">{focus.category}</h2>
            <ul className="now-list">
              {focus.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {nowData.currentlyReading.length > 0 && (
          <div className="now-section" style={{ borderBottom: "none", paddingBottom: 0 }}>
            <h2 className="now-section-title">Reading &amp; Learning</h2>
            <ul className="now-list">
              {nowData.currentlyReading.map((book, idx) => (
                <li key={idx}>
                  {book.link ? (
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                      style={{ fontWeight: 500 }}
                    >
                      {book.title}
                    </a>
                  ) : (
                    <strong style={{ fontWeight: 500, color: "var(--text-primary)" }}>{book.title}</strong>
                  )}{" "}
                  by {book.author}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
