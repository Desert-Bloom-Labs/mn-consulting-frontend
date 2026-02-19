import { useState } from 'react'
import azaImage from '../assets/aza_image.jpg'

type SnapshotCard = 'main' | 'writing' | 'business' | 'leadership'

const snapshotRevealConfig = {
  main: { delay: '110', motion: 'card-left' },
  writing: { delay: '190', motion: 'card-pop' },
  business: { delay: '270', motion: 'card-right' },
  leadership: { delay: '350', motion: 'card-tilt' },
} as const

const SkillSnapshotSection = () => {
  const [activeCard, setActiveCard] = useState<SnapshotCard>('main')

  return (
    <div className="snapshot-shell">
      <div className="snapshot-grid" aria-label="Watch Learn Grow preview">
        <div className="snapshot-copy reveal-on-scroll" data-reveal data-reveal-delay="80" data-motion="sweep-left">
          <h2>
            Watch.
            <br />
            Learn.
            <br />
            Grow.
          </h2>

          <div className="snapshot-search">
            <span>Find your passion</span>
            <button type="button">Go</button>
          </div>
        </div>

        <div className="snapshot-cards" onMouseLeave={() => setActiveCard('main')}>
          <div
            className={`snapshot-main-course snapshot-hover-card reveal-on-scroll ${activeCard === 'main' ? 'is-expanded' : 'is-compressed'}`}
            data-reveal
            data-reveal-delay={snapshotRevealConfig.main.delay}
            data-motion={snapshotRevealConfig.main.motion}
            onMouseEnter={() => setActiveCard('main')}
            onFocus={() => setActiveCard('main')}
            tabIndex={0}
          >
            <img src={azaImage} alt="Writing course mentor" />
            <div className="snapshot-main-caption">
              <p>
                Writing
                <br />
                Course
              </p>
              <strong>100</strong>
              <small>TOPICS</small>
            </div>
          </div>

          <div
            className={`snapshot-side-course snapshot-side-writing snapshot-hover-card reveal-on-scroll ${activeCard === 'writing' ? 'is-expanded' : 'is-compressed'}`}
            data-reveal
            data-reveal-delay={snapshotRevealConfig.writing.delay}
            data-motion={snapshotRevealConfig.writing.motion}
            onMouseEnter={() => setActiveCard('writing')}
            onFocus={() => setActiveCard('writing')}
            tabIndex={0}
          >
            <img src={azaImage} alt="Writing track" />
            <div className="snapshot-side-caption">
              <p>
                Writing
                <br />
                Course
              </p>
              <strong>100</strong>
              <small>TOPICS</small>
            </div>
          </div>

          <div
            className={`snapshot-side-course snapshot-side-business snapshot-hover-card reveal-on-scroll ${activeCard === 'business' ? 'is-expanded' : 'is-compressed'}`}
            data-reveal
            data-reveal-delay={snapshotRevealConfig.business.delay}
            data-motion={snapshotRevealConfig.business.motion}
            onMouseEnter={() => setActiveCard('business')}
            onFocus={() => setActiveCard('business')}
            tabIndex={0}
          >
            <img src={azaImage} alt="Business track" />
            <div className="snapshot-side-caption">
              <p>
                Writing
                <br />
                Course
              </p>
              <strong>100</strong>
              <small>TOPICS</small>
            </div>
          </div>

          <div
            className={`snapshot-side-course snapshot-side-leadership snapshot-hover-card reveal-on-scroll ${activeCard === 'leadership' ? 'is-expanded' : 'is-compressed'}`}
            data-reveal
            data-reveal-delay={snapshotRevealConfig.leadership.delay}
            data-motion={snapshotRevealConfig.leadership.motion}
            onMouseEnter={() => setActiveCard('leadership')}
            onFocus={() => setActiveCard('leadership')}
            tabIndex={0}
          >
            <img src={azaImage} alt="Leadership track" />
            <div className="snapshot-side-caption">
              <p>
                Writing
                <br />
                Course
              </p>
              <strong>100</strong>
              <small>TOPICS</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSnapshotSection
