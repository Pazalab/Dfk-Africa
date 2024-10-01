import dum1 from "../../assets/dum1.jpg"
import dum2 from "../../assets/dum2.jpg"
import { GoLink } from "react-icons/go";
const InsightsSection = () => {
  return (
    <div className="insights-section">
             <div className="inner-row">
                           <div className="insights-section-content">
                                      <div className="intro">
                                                <h3>Latest News & Insights</h3>
                                                <p>Explore a wealth of knowledge, expert insights, and the latest industry news from our team, covering key areas such as business development, strategic growth, and succession planning. Our articles are designed to empower you with actionable advice, forward-thinking strategies, and in-depth analysis to help your business thrive, adapt to change, and secure long-term success in an ever-evolving marketplace. Stay informed and ahead with our comprehensive thought leadership.</p>
                                      </div>

                                      <div className="insights-row-content">
                                                   <div className="insight-moja">
                                                                <div className="image-section">
                                                                           <img src={dum1} alt="" />
                                                                           <div className="overlay">
                                                                                        <span><GoLink /></span>
                                                                           </div>
                                                                </div>
                                                               <h2>Strategic Insights for Business Excellence: Empowering Growth, Innovation, and Leadership</h2>
                                                               <h3>September 25, 2024</h3>

                                                               <p>Discover cutting-edge strategies and expert advice to drive growth, foster innovation, and elevate leadership within your business. Stay ahead with actionable insights from industry leaders and innovators.</p>
                                                   </div>
                                                   <div className="insight-moja">
                                                           <div className="image-section">
                                                                           <img src={dum2} alt="" />
                                                                           <div className="overlay">
                                                                                        <span><GoLink /></span>
                                                                           </div>
                                                                </div>
                                                           <h2>Unlocking Success: Expert Perspectives on Business Strategy, Growth and Future Trends</h2>
                                                           <h3>August 18, 2024</h3>
                                                           <p>Gain exclusive access to expert perspectives on key business strategies, market trends, and growth opportunities. Prepare your organization for the future with in-depth analysis and visionary insights.</p>
                                                   </div>
                                      </div>
                           </div>
             </div>
    </div>
  )
}

export default InsightsSection