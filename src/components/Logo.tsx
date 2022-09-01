import React from "react";
import investHubLogoColor from "../assets/images/svg/investHubLogoColor.svg"


const Logo = ( ) => {
  return (
    <>
    <div className="mb-1  font-noah-black-700 left-div font-size-20">
        <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-1 logo-footer"
            />       
    </div>
        <span className="font-label-black-light font-size-24">©2021 All rights reserved</span>
</>
  );
};

export default Logo;