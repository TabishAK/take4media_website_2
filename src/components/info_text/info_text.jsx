import t4m_logo from "../../images/logos/t4m_logo.png";
import LearnMore from "./../buttons/learn_more";
import "./info_text.scss";
import Fade from "react-reveal/Fade";

const InfoText = () => {
  return (
    <div className="container-fluid info-text scroll">
      <Fade bottom delay={600}>
        <h1>
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
      </Fade>
      <Fade bottom delay={700}>
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
      </Fade>
      <Fade bottom delay={800}>
        <LearnMore class="btn-sm btn-learn-more-2" />
      </Fade>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default InfoText;
