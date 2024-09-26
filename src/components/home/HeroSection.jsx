import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="hero-vid-and-content">
                        <div className="hero-vid-overlay">
                                   <div className="hero-texts">                
                                           <div className="hero-text-column">
                                                  <h1>Driving Business Growth in Africa.</h1>
                                                  <div className="hero-btns">
                                                             <Link to={"/"}>Explore Firms</Link>
                                                             <Link to={'/'}>Get in Touch</Link>
                                                  </div>
                                           </div>
                                           <p>Become part of DFK International to tap into a global network of accounting firms that share your values and commitment to international clients. Collaborate proactively to access exclusive insights, technical expertise, and effective strategies that will elevate your practice and broaden your global presence.</p>
                                   </div>
                        </div>
                         <video muted autoPlay loop poster="/temp.jpg">
                                  <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1727198275/DFK_International_csizkn.mp4" type="video/mp4" />
                         </video>
              </div>
    </div>
  )
}

export default HeroSection