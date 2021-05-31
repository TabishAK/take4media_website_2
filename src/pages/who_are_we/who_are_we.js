import Banner from "./../../components/banner/banner";
import "./who_are_we.scss";
import team from "../../images/backgrounds/team.jpeg";
import StartFromScratch from "../../components/start_from_scratch/start_from_scratch";
import { Col, Container, Row } from "react-bootstrap";
import gallery_3 from "../../images/gallery/gallery_3.png";
import Footer from "../../components/footer/footer";
const WhoAreWePage = () => {
  return (
    <div className="who-are-page">
      <Banner conf={{ isButton: false, page: 2 }} />
      <img style={{ width: "100%" }} src={team} alt="company" />
      <StartFromScratch />

      <Container fluid className="working-enviornment">
        <h1>
          Working
          <br /> in Friendly
          <br /> <span>Environment</span>
        </h1>
        <Row
          style={{
            top: "10rem",
            position: "relative",
          }}
        >
          <Col lg={6} md={6} sm={12} xs={12}>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book
            </p>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img className="gallery_3" src={gallery_3} alt="team" />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
};

export default WhoAreWePage;
