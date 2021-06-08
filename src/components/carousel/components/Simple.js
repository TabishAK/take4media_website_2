import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import slide_1 from "../../../images/gallery/gallery_2.jpeg";
import slide_2 from "../../../images/gallery/gallery_1.jpeg";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={8}
        visibleSlides={1}
        currentSlide={1}
      >
        <Slider>
          <Slide index={0}>
            <img
              src={slide_1}
              alt="img-1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Slide>
          <Slide index={1}>
            <img
              src={slide_2}
              alt="img-1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Slide>
          <Slide index={2}>
            <img
              src={slide_2}
              alt="img-1"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Slide>
          <Slide index={3}>I am the fourth Slide.</Slide>
          <Slide index={4}>I am the fifth Slide.</Slide>
          <Slide index={5}>I am the sixth Slide.</Slide>
          <Slide index={6}>I am the seventh Slide.</Slide>
          <Slide index={7}>I am the eighth Slide.</Slide>
        </Slider>
        <ButtonBack>
          <AiOutlineArrowLeft style={{ color: "orange" }} />
        </ButtonBack>
        <ButtonNext>
          <AiOutlineArrowRight style={{ color: "orange" }} />
        </ButtonNext>
      </CarouselProvider>
    );
  }
}
