import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select, { components } from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRedux } from '../../hooks';
import { Label } from 'reactstrap';
import { setActiveSignUpTimeline } from '../../redux/actions';

export const MoreInfo = () => {
    const { dispatch, useAppSelector } = useRedux();
    const { investorType } = useAppSelector((state) => ({
        investorType:state.Pages.investorType,
  }))

    const customStyles = {
        control: () => ({
        minWidth:"400px",
          display: "flex",
          height:"50px",
          borderRadius: "6px",
          background: "#F8F8F8",
          borderTop:"transparent",
          borderLeft:"transparent",
          borderRight:"transparent",
          fontSize: "14px",
        //   padding: "6px 3px 3px 6px",
          color:"#BDBDBD",
          alignItems:"left",
          justifyContent:"left",
        }),
        option: () => ({
          cursor: "pointer",
          fontSize: "14px",
          marginBottom: "2px",
          padding: "10px",
          color:"#BDBDBD",
          "&:hover": {
            background: "#E0FF4F",
            color:"black"
          }
        }),
      };


   
    
      const methods = useForm();
      const {
        handleSubmit,
        register,
        control,
        formState: { errors },
      } = methods;

      const descriptionOptionsRaise = [
        {
        label:"Pre-Revenue Company",
        value:"preRevenue"
      },
        {
        label:"Post-Revenue Company",
        value:"postRevenue"
      },
        {
        label:"Single Family Office",
        value:"singleFamilyOffice"
      },
        {
        label:"Multi-Family Office",
        value:"multiFamilyOffice"
      },
        {
        label:"Fund",
        value:"fund"
      },
        {
        label:"Fund of Funds",
        value:"fundOfFunds"
      },
        {
        label:"Venture Capital Firm",
        value:"ventureCapital"
      },
        {
        label:"Broker Dealer / Advisor / Wealth Manager",
        value:"brokerAdvisorWealth"
      },

    ]
      const descriptionOptionsInvest = [
        {
        label:"Individual Non-Accredited Investor",
        value:"individualNonAccredited"
      },
        {
        label:"Individual Accredited Investor",
        value:"individualAccredited"
      },
        {
        label:"Single Family Office",
        value:"singleFamilyOffice"
      },
        {
        label:"Multi-Family Office",
        value:"multiFamilyOffice"
      },
        {
        label:"Fund",
        value:"fund"
      },
        {
        label:"Fund of Funds",
        value:"fundOfFunds"
      },
        {
        label:"Venture Capital Firm",
        value:"ventureCapital"
      },
        {
        label:"Broker Dealer / Advisor / Wealth Manager",
        value:"brokerAdvisorWealth"
      },

    ]
    
      const raiseOptions = [
        {
        label:"$500k - less than $2M",
        value:"$500k - less than $2M"
      },
        {
        label:"$2M - $5M",
        value:"$2M - $5M"
      },
        {
        label:"$5M - $10M",
        value:"$5M - $10M"
      },
        {
        label:"$10 M- $20M",
        value:"$10 M- $20M"
      },
        {
        label:"$20M - $50M",
        value:"$20M - $50M"
      },
        {
        label:"$50M - $100 M",
        value:"$50M - $100 M"
      },
        {
        label:"$100M +",
        value:"$100M +"
      }

    ]

      const investOptions = [
        {
        label:"under $100K",
        value:"under $100K"
      },
        {
        label:"$100K - less than $500K",
        value:"$100K - less than $500K"
      },
        {
        label:"$500 k  - less than $2M",
        value:"$500 k  - less than $2M"
      },
        {
        label:"$2M - $5M",
        value:"$2M - $5M"
      },
        {
        label:"$5M - $10M",
        value:"$5M - $10M"
      },
        {
        label:"$10 M- $20M",
        value:"$10 M- $20M"
      },
        {
        label:"$20M - $50M",
        value:"$20M - $50M"
      },
        {
        label:"$50M - $100 M",
        value:"$50M - $100 M"
      },
        {
        label:"$100M +",
        value:"$100M +" 
      }

    ]

    const onSubmitForm = (values:any) => {
        console.log(values)
        dispatch(setActiveSignUpTimeline('finish_page'))

    }

    return(<>
    <section className="container md:items-center w-full  mx-auto px-6 p-10">
        <div className="flex flex-col ">
        <form onSubmit={handleSubmit(onSubmitForm)} className="position-relative mt-6">        
       { investorType === 'raise' ?
       <>
       <div className="font-label font-size-16 mb-4  ml-2">
       <Label>
         What describes you best?
       </Label>
     </div>
    <Controller
    name="descriptionRaise"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
    <Select
    {...field}
    // value={personTags}
     isClearable={false}
     styles={customStyles}
     placeholder={<div className="font-label pl-1">Countries</div>}
     // hideSelectedOptions={false}
     className="font-label align-items-left flex align-items-center pl-1 "
     maxMenuHeight={136}
     menuShouldScrollIntoView={false}
     menuPlacement="top"
     menuPosition="fixed"
     options={descriptionOptionsRaise}
                    />
                  )}
                />
                </>
    :
    <>
       <div className="font-label font-size-16 mb-4  ml-2">
       <Label>
         What describes you best?
       </Label>
     </div>
    <Controller
    name="descriptionInvest"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
    <Select
    {...field}
    // value={personTags}
     isClearable={false}
     styles={customStyles}
     placeholder={<div className="font-label text-left pl-1">Choose an Option</div>}
     // hideSelectedOptions={false}
     className="font-label font-size-14 align-items-left flex align-items-left pl-1 "
     maxMenuHeight={136}
     menuShouldScrollIntoView={false}
     menuPlacement="bottom"
     menuPosition="fixed"
     options={descriptionOptionsInvest}
                    />
                  )}
                />
                </>

       }
       { investorType === 'raise' ?
       <>
       <div className="font-label font-size-16 mb-4  ml-2">
       <Label>
       I am looking to efficiently raise:
       </Label>
     </div>
    <Controller
    name="amountRaise"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
    <Select
    {...field}
    // value={personTags}
     isClearable={false}
     styles={customStyles}
     placeholder={<div className="font-label pl-1">Countries</div>}
     // hideSelectedOptions={false}
     className="font-label align-items-left flex align-items-center pl-1 "
     maxMenuHeight={136}
     menuShouldScrollIntoView={false}
     menuPlacement="top"
     menuPosition="fixed"
     options={raiseOptions}
                    />
                  )}
                />
                </>
    :
    <>
       <div className="font-label font-size-16 mb-4 mt-4 ml-2">
       <Label>
       I am looking to efficiently raise:
       </Label>
     </div>
    <Controller
    name="amountInvest"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
    <Select
    {...field}
    // value={personTags}
     isClearable={false}
     styles={customStyles}
     placeholder={<div className="font-label text-left pl-1">Choose an Option</div>}
     // hideSelectedOptions={false}
     className="font-label font-size-14 align-items-left flex align-items-left pl-1 "
     maxMenuHeight={136}
     menuShouldScrollIntoView={false}
     menuPlacement="bottom"
     menuPosition="fixed"
     options={investOptions}
                    />
                  )}
                />
                </>

       }
       <button  type="submit" className="mt-16 bg-orange font-label-white font-size-14 p-2 px-8">
                  CONTINUE
                </button>
                </form>
    
        </div>
        </section>
    </>)
}