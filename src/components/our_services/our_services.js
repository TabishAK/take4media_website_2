import { Container } from "react-bootstrap";
import "./our_services.scss";
const OurServices = () => {
  return (
    <Container fluid className="our-services">
      <h1>
        Our <br />
        <span className="services">Services</span>
      </h1>

      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>

      <button className="btn btn-sm read-more">Read More</button>
    </Container>
  );
};

export default OurServices;
