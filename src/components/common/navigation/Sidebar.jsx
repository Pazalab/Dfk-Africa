import { CgClose } from "react-icons/cg"
import { NavLink, Link} from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { useRef, useEffect, useContext } from "react";
import { sidebarContext } from "./navcontext";
import gsap from "gsap";

const Sidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
  const sidebarRef = useRef();

  useEffect(() => {
    if(sidebarStatus){
           sidebarRef && sidebarRef.current.classList.add("active");
           const tl = gsap.timeline();
           tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                 x: 0,
                 duration: 0.8
           })
           tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                  x: 0,
                  duration: 0.8
           })
    }else{
          const tl = gsap.timeline();
          
          tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                 x: "100%",
                 duration: 0.8
           })
           tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                  x: "100%",
                  duration: 0.8
            })

           setTimeout(() => {
                  sidebarRef.current.classList.remove("active")
           }, 1600)
    }
}, [sidebarStatus])
  return (
    <div ref={sidebarRef} className="sidebar-section">
              <div className="sidebar-overlay"></div>
              <div className="sidebar-content">
                       <div className="sidebar-inner">
                                 <span onClick={() => setSidebarStatus(false)} className="close-btn"><CgClose /></span>

                                 <nav>
                                            <ul>
                                                      <li><NavLink to={"/"}>Home</NavLink></li>
                                                       <li><NavLink to={"/dfk-africa"}>Who We Are</NavLink></li>
                                                       <li><NavLink to={"/our-solutions"}>What We Do</NavLink></li>
                                                        {/* <li><NavLink to={"/membership"}>Membership</NavLink></li> */}
                                                        <li><NavLink to={"/resources"}>Resources</NavLink></li>
                                                        <li> <NavLink to={"/connect-with-us"}>Contact Us</NavLink></li>           
                                              </ul>
                                 </nav>

                                 <div className="action-btn">
                                              <Link to={"/"}><span><IoSearchOutline /></span> Find a Firm</Link>
                                  </div>
                       </div>
              </div>
    </div>
  )
}

export default Sidebar