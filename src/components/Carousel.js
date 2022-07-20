import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../carouselData";
import "./carousel.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PrevBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIcon style={{ color: "black", fontSize: "1.2rem" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIcon style={{ color: "black", fontSize: "1.2rem" }} />
    </div>
  );
};
console.log(Images);
const paging = (i) => {
  return (
    <div className="paging">
      <img src={Images[i].img} alt="" />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="carousel">
      <Slider
        dots={true}
        customPaging={paging}
        dotsClass="slick-dots custom-indicator"
        prevArrow={<PrevBtn />}
        nextArrow={<NextBtn />}
      >
        {Images.map((item, idx) => {
          return (
            <div key={item.id}>
              <div className="carousel-img">
                <img src={item.img} alt="" />
              </div>
              <div className="img-details">
                <span style={{ fontWeight: "bold" }}>Image : &nbsp;</span>
                <span>
                  {idx + 1}/{Images.length}
                </span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
