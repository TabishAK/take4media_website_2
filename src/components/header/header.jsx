import t4m_logo from "../../images/logos/t4m_logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={t4m_logo} width={215} />
      </div>

      <div className="nav-menus">
        <ul className="navbar-menus">
          <li>Home</li>
          <li>Explore</li>
          <li>Blogs</li>
          <li>Team</li>
          <li>Packages</li>
        </ul>
      </div>
      <div className="contact-btn">
        <button className="btn btn-sm btn-contact-us">Contact us</button>
      </div>

      <div className="contact-btn-sm">
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Header;
