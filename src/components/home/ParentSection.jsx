import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";

const ParentSection = () => {
  return (
    <div className="parent-section">
                <div className="inner-row">
                            <div className="parent-section-content">
                                         <h3>Parent Organization</h3>
                                         <h2>DFK International</h2>

                                         <div className="parent-description">
                                                    <p>We are a powerful global alliance of independent accounting firms, collaborating seamlessly across more than 450 offices in over 90 countries. Each member upholds the DFK standard of excellence, ensuring consistent, high-quality service delivery.</p>
                                                    <p>Recognized as one of the most trusted and cohesive networks worldwide, DFK members leverage vast international expertise to provide tailored, client-focused solutions across diverse jurisdictions.</p>
                                                    <p>At the heart of DFK is a deeply rooted culture of collaboration and trust. This foundation fuels exclusive forums for managing partners, specialized professional groups, and cutting-edge development programs, nurturing the next generation of leaders in our firms.</p>
                                                    <p>This is DFK. <span>United</span>, <span>empowered</span>, and <span>leading globally</span>.</p>
                                         </div>

                                         <Link to={"/"}>Explore  <span><GoArrowUpRight /></span></Link>
                            </div>
                </div>
    </div>
  )
}

export default ParentSection