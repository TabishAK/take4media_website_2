import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./our_services.scss";
const OurServices = () => {
  return (
    <Container fluid className="our-services">
      <Fade bottom delay={600}>
        <h1>
          Our <br />
          <span className="services">Services</span>
        </h1>
      </Fade>
      <Fade bottom delay={700}>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </Fade>
      <Fade bottom delay={800}>
        <button className="btn btn-sm read-more">Read More</button>
      </Fade>
      <>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br /> <br />
      </>
    </Container>
  );
};

export default OurServices;
