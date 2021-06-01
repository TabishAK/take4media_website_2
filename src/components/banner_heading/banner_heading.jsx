import { Container } from "react-bootstrap";
import LearnMore from "../buttons/learn_more";
import "./banner_heading.scss";
const BannerHeading = (props) => {
  return (
    <Container className="headings">
      {props.conf.page === 1 ? (
        <>
          <div className="first-one">
            <h1 className="we-build">We Build </h1>
            <h1 className="creative ">Creative</h1>
          </div>
          <div className="second-one">
            <h1 className="outstanding">Outstanding </h1>
            <h1 className="compaigns">Campaigns.</h1>
          </div>
        </>
      ) : props.conf.page === 2 ? (
        <h1 className="page-2">
          Get your
          <br /> Swift ride
          <br /> to{" "}
          <span className="success" style={{ color: "#f2782a" }}>
            Success
          </span>
        </h1>
      ) : props.conf.page === 3 ? (
        <h1 className="page-3">
          We have <br />
          the Bucket fill
          <br /> with <span className="ideas">Ideas</span>
        </h1>
      ) : props.conf.page === 4 ? (
        <h1 className="page-4">
          <span className="reach">Reach</span> us out
        </h1>
      ) : (
        ""
      )}

      {props.conf.isButton ? (
        <LearnMore class="btn btn-sm btn-learn-more" />
      ) : (
        ""
      )}
    </Container>
  );
};

export default BannerHeading;
