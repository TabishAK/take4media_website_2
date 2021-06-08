import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Map from "./../../components/map/map";
import "./contact_us.scss";
import Footer from "../../components/footer/footer";
import InformationBar from "../../components/information_bar/information_bar";
import { Container } from "react-bootstrap";
import SlideAnimations from "./../../components/slide_animation/slide_aniamtion";
import { scroller } from "react-scroll";

const ContactUs = () => {
  let [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const makeScroll = (a) => {
    scroller.scrollTo(a, {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {!isLoading && <SlideAnimations />}

      <div className="contact-us">
        <Banner makeScroll={makeScroll} conf={{ isButton: false, page: 4 }} />
        <Map />
        <InformationBar />

        <Container fluid className="contact-form">
          <h1>Send us your query</h1>
          <div className="input-forms">
            <center>
              <div className="input-1">
                <h5>Name</h5>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name here.."
                />
              </div>

              <div className="input-2">
                <h5>Email</h5>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your email here.."
                />
              </div>
              <div className="input-3">
                <h5>Your query</h5>
                <textarea
                  placeholder="Type your query here.."
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                />
              </div>
              <button className="submit-btn btn-sm btn">Sumbit</button>
            </center>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
