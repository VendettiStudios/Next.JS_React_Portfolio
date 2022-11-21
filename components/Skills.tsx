import React from 'react'

type Props = {}

const Skills = (props: Props) => {
    return (
        <div className="skillsSection">
            <div className="box" id="skills">
                <span className="head">Skills & Expertise</span>
                <section className="container1">
                    <div className="container_content">
                        <div className="row">
                            <div className="row_md_12">
                                <div className="timeline_centered">
                                    <article className="timeline_entry">
                                        <div className="timeline_icon timeline_icon_5" >
                                        </div>
                                        <div className="label">
                                            <h2>Full-Stack Web Development and Design</h2>
                                            <p>The stack I use mainly is the MERN stack, though I'm also proficient with several other frameworks! Below are some of the frameworks and tools I've used.</p>
                                        </div>
                                    </article>
                                    <article className="timeline_entry">
                                        <div className="timeline_icon">
                                        </div>
                                        <div className="label">
                                            <h2>Front End</h2>
                                            <p>ReactJS, VanillaJS, JavaScript, JQuery, HTML5, CSS, Bootstrap, JSON, React-Bootstrap, Bulma, Tailwindcss, MUI, TypeScript, HeadlessUI</p>
                                        </div>
                                    </article>
                                    <article className="timeline_entry">
                                        <div className="timeline_icon timeline_icon_2" >
                                        </div>
                                        <div className="label">
                                            <h2>BackEnd</h2>
                                            <p>MongoDB, SQL, Sequelize, APOLLO GRAPHQL, PostMan, Insmonia, Node.js, Express.js, MVC, JavaScript Computer Science, State, Redux, DNS</p>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="timeline_icon timeline_icon_4" >
                                        </div>
                                        <div className="label">
                                            <h2>Summary<span> The Wrap! + Other Complimentary Skills</span></h2>
                                            <p> MERN - Web API's - Object Oriented Programming - Object Oriented Mapping - Progressive Web Applications - GitHub - UI/UX DESIGN - Project Management - Team Coordination - Time Management - Communication
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills