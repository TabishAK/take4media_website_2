import { Container } from "react-bootstrap";
import Banner from "../../components/banner/banner";
import "react-multi-carousel/lib/styles.css";
import "./../../components/carousel/components/style.scss";
import InfoText from "../../components/info_text/info_text";
import Simple from "./../../components/carousel/components/Simple";
import "./home.scss";
import WhoAreWe from "../../components/whoAreWe/whoAreWe";
import TrustedBy from "../../components/trusted_by/trusted_by";
import Blogs from "./../../components/blogs/blog";
import t4m_logo from "../../images/logos/t4m_logo.png";
import { FaFacebookF } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <InfoText />
      <Container fluid className="our-work mt-5">
        <h1>Our Work</h1>
        <Simple />
      </Container>
      <WhoAreWe />
      <TrustedBy />
      <Blogs />

      <Container fluid className="footer">
        <div className="row f-part-1">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <img
              className="ml-5"
              style={{
                marginLeft: "70px",
                width: "75%",
              }}
              src={t4m_logo}
              alt="take_4_media"
            />
          </div>
          <div className="col-lg-3 col-md-3"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <ul>
              <li>Home</li>
              <li>Who we are</li>
              <li>Our work</li>
              <li>Blog</li>
              <li>Team</li>
              <li>Packages</li>
              <li>Email us</li>
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <div className="row f-part-2">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 address">
            <h4>Amsterdam</h4>
            <h6>Prinsengracht 526</h6>
            <h6>1017 KJ Amsterdam</h6>
            <h6>The Netherlands</h6>
            <h6>Phone: +31 20 261 5080</h6>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div className="social-media-icons">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
