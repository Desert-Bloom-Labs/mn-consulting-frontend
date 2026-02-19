import { useState } from 'react'
import azaImage from '../assets/aza_image.jpg'

type SnapshotCard = 'main' | 'writing' | 'business' | 'leadership'

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
            data-reveal-delay="120"
            data-motion="card-left"
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
            data-reveal-delay="190"
            data-motion="card-pop"
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
            data-reveal-delay="260"
            data-motion="card-right"
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
            data-reveal-delay="330"
            data-motion="card-tilt"
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
