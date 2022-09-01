import React, { useEffect, useMemo, useState } from 'react';
import {BsCheck} from 'react-icons/bs'
import { Button } from 'reactstrap';
import { useRedux } from '../../../../hooks';
import { Form } from '../../../Form';
import { LineSeparator } from '../../../LineSeparator';
import { MaterialRights } from './MaterialRights';
import { VotingRights } from './VotingRights';


export const Timeline = () => {

    const { dispatch, useAppSelector } = useRedux();

    const { activePage, activeTimelineStep, activeSubStep } = useAppSelector((state) => ({
        activePage:state.Pages.activePage,
        activeTimelineStep: state.Pages.activeTimelineStep,
        activeSubStep: state.Pages.activeSubStep
    }))

    const onSubmitAmount = () => {}
    return (<>
     <div className="flex  w-full bg-white page-height">
 <div className="each-wrap timeline-position mt-12">
        <div className="time-line-circle center-div align-items-center place-content-center flex ">
            {activeTimelineStep === 8 ? 
            <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                1
            </div>
            :
            <BsCheck size={0}/>
            }
            </div>
            {activeTimelineStep === 8 ? 
            <div className="place-content-center margin-timeline">
            <LineSeparator width={1} height={123} color={"#C4C4C4"}/>
            </div>
            :
            <div className="place-content-center margin-timeline">
        <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
        </div>
        }
        <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 9  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                2
                </div>
                : (activeTimelineStep === 8) ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                2
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
        {activeTimelineStep === 9 ? 
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={123} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
          </div>
    }

<div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 10  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                3
                </div>
                : (activeTimelineStep === 9 || activeTimelineStep === 8) ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                3
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
        {activeTimelineStep === 10 ? 
        activeSubStep ?
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={200} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={110} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
          </div>
          
    }
        
        <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 11  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                4
                </div>
                : (activeTimelineStep === 10 || activeTimelineStep === 9 || activeTimelineStep === 8)  ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                4
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
     
      
    
         
 </div>
 <div className=" grow-4 w-full">
 <div className="flex flex-row position-timeline-label font-noah-black ">Amount Authorized</div>
 {activeTimelineStep === 8 &&  <Form label="How many units of this class are authorized?" sublabel="The number of units which a corporation can issue or has the right to issue" onSubmit={onSubmitAmount} nextStep={9} previousStep={7} buttons={true}/>}
  <div className={activeTimelineStep === 9 ? "flex margin-top-timeline ml-1 font-noah-black " : activeTimelineStep === 8 ? "flex ml-1  font-noah-black" : "flex margin-top-timeline ml-1 font-noah-black "}>Amount Outstanding</div> 
 {activeTimelineStep === 9 &&  <Form label="How many units of this class are currently outstanding (on a fully diluted basis)?" sublabel="The number of units that are currently issued to owners of the company" onSubmit={onSubmitAmount} nextStep={10} previousStep={8} buttons={true}/>}
 <div className={activeTimelineStep === 10 ? "flex margin-top-timeline-2 ml-1 font-noah-black " : activeTimelineStep === 9 ? "flex ml-1 font-noah-black" : "flex margin-top-timeline-2 ml-1 font-noah-black "}>Voting Rights</div>
 {activeTimelineStep === 10 &&  <VotingRights/>}
 <div className={activeTimelineStep === 11 ? "flex margin-top-timeline-3 ml-1 font-noah-black " : activeTimelineStep === 10 ? "flex ml-1 mt-1 font-noah-black" : "flex margin-top-timeline-3 ml-1 font-noah-black "}>Material Rights</div>
 {activeTimelineStep === 11 &&  <MaterialRights/>}
 {/* <div className={activeTimelineStep === 11 ? "flex margin-top-timeline-3 ml-1 font-noah-black " : activeTimelineStep === 10 ? "flex ml-1 font-noah-black" : "flex margin-top-timeline-3 ml-1 font-noah-black "}>Marketing</div> */}
 {/* {activeTimelineStep === 5 &&  <MarketingForm/>}
 <div className={activeTimelineStep === 6 ? "flex margin-top-timeline-3 ml-1 font-noah-black " : activeTimelineStep === 5 ? "flex ml-1 font-noah-black" : "flex margin-top-timeline-3 ml-1 font-noah-black "}>Company Details</div>
 {activeTimelineStep === 6 &&  <ContactDetails/>}  */}

 </div>
 </div>
    </>)
}