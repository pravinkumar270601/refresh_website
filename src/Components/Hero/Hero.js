import React from "react";
import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import image1 from "../Assets/hair-1.webp";
import image2 from "../Assets/hair-slider-2.webp";
import image3 from "../Assets/hair-slider-3.webp";

function Hero(props) {
  const [index, setIndex] = useState(0);

  const items = [
    {
      src: image1,
      id: 1,
      alt: "Image 1",
      caption: "Your hair, but better.",
      description:
        "Lather up with our newest shampoo for clean, strong, and healthy hair.",
      btn: "Shop shampoo",
    },
    {
      src: image2,
      id: 2,
      alt: "Image 2",
      caption: "Keep things simple.",
      description:
        "Build an easy-care hair routine you'll actually want to follow.",
      btn: "Shop hair",
    },
    {
      src: image3,
      id: 3,
      alt: "Image 3",
      caption: "So fresh, so clean.",
      description:
        "Get a quality clean with powerhouse formulas to keep your skin smelling fresh and looking healthy.",
      btn: "Shop body",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="hero">
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} b>
          {items.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 carousel-img"
                src={item.src}
                alt={item.alt}
              />
              <Carousel.Caption className={`carosel-content-${item.id}`}>
                <h1 className="pt-4">{item.caption}</h1>
                <p>{item.description}</p>
                <button className="text-start ">{item.btn}</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="carousel-navigation">
          <span
            className="slider-btn"
            onClick={() => setIndex((index - 1 + items.length) % items.length)}
          >
            &lt; &nbsp;&nbsp;&nbsp; {index + 1}/
          </span>
          <span
            className="slider-btn"
            onClick={() => setIndex((index + 1 + items.length) % items.length)}
          >
            {items.length} &nbsp;&nbsp;&nbsp; &gt;
          </span>
        </div>
      </div>
      <hr className="hero-hr-line" />
    </div>
  );
}

export default Hero;
