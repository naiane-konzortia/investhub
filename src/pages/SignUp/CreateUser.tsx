import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation/animation.gif";
import { useRedux } from "../../hooks";
import { setInvestorType } from "../../redux/actions";
import {Facebook,GitHub,Google} from '@mui/icons-material'
import { Welcome } from "./Welcome";
import { SignUpForm } from "./SignUpForm";
import { MoreInfo } from "./MoreInfo";
import { Finish } from "./Finish";

export const CreateUser = () => {
    const { dispatch, useAppSelector } = useRedux();
    const { investorType, activeStep } = useAppSelector((state) => ({
        investorType:state.Pages.investorType,
        activeStep:state.Pages.activeSignUpTimeline,
  }))

  return (
    <>
    {
        investorType === null ?
<section className="container md:items-center center-div mx-auto px-6 p-10">
        <div className="flex flex-col center-div">
        <h2 className="font-bold text-center mb-2 font-label-black-700">
            I am looking to
        </h2>
        <div className="yellow-line"></div>
        </div>
        <div className="w-full md:w-2/2  text-center ">
          <p className="text-gray-600 mb-8 font-label font-size-16">
          </p>
        </div>
        <div className="flex flex-row center-div m-4">
        <div className="items-center flex align-items-center center-div justify-content-center mr-3 ">
        <a  className="pointer block p-6 max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 " onClick={() => dispatch(setInvestorType('raise'))}>
    <h5 className="mb-2  font-bold tracking-tight  dark:text-white">Raise Capital Efficiently</h5>
    {/* <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
</a>
        </div>
        <div className="items-center flex align-items-center center-div justify-content-center  ">
        <a  className="pointer block p-6 max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 " onClick={() => dispatch(setInvestorType('invest'))}>
    <h5 className="mb-2 font-bold tracking-tight  dark:text-white">Invest in Curated Opportunities</h5>
    {/* <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
</a>
        </div>
        </div>
        <div className=" flex flex-col h-full ">
        </div>
      </section>
      :
      <>
      <div className="flex flex-row">
      <div className="bg-welcome each-wrap flex w-6/12 hidden md:flex lg:flex">
          {/* <div className='hidden md:flex lg:flex'> */}
            <Welcome/>
          {/* </div> */}
          </div>
          {/* <div className='hidden md:flex lg:flex'> */}
          {
            
            activeStep === "create_user" &&
            <div className="md:items-center  center-div mx-auto px-6 p-10">
            <SignUpForm/>
            </div>
          }
          {
            activeStep === "more_info" &&
            <div className="md:items-center  center-div mx-auto px-6 p-10">
            <MoreInfo/>
            </div>
          }
          {
            activeStep === "finish_page" &&
            <div className="md:items-center flex center-div mx-auto px-6 p-10">
            <Finish/>
            </div>
          }
          {/* </div> */}
          </div>
</>
    }

      
    </>
  );
};
