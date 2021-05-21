import { Container } from "react-bootstrap";
import Banner from "../../components/banner/banner";
import t4m_logo from "../../images/logos/t4m_logo.png";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Banner />

      <Container>
        <h1
          style={{
            lineHeight: "55px",
            textAlign: "left",
            marginTop: "12%",
            fontFamily: "helvetica",
            color: "#adacac",
          }}
        >
          We
          <img
            src={t4m_logo}
            alt="logo"
            style={{
              marginRight: "13px",
              width: "210px",
              marginBottom: "12px",
            }}
          />
          Are An Agency Specializing In <br /> Creative Advertising,
          Photography,
          <br />
          Videography, Highend Photo Retouching & <br />
          Social Media Marketing.
        </h1>

        <h1
          style={{
            lineHeight: "55px",
            textAlign: "left",
            marginTop: "6%",
            fontFamily: "helvetica",
            color: "#adacac",
          }}
        >
          <span style={{ color: "#8cc63f" }}>
            <u>Our Team</u>
          </span>{" "}
          Creates Amazing Designs, Web-sites,
          <br /> Develops Viral Campaigns & Commercials
        </h1>
      </Container>
    </div>
  );
};

export default Home;
