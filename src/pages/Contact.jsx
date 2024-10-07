import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import ContactHero from "../components/contact/ContactHero"
import "../css/contact.css"
import Footer from "../components/common/Footer"
const Contact = () => {
  return (
    <>
           <Navbar />
           <ContactHero />
           <ContactBody />
           <Footer />
    </>
  )
}

export default Contact