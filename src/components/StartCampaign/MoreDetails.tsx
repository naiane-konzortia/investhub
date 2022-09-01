import React, { useEffect, useMemo, useState } from 'react';
import { useRedux } from '../../hooks';
import { LineSeparator } from '../LineSeparator';
import { BankingInformation } from './CompanyInformation/BankingInformation';
import { CompanySecurities } from './CompanyInformation/CompanySecurities';
import { DirectorsOfficers } from './CompanyInformation/DirectorsOfficers';
import { LegalDocuments } from './CompanyInformation/LegalDocuments';
import { Timeline } from './CompanyInformation/CompanyDetails/Timeline';
import { MoreInformation } from './MoreInformation';
import { SideMenu } from './SideMenu';

export const MoreDetails = () => {

    const { dispatch, useAppSelector } = useRedux();

    const { activePage } = useAppSelector((state) => ({
        activePage:state.Pages.activePage
    }))

    return (<>
    <div className="flex flex-row">
        <p className='hidden lg:flex md:flex'><SideMenu/></p>
    
    {activePage === "company_details" && <Timeline/>}
    {activePage === "company_securities" && <CompanySecurities/>}
    {activePage === "directors_officers" && <DirectorsOfficers/>}
    {activePage === "legal_documents" && <LegalDocuments/>}
    {activePage === "banking" && <BankingInformation/>}
    <div className='hidden md:flex lg:flex each-wrap w-6/12'>
    <LineSeparator width={1} height={"100%"} color={"#737373"}/>
    <MoreInformation/>
    </div>
    </div>
    </>)
}