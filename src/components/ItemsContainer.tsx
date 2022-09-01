import Item from "./Item";
import React from 'react';
import { ABOUT,INVESTORS,COMPANY,LEGAL } from "./Menu";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const ItemsContainer = () => {
  return (
    <>
    <div className="grid  each-wrap w-12/12 grid-cols-1 lg:flex md:flex center-footer sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:px-8 ">
    <div className="lg:each-wrap lg:w-3/12 md:each-wrap md:w-3/12"><Logo/></div>
    <div className="lg:each-wrap lg:w-8/12 md:each-wrap md:w-8/12 center-footer lg:flex">
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