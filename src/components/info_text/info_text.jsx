import t4m_logo from "../../images/logos/t4m_logo.png";
import LearnMore from "./../buttons/learn_more";
import "./info_text.scss";

const InfoText = () => {
  return (
    <div className="container info-text">
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
        Are An Agency Specializing In <br /> Creative Advertising, Photography,
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

      <LearnMore class="btn-sm btn-learn-more-2" />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default InfoText;
