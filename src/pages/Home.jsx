import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../css/home.css"
import SolutionsSections from "../components/home/SolutionsSections"

const Home = () => {
  return (
    <>
         <Navbar />
         <HeroSection />
         <AboutSection />
         <SolutionsSections />
    </>
  )
}

export default Home