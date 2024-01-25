import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logoContainer">
          <img className="logoImg" src="assets/Devkrafttrans.png" alt="" />
        </div>
        <div className="nav-elements">
          <ul className="navList">
            <li>
              <NavLink
                to="/home"
                className="navLinks"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navLinks"
                activeClassName="activeLink"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/domain"
                className="navLinks"
                activeClassName="activeLink"
              >
                Domain
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/schedule"
                className="navLinks"
                activeClassName="activeLink"
              >
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prizes"
                className="navLinks"
                activeClassName="activeLink"
              >
                Prizes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sponsors"
                className="navLinks"
                activeClassName="activeLink"
              >
                Sponsors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className="navLinks"
                activeClassName="activeLink"
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className="navLinks"
                activeClassName="activeLink"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navLinks"
                activeClassName="activeLink"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
