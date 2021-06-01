import { Container } from "react-bootstrap";
import address from "../../images/icons/check-in.png";
import phone from "../../images/icons/call.png";
import email from "../../images/icons/email.png";
import "./information_bar.scss";
const InformationBar = () => {
  return (
    <Container fluid className="contact-icons">
      <div className="adress">
        <img src={address} alt="address" />
        <h1>Address</h1>
        <span className="span">
          <h5>Prinsengracht 526</h5>
          <h5>1017 KJ Amsterdam</h5>
          <h5>The Netherlands</h5>
        </span>
      </div>
      <div className="phone">
        <img src={phone} alt="call" />
        <h1>Phone</h1>
        <span className="span">
          <h5>Phone: +31 20 261 5080</h5>
          <h5>Phone: +31 20 261 5080</h5>
          <h5>Phone: +31 20 261 5080</h5>
        </span>
      </div>
      <div className="email">
        <img src={email} alt="email" />
        <h1>Email</h1>
        <span className="span">
          <h5>info@take4media.com</h5>
        </span>
      </div>
    </Container>
  );
};

export default InformationBar;
