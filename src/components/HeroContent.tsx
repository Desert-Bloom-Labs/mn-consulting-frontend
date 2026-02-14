const HeroContent = () => {
  return (
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
          Coaching ejecutivo, formacion para equipos
          <br />
          y cultura organizacional para crecer sin desgaste.
        </p>

        <div className="newsletter-card" aria-label="Suscripcion a newsletter">
          <p className="newsletter-kicker">Newsletter</p>
          <p className="newsletter-copy">
            Recibe recursos de liderazgo, bienestar y cultura organizacional cada semana.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Tu correo electronico" />
            <button type="button" className="newsletter-submit-button">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
