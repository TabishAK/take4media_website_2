import "./banner.scss";
import Header from "../../components/header/header";
import BannerHeading from "../../components/banner_heading/banner_heading";
import DownButton from "../down_button/down_button";
const Banner = (props) => {
  return (
    <div className="banner">
      <Header />
      <BannerHeading conf={props.conf} />
      <DownButton makeScroll={props.makeScroll} conf={props.conf} />
      {props.conf.page === 2 ||
      props.conf.page === 3 ||
      props.conf.page === 4 ? (
        <>
          <br /> <br /> <br /> <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br /> <br />
        </>
      ) : props.conf.page === 1 ? (
        <>
          <br /> <br /> <br /> <br />
          <br />
          <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Banner;
