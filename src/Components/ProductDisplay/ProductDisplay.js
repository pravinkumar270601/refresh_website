import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { RefreshContext } from "../../Context/RefreshContext";
import Cart from "../../Pages/Cart";

const ProductDisplay = (props) => {
  const { product } = props;
  const [AddCount, SetAddCount] = useState(0);
  const { addToCart, totalRegularPrice } = useContext(RefreshContext);
  return (
    <div className="ProductDisplays">
      <div className="ProductDisplays-left">
        <div className="ProductDisplays-imgs">
          <img src={product.src1} alt="" className="ProductDisplays-img"></img>
        </div>
      </div>

      <div className="ProductDisplays-right">
        <h1 className="ProductDisplays-heading">{product.heading}</h1>
        <div>
          <span className="ProductDisplays-offerprice">
            {product.offerprice}
          </span>
          &nbsp;
          <span className="ProductDisplays-RegularPrice">
            {product.RegularPrice}
          </span>
          &nbsp;&nbsp;
          <span>
            {product.sale ? (
              <span className="product-sale  bg-primary text-white">sale</span>
            ) : null}
          </span>
        </div>
        <div className="product-Quantity-div">
          <p className="product-Quantity mb-2">Quantity</p>
          <div className="product-Addcount-div d-flex justify-content-between">
            <div>
              <AiOutlineLine
                onClick={() => SetAddCount(AddCount - 1)}
                type="button"
              />
            </div>
            <div>{AddCount}</div>
            <div>
              <AiOutlinePlus
                onClick={() => SetAddCount(AddCount + 1)}
                type="button"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="product-Addcart-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            onClick={() => {
              addToCart(product.id, AddCount);
            }}
          >
            {product.button}
          </button>

          <div
            class="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Your cart
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between">
              <div>
                <Cart />
              </div>
              <div>
                <hr></hr>
                <div className="d-flex justify-content-between">
                  <div className="subtotal-cart-item">Subtotal</div>
                  <div className="total-price-cart-item">
                    ${totalRegularPrice}.00 USD
                  </div>
                </div>
                <p className="total-price-cart-item-p">
                  Taxes and shipping calculated at checkout
                </p>
                <div className="text-center">
                  <div
                    type="button"
                    class="btn btn-primary total-price-cart-item-btn animate-button"
                  >
                    Check out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button className="product-buynow-button bg-primary">
            Buy it now
          </button>
        </div>
        <div className="product-description">
          This is a demonstration store. You can purchase products like this
          from <span>Huron.</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
