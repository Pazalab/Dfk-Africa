import solutions from "../../assets/solutions1.jpg"
const SolutionsSections = () => {
  return (
    <div className="solutions-section">
            <div className="solutions-content">
                     <div className="solutions-column-image">
                               <div className="inset-overlay"></div>
                               <img src={solutions} alt="" />
                     </div>
                     <div className="solutions-column-texts">
                               <div className="solutions-column-inner">
                                        <h2>Delivering a <span>full spectrum of expert services</span> for businesses across diverse industries.</h2>
                               </div>
                     </div>
             </div>
    </div>
  )
}

export default SolutionsSections