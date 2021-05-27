import "./whoAreWe.scss";
import WE from "../../images/logos/we.png";
import { Container } from "react-bootstrap";

const WhoAreWe = () => {
  return (
    <Container fluid className="who-are-we">
      <h1 className="ml-5">Who are</h1>
      <img src={WE} alt="we" />
      <h2>
        Lorem Ipsum has been the industry's <br />
        standard dummy text ever <br />
        since the 1500s,
      </h2>
      <h2 className="mt-6">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </h2>
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
