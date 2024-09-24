import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.webp"
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
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
                                    </div>
                         </div>
             </div>
    </header>
  )
}

export default Header