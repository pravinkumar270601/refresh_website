import React from "react";
import "./FavSkincare.css";
import {favorite_skincare} from "../Assets/Refreshs";
import Item from "../Item/Item";
import image1 from "../Assets/forbes.avif";
import image2 from "../Assets/gq.webp";
import image3 from "../Assets/men_shealth.avif";
import image4 from "../Assets/themanual.avif";

const FavSkincare = () => {
  return (
    <div className="FavSkincare">
      <h3 className="FavSkincare-h1">Meet the internet's favorite skincare.</h3>
      <div className="FavSkincare-item container-fluid">
        <div className="row FavSkincare-row">
          {favorite_skincare.map((item, i) => {
            return (
              <div className="col-lg-3 col-sm-12 ">
                <Item
                  key={i}
                  id={item.id}
                  heading={item.heading}
                  image1={item.src1}
                  image2={item.src2}
                  RegularPrice={item.RegularPrice}
                  offerprice={item.offerprice}
                  button={item.button}
                  sale={item.sale}
                />
              </div>
            );
          })}
        </div>
        <div className="row fav-item-list text-center FavSkincare-row">
          <div className="col">
          <img className="myimg-1" src={image1} alt='forbes'/>
            <p>"The formulas are sophisticated. They have an effortless quality to them."</p>
          </div>
          <div className="col">
          <img className="myimg-2" src={image2} alt='Gq' />
            <p>"Affordable and a genuinely handsome addition to your shower ledge."</p>
          </div>
          <div className="col">
          <img className="myimg-3" src={image3} alt="men's health" />
            <p>"Easily cleans dirt and grime without drying skin at a price that can’t be beaten."</p>
          </div>
          <div className="col">
          <img className="myimg-3" src={image4} alt='the manual' />
            <p>"Perfect soothing hydration for after a long run or a day out in the sun."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavSkincare;
