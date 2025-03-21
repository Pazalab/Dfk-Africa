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
                                               <div className="member-moja" key={item.id}>
                                                           <img src={item.image} alt="" />
                                                           <h3>{item.name}</h3>
                                                           <p>{item.description}</p>
                                                           <h4>Country: <span>{item.country}</span></h4>
                                                           <Link to={`${item.link}`} target="_blank">Website Link</Link>
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