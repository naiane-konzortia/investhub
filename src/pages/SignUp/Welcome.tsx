import React from 'react';
import InvestHub from "../../assets/images/svg/InvestHub.svg"
import { useRedux } from '../../hooks';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "../../assets/animation/rocketLaunch.json"

export const Welcome = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { investorType, activeStep } = useAppSelector((state) => ({
      investorType:state.Pages.investorType,
      activeStep:state.Pages.activeSignUpTimeline,
}))

    return(<>
    {
      activeStep !== 'finish_page' ?
      <div className='bg-blue flex flex-col h-full w-full center-div p-20'>
      <span className='font-noah-magnolia-700 m-16'>WELCOME TO</span>
      <img
                src={InvestHub}
                alt="user-profile"
                className="logo-position-welcome"
              />
      <span className='mt-16 font-noah-magnolia-300 m-16'>
        Start to raise / invest / share your knowledge and MORE in the best global HUB!</span>
      </div>
      :
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
    }

    
    </>)
}