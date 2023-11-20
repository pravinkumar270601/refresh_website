import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { RefreshContext } from "../../Context/RefreshContext";
import Cart from "../../Pages/Cart";

const Item = (props) => {
  const { addToCart } = useContext(RefreshContext);

  return (
    <div className="item">
      
        {" "}
        <div className="full-cart" key={props.key}>
        <Link className="item-Link" to={`/product/${props.id}`} onClick={window.scrollTo(0,0)} >
          <div alt="Cart" class="cart-image Item-img" >
            <img src={props.image1} alt="" class="Item-img-1" />
            <img src={props.image2} alt="" class="Item-img-2"  />
          </div></Link>
          <div className="item-sale-div">
            {props.sale ? (
              <p className="item-sale bg-primary text-white">sale</p>
            ) : null}
          </div>

          <div className="card-body">
            <a className="card-title Item-a" href="kkk">
              {props.heading}
            </a>
            <p className="card-text Item-p">
              <span className="offer-price">{props.offerprice}</span>
              <span>&nbsp;{props.RegularPrice}</span>
            </p>
            <div className="text-center">
              <button
                className="Item-button"
                onClick={() => {
                  addToCart(props.id) ;
                } }
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                {props.button}
              </button>

              <div
                class="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Your cart
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default Item;
