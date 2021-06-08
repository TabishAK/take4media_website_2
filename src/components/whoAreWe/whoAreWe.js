import "./whoAreWe.scss";
import WE from "../../images/logos/we.png";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const WhoAreWe = () => {
  return (
    <Container fluid className="who-are-we">
      <Fade bottom delay={500}>
        <h1 className="ml-5">Who are</h1>
      </Fade>
      <Fade bottom delay={600}>
        <img src={WE} alt="we" />
      </Fade>
      <Fade bottom delay={700}>
        <h2>
          Lorem Ipsum has been the industry's <br />
          standard dummy text ever <br />
          since the 1500s,
        </h2>{" "}
      </Fade>
      <Fade bottom delay={800}>
        <h2 className="mt-6">
          Lorem Ipsum has been the industry's standard
          <br /> dummy text ever since the 1500s,
        </h2>{" "}
      </Fade>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default WhoAreWe;
