import React from "react";
import bannerleft from "../Components/Assets/ourstore_left.webp";
import bannerright from "../Components/Assets/ourstore_right.webp";
import ourstory_card from "../Components/Assets/ourstory_card1.webp";
import ourstory_card2 from "../Components/Assets/ourstory_card2.webp";
import ourstory_card3 from "../Components/Assets/ourstory_card3.webp";
import banner2left from "../Components/Assets/ourstory_banner2_left.webp";
import banner2right from "../Components/Assets/ourstory_banner2_right.webp";
import "../Pages/Css/OurStory.css";

const OurStory = () => {
  return (
    <div className="OurStory">
      <div className="OurStory-banner  ">
        <div className="OurStory-img-div d-flex">
          <img className="OurStory-img1" src={bannerleft} alt="" />
          <img className="OurStory-img2" src={bannerright} alt="" />
        </div>
        <div className="OurStory-content-div">
          <h1 className=" OurStory-heading text-center">
            It's so great to meet you.
          </h1>
          <p className="OurStory-content text-center">
            We bring quality men's personal care to the modern consumer. Our
            formulas are made with science-backed, clean ingredients, are 100%
            vegan, and never tested on animals.
          </p>
        </div>
      </div>

      <div className="card mb-3 OurStory-Imgcontainer-2 ">
        <div className="row ">
          <div className="col-md-4 col-sm-12 order-md-1 ">
            <img
              src={ourstory_card}
              className="img-fluid OurStory-ImgCart-img-2 rounded-start-4"
              alt="no images"
            />
          </div>
          <div className="col-md-8 col-sm-12 order-md-2">
            <div className="card-body OurStory-ImgCart-cont-2 ">
              <h1 className="card-title OurStory-Imgcontainer-h1-2">
                Two Matts, one vision.
              </h1>
              <p className="card-text OurStory-Imgcontainer-p-2">
                Matt M. (left) spent decades dealing with skin issues from acne,
                to blemishes and redness. The only products that seemed to work
                were wildly expensive.
              </p>

              <p className="OurStory-Imgcontainer-p-2">
                Matt T. (right) spent decades building products for some of the
                best largest and most premium brands in the world (e.g. Tom
                Ford, Lab Series, etc.).
              </p>

              <p className="OurStory-Imgcontainer-p-2">
                We teamed up to create a world-class offering of men's products
                leveraging the experience and personal lessons we've learned
                along the way.
              </p>

              <p className="OurStory-Imgcontainer-p-2">
                We're excited that you're here and hope that you'll join along
                for the ride.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-passion-div">
        <h1 className="text-center our-passion-heading-h1">
          We’ve taken our passion and
          <br /> developed A+ personal care products
          <br /> for guys everywhere.
        </h1>
        <h6 className="text-center our-passion-heading-h6">
          WE PROMISE YOU TWO THINGS:
        </h6>
        <div className="d-flex justify-content-between our-passion-h3nad-p">
          <div>
            <h3 className="our-passion-heading-h3">Better for you.</h3>
            <p className="our-passion-heading-p">
              We choose the best possible ingredients. Our products are 100%
              vegan, never tested on animals, and free-of parabens, sulfates,
              silicon, phthalates, and aluminum.
            </p>
          </div>
          <div>
            <h3 className="our-passion-heading-h3">Accessible price.</h3>
            <p className="our-passion-heading-p">
              We’ve eliminated everything you don’t need and left in only the
              high-performing essentials. You'll look great and feel even better
              without ever breaking the bank.
            </p>
          </div>
        </div>
      </div>

      <div className="card mb-3 OurStory-Imgcontainer2-2 ">
        <div className="row ">
          <div className="col-md-4 col-sm-12 order-md-1 ">
            <img
              src={ourstory_card2}
              className="img-fluid OurStory-ImgCart2-img-2 rounded-start-4"
              alt="no images"
            />
          </div>
          <div className="col-md-8 col-sm-12 order-md-2">
            <div className="card-body OurStory-ImgCart-cont-2 ">
              <h1 className="card-title OurStory-Imgcontainer-h1-2">
                Ingredients with integrity.
              </h1>
              <p className="card-text OurStory-Imgcontainer-p-2">
                We only use the best, most effective ingredients. Our products
                are 100% vegan, certified cruelty-free, and free of parabens,
                sulfates, phthalates, silicones, and aluminum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 OurStory-Imgcontainer3-2 " >
          <div className="row ">
            <div className="col-md-6 col-sm-12 order-md-2 ">
              <img
                src={ourstory_card3}
                className="img-fluid  rounded-end-4 OurStory-ImgCart3-img-2"
                alt="no images"

              />
            </div>
            <div className="col-md-6 col-sm-12 order-md-1">
              <div className="card-body OurStory-ImgCart3-cont-2 ">
                <h1 className="card-title OurStory-Imgcontainer-h1-2">Our environmental commitment.</h1>
                <p className="card-text OurStory-Imgcontainer-p-2">
                Our packaging materials are 100% recyclable, and our products are made right here in the USA, eliminating unnecessary transport emissions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="OurStory-banner  ">
          <div className="OurStory-img-div2">
        <div className=" d-flex">
          <img className="OurStory2-img1" src={banner2left} alt="" />
          <img className="OurStory2-img2" src={banner2right} alt="" />
        </div>
        <div className="OurStory-content2-div">
          <h1 className=" OurStory-heading2 text-center">
          Shop the internet's favorite products.
          </h1>
          <div className="text-center">
          <button className="OurStory-button2 ">For body</button>
          <button className="OurStory-button2 ">For hair</button>
          </div>
        </div>
        </div>
      </div>



    </div>
  );
};

export default OurStory;
