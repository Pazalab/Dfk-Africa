import { Link } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import "../css/membership.css"
import { members } from "../data/partners"
import Footer from "../components/common/Footer"
const MemberFirms = () => {
  return (
    <>
           <Navbar />
           <div className="member-firms-body">
                    <div className="inner-row">
                               <div className="member-firms-content">
                                         <h2>DFK Africa Members</h2>
                                         <p>As trusted business experts in Africa, we extend our expertise worldwide through our partnership with DFK International, a global alliance of professional firms. Leveraging a network of seasoned specialists, we provide our clients with a wealth of international accounting and business management knowledge, ensuring they have access to a comprehensive range of resources and insights to support their growth and success.</p>
                                         <Link to={"/"}>Become a Member</Link>
                               </div>

                               <div className="member-body-row">
                                         { members.map(item => 
                                                                  <div className="member-content-moja" key={item.id}>
                                                                       <div className="logo-area">
                                                                                  <img src={item.image} alt="" />
                                                                       </div>
                                                                       <div className="member-content-texts">
                                                                                  <h3>{item.name}</h3>
                                                                                  <h4>{item.country}</h4>
                                                                                  <p>{item.description}</p>

                                                                                  <div className="link-btn">
                                                                                             <Link to={item.url}>Explore</Link>
                                                                                  </div>
                                                                       </div>
                                                            </div>
                                                            )}
                               </div>
                    </div>
           </div>
           <Footer />
    </>
  )
}

export default MemberFirms