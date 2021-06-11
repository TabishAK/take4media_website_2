import "./banner.scss";
import Header from "../../components/header/header";
import BannerHeading from "../../components/banner_heading/banner_heading";
import DownButton from "../down_button/down_button";
import { useEffect, useState } from "react";
import SlideAnimations from "./../slide_animation/slide_aniamtion";
const Banner = (props) => {
  let [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!isLoading && <SlideAnimations />}

      <div className="banner" style={{ background: props.conf.colo }}>
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
            <br />
            <br />
          </>
        ) : props.conf.page === 1 ? (
          <>
            <br /> <br /> <br /> <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br /> <br /> <br />
            <br /> <br /> <br /> <br /> <br />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Banner;
