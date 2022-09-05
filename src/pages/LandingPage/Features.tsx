import React from "react";
import { Menu } from "./Menu";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation/animation.gif";

export const Features = () => {
  return (
    <>
      <Menu />
      
      <section className="container md:items-center mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-noah-700">
          For funds, startups and business development
        </h2>
        <div className="w-full md:w-2/2  text-center ">
          <p className="text-gray-600 mb-8 font-label font-size-16">
            At Investhub we strive to operate as the intersection between
            investment alternatives, capital raising and business success. Our
            unique platform allows us to simultaneously meet the needs of
            multiple customer segments. We work not only to connect startups
            seeking to generate capital and growth with reliable and accredited
            institutional investors, but also to enhance the development of
            well-established companies.
          </p>
        </div>
        <div className="items-center flex align-items-center center-div justify-content-center  ">
          <img
            src={animation}
            alt="user-profile"
            style={{ height: "400px", width: "500px" }}
          />
                  </div>
          <div className=" flex flex-col ">
<div className="justify-center inline-flex  mt-20">
<div className="flex items-center flex-wrap ">
        <div className="w-full md:w-1/3">
        <button className="btn-orange-border font-noah-700">CAPITAL RAISING</button>
</div>
</div>
<div className="flex items-center flex-wrap ml-24 mr-24  ">
        <div className="w-full md:w-1/3">
            <button className="btn-orange-border font-noah-700">PRIVATE EQUITY</button>
</div>
</div>
<div className="flex items-center flex-wrap  ">
        <div className="w-full md:w-1/3">
        <button className="btn-orange-border font-noah-700">ADVISORS</button>
</div>
</div>
</div>
</div>
      </section>
    </>
  );
};
