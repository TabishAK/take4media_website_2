import { Container } from "react-bootstrap";
import Banner from "../../components/banner/banner";
import OurServices from "../../components/our_services/our_services";
import InfoText from "./../../components/info_text/info_text";
import "./services.scss";
const Services = () => {
  return (
    <div className="services">
      <Banner conf={{ isButton: false, page: 3 }} />
      <InfoText />
      <OurServices />
    </div>
  );
};

export default Services;
