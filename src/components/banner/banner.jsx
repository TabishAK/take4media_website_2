import "./banner.scss";
import Header from "../../components/header/header";
import BannerHeading from "../../components/banner_heading/banner_heading";
import { AiOutlineArrowDown } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <BannerHeading />
      <div className="down-button mr-5">
        <AiOutlineArrowDown />
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default Banner;
