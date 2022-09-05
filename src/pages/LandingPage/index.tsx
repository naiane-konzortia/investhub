import React from 'react';
import { Footer } from '../../components/Footer';
import NavBar, { Header } from '../../components/Header';
import { CardsSection } from './CardsSection';
import { Features } from './Features';
import { HeroSection } from './HeroSection';
import { MoreOptions } from './MoreOptions';
import { VideoSection } from './VideoSection';

export const LandingPage = () => {

    return(<>
    <NavBar/>
    <HeroSection/>
    <Features/>
    <VideoSection/>
    <CardsSection/>
    <MoreOptions/>
    <Footer/>
    </>)
}