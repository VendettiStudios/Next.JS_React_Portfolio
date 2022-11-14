import React from 'react'

type Props = {}

const Skills = (props: Props) => {
    return (
        <div className="skillsSection">
            <div className="box" id="skills">
                {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}> */}
                <span className="head">MY Skills & Expertise</span>
                <section className="container">
                    <div className="container_content">
                        <div className="row">
                            <div className="row_md_12">
                                <div className="timeline_centered">
                                    {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                    <article className="timeline_entry">
                                        <div className="timeline_icon timeline_icon_5" >
                                        </div>
                                        <div className="label">
                                            <h2>Full-Stack Web Development and Design <span>MERN</span></h2>
                                            <p>I picked up a solid foundation for web development at UC Berkeley. We learned modern frameworks, as well as older frameworks. This is helpful for older companies that are still using older frameworks, whether they want to migrate / transition to a new framework or not!</p>
                                            <br />
                                            <p>Below are some of my skills!</p>
                                        </div>
                                    </article>
                                    {/* </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                    <article className="timeline_entry">
                                        <div className="timeline_icon">
                                        </div>
                                        <div className="label">
                                            <h2>Front End<span> React.js / React.ts, VanillaJS, JavaScript, JQuery, HTML5, CSS - Bootstrap, React.Bootstrap, Bulma</span></h2>
                                        </div>
                                    </article>
                                    {/* </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                    <article className="timeline_entry">
                                        <div className="timeline_icon timeline_icon_2" >
                                        </div>
                                        <div className="label">
                                            <h2>BackEnd<span> MongoDB, SQL, Sequelize, APOLLO GRAPHQL, PostMan, Insmonia, CloudFlare, Node.js, Express.js, MVC, JavaScript Computer Science, State, Redux, Cloudflare DNS</span></h2>
                                        </div>
                                    </article>
                                    {/* </ScrollAnimation> */}

                                    {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}> */}
                                    <article>
                                        <div className="timeline_icon timeline_icon_4" >
                                        </div>
                                        <div className="label">
                                            <h2>Summary<span> The Wrap! + Other Complimentary Skills</span></h2>
                                            <p> MERN - Web API's - Object Oriented Programming - Object Oriented Mapping - Progressive Web Applications - GitHub - UI/UX DESIGN - Project Management - Team Coordination - Time Management - Communication
                                            </p>
                                        </div>
                                    </article>
                                    {/* </ScrollAnimation> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* </ScrollAnimation> */}
            </div>
        </div>
    )
}

export default Skills