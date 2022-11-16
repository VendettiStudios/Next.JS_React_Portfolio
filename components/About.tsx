import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="aboutSection">
            <div className="overlay2"></div>
            <div className="aboutContent">
                <div className="card">
                <h3 className="pb-6 lg:text-3xl">ABOUT</h3>
                <div className="lg:text-xl">
                    <p> I am a full-stack engineer with an eye for design. I like to consider myself a jack-of-all-trades, handing projects from design to deployment - digital product development, and helping debug problem points. I love traveling and my world travels have led me to a deep appreciation for expression diversity via design. I am most enthusiastic about front-end development because I enjoy challenges and how many different ways there are to go about it. Though I highly appreciate the black and white nature straight-forwardness of back-end development.
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