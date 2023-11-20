import React, { useContext } from "react";
import "./CartItem.css";
import { RefreshContext } from "../../Context/RefreshContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
const CartItem = () => {
  const { all_product_data, cartItems, removeFromCart } =
    useContext(RefreshContext);
  return (
    <div className="CartItem">
      <div className="d-flex justify-content-between">
        <div>PRODUCT</div>
        <div>TOTAL</div>
      </div>
      <hr />
      <div>
        {all_product_data.map((e) => {
          if (cartItems[e.id] > 0) {
            const regularPriceWithDollarSign = e.RegularPrice;

            // Remove the dollar sign ('$') from the string
            const regularPriceWithoutDollarSign = regularPriceWithDollarSign.replace('$', '');
            const regularPriceAsNumber = parseFloat(regularPriceWithoutDollarSign);
            return (
              <div className="d-flex">
                <div>
                  <img src={e.src1} alt="" className="CartItem-image" />
                </div>
                <div className="CartItem-content-center-full-div">
                  <div>
                    <h1 className="CartItem-heading">{e.heading}</h1>
                  </div>
                  <div>
                    <p className="CartItem-RegularPrice">{e.RegularPrice}</p>
                  </div>
                  <div className="d-flex justify-content-between CartItem-quantity-remove-div ">
                    <div className="d-flex  justify-content-between CartItem-plus-minuse-div">
                      <div>
                        <AiOutlineLine type="button" />
                      </div>
                      <div>{cartItems[e.id]}</div>
                      <div>
                        <AiOutlinePlus type="button" />
                      </div>
                    </div>
                    <div>
                      <RiDeleteBin5Line
                        className="CartItem-removeFromCart"
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        type="button"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="CartItem-total-price">${regularPriceAsNumber*cartItems[e.id] }</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CartItem;
