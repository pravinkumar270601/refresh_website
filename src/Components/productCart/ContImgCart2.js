import React from "react";
import "./ContImgCart2.css";

const ContImgCart2 = (props) => {
  return (
    <div className="">
      <div className="ContImgCart2">
        <div className="card mb-3 ContImgcontainer2 ">
          <div className="row ">
            <div className="col-md-6 col-sm-12 order-md-2 ">
              <img
                src={props.image1}
                className="img-fluid  rounded-end-4 ContImgCart2-img"
                alt="no images"
              />
            </div>
            <div className="col-md-6 col-sm-12 order-md-1">
              <div className="card-body ContImgCart2-cont ">
                <h1 className="card-title ContImgcontainer2-h1">
                  {props.heading1}
                </h1>
                <p className="card-text ContImgcontainer2-p">
                  {props.description1}
                </p>
                <button className="ContImgcontainer2-button">
                  {props.button1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContImgCart2-2">
        <div className="card mb-3 ContImgcontainer2-2 ">
          <div className="row ">
            <div className="col-md-4 col-sm-12 order-md-1 ">
              <img
                src={props.image2}
                className="img-fluid ContImgCart2-img-2 rounded-start-4"
                alt="no images"
              />
            </div>
            <div className="col-md-8 col-sm-12 order-md-2">
              <div className="card-body ContImgCart2-cont-2 ">
                <h1 className="card-title ContImgcontainer2-h1-2">
                  {props.heading2}
                </h1>
                <p className="card-text ContImgcontainer2-p-2">
                  {props.description2}
                </p>
                <button className="ContImgcontainer2-button-2">
                  {props.button2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContImgCart2;
