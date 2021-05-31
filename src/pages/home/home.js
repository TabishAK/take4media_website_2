import { Container } from "react-bootstrap";
import Banner from "../../components/banner/banner";
import "react-multi-carousel/lib/styles.css";
import "./../../components/carousel/components/style.scss";
import InfoText from "../../components/info_text/info_text";
import Simple from "./../../components/carousel/components/Simple";
import "./home.scss";
import WhoAreWe from "../../components/whoAreWe/whoAreWe";
import TrustedBy from "../../components/trusted_by/trusted_by";
import Blogs from "./../../components/blogs/blog";
import Footer from "../../components/footer/footer";
const Home = () => {
  return (
    <div className="home">
      <Banner conf={{ isButton: true, page: 1 }} />
      <InfoText />
      <Container fluid className="our-work mt-5">
        <h1>Our Work</h1>
        <Simple />
      </Container>
      <WhoAreWe />
      <TrustedBy />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
