import React, { useContext, useState } from "react";
import "../Pages/Css/RefreshCategory.css";
import Item from "../Components/Item/Item";
import { RefreshContext } from "../Context/RefreshContext";
import ContImgCart2 from "../Components/productCart/ContImgCart2";
// import { all_product_banner } from "../Components/Assets/all_product_data";

const RefreshCategory = (props) => {
  const { all_product_banner, all_product_cart, all_product_data } =
    useContext(RefreshContext);
  return (
    <div className="RefreshCategory">
      {all_product_banner.map((banner, i) => {
        if (props.category === banner.category) {
          return (
            <div className="RefreshCategory-banner-mapfn">
              <img className="RefreshCategory-img" src={banner.src1} />
              <div className="RefreshCategory-banner">
                <h1 className=" RefreshCategory-heading">
                  {banner.banner_heading}
                </h1>
                <p className="RefreshCategory-content">
                  {banner.banner_content}
                </p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="RefreshCategory-filter-sort d-flex justify-content-between">
        <div className="d-flex justify-content-between">
          <div className="RefreshCategory-filter">Filter:</div>
          <div class="dropdown">
            <p
              class=" dropdown-toggle RefreshCategory-filter-Availability"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Availability
            </p>
            <ul class="dropdown-menu RefreshCategory-filter-Availability-box ">
              <li>
                <div className="RefreshCategory-Availability-box-head d-flex justify-content-between">
                  <div className="Availability-box-head">0 selected</div>
                  <div className="Availability-box-head-reset">
                    <a>Reset</a>
                  </div>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li className="d-flex align-items-center stock1-div">
                <input type="checkbox" id="stock1" name="stock" value="" />
                <label for="stock1 " className="stock1-label">
                  {" "}
                  In stock(7)
                </label>
              </li>
              <li className="d-flex align-items-center outofstock-div">
                <input
                  type="checkbox"
                  id="outofstock"
                  name="outofstock"
                  value=""
                />
                <label for="outofstock" className="outofstock-label">
                  Out of stock (0)
                </label>
              </li>
            </ul>
          </div>
          <div>
            <p
              class=" dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              price
            </p>
            <ul class="dropdown-menu RefreshCategory-price-box-head">
              <li>
                <div className="RefreshCategory-price-box d-flex justify-content-between">
                  <div className="price-box-head">
                    The highest price is $36.00
                  </div>
                  <div className="price-box-head-reset">
                    <a>Reset</a>
                  </div>
                </div>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center RefreshCategory-price-from-to-box">
                  <div className="fromTo-text">$</div>
                  <input
                    type="number"
                    className=" price-from"
                    placeholder="From"
                  />
                  <div className=""></div>
                  <div className="fromTo-text">$</div>
                  <input type="number" className="price-to" placeholder="To" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="RefreshCategory-Sortby">Sort by:</div>
          <div>
            <select className="RefreshCategory-Sortby-select">
              <option value="best-selling">Best Selling</option>
              <option value="Featured">Featured</option>
              <option value="Alphabetically-A-Z">Alphabetically,A-Z</option>
              <option value="Alphabetically-Z-A">Alphabetically,Z-A</option>
              <option value="price-low-to-high">Price, Low to High</option>
              <option value="price-high-to-low">Price, High to Low</option>
              <option value="Date-old-to-new">Date, old to new</option>
              <option value="Date-new-to-old">Date, new to old</option>
            </select>
          </div>

          <div>product</div>
        </div>
      </div>

      <div className=" container-fluid">
        <div className="row RefreshCategory-row">
          {all_product_data.map((item, i) => {
            if (props.category === item.category) {
              return (
                <div
                  className="col-lg-3 col-sm-12 "
                  id={`RefreshCategory-col-${item.category}`}
                >
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="Homecart">
        {all_product_cart.map((cart, i) => {
          if (props.category === cart.category) {
            return (
              <div className="">
                <ContImgCart2
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
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default RefreshCategory;
