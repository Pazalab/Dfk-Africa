import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../css/home.css"
import SolutionsSections from "../components/home/SolutionsSections"
import Nudge from "../components/home/Nudge"
import ParentSection from "../components/home/ParentSection"
import InsightsSection from "../components/home/InsightsSection"
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <>
         <Navbar />
         <HeroSection />
         <AboutSection />
         <SolutionsSections />
         <Nudge />
         <ParentSection />
         <InsightsSection />
         <Footer />
    </>
  )
}

export default Home