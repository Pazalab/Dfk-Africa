import Navbar from "../components/common/navigation/Navbar"
import SolutionsBody from "../components/solutions/SolutionsBody"
import SolutionsHero from "../components/solutions/SolutionsHero"
import "../css/solutions.css"
import Footer from "../components/common/Footer"
const Solutions = () => {
  return (
    <>
             <Navbar />
             <SolutionsHero />
             <SolutionsBody />
             <Footer />
    </>
  )
}

export default Solutions