import AboutHero from "../components/about/AboutHero"
import Navbar from "../components/common/navigation/Navbar"
import AboutBody from "../components/about/AboutBody"
import Nudge from "../components/home/Nudge"
import "../css/about.css"
import Footer from "../components/common/Footer"
const About = () => {
  return (
    <>
           <Navbar />
           <AboutHero />
           <AboutBody />
           <Nudge />
           <Footer />
    </>
  )
}

export default About