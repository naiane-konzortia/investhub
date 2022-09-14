import React from 'react';
import { Footer } from '../../components/Footer';
import NavBar, { Header } from '../../components/Header';
import { useRedux } from '../../hooks';
import { SignUp } from '../SignUp';
import { CardsSection } from './CardsSection';
import { Features } from './Features';
import { HeroSection } from './HeroSection';
import { MoreOptions } from './MoreOptions';
import { Partners } from './Partners';
import { VideoSection } from './VideoSection';

export const LandingPage = () => {
    const { dispatch, useAppSelector } = useRedux();
    const { activeState } = useAppSelector((state) => ({
      activeState:state.Pages.activeState,
  }))
    return(<>
    <NavBar/>
    {activeState === "landing_page" &&
    <>
    <HeroSection/>
    <Features/>
    <VideoSection/>
    <CardsSection/>
    <MoreOptions/>
    <Partners/>
    </>
    }
    {(activeState === "sign_up" || activeState === "sign_in" )&&
    <SignUp/>
    }
    <Footer/>
    </>)
}