import React from "react";
import Hero from "../Components/Hero/Hero";
import FavSkincare from "../Components/FavSkincare/FavSkincare";
import Homecart from "../Components/Homepagecart/Homecart";
import FavSkinCare2 from "../Components/FavSkincare/FavSkinCare2";
import WhyChoose from "../Components/WhyChoose/WhyChoose";
import BathroomReading from "../Components/BathroomReading/BathroomReading";

const Refresh = () => {
  return (
    <div className="Refresh">
      <Hero />
      <FavSkincare />
      <Homecart />
      <FavSkinCare2 />
      <WhyChoose />
      <BathroomReading />
    </div>
  );
};

export default Refresh;
