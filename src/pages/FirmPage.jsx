import { Link, useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { members } from "../data/partners";
import { LuMoveUpRight } from "react-icons/lu";
import Footer from "../components/common/Footer";

const FirmPage = () => {
    const { name } = useParams();

    const data = members.find(item => item.url_param === name);
    console.log(data)
  return (
    <>
          <Navbar />
          <div className="firm-body">
                     <div className="inner-row">
                                 <div className="firm-body-content">
                                             <div className="firm-body-header">
                                                       <div className="header-title">
                                                                <h1>{data.name}</h1>
                                                                <p><span>Country: </span>{data.country}</p>
                                                       </div>
                                                       { data.website_link !== "" ? 
                                                               <div className="website-link">
                                                                        <Link target="_blank" to={data.website_link}>Website <span><LuMoveUpRight /></span></Link>
                                                               </div> :
                                                               ""
                                                        }
                                             </div>
                                             <p className="intro">{data.description}</p>

                                             <div className="firm-body-row">
                                                         <div className="firm-services">
                                                                  <h3>Services Offered</h3>
                                                                  <ul>
                                                                            {
                                                                                 data.services.map(item =>
                                                                                       <li key={item.id}><span>{item.id+1}.</span>{item.name}</li>
                                                                                 )
                                                                            }
                                                                  </ul>
                                                         </div>

                                                        <div className="member-team-section">
                                                              <h2>Meet the Leadership Team</h2>
                                                             <div className="team-row">
                                                                   { data.team.map(item =>
                                                                           <div className="team-member-moja" key={item.id}>
                                                                                         <div className="image-section">
                                                                                                    <img src={item.image} alt="" />
                                                                                         </div>
                                                                                         <h4>{item.name}</h4>
                                                                                         <p>{item.position}</p>
                                                                           </div>
                                                                   )}
                                                              </div>
                                                        </div>
                                             </div>
                                 </div>
                     </div>
          </div>


          <Footer />
    </>
  )
}

export default FirmPage