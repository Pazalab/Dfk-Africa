import { Link } from "react-router-dom"

const Nudge = () => {
  return (
    <div className="nudge-section">
            <div className="inner-row">
                        <div className="nudge-section-content">
                                   <h2>Become a DFK Africa Member</h2>
                                   <p>As a member of DFK Africa, you gain full access to the DFK International website, including an exclusive members-only area. This provides you with valuable resources, tools, and insights tailored to support your firm’s growth and enhance global collaboration within the DFK network.</p>

                                   <div className="nudge-btns">
                                              <Link to={"/"}>Register</Link>
                                              <Link to={"/"}>Explore Member Firms</Link>
                                   </div>
                        </div>
            </div>
    </div>
  )
}

export default Nudge