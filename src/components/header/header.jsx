import t4m_logo from "../../images/logos/t4m_logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import "./header.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
const Header = () => {
  return (
    <div className="header">
      <Fade top delay={700}>
        <div className="logo">
          <img alt="company-logo" src={t4m_logo} width={215} />
        </div>
      </Fade>
      <div className="nav-menus">
        <ul className="navbar-menus">
          <Fade top delay={1000}>
            <li>
              <Link to="/">Home </Link>
            </li>
          </Fade>
          <Fade top delay={1500}>
            <li>
              <Link to="/about">Who are we </Link>
            </li>
          </Fade>
          <Fade top delay={2000}>
            <li>
              <Link to="/services">Services </Link>
            </li>
          </Fade>
          <Fade top delay={2500}>
            <li>
              <Link to="contact">Contact us </Link>
            </li>
          </Fade>
        </ul>
      </div>{" "}
      <Pulse infinite>
        <div className="contact-btn">
          <button className="btn btn-sm btn-contact-us">Contact us</button>
        </div>
      </Pulse>
      <div className="contact-btn-sm">
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Header;
