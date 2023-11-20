import React from "react";
import "./WhyChoose.css";
import image1 from "../Assets/leaf.avif";
import image2 from "../Assets/cube.avif";
import image3 from "../Assets/review.webp";
import image4 from "../Assets/price.webp";

const WhyChoose = () => {
  return (
    <div className="WhyChoose container-fluid">
      <p className="text-center choose-prgh-1">WHY CHOOSE REFRESH?</p>
      <h1 className="text-center">
        We make the world's best-smelling men's products. They're 100% vegan, no
        harmful chemicals and made in the USA.
      </h1>

      <div className="row choose-item-list text-center">
        <div className="col">
          <img className="choose-1" src={image1} alt="forbes" />
          <h5 className="choose-h5">Natural ingredients that work.</h5>
          <p className="choose-prgh-2">
            Clinically tested, allergy tested, and won’t irritate skin.
          </p>
        </div>
        <div className="col">
          <img className="choose-2" src={image2} alt="Gq" />
          <h5 className="choose-h5">Fast, free shipping in the USA. </h5>
          <p className="choose-prgh-2">
            We offer fast, free shipping on all orders over $40.
          </p>
        </div>
        <div className="col">
          <img className="choose-3" src={image3} alt="men's health" />
          <h5 className="choose-h5">More than 1000 5-star reviews.</h5>
          <p className="choose-prgh-2">
            Our customers love us! Try our products and you’ll see why.
          </p>
        </div>
        <div className="col">
          <img className="choose-3" src={image4} alt="the manual" />
          <h5 className="choose-h5">Quality products at a fair price.</h5>
          <p className="choose-prgh-2">
            Look good and smell fresh without ever breaking the bank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
