import React from "react";
import "./Item2.css";
import image1 from "../Assets/hair-1.webp";


const Item2 = (props) => {
  return (
    <div className="Item2">
      <div className="item2">
        <div className="full-cart-2">
          <div alt="Cart" class="cart-image Item-img-cont">
            <img src={props.image1} alt="" class="Item2-img-1" />
          </div>
          <div className="card-body">
            <h4 className="card-title Item2-a" href="ffs">
              {props.heading}
            </h4>
            <p className="card-text Item2-p-1">
            {props.paragraph_1}
            </p>
            <p className="Item2-p-2">{props.paragraph_2}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Item2;



