import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Map from "./../../components/map/map";
import "./contact_us.scss";
import Footer from "../../components/footer/footer";
import InformationBar from "../../components/information_bar/information_bar";
import { Container } from "react-bootstrap";
import SlideAnimations from "./../../components/slide_animation/slide_aniamtion";
import { scroller } from "react-scroll";
import axios from "axios";
import Loader from "./../../components/loader/loader";
import validator from "validator";

const ContactUs = () => {
  let [isLoading, setLoading] = useState(true);
  let [data, setData] = useState({ name: "", email: "", query: "" });
  let [isLoader, setLoader] = useState(false);
  let [error, setError] = useState("");

  useEffect(() => {
    setLoading(false);
  }, []);

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const submitForm = async (e) => {
    if (validator.isEmail(data.email)) {
      setLoader(true);
      e.preventDefault();
      axios({
        method: "POST",
        url: "http://localhost:5000/send",
        data: data,
      }).then((response) => {
        setLoader(false);
        if (response.data.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      });
    } else {
      setError("Enter valid email address!");
    }
  };

  const resetForm = () => {
    setData({ name: "", email: "", query: "" });
  };

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
                  name="name"
                  value={data.name}
                  placeholder="Your name here.."
                  onChange={onFieldChange}
                  required
                />
              </div>
              <div className="input-2">
                <h5>Email</h5>
                <input
                  type="email"
                  id="lname"
                  name="email"
                  value={data.email}
                  onChange={onFieldChange}
                  placeholder="Your email here.."
                  required
                />
              </div>
              <h6 style={{ color: "white" }}> {error}</h6>
              <div className="input-3">
                <h5>Your query</h5>
                <textarea
                  placeholder="Type your query here.."
                  id="w3review"
                  name="query"
                  value={data.query}
                  rows="4"
                  onChange={onFieldChange}
                  cols="50"
                  required
                />
              </div>
              {isLoader ? <Loader /> : ""}
              <button
                className={
                  data.name === "" || data.email === "" || data.query === ""
                    ? "submit-btn btn-sm btn disabled"
                    : "submit-btn btn-sm btn"
                }
                onClick={submitForm}
              >
                Sumbit
              </button>
            </center>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
