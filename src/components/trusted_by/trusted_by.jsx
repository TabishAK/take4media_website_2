import "./trusted_by.scss";
import logo_1 from "../../images/logos/1.png";
import logo_2 from "../../images/logos/2.png";
import logo_3 from "../../images/logos/3.png";
import logo_4 from "../../images/logos/4.png";
import logo_5 from "../../images/logos/5.png";
import logo_6 from "../../images/logos/6.png";
import BigHeading from "./../../components/big_heading/big_heading";
import { Container } from "react-bootstrap";

const TrustedBy = () => {
  return (
    <Container fluid className="trusted-by mt-5">
      <BigHeading headingText="Trusted by" isRightHeading={false} />

      <ul className="logos">
        <li>
          <img src={logo_1} alt="logo_1" />
        </li>
        <li>
          <img src={logo_2} alt="logo_2" />
        </li>
        <li>
          <img src={logo_3} alt="logo_3" />
        </li>
        <li>
          <img src={logo_4} alt="logo_4" />
        </li>
        <li>
          <img src={logo_5} alt="logo_5" />
        </li>
        <li>
          <img src={logo_6} alt="logo_6" />
        </li>
      </ul>
    </Container>
  );
};

export default TrustedBy;
