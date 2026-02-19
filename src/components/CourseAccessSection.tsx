type AccessCourse = {
  title: string
  duration: string
  toneClass: string
  visualClass: string
  motionClass: string
}

const courses: AccessCourse[] = [
  { title: 'Sales Marketing', duration: '4 month', toneClass: 'tone-sales', visualClass: 'visual-sales', motionClass: 'card-left' },
  { title: 'Data analytics', duration: '3 month', toneClass: 'tone-data', visualClass: 'visual-data', motionClass: 'card-pop' },
  { title: 'Copywriting Pro', duration: '2 month', toneClass: 'tone-copy', visualClass: 'visual-copy', motionClass: 'card-right' },
  { title: 'Design art', duration: '4 month', toneClass: 'tone-design', visualClass: 'visual-design', motionClass: 'card-tilt' },
]

const categories = ['All categories', 'Entertainment', 'Lifestyle', 'Writing', 'Business', 'Food']

const CourseAccessSection = () => {
  return (
    <div className="access-shell">
      <header className="access-header reveal-on-scroll" data-reveal data-reveal-delay="40" data-motion="title-rise">
        <h2>Unlimited access to 100+ instructors.</h2>

        <nav className="access-categories" aria-label="Course categories">
          {categories.map((category, index) => (
            <button type="button" className={index === 0 ? 'is-current' : ''} key={category}>
              {category}
            </button>
          ))}
        </nav>
      </header>

      <div className="access-grid">
        {courses.map((course, index) => (
          <article
            className={`access-card ${course.toneClass} reveal-on-scroll`}
            data-reveal
            data-reveal-delay={String(110 + index * 80)}
            data-motion={course.motionClass}
            key={course.title}
          >
            <div className="access-media">
              <div className={course.visualClass} aria-hidden="true">
                <span />
              </div>
            </div>

            <h3>{course.title}</h3>
            <p>{course.duration}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default CourseAccessSection
