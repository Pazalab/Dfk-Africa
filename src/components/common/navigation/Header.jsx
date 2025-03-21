import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
//import { IoSearchOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useContext, useEffect, useRef, useState } from "react";
import { sidebarContext } from "./navcontext";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
  const [dropdownStatus, setDropdownStatus ] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
        window.addEventListener("scroll", () => {
          if(window.scrollY > 150){
               headerRef.current.classList.add("active")
          }else{
               headerRef.current.classList.remove("active")
         }
        })
  }, [])
  return (
    <header ref={headerRef}>
             <div className="inner-row">
                         <div className="header-content">
                                   <Link to={"/"} className="logo">
                                           <img src={logo} alt="" />
                                    </Link>
                                    <nav>
                                              <ul>
                                                        <li><NavLink to={"/"}>Home</NavLink></li>
                                                       <li><NavLink to={"/dfk-africa/"}>Who We Are</NavLink></li>
                                                       <li><NavLink to={"/our-solutions/"}>What We Do</NavLink></li>
                                                        <li onMouseEnter={() => setDropdownStatus(true)} onMouseLeave={() => setDropdownStatus(false)}><NavLink to={"/member-firms/"}>Membership</NavLink>
                                                                   <div  className={ dropdownStatus ? "dropdown active" : "dropdown"}>
                                                                            <ul>
                                                                                      <li><Link to={"/member-firms"}>Find a Firm</Link></li>
                                                                                      {/* <li><Link to={"/"}>Countries</Link></li> */}
                                                                            </ul>
                                                                   </div>
                                                        </li>
                                                        <li><NavLink to={"/resources/"}>Insights</NavLink></li>
                                                        {/* <li> <NavLink to={"/get-in-touch/"}>Contact Us</NavLink></li>            */}
                                              </ul>
                                    </nav>
                                    <div className="action-btn">
                                              <Link to={"/contact-us"}>Get in Touch </Link>

                                              <div className="menu-btn" onClick={() => setSidebarStatus(true)}>
                                                          <span><CgMenuGridO /></span>
                                              </div>
                                    </div>
                         </div>
             </div>
    </header>
  )
}

export default Header