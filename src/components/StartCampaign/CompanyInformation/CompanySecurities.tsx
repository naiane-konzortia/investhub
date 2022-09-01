import React, { useEffect } from 'react';
import { useRedux } from '../../../hooks';
import { Timeline } from './CompanySecurities/Timeline';
import { SecurityName } from './CompanySecurities/SecurityName';
import { setActiveSubstep } from '../../../redux/actions';
import { Securities } from './CompanySecurities/Securities';

export const CompanySecurities = () => {

    const { dispatch, useAppSelector } = useRedux();

    const { activePage, activeTimelineStep, activeSubStep } = useAppSelector((state) => ({
        activePage:state.Pages.activePage,
        activeTimelineStep: state.Pages.activeTimelineStep,
        activeSubStep: state.Pages.activeSubStep
    }))
    
    useEffect(() => {
        dispatch(setActiveSubstep(false))
    },[activePage])

    return(<>
    { activeTimelineStep === 7 &&
    <SecurityName/>
    }
    { (activeTimelineStep === 8 || activeTimelineStep === 9 || activeTimelineStep === 10 || activeTimelineStep === 11) &&
    <Timeline/>
    }
    {
        activeTimelineStep === 12 &&
        <Securities/>
    }
    </>
    )
}