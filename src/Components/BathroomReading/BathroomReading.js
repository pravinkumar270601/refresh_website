import React from "react";
import Item2 from "../Item/Item2";
import "./BathroomReading.css";
import { Bathroom_Reading } from "../Assets/Refreshs";

const BathroomReading = () => {
  return (
    <div className="BathroomReading">
      <h3 className="BathroomReading-h1">
      Indulge in some light bathroom reading.
      </h3>
      <div className="BathroomReading-item container-fluid">
        <div className="row BathroomReading-row">
          {Bathroom_Reading.map((item, i) => {
            return (
              <div className="col-lg-4 col-sm-12 ">
                <Item2
                  key={i}
                  id={item.id}
                  image1={item.src1}
                  heading={item.heading}
                  paragraph_1={item.paragraph_1}
                  paragraph_2={item.paragraph_2}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
      <button type="button" class="btn btn-primary BathroomReading-button ">view all</button>
      </div>
    </div>
  );
};

export default BathroomReading;
