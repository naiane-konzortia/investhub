import Item from "./Item";
import React from 'react';
import { ABOUT,INVESTORS,COMPANY,LEGAL } from "./Menu";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const ItemsContainer = () => {
  return (
    <>
    <div className="grid  each-wrap w-12/12 grid-cols-1 lg:flex  center-footer sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-6 gap-6 sm:px-8 md:px-8">
    <div className="lg:each-wrap lg:w-2/12 relative"><Logo/></div>
    <div className="lg:each-wrap lg:w-10/12  center-footer lg:flex">
      <Item  links={ABOUT} title="About us" />
      <Item links={INVESTORS} title="Investors" />
      <Item links={COMPANY} title="Companies" />
      <Item links={LEGAL} title="Legal/Contact" />
      <div className="lg:each-wrap lg:w-2/12">
       <SocialMedia title="Follow InvestHub" />
       </div>
       </div>

    </div>
    </>
  );
};

export default ItemsContainer;