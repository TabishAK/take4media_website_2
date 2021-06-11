import { Container } from "react-bootstrap";
import Banner from "../../components/banner/banner";
import "react-multi-carousel/lib/styles.css";
import "./../../components/carousel/components/style.scss";
import InfoText from "../../components/info_text/info_text";
import "./home.scss";
import WhoAreWe from "../../components/whoAreWe/whoAreWe";
import TrustedBy from "../../components/trusted_by/trusted_by";
import Blogs from "./../../components/blogs/blog";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import SlideAnimations from "../../components/slide_animation/slide_aniamtion";
import { scroller } from "react-scroll";
import Simple from "../../components/carousel/components/Simple";

const Home = () => {
  let [isLoading, setLoading] = useState(true);

  const makeScroll = (a) => {
    scroller.scrollTo(a, {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!isLoading && <SlideAnimations />}
      <div className="home">
        <Banner makeScroll={makeScroll} conf={{ isButton: true, page: 1 }} />

        <InfoText />
        <Container fluid className="our-work ">
          <h1>Our Work</h1>
          <Simple />
        </Container>
        <WhoAreWe />
        <TrustedBy />
        <Blogs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
