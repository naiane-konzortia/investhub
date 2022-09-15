import React from 'react';
import { useRedux } from '../../hooks';

export const Timeline = () => {
    const { dispatch, useAppSelector } = useRedux();
    const { activeStep, activeState } = useAppSelector((state) => ({
        activeStep:state.Pages.activeSignUpTimeline,
        activeState: state.Pages.activeState
  }))
    return (<>
    {
      activeState === "sign_up" &&
<section className="bg-gray">
      <div className="container mx-auto px-6 py-12 text-center">
        <span className='font-noah-black-700 '>SIGN UP PROCESS</span>
        <div className="flex text-center flex-wrap">
          <div className="w-full px-2 mb-4">
            <div className='flex flex-row pt-6 center-div container'>
            <div className={`space-line font-label-black-700 font-size-12`}>Create account</div>
            <div className={(activeStep === 'more_info' ||  activeStep === 'finish_page') ? `space-line font-label-black-700 font-size-12` : `space-line font-label-gray-300 font-size-12`}>More information</div>
            <div className={activeStep === 'finish_page' ? `space-line font-label-black-700 font-size-12 ` : `space-line font-label-gray-300 font-size-12`}>Email confirmation</div>
            </div>
            <div className=" flex flex-row pt-6 center-div">
                <div className='black-circle'></div>
                <div className='black-line'></div>
                <div className={(activeStep === 'more_info' || activeStep === 'finish_page') ? 'black-circle' : 'gray-circle'}></div>
                <div className={(activeStep === 'more_info' || activeStep === 'finish_page') ? 'black-line' : 'gray-line'}></div>
                <div className={(activeStep === 'finish_page'  ) ? 'black-circle' : 'gray-circle'}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    }
    {
      activeState === "sign_in" &&
      <section className="bg-gray">
      <div className="container mx-auto px-6 py-12 text-center">
        <span className='font-noah-black-700 '>LOG IN PROCESS</span>
      </div>
    </section>
    }
        
    </>)
}