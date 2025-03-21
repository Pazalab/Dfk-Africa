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

                                                        { data.team.length > 0 && 
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
                                                        }

                                                      { data.business && 
                                                              <div className="business-section">
                                                                        <h2>{data.business.title}</h2>
                                                                        { data.business.intro && <p>{data.business.intro}</p>}
                                                                        { data.business.entities && 
                                                                                  <ol>
                                                                                           { data.business.entities.map(item =>
                                                                                                   <li key={item}>{item}</li>
                                                                                           )}
                                                                                  </ol>
                                                                        }

                                                                        { data.business.description && <p>{data.business.description}</p>}

                                                                        { data.business.descriptions && 
                                                                              <div className="descriptions-list">
                                                                                         <ul>
                                                                                                 { data.business.descriptions.map(item => <li key={item}>{item}</li>)}
                                                                                         </ul>
                                                                              </div>
                                                                        }

                                                                        { data.business.categories && 
                                                                               <div className="categories-list">
                                                                                           <h4>{data.business.categories.title}</h4>
                                                                                           <ul>
                                                                                                     { data.business.categories.list.map(item => 
                                                                                                         <li key={item}>{item}</li>
                                                                                                     )}
                                                                                           </ul>
                                                                               </div>
                                                                        }
                                                                        {
                                                                              data.business.outro && <p>{data.business.outro}</p>
                                                                        }
                                                              </div>
                                                      }
                                             </div>
                                 </div>
                     </div>
          </div>


          <Footer />
    </>
  )
}

export default FirmPage