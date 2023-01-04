import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="aboutSection">
            <div className="overlay2"></div>
            <div className="aboutContent">
                <div className="card">
                    <h3 className="about pb-6 lg:text-3xl">ABOUT</h3>
                    <div className="content lg:text-xl lg:px-6">
                        <p> As a full-stack engineer with a passion for design, I have the skills and experience to take projects from conception to deployment. I enjoy tackling challenges and exploring the many possibilities of user experience and user interface design, particularly in front-end development. However, I also value the structured approach of back-end development.
                        <br />
                            In addition, my travels and exposure to diverse cultures have given me a deep appreciation for the power of design to express individuality and diversity. I am excited to bring my skills and perspective to new challenges and opportunities.
                        </p>
                    </div></div>
            </div>

            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    )
}

export default About