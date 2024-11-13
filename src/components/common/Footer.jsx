import { Link } from "react-router-dom"
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
const Footer = () => {
  return (
    <footer>
              <div className="inner-row"> 
                       <div className="footer-content">
                                 <div className="footer-section-moja">
                                           <div className="footer-column">
                                                     <h2>DFK Africa</h2>
                                                     <p>An association of independent accounting and business advisory firms in Africa, with national connections and global reach to drive success at every level.</p>
                                                     <div className="footer-social-links">
                                                              <ul>
                                                                       <li><Link target="_blank"><span><FaFacebookF /></span></Link></li>
                                                                       <li><Link target="_blank"><span><FaXTwitter /></span></Link></li>
                                                                       <li><Link target="_blank"><span><FaInstagram /></span></Link></li>
                                                                       <li><Link target="_blank"><span><FaLinkedinIn /></span></Link></li>
                                                              </ul>
                                                     </div>
                                           </div>
                                           <div className="footer-column-two">
                                                      <div className="footer-inner-column">
                                                                 <h3>Organization</h3>

                                                                 <ul>
                                                                          <li><Link to={"/"}>Home</Link></li>
                                                                          <li><Link to={"/dfk-africa/"}>Who We Are</Link></li>
                                                                          <li><Link to={"/our-solutions/"}>What We Do</Link></li>
                                                                          <li><Link to={"/member-firms/"}>Membership</Link></li>
                                                                          <li><Link to={"/resources/"}>Insights</Link></li>
                                                                 </ul>
                                                      </div>
                                                      <div className="footer-inner-column">
                                                                 <h3>Get in Touch with Us</h3>

                                                                  <div className="footer-box">
                                                                             <h4>Address</h4>
                                                                             <p>Scripture Union Centre, Hurlingham, 1st Floor, Argwings Kodhek Rd - Nairobi, Kenya</p>
                                                                  </div>
                                                                  <div className="footer-box">
                                                                            <h4>Phone</h4>
                                                                            <p>+254 712345678</p>
                                                                  </div>
                                                                  <div className="footer-box">
                                                                               <h4>Email</h4>
                                                                               <p>hello@dfk-africa.com</p>
                                                                  </div>
                                                      </div>
                                           </div>
                                 </div>
                       </div>

                       <div className="copyright">
                                 <p>All rights reserved &copy; {new Date().getFullYear()} DFK Africa</p>
                       </div>
              </div>
    </footer>
  )
}

export default Footer