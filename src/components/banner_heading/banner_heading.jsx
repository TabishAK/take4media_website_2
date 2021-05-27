import { Container } from "react-bootstrap";
import LearnMore from "../buttons/learn_more";
import "./banner_heading.scss";
const BannerHeading = () => {
  return (
    <Container className="headings">
      <div className="first-one">
        <h1 className="we-build">We Build </h1>
        <h1 className="creative ">Creative</h1>
      </div>
      <div className="second-one">
        <h1 className="outstanding">Outstanding </h1>
        <h1 className="compaigns">Campaigns.</h1>
      </div>

      <LearnMore class="btn btn-sm btn-learn-more" />
    </Container>
  );
};

export default BannerHeading;
