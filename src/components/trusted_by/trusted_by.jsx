import "./trusted_by.scss";
import logo_1 from "../../images/logos/1.png";
import logo_2 from "../../images/logos/2.png";
import logo_3 from "../../images/logos/3.png";
import logo_4 from "../../images/logos/4.png";
import logo_5 from "../../images/logos/5.png";
import logo_6 from "../../images/logos/6.png";
import BigHeading from "./../../components/big_heading/big_heading";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const TrustedBy = () => {
  return (
    <Container fluid className="trusted-by mt-5">
      <BigHeading
        style={{
          marginTop: "-40px",
          width: "20%",
          left: "6%",
          position: "relative",
        }}
        headingText="Trusted by"
        isRightHeading={false}
      />

      <ul className="logos">
        <li>
          <Fade bottom delay={500}>
            <img src={logo_1} alt="logo_1" />
          </Fade>
        </li>
        <li>
          <Fade bottom delay={600}>
            <img src={logo_2} alt="logo_2" />
          </Fade>
        </li>
        <li>
          <Fade bottom delay={700}>
            <img src={logo_3} alt="logo_3" />
          </Fade>
        </li>
        <li>
          <Fade bottom delay={800}>
            <img src={logo_4} alt="logo_4" />
          </Fade>
        </li>
        <li>
          <Fade bottom delay={900}>
            <img src={logo_5} alt="logo_5" />
          </Fade>
        </li>
        <li>
          <Fade bottom delay={1000}>
            <img src={logo_6} alt="logo_6" />
          </Fade>
        </li>
      </ul>
    </Container>
  );
};

export default TrustedBy;
