import dfk1 from "../../assets/dfk.webp"
import dfk2 from "../../assets/dfk2.jpg"

const AboutHero = () => {
  return (
    <div className="about-hero">
                 <div className="inner-row">
                             <div className="about-hero-content">
                                        <div className="title">
                                                    <h1>We are an association of independent accounting and business advisory firms in Africa.</h1>
                                        </div>

                                        <div className="about-hero-images">
                                                 <img src={dfk1} alt="" />
                                                 <img src={dfk2} alt="" />
                                        </div>
                             </div>
                 </div>
    </div>
  )
}

export default AboutHero