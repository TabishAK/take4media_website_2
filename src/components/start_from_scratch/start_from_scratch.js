import { Container } from "react-bootstrap";
import "./start_from_scratch.scss";
import Fade from "react-reveal/Fade";

const StartFromScratch = () => {
  return (
    <Container fluid className="started-from-scratch scroll">
      <h1>
        <Fade bottom delay={500}>
          <span className="started">Started</span>
        </Fade>

        <br />
        <Fade bottom delay={600}>
          <span className="from-the">From </span> <br />
        </Fade>

        <Fade bottom delay={700}>
          <span className="scratch">Scratch </span>
        </Fade>
      </h1>
      <Fade bottom delay={700}>
        <p>
          Lorem Ipsum has been the industry's
          <br /> standard dummy text ever since the
          <br /> 1500s, when an unknown printer took a <br />
          galley of type and scrambled it to make
          <br /> a type specimen book.
        </p>
      </Fade>
      <Fade bottom delay={800}>
        <button className="btn btn-sm read-more">Read More</button>
      </Fade>
      <br />
      <br />
      <br />
      <br /> <br /> <br /> <br /> <br /> <br />
    </Container>
  );
};

export default StartFromScratch;
