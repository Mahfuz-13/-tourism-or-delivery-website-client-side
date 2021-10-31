import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 img" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Star Holidays</h3>
            <p>
              “Travel makes one modest. You see what a tiny place you occupy in
              the world.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Star Holidays</h3>
            <p>
              “See the world. It's more fantastic than any dream made or paid
              for in factories. Ask for no guarantees, ask for no security.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Star Holidays</h3>
            <p>You miss 100% of the shots you don't take. - ...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
