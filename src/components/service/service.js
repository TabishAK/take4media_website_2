import { Container } from "react-bootstrap";
import "./service.scss";

const Service = (props) => {
  return (
    <Container className="service" fluid style={props.style}>
      {props.data.heading}
      <p>{props.data.text}</p>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br />
      <br />
    </Container>
  );
};

export default Service;
