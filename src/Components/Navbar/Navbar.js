import React, { useContext } from "react";
import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaSistrix } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../Assets/logo.avif";

import { Link } from "react-router-dom";
import { RefreshContext } from "../../Context/RefreshContext";
import Cart from "../../Pages/Cart";

const Navbar = () => {
  const { getTotalCartItems, totalRegularPrice } = useContext(RefreshContext);
  return (
    <div className="my-navbar">
      <div className="d-flex justify-content-between align-items-center nav-logo">
        <div className="navbar-toggler-div">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="navbar-toggler-icon"></FaBars>
          </button>
        </div>
        <div className="serch-icon-div">
          <FaSistrix
            className="serch-icon"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          />

          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanva-body-div d-flex">
              <div className="input-wrap">
                <input type="email" className="nav-bar-input" required />
                <label>search</label>
                <FaSistrix type="button" className="nav-email-btn" />
              </div>
              <IoCloseOutline
                type="button"
                class="nav-btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></IoCloseOutline>
            </div>
          </div>
        </div>

        <div className="logo-img-div">
          <Link to="/">
            <img src={logo} className="logo-img" alt="logo" />
          </Link>
        </div>
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          className="cart-icon-div"
        >
          <IoBagHandleOutline className="cart-icon" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
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
                <div className="total-price-cart-item">${totalRegularPrice}.00 USD</div>
              </div>
              <p className="total-price-cart-item-p">Taxes and shipping calculated at checkout</p>
              <div className="text-center">
              <div type="button" class="btn btn-primary total-price-cart-item-btn">Check out</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center nav-menu">
        <nav className="navbar navbar-expand-lg ">
          <div className="">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link to="hair" className="nav-link menu-text ">
                    Hair
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="body" className="nav-link menu-text ">
                    Body
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="face" className="nav-link menu-text ">
                    Face
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="kits" className="nav-link menu-text ">
                    Kits
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <span
                    style={{ color: "rgb(255, 255, 255,.7)" }}
                    className="nav-link dropdown-toggle menu-text "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </span>
                  <ul className="dropdown-menu my-nav">
                    <li>
                      <Link
                        to="ourstory"
                        className="dropdown-item menu-text drp-dwn"
                      >
                        Our story
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="blog"
                        className="dropdown-item menu-text drp-dwn"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        className="dropdown-item menu-text drp-dwn"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
