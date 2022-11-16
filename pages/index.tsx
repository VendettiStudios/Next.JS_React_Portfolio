import Head from 'next/head'
import About from '../components/About'
// import Contact from '../components/Contact'
import Hero from '../components/Hero'
// import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
// import Skills from '../components/Skills'
// import Skills2 from '../components/Skills2'



export default function Home() {
  return (
    <div className="-z-50 snap-y snap-mandatory h-screen overflow-scroll">
      <Head>
        <title>Daniel's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Sidebar */}
      <Sidebar />
      {/* Hero */}
      <section id="hero" className="snap-center">
      <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
      <About />
      </section>
      {/* Skills */}
      {/* <section id="skills" className="snap-start">
        <Skills />
        </section> */}
        {/* Skills overflow mobile */}
        {/* <section id="skills2" className="">
        <Skills2 />
      </section> */}
      {/* Projects */}
      {/* <section id="projects" className="snap-center">
        <Projects />
      </section> */}
      {/* Contact Me */}
      {/* <section id="contact" className="snap-center">
        <Contact />
      </section> */}
    </div>
  )
}
