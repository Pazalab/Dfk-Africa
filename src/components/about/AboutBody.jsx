import { members } from "../../data/partners.js"
import { Link, useNavigate } from "react-router-dom"
const AboutBody = () => {
  const navigate = useNavigate();
  return (
    <div className="about-body">
             <div className="inner-row">
                       <div className="about-body-content">
                                 <p>DFK Africa is a premier network of independent accounting firms established to offer world-class services with the personal touch of smaller organizations. With member firms across key cities in Africa, we provide a comprehensive range of services including accounting, audit, tax, and business advisory. Our firms are dedicated to helping clients navigate complex financial landscapes, presenting solutions clearly and without unnecessary jargon, making it easier for businesses to thrive.</p>
                                 <p>Collaboration is at the heart of DFK Africa. Our members regularly exchange ideas and expertise through national and international events, allowing us to deliver innovative solutions and maintain a consistent standard of excellence. This knowledge-sharing culture strengthens our collective reach and enables us to provide timely, cost-effective advice on both technical matters and broader business strategy.</p>
                                 <p>As part of DFK EMEA and DFK International, we offer clients seamless support beyond African borders. Whether you&apos;re expanding into new markets or seeking advice on complex global issues, our network ensures that your business benefits from local expertise and global insight. With a strong commitment to client success, we are here to guide businesses through every stage of their growth.</p>
                       </div>

                       <div className="members-row">
                                    <div className="members-content">
                                                <h2>DFK Members</h2>

                                                <div className="members-content-row">
                                                            { members.map(item => 
                                                                  <img src={item.image} alt=""  key={item.id} onClick={() => navigate(item.url) }/>
                                                            )}
                                                </div>
                                                <div className="membership-link">
                                                          <Link to={"/member-firms/"}>Explore More</Link>
                                                </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default AboutBody