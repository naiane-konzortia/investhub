import React, { useEffect, useMemo, useState } from 'react';
import {BsCheck} from 'react-icons/bs'
import { Button } from 'reactstrap';
import { useRedux } from '../../../../hooks';
import { LineSeparator } from '../../../LineSeparator';
import { CompanyNameForm } from './CompanyNameForm';
import { FormTimeline } from './CompanyLocationForm';
import { CompanyWebsite } from './CompanyWebsite';
import { LegalStatusForm } from './LegalStatusForm';
import { MarketingForm } from './MarketingForm';
import { ContactDetails } from './ContactDetails';


export const Timeline = () => {

    const { dispatch, useAppSelector } = useRedux();

    const { activePage, activeTimelineStep, activeSubStep } = useAppSelector((state) => ({
        activePage:state.Pages.activePage,
        activeTimelineStep: state.Pages.activeTimelineStep,
        activeSubStep: state.Pages.activeSubStep
    }))

    
    return (<>
     <div className="flex  w-full bg-white page-height">
 <div className="each-wrap timeline-position mt-12">
        <div className="time-line-circle center-div align-items-center place-content-center flex ">
            {activeTimelineStep === 1 ? 
            <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                1
            </div>
            :
            <BsCheck size={0}/>
            }
            </div>
            {activeTimelineStep === 1 ? 
            <div className="place-content-center margin-timeline">
            <LineSeparator width={1} height={76} color={"#C4C4C4"}/>
            </div>
            :
            <div className="place-content-center margin-timeline">
        <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
        </div>
        }
        <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 2  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                2
                </div>
                : (activeTimelineStep === 1) ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                2
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
        {activeTimelineStep === 2 ? 
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={360} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
          </div>
    }

<div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 3  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                3
                </div>
                : (activeTimelineStep === 2 || activeTimelineStep === 1) ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                3
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
        {activeTimelineStep === 3 ? 
        activeSubStep ?
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={230} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={80} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
          </div>
    }
        
        <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 4  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                4
                </div>
                : (activeTimelineStep === 3 || activeTimelineStep === 2 || activeTimelineStep === 1)  ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                4
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
        {activeTimelineStep === 4 ? 
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={408} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
          </div>
    }
        <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 5  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                5
                </div>
                : (activeTimelineStep === 3 || activeTimelineStep === 2 || activeTimelineStep === 4 || activeTimelineStep === 1)  ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                5
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
        {activeTimelineStep === 5 ? 
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={205} color={"#C4C4C4"}/>
          </div>
          :
          <div className="place-content-center margin-timeline">
          <LineSeparator width={1} height={45} color={"#C4C4C4"}/>
          </div>
    }
        <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
        {activeTimelineStep === 6  ?
                <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                6
                </div>
                : (activeTimelineStep === 5 || activeTimelineStep === 4 || activeTimelineStep === 3 || activeTimelineStep === 2 || activeTimelineStep === 1)  ?
                <div className="time-line-circle-inactive center-div align-items-center place-content-center flex font-label-white ">
                6
                </div>
                :
                <BsCheck size={0}/>
    }
        </div>
    
         
 </div>
 <div className=" grow-4 w-full">
 <div className="flex flex-row position-timeline-label font-noah-black ">Company Legal Name</div>
 {activeTimelineStep === 1 &&  <CompanyNameForm/>}
 <div className={activeTimelineStep === 2 ? "flex margin-top-timeline ml-1 font-noah-black " : activeTimelineStep === 1 ? "flex ml-1  font-noah-black" : "flex margin-top-timeline ml-1 font-noah-black "}>Company Location</div>
 {activeTimelineStep === 2 &&  <FormTimeline/>}
 <div className={activeTimelineStep === 3 ? "flex margin-top-timeline-2 ml-1 font-noah-black " : activeTimelineStep === 2 ? "flex ml-1 font-noah-black" : "flex margin-top-timeline-2 ml-1 font-noah-black "}>Company Website</div>
 {activeTimelineStep === 3 &&  <CompanyWebsite/>}
 <div className={activeTimelineStep === 4 ? "flex margin-top-timeline-3 ml-1 font-noah-black " : activeTimelineStep === 3 ? "flex ml-1 mt-1 font-noah-black" : "flex margin-top-timeline-3 ml-1 font-noah-black "}>Legal Status</div>
 {activeTimelineStep === 4 &&  <LegalStatusForm/>}
 <div className={activeTimelineStep === 5 ? "flex margin-top-timeline-3 ml-1 font-noah-black " : activeTimelineStep === 4 ? "flex ml-1 font-noah-black" : "flex margin-top-timeline-3 ml-1 font-noah-black "}>Marketing</div>
 {activeTimelineStep === 5 &&  <MarketingForm/>}
 <div className={activeTimelineStep === 6 ? "flex margin-top-timeline-3 ml-1 font-noah-black " : activeTimelineStep === 5 ? "flex ml-1 font-noah-black" : "flex margin-top-timeline-3 ml-1 font-noah-black "}>Company Details</div>
 {activeTimelineStep === 6 &&  <ContactDetails/>}

 </div>
 </div>
    </>)
}