import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import NavBar from "../../components/Header";
import { useRedux } from "../../hooks";
import { setActiveState } from "../../redux/actions";
import { Welcome } from "./Welcome";
import animation from "../../assets/animation/rocketLaunch.json"
import investHubLogoColor from "../../assets/images/svg/investHubLogoColor.svg"


interface LoginSuccessProps {
}

export const LoginSuccess = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { investorType, signUpData, nameUser, activeState } = useAppSelector(
    (state) => ({
      investorType: state.Pages.investorType,
      signUpData: state.Register.signUpData,
      nameUser: state.Pages.nameUser,
      activeState: state.Pages.activeState,
    })
  );


  const changePage = () => {
    window.location.href =
            process.env.REACT_APP_API_URL as string
  }



  return (
    <>
        {/* <NavBar/> */}
        <nav className="w-full bg-header shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                  <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <a >
                      <img
              src={investHubLogoColor}
              alt="user-profile"
              className=" mr-1  logo-position"
            />                      </a>
            </div>
            </div>
            </div>
            </nav>
      <section className="bg-white center-div  flex flex-row">
      <div className=' h-full w-full center-div p-20'>
      <div className="items-center flex align-items-center center-div justify-content-center  ">
      <Player
      src={animation}
      className="player"
      loop
      autoplay
      style={{height: '70%', width: '70%'}}
      />
      </div>
    </div>
        <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
              Welcome!
              {/* {`Welcome, ${nameUser}!`} */}
            </h2>
            <button
            className="mt-6 bg-orange font-label-white font-size-14 p-2 px-20"
            onClick={changePage}
          >
            Start using the system
            {/* {investorType === 'raise' ? 'Start raising' : 'Start investing'} */}
          </button>
          

         
        </div>
      </section>
      <Footer/>
    </>
  );
};
