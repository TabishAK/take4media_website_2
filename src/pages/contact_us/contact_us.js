import React from "react";
import Banner from "../../components/banner/banner";
import Map from "./../../components/map/map";
import "./contact_us.scss";
import Footer from "../../components/footer/footer";
import InformationBar from "../../components/information_bar/information_bar";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Banner conf={{ isButton: false, page: 4 }} />
      <Map />
      <InformationBar />
      <Footer />
    </div>
  );
};

export default ContactUs;
