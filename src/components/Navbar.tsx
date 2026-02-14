const Navbar = () => {
  return (
    <nav className="hero-nav" aria-label="Main menu">
      <div className="hero-nav-stack">
        <button className="hero-nav-link hero-nav-link-service" type="button">
          Servicios
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 10.25L12 15.25L17 10.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <a href="#" className="hero-nav-link hero-nav-link-faq">
          Metodologia
        </a>
      </div>

      <a href="#" className="hero-nav-link hero-nav-link-login">
        Contacto
      </a>

      <button className="hero-signup-button" type="button">
        Agenda Sesion
        <span aria-hidden="true" />
      </button>
    </nav>
  )
}

export default Navbar
