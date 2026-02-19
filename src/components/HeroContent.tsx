const HeroContent = () => {
  return (
    <>
      <div className="hero-content">
        <div className="hero-copy-block">
          <h1 className="hero-title">
            <span>Transformamos</span>
            <br />
            liderazgo y
            <br />
            bienestar.
          </h1>
          <p className="hero-subtitle">
            Coaching ejecutivo, formacion para equipos y cultura organizacional para crecer sin desgaste.
          </p>
        </div>

        <section className="newsletter-card" aria-label="Newsletter">
          <h2 className="newsletter-kicker">Newsletter</h2>
          <p className="newsletter-copy">
            Recibe recursos de liderazgo, bienestar y cultura organizacional cada semana.
          </p>

          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Tu correo electronico" aria-label="Correo electronico" />
            <button type="submit" className="newsletter-submit-button">
              Suscribirme
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default HeroContent
