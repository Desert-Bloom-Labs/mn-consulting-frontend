import './App.css'
import HeroCollage from './components/HeroCollage.tsx'
import HeroContent from './components/HeroContent.tsx'

function App() {
  return (
    <div className="page-scene">
      <div className="scene-glow scene-glow-left" aria-hidden="true" />
      <div className="scene-glow scene-glow-right" aria-hidden="true" />

      <main className="hero-card">
        <div className="hero-split">
          <section className="hero-collage-shell" aria-label="MN Consulting collage">
            <HeroCollage />
          </section>

          <section className="hero-content-shell">
            <HeroContent />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
