import React from 'react'

type Props = {}

const Skills = (props: Props) => {
    return (
        <div className="skillsSection">
            <div className="" id="skills">
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
                                            <p>As a developer, I specialize in the MERN stack, but I am also proficient in various other frameworks and tools. Below are some of the frameworks and tools I use.</p>
                                        </div>
                                    </article>
                                    <article className="timeline_entry">
                                        <div className="timeline_icon">
                                        </div>
                                        <div className="label">
                                            <h2>Front End</h2>
                                            <p> Next.js, ReactJS, VanillaJS, JavaScript, JQuery, Progressive Web Apps, HTML5, CSS, Bootstrap, JSON, React-Bootstrap, Bulma, Tailwind CSS, MUI, HeadlessUI, webpack.js</p>
                                        </div>
                                    </article>
                                    <article className="timeline_entry">
                                        <div className="timeline_icon timeline_icon_2" >
                                        </div>
                                        <div className="label">
                                            <h2>BackEnd</h2>
                                            <p>MongoDB - Mongoose, SQL - Sequelize, ApolloGraphQL, GraphQL, PostMan, Insmonia, Node.js, Express.js, MVC, State, Redux, DNS, API Integration - REST, Object-Oriented-Programming, Next.js, Authentication, webpack.js</p>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="timeline_icon timeline_icon_4" >
                                        </div>
                                        <div className="label">
                                            <h2>UX/UI Tools & Deployment Tools</h2>
                                            <p>Figma, Github, CloudFlare, Vercel, Heroku, EC2, Adobe Softwares(Illustrator, Photoshop, InDesign, Premiere)</p>
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