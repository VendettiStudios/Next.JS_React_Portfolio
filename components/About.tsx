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
                    <p> I am a full-stack engineer with an eye for design. I consider myself a jack-of-all-trades, handling projects from design to deployment - and helping debug problem points. <br/>My world travels have led me to a deep appreciation for the expression of diversity via design. I am most enthusiastic about front-end development because I enjoy challenges and how many directions you can take UX / UI. Though I highly appreciate the black-and-white nature and straightforwardness of back-end development.
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