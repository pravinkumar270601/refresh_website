import React from "react";
import ContImgCart from "../productCart/ContImgCart";
import { HomePage_cart } from "../Assets/Refreshs";

const Homecart = () => {
  return (
    <div className="Homecart">
      {HomePage_cart.map((cart, i) => {
        return (
          <div className="">
            <ContImgCart
              id={cart.id}
              key={i}
              image1={cart.src1}
              image2={cart.src2}
              heading1={cart.heading1}
              heading2={cart.heading2}
              description1={cart.description1}
              description2={cart.description2}
              button1={cart.button1}
              button2={cart.button2}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Homecart;
