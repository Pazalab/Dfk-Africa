import { Link } from "react-router-dom"
const AboutSection = () => {
  return (
    <div className="about-section">
             <div className="inner-row">
                         <div className="about-section-content">
                                     <div className="about-section-column">
                                                <h3>About DFK Africa</h3>
                                                <h2>A Trusted Network of Accounting Experts, Delivering Tailored Client Solutions and Global Expertise.</h2>
                                     </div>
                                     <div className="about-section-column">
                                             <p>We are a network of independent accounting firms across Africa, committed to delivering high-quality, efficient services through experienced advisers. Our members benefit from a collaborative platform to exchange practice management insights, technical expertise, and professional development, equipping them to serve clients both locally and globally.</p>

                                             <Link to={'/who-we-are'}>Learn More</Link>
                                     </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection