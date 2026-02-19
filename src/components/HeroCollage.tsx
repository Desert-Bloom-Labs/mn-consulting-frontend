const HeroCollage = () => {
  return (
    <div className="collage-root">
      <article className="collage-tile collage-brand">
        <div className="brand-copy">
          <h2>
            MN
            <br />
            Consulting
          </h2>

          <button type="button">
            Conoce Mas
          </button>
        </div>
      </article>

      <article className="collage-tile collage-top-photo">
        <div className="collage-top-accent" aria-hidden="true" />
      </article>

      <article className="collage-tile collage-message">
        <p>
          disena planes
          <br />
          de coaching y
          <br />
          capacitacion
          <br />
          para equipos
        </p>

        <button type="button" className="download-app-button">
          Ver Servicios
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 4V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 11L12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </article>

      <article className="collage-tile collage-update">
        <h3>
          Mejora clima
          <br />
          y bienestar
          <br />
          laboral.
        </h3>
      </article>

      <article className="collage-tile collage-process">
        <div className="process-circle process-circle-top" aria-hidden="true" />
        <div className="process-circle process-circle-bottom" aria-hidden="true" />
      </article>
    </div>
  )
}

export default HeroCollage
