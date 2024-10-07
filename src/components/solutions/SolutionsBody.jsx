import { useState } from "react"
import { solutions } from "../../data/solutions"

const SolutionsBody = () => {
    const [ active, setActive ] = useState(0)
  return (
    <div className="solutions-body">
             <div className="inner-row">
                        <div className="solutions-body-content">
                                    <div className="solutions-tabs">
                                               <ul>
                                                       { solutions.map(item => <li onClick={() => setActive(item.id)} className={active === item.id ? "active" : ""} key={item.id}>{item.name}</li>)}
                                               </ul>
                                    </div>
                                    <div className="solutions-tab-content">
                                              <h2>{ solutions.find(item => item.id === active).name}</h2>
                                               { solutions.find(item => item.id === active).content.map(kitu =>
                                                     <p key={kitu}>{kitu}</p>
                                               )}
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default SolutionsBody