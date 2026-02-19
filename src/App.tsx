import { useEffect } from 'react'
import './App.css'
import CourseAccessSection from './components/CourseAccessSection.tsx'
import HeroCollage from './components/HeroCollage.tsx'
import HeroContent from './components/HeroContent.tsx'
import SkillSnapshotSection from './components/SkillSnapshotSection.tsx'

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (elements.length === 0) return
    const rootElement = document.documentElement

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.style.setProperty('--reveal-progress', '1')
        element.classList.add('is-inview')
      })
      return () => {
        elements.forEach((element) => {
          element.classList.remove('is-inview')
        })
      }
    }

    rootElement.classList.add('reveal-ready')
    elements.forEach((element) => {
      element.classList.add('reveal-active')
    })

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
    const smoothstep = (t: number) => t * t * (3 - 2 * t)

    const applyProgress = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      const enterProgress = clamp((viewportHeight - rect.top) / (viewportHeight * 0.5), 0, 1)
      const exitProgress = clamp(rect.bottom / (viewportHeight * 0.36), 0, 1)
      const rawProgress = Math.min(enterProgress, exitProgress)

      const delayMs = Number(element.dataset.revealDelay ?? '0')
      const delayNormalized = clamp(delayMs / 1200, 0, 0.45)
      const delayedProgress = clamp((rawProgress - delayNormalized) / (1 - delayNormalized), 0, 1)

      const easedProgress = smoothstep(delayedProgress)
      element.style.setProperty('--reveal-progress', easedProgress.toFixed(4))

      if (easedProgress > 0.02) {
        element.classList.add('is-inview')
      } else {
        element.classList.remove('is-inview')
      }
    }

    let rafId = 0
    const updateAll = () => {
      rafId = 0
      elements.forEach(applyProgress)
    }

    const requestUpdate = () => {
      if (rafId !== 0) return
      rafId = window.requestAnimationFrame(updateAll)
    }

    requestUpdate()
    window.setTimeout(requestUpdate, 50)
    window.setTimeout(requestUpdate, 220)
    const pollId = window.setInterval(requestUpdate, 180)

    const scrollTargets = [window, document, document.body, document.documentElement]
    scrollTargets.forEach((target) => {
      target.addEventListener('scroll', requestUpdate, { passive: true })
    })
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('load', requestUpdate)

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId)
      window.clearInterval(pollId)
      scrollTargets.forEach((target) => {
        target.removeEventListener('scroll', requestUpdate)
      })
      window.removeEventListener('resize', requestUpdate)
      window.removeEventListener('load', requestUpdate)
      elements.forEach((element) => {
        element.classList.remove('reveal-active')
      })
      rootElement.classList.remove('reveal-ready')
    }
  }, [])

  return (
    <>
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

      <section
        className="snapshot-section reveal-on-scroll"
        aria-label="Skill interface preview"
        data-reveal
        data-reveal-delay="70"
        data-motion="section-lift"
      >
        <SkillSnapshotSection />
      </section>

      <section
        className="access-section reveal-on-scroll"
        aria-label="Catalogo de cursos"
        data-reveal
        data-reveal-delay="120"
        data-motion="section-soft"
      >
        <CourseAccessSection />
      </section>
    </>
  )
}

export default App
