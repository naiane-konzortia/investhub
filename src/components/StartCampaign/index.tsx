import React from 'react';
import { Row } from 'reactstrap';
import NavBar, { Header } from '../Header';
import { FirstForm } from './FirstForm';
import { Footer } from '../Footer';

export const StartCampaign = () => {

    return(
    <div className='w-100 h-100'>
    {/* <Header/> */}
    <NavBar/>
    <FirstForm/>
    <Footer/>
    </div>
    )
}