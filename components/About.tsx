import React, { useState, useEffect, useRef } from 'react'

type Props = {}

const About = (props: Props) => {
  const [slideUp, setSlideUp] = useState(true)
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSlideUp(false)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -50% 0px' }
    )
    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }
  }, [])

  return (
    <div className="aboutSection" ref={aboutRef}>
      <div className="overlay2"></div>
      <div
        className={`aboutContent ${slideUp ? 'slide-up' : ''}`}
        style={{
          animation: slideUp ? 'none' : 'slide-up 2s ease-out',
          visibility: slideUp ? 'hidden' : 'visible',
        }}
      >
        <div className="card">
          <h3 className="about pb-6 lg:text-3xl">ABOUT</h3>
          <div className="content lg:text-xl lg:px-6">
            <p>
              As a full-stack engineer with a passion for design, I have the
              skills and experience to take projects from conception to
              deployment. I enjoy tackling challenges and exploring the many
              possibilities of user experience and user interface design,
              particularly in front-end development. However, I also value the
              structured approach of back-end development.
              <br />
              In addition, my travels and exposure to diverse cultures have
              given me a deep appreciation for the power of design to express
              individuality and diversity. I am excited to bring my skills and
              perspective to new challenges and opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}

export default About
