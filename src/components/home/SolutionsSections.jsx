import { Link } from "react-router-dom"
import solutions1 from "../../assets/solutions1.jpg"
import { solutions } from "../../data/solutions"
import { GoArrowUpRight } from "react-icons/go";
import { members } from "../../data/partners";

const SolutionsSections = () => {
  return (
    <div className="solutions-section">
            <div className="solutions-content">
                     <div className="solutions-column-image">
                               <div className="inset-overlay"></div>
                               <img src={solutions1} alt="" />
                     </div>
                     <div className="solutions-column-texts">
                               <div className="solutions-column-inner">
                                        <h2>Delivering a <span>full spectrum of expert services</span> for businesses across diverse industries.</h2>
                                        <p>DFK Africa member firms deliver comprehensive business and financial solutions, empowering organizations to optimize performance, drive growth, and navigate complex challenges with confidence.</p>

                                        <div className="solutions-sector-row">
                                                   { solutions.slice(0, 4).map(sector => 
                                                         <div className="sector-moja" key={sector.id}>
                                                                    <h4>{sector.name}</h4>
                                                                    {/* <p>{sector.description}</p> */}
                                                         </div>
                                                   )}
                                                   <Link to={"/our-solutions/"}>Explore More <span><GoArrowUpRight /></span></Link>
                                        </div>
                               </div>
                     </div>
             </div>

             <div className="numbers-row">
                         <div className="inner-row">
                                   <div className="numbers-row-content">
                                             <div className="numbers-row-column">
                                                      <div className="number-moja top">
                                                                <h2>20</h2>
                                                                <h4>Members</h4>
                                                      </div>
                                                      <div className="number-moja">
                                                                 <h2>34</h2>
                                                                 <h4>Offices</h4>
                                                       </div>
                                             </div>
                                             <div className="numbers-circle">
                                                       <div className="number-circle-texts">
                                                                 <h3>Empowering African Businesses with Premier Accounting Solutions.</h3>
                                                                 <span className="overshadow"></span>
                                                       </div>
                                             </div>
                                             <div className="numbers-row-column">
                                                     <div className="number-moja top">
                                                              <h2>1070</h2>
                                                               <h4>Professional Staff</h4>
                                                      </div>
                                                       <div className="number-moja">
                                                                  <h2>117</h2>
                                                                  <h4>Partners</h4>
                                                       </div>
                                             </div>
                                   </div>
                         </div>
             </div>

             <div className="members-row">
                        <div className="inner-row">
                                    <div className="members-content">
                                                <h2>DFK Africa Members</h2>

                                                <div className="members-content-row">
                                                            { members.slice(0, 6).map(item => 
                                                                  <div className="member-content-moja" key={item.id}>
                                                                       <div className="logo-area">
                                                                                  { item.image == "" ? <h3>Levitt </h3> : <img src={item.image} alt="" />}
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
                                                <div className="membership-link">
                                                          <Link to={"/member-firms/"}>Explore All Firms</Link>
                                                </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default SolutionsSections