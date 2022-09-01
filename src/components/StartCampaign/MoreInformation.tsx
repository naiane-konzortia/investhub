import React from "react";
import { BiPlus } from "react-icons/bi";
import { useRedux } from "../../hooks";

export const MoreInformation = () => {
  
  const { dispatch, useAppSelector } = useRedux();

  const { activePage, activeTimelineStep, activeSubStep } = useAppSelector((state) => ({
      activePage:state.Pages.activePage,
      activeTimelineStep: state.Pages.activeTimelineStep,
      activeSubStep: state.Pages.activeSubStep
  }))

  return (
    <>
    {
      activePage === 'company_details' &&
      <div className="flex   w-25 bg-white  start-campaign-page">
      <div className=" mt-10 p-5">
      <div className="text-white align-icon-circle orange-circle pointer">
          <BiPlus size={20}/>
          </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-black-700 mt-5 ">
          Do I have to file any state notices for my Reg. CF campaign?
              </span>
        </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-italic mt-5 ">
          If your corporate headquarters are located in certain states, or over 50% of the money you raise is from investors located in certain states, you may need to file additional notices with each state in addition to filling your Form C with the SEC. To find out if you need to file additional state notices, see our article 
          <span className="pointer font-label-italic-orange">{" "}here.</span>
              </span>
        </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-black-700 mt-5 ">
          Ever Unsure on the steps?
              </span>
        </div>
        <div className="mt-5 align-items-center  each-wrap w-12/12 ">
          <span className="font-label-italic mt-5 ">
          Always go back to your 
          <span className="pointer font-label-italic-orange">{" "}onboarding.guide </span>to review next steps.
              </span>
        </div>
      </div>
    </div>
    }

    {activePage === 'company_securities' && activeTimelineStep === 7 &&
       <div className="flex   w-25 bg-white  start-campaign-page">
       <div className=" mt-10 p-5">
       <div className="text-white align-icon-circle orange-circle pointer">
           <BiPlus size={20}/>
           </div>
         <div className="mt-5 align-items-center  each-wrap w-12/12 ">
           <span className="font-label-black mt-5 ">
           Please list all classes of securities authorized in your Articles of Incorporation or Operating Agreement. 
               </span>
         </div>
         <div className="mt-5 align-items-center  each-wrap w-12/12 ">
           <span className="font-label-black mt-5 ">
For example, common stock, preferred stock, SAFES, stock warrants* and stock options*.
               </span>
         </div>
         <div className="mt-5 align-items-center  each-wrap w-12/12 ">
           <span className="font-label-black mt-5 ">

You do not need to provide the specifics of Stock Warrants and Stock Options. Instead, please calculate the amount outstanding (granted, even unexercised) and include such amount in the total amount outstanding to ensure that the shares issued are on a fully diluted basis.

               </span>
         </div>
         <div className="mt-5 align-items-center  each-wrap w-12/12 ">
           <span className="font-label-black mt-5 ">

If you have any outstanding convertible notes, make sure to include such notesand its material terms. Multiple notes with same material terms (i.e. conversion trigger, cap, discount) can be grouped together into one entry

               </span>
         </div>
         <div className="mt-5 align-items-center  each-wrap w-12/12 ">
           <span className="font-label-black mt-5 ">

Please upload a recent cap table.

               </span>
         </div>
       
       </div>
     </div>
}
{activePage === 'company_securities' &&
  activeTimelineStep === 8 && 
  <div className="flex   w-25 bg-white  start-campaign-page">
  <div className=" mt-10 p-5">
  <div className="text-white align-icon-circle orange-circle pointer">
      <BiPlus size={20}/>
      </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">
      You can find the amount of number of units authorized in your Operating Agreement.
          </span>
    </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">

Please note that for an LLC to raise capital through equity, the Operating Agreement must designate that the Company is managed by managers, not members, and must allocate ownership as an amount (i.e. through membership units or membership interests), instead of as a percentage.

          </span>
    </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">

If your Operating Agreement does not have such a structure, you will need to amend it before you raise funds on InvestHub. You may talk to your legal adviser about it or contact us at
 <span className="pointer font-label-orange underline">{" "}hello@investhub.ventures</span>
 {" "}for references.

          </span>
    </div>
 
  
  </div>
</div>
}
{activePage === 'company_securities' &&
  activeTimelineStep === 9 && 
  <div className="flex   w-25 bg-white  start-campaign-page">
  <div className=" mt-10 p-5">
  <div className="text-white align-icon-circle orange-circle pointer">
      <BiPlus size={20}/>
      </div>
  </div>
</div>
}
{activePage === 'company_securities' &&
  activeTimelineStep === 10 && 
  <div className="flex   w-25 bg-white  start-campaign-page">
  <div className=" mt-10 p-5">
  <div className="text-white align-icon-circle orange-circle pointer">
      <BiPlus size={20}/>
      </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">
      You can find this information in your Operating Agreement or in the law of your state of organization.            
      </span>
    </div>
  </div>
</div>
}

{activePage === 'company_securities' &&
  activeTimelineStep === 11 && !activeSubStep &&
  <div className="flex   w-25 bg-white  start-campaign-page">
  <div className=" mt-10 p-5">
  <div className="text-white align-icon-circle orange-circle pointer">
      <BiPlus size={20}/>
      </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">
      You can find the amount of number of units authorized in your Operating Agreement.
          </span>
    </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">
      Please note that for an LLC to raise capital through equity, the Operating Agreement must designate that the Company is managed by managers, not members, and must allocate ownership as an amount (i.e. through membership units or membership interests), instead of as a percentage.

          </span>
    </div>
    <div className="mt-5 align-items-center  each-wrap w-12/12 ">
      <span className="font-label-black mt-5 ">


If your Operating Agreement does not have such a structure, you will need to amend it before you raise funds on InvestHub. You may talk to your legal adviser about it or contact us at {" "} 
 <span className="pointer font-label-orange underline">hello@investhub.ventures</span>
 {" "}for references.

          </span>
    </div>
 
  
  </div>
</div>
}
{
  activePage === 'company_securities' &&
  activeTimelineStep === 11 && activeSubStep &&
  <div className="flex   w-25 bg-white  start-campaign-page">
<div className=" mt-10 p-5">
<div className="text-white align-icon-circle orange-circle pointer">
    <BiPlus size={20}/>
    </div>
  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
    You can find this information in your Operating Agreement. Such rights include, namely:

        </span>
  </div>
  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
- Distribution rights and preferences
        </span>
  </div>
  <div className="align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black ">
- Liquidation rights and preferences 
        </span>
        </div>
        <div className="align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Distribution rights and preferences 
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Dividend rights 
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Preemptive rights
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Right of first refusal
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Drag Along/Tag Along 
        </span>
        </div>

  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
    If you have issued Warrants and/or Stock Options for <span className="font-label-black-700 mt-5 ">{" "}Common Units</span>, please include the following as applicable to you:
        </span>
  </div>

  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
    "The total amount outstanding includes [number] of shares to be issued pursuant to outstanding warrants"
        </span>
  </div>
  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
    "The total amount outstanding includes [number] of shares to be issued pursant to stock options, reserved but unissued."
        </span>
  </div>
  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
    "The total amount outstanding includes [number] of shares to be issued pursant to stock options issued."
        </span>
  </div>


</div>
</div>
}



{activePage === 'company_securities' &&
  activeTimelineStep === 12 &&
<div className="flex   w-25 bg-white  start-campaign-page">
<div className=" mt-10 p-5">
<div className="text-white align-icon-circle orange-circle pointer">
    <BiPlus size={20}/>
    </div>
  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
    You can find this information in your Operating Agreement. Such rights include, namely:

        </span>
  </div>
  <div className="mt-5 align-items-center  each-wrap w-12/12 ">
    <span className="font-label-black mt-5 ">
- Distribution rights and preferences
        </span>
  </div>
  <div className="align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black ">
- Liquidation rights and preferences 
        </span>
        </div>
        <div className="align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Distribution rights and preferences 
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Dividend rights 
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Preemptive rights
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Right of first refusal
        </span>
        </div>
        <div className=" align-items-center  each-wrap w-12/12 ">
  <span className="font-label-black  ">
- Drag Along/Tag Along 
        </span>
        </div>

</div>
</div>
}
    </>
  );
};
