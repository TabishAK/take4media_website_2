import { Container } from "react-bootstrap";
import "./service.scss";
import Fade from "react-reveal/Fade";

const Service = (props) => {
  return (
    <Container className="service" fluid style={props.style}>
      <Fade bottom delay={500}>
        {props.data.heading}
      </Fade>
      <Fade bottom delay={600}>
        <p>{props.data.text}</p>
      </Fade>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br />
      <br />
    </Container>
  );
};

export default Service;
