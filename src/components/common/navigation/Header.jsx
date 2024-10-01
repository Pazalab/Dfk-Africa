import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.webp"
import { IoSearchOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus] = useContext(sidebarContext);

  return (
    <header>
             <div className="inner-row">
                         <div className="header-content">
                                   <Link to={"/"} className="logo">
                                           <img src={logo} alt="" />
                                    </Link>
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