import React from "react";
import { Fpage_send_cart } from "../Assets/Refreshs";
import Item from "../Item/Item";

const FavSkinCare2 = () => {
  return (
    <div>
      <div className="FavSkincare-item container-fluid">
        <div className="row FavSkincare-row">
          {Fpage_send_cart.map((item, i) => {
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
      </div>
    </div>
  );
};

export default FavSkinCare2;
