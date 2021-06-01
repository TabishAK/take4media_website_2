import Banner from "../../components/banner/banner";
import OurServices from "../../components/our_services/our_services";
import InfoText from "./../../components/info_text/info_text";
import "./services.scss";
import Service from "./../../components/service/service";
import design from "../../images/backgrounds/design.png";
import social_media from "../../images/backgrounds/social_media.png";
import website from "../../images/backgrounds/website.png";
import Footer from "./../../components/footer/footer";

const Services = () => {
  return (
    <div className="services">
      <Banner conf={{ isButton: false, page: 3 }} />
      <InfoText />
      <OurServices />
      <Service
        data={{
          heading: <h1 className="designing">Designing</h1>,
          text: `Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, Lorem
        Ipsum has been the industry's
        standard dummy text ever
        since the 1500s,`,
        }}
        style={{
          backgroundImage: `url(${design})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Service
        data={{
          heading: (
            <h1 className="social_media">
              <span> Social Media</span>
              <br /> Marketing
            </h1>
          ),
          heading_2: "",

          text: `Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, Lorem
        Ipsum has been the industry's
        standard dummy text ever
        since the 1500s,`,
        }}
        style={{
          backgroundImage: `url(${social_media})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Service
        data={{
          heading: (
            <h1 className="website">
              <span> Website </span>
              <br />
              Development
            </h1>
          ),
          text: `Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, Lorem
      Ipsum has been the industry's
      standard dummy text ever
      since the 1500s,`,
        }}
        style={{
          backgroundImage: `url(${website})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Footer />
    </div>
  );
};

export default Services;
