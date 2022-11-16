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
                    <p>My name is <b>Daniel Holloway</b>! I am passionate about <b>creative design, development, and innovation</b>. I express this currently via creating impactful <b>mobile friendly websites and applications</b>. I began learning graphic design and front end web design and development 10 years ago, and improved my foundation within UC Berkeley.
                        <br />
                        <br />
                        The learning never stops! Every day I put in time to expand & further my knowledge in modern development to help achieve client & employer satisfaction.
                        I am a very fast learner, put me onto a task and I'll master it!
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