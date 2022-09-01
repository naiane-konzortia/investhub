import React, { useEffect, useMemo, useState } from 'react';
import {
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  Control,
  useController,
  useForm,
  Controller,
} from "react-hook-form";
import { Button, Input, Label } from 'reactstrap';
import citiesUSA from '../../utils/citiesUSA';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import Select, { components } from 'react-select';
import { MoreDetails } from './MoreDetails';
import { OrangeHeader } from '../OrageHeader';



export const FirstForm = () => {
  const customStyles = {
    control: () => ({
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      borderRadius: "6px",
      background: "white",
      padding: "6px 3px 3px 6px",
      border: "1px solid lighten(#737373 , 2%)",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
      color:"#BDBDBD",
      fontWeigth:"0rem",
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
    menuList: () => ({
      background: "#737373",
      color:"#BDBDBD",
      paddingBottom: "2px",
    }),
  };

  const customStylesCountries = {
    control: () => ({
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      borderRadius: "6px",
      background: "white",
      padding: "6px 3px 3px 6px",
      color:"#BDBDBD",
      border: "1px solid lighten(#737373 , 2%)",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
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

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    register,
    // formState: { errors },
  } = useForm();

  const [countriesValues, setCountriesValues] = useState(citiesUSA)
  const [stepper, setStepper] = useState(1)

  const countriesIcons = useMemo(() => {

    const result = citiesUSA.map(object => {
      return {...object, icon:(<HiOutlineLocationMarker size={20}/>)}
    })
    console.log(result)
    setCountriesValues(result)
    console.log(countriesValues)

  }, [])
  
  const { Option } = components;

  const IconOptions = (props:any) => 
    (
      <Option {...props} className="flex align-items-center mr-5">
      {props.data.icon}
      {props.data.label}
    </Option>
    )
  




  const onSubmit = () => {
    //do something
  }




  const amountOptions = [{
    id:1,
    label:"under $10,000"},
    {id:2,
    label:"$10,000 - $100,000"}, 
    {id:3,
      label:"$500,000 - $1,000,000"}, 
      {id:4,
        label:"$1,000,000+"}]
  return (
    <>
    {stepper === 1 && 
    <>
    <OrangeHeader/>
    <div className="start-campaign-page">
        <div className="start-campaign">
        START A CAMPAIGN
    </div>
    <div className="lg:start-campaign-description md:start-campaign-description start-campaign-description-sm">
    InvestHub operates globally conecting startups and investors worldwide. We help you to raise the money you need to build your business.
    </div>
 <div className="flex w-full ">
 <div className="m-auto each-wrap w-6/12">
   <form onSubmit={handleSubmit(onSubmit)}>
     <div>
       <div className="">
         <Label>
           What's your company legal name?
         </Label>
       </div>
       <div className='left-div '>
         <input
           placeholder="Konzortia Capital, Inc."
           className="form-control  focus:outline-none font-label"
         />
       </div>
       <div className="">
         <Label>
           Your InvestHub link
         </Label>
       </div>
       <div className="flex flex-col sm:flex-row">
         <div className="w-full">
           <input
             placeholder="https://www.investhub.ventures/"
             className="form-control-disabled w-full font-label"
             disabled={true}
           />
         </div>
         <div className='w-full '>
           <input
             placeholder="Konzortia Capital, Inc."
             className="focus:outline-none form-control font-label"
           />
         </div>
       </div>
     </div>
     <div className="form-label">
       <Label>
         Amount you are looking to raise
       </Label>
     </div>
     <div className=''>
     <Select
         // value={personTags}
         isClearable={false}
         styles={customStyles}
         placeholder={<div className="font-label">Choose one</div>}
         // hideSelectedOptions={false}
         options={amountOptions}
         // className="basic-multi-select"
         className="font-label"
         onChange={(value)=>{ }}
         maxMenuHeight={200}
         menuPosition="fixed"
         menuShouldScrollIntoView={false}
       /> 
 </div>
 <div className="form-label">
   <Label>
     Company location
   </Label>
 </div>
 <Select
         // value={personTags}
         isClearable={false}
         styles={customStylesCountries}
         placeholder={<div className="flex align-items-center pr-4"><div className="text-orange-600"><HiOutlineLocationMarker size={20}/></div><div className="font-label pl-1">Cities</div></div>}
         // hideSelectedOptions={false}
         className="font-label align-items-left flex align-items-center pl-1"
         maxMenuHeight={136}
         menuShouldScrollIntoView={false}
         menuPlacement="top"
         menuPosition="fixed"
         options={countriesValues}
         components={{ Option: IconOptions }}
       /> 
       <div className=' flex center-div mt-10'>
       <Button className="btn" onClick={() => setStepper(2)}>
         CREATE MY CAMPAIGN
       </Button>
       </div>
</form>
   </div >
   </div >
   {/* <div className="footer">
        </div> */}
        </div>
   </>
    }
   {stepper === 2 &&
   <MoreDetails/>
   }
        </>
        )
}
