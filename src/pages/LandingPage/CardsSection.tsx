import React from "react";
import { Menu } from "./Menu";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation/animation.gif";
import { Card } from "reactstrap";

export const CardsSection = () => {
  return (
    <>
<section className="container mx-auto px-6 p-10">

      <div className="flex items-center flex-wrap mb-20 mt-20">
        <div className="w-full md:w-1/4">
          <div className="card-insights pointer center-div text-center flex align-content-center justify-content-center font-noah-700  font-size-24">Insights</div>
          {/* <Card children="Insights" height={355} width={397} color="linear-gradient(180deg, #F0EFF3 0%, #CDCDCD 100%);"/> */}
        </div>
        <div className="w-full md:w-1/4">
          <div className="card-team pointer center-div text-center flex align-content-center justify-content-center font-noah-700  font-size-24">Our Team</div>
          {/* <Card children="Insights" height={355} width={397} color="linear-gradient(180deg, #F0EFF3 0%, #CDCDCD 100%);"/> */}
        </div>
        <div className="w-full md:w-1/4">
          <div className="card-news pointer center-div text-center flex align-content-center justify-content-center font-noah-white  font-size-24">Newsletter</div>
          {/* <Card children="Insights" height={355} width={397} color="linear-gradient(180deg, #F0EFF3 0%, #CDCDCD 100%);"/> */}
        </div>
        <div className="w-full md:w-1/4">
          <div className="card-pubs pointer center-div text-center flex align-content-center justify-content-center font-noah-white  font-size-24">Publications</div>
          {/* <Card children="Insights" height={355} width={397} color="linear-gradient(180deg, #F0EFF3 0%, #CDCDCD 100%);"/> */}
        </div>
      </div>
    </section>
    </>
  );
};
