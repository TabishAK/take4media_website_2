import { Container, Row } from "react-bootstrap";
import address from "../../images/icons/check-in.png";
import phone from "../../images/icons/call.png";
import email from "../../images/icons/email.png";
import "./information_bar.scss";
import Fade from "react-reveal/Fade";

const InformationBar = () => {
  return (
    <Container fluid className="contact-icons scroll">
      <div className="row">
        <div className="adress col-lg-4 col-md-4">
          <Fade bottom delay={500}>
            <img src={address} alt="address" />
          </Fade>
          <Fade bottom delay={600}>
            <h1>Address</h1>
          </Fade>
          <span className="span">
            <Fade bottom delay={700}>
              <h5>Prinsengracht 526</h5>
              <h5>1017 KJ Amsterdam</h5>
              <h5>The Netherlands</h5>
            </Fade>
          </span>
        </div>
        <div className="phone col-lg-4 col-md-4">
          <Fade bottom delay={500}>
            <img src={phone} alt="call" />
          </Fade>
          <Fade bottom delay={600}>
            <h1>Phone</h1>
          </Fade>
          <span className="span">
            <Fade bottom delay={700}>
              <h5>Phone: +31 20 261 5080</h5>
              <h5>Phone: +31 20 261 5080</h5>
              <h5>Phone: +31 20 261 5080</h5>
            </Fade>
          </span>
        </div>
        <div className="email col-lg-4 col-md-4">
          <Fade bottom delay={500}>
            <img src={email} alt="email " />
          </Fade>
          <Fade bottom delay={600}>
            <h1>Email</h1>
          </Fade>

          <span className="span">
            <Fade bottom delay={700}>
              <h5>info@take4media.com</h5>
            </Fade>
          </span>
        </div>
        <br />
      </div>
    </Container>
  );
};

export default InformationBar;
