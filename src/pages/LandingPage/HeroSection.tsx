import React from 'react';
import investHubLogoColor from "../../assets/images/svg/investHubLogoColor.svg"
import banner from "../../assets/images/svg/Banner_InvestHub.png"
import background from "../../assets/animation/Banner_InvestHub.gif"

export const HeroSection = () => {

    return (<>
<div className="background-gif bg-center" 
    >
      <div className="container py-12 mx-auto px-6 ">
        {/* <h4 className='font-noah-black'>THROUGH</h4> */}
      <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-3  mx-auto logo-position-lp top-4 right-0  h-24 w-16"
            />
        {/* <h3 className="text-2xl relative mb-8  text-gray-200">
     <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-3 logo-position-lp mx-auto absolute top-0 right-0  h-16 w-16"
            />
                    </h3> */}
        <div className=' container flex flex-col align-items-right items-end'>
        <button className="button-transparent-white mr-16 font-noah-700 mb-2">
          INVEST
        </button>
        <button className="button-transparent-orange mr-10 font-noah-700">
          RAISE CAPITAL
        </button>
        </div>
      </div>
    </div>
    </>)
}