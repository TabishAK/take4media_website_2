import { Container } from "react-bootstrap";
import "./start_from_scratch.scss";
const StartFromScratch = () => {
  return (
    <Container fluid className="started-from-scratch">
      <h1>
        <span className="started">Started</span>
        <br />
        <span className="from-the">From </span> <br />
        <span className="scratch">Scratch </span>
      </h1>
      <p>
        Lorem Ipsum has been the industry's
        <br /> standard dummy text ever since the
        <br /> 1500s, when an unknown printer took a <br />
        galley of type and scrambled it to make
        <br /> a type specimen book.
      </p>
      <button className="btn btn-sm read-more">Read More</button>
      <br />
      <br />
      <br />
      <br /> <br /> <br /> <br /> <br /> <br />
    </Container>
  );
};

export default StartFromScratch;
