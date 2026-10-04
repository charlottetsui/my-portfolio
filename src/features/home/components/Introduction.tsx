export default function Introduction() {
  return (
    <section className="introduction" aria-labelledby="introduction-heading">
      <h1 id="introduction-heading" className="introduction-heading">
        Charlotte Tsui
        <svg className="introduction-sparkle" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 2c0 9-5 14-14 14 9 0 14 5 14 14 0-9 5-14 14-14-9 0-14-5-14-14Z" fill="currentColor" />
        </svg>
      </h1>
      <p className="introduction-description">
        Software developer bridging <span className="introduction-highlight">design and engineering</span> to build thoughtful,
        intuitive experiences.
      </p>
      <p className="introduction-companies">Prev @ Google, SAS</p>
    </section>
  );
}
