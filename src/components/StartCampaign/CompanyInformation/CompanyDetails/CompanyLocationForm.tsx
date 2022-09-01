import React, { useEffect, useMemo, useState } from 'react';
import countries from '../../../../utils/countries';
import { SideMenu } from '../../SideMenu';
import Select, { components } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Label } from 'reactstrap';
import { useRedux } from '../../../../hooks';
import { setActiveTimelineStep } from '../../../../redux/actions';

export const FormTimeline = () => {
 
  const { dispatch, useAppSelector } = useRedux();

    const customStyles = {
        control: () => ({
        minWidth:"100%",
          display: "flex",
          height:"30px",
          borderRadius: "6px",
          background: "#F8F8F8",
          borderTop:"transparent",
          borderLeft:"transparent",
          borderRight:"transparent",
          fontSize: "10px",
        //   padding: "6px 3px 3px 6px",
          color:"#BDBDBD",
          alignItems:"left",
          justifyContent:"left",
        }),
        option: () => ({
          cursor: "pointer",
          fontSize: "10px",
          marginBottom: "2px",
          padding: "10px",
          color:"#BDBDBD",
          "&:hover": {
            background: "#E0FF4F",
            color:"black"
          }
        }),
      };


      const resolver = yupResolver(
        yup.object().shape({
          streetAddress: yup.string().required("Required field."),
          city: yup.string().required("Required field."),
          zipcode: yup.string().required("Required field."),
          employees: yup.string().required("Required field."),
        })
      );
    
      const defaultValues: any = {
        streetAddress: "",
        city: "",
        zipcode:"",
        employees:"",
      };
    
      const methods = useForm({ defaultValues, resolver });
      const {
        handleSubmit,
        register,
        control,
        formState: { errors },
      } = methods;


      
    return (
    <div className='each-wrap w-12/12 w-full'>
    <div className="flex flex-col  font-timeline-form">
    <div className="font-label ml-2">
         <Label>
           Company country
         </Label>
       </div>
    <Controller
        name="types"
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
         className="font-label align-items-left flex align-items-center pl-1 each-wrap w-6/12"
         maxMenuHeight={136}
         menuShouldScrollIntoView={false}
         menuPlacement="top"
         menuPosition="fixed"
         options={countries}
                        />
                      )}
                    />

    </div>
    <div className="flex flex-col font-timeline-form">
    <div className="font-label ml-2 ">
         <Label>
         What is your Company’s Street Address
         </Label>
       </div>
       <div className="mb-3 each-wrap w-10/12 pl-2">
                    <Input
                      type="text"
                      name="streetAddress"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-one-line font-timeline-form font-label"
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
                  </div>

    </div>
    <div className="flex flex-row font-timeline-form each-wrap w-10/12">
        <div className="font-label ml-2 col each-wrap w-10/12">
        <Label>
         City
         </Label>
         </div>
         <div className="font-label ml-2 col each-wrap w-10/12">
        <Label>
         State
         </Label>
         </div>
         <div className="font-label ml-2 col each-wrap w-10/12">
        <Label>
         Zip Code
         </Label>
         </div>
         </div>
         <div className="flex flex-row font-timeline-form each-wrap w-10/12">
       <div className="mb-3 pl-2 each-wrap w-10/12">
                    <Input
                      type="text"
                      name="city"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-one-line font-timeline-form"
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
                  </div>
       <div className="mb-3 each-wrap w-10/12 pl-2">
                    <Input
                      type="text"
                      name="state"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-one-line font-timeline-form"
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
                  </div>
    
       <div className="mb-3 each-wrap w-10/12 pl-2">
                    <Input
                      type="text"
                      name="zipcode"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-one-line font-timeline-form"
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
                  </div>
                  </div>
                  <div className="flex flex-col font-timeline-form">
    <div className="font-label ml-2">
         <Label>
         How many employees do you have in your company?
         </Label>
       </div>
       <div className=" each-wrap w-10/12 pl-2">
                    <Input
                      type="text"
                      name="employees"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-one-line font-timeline-form font-label"
                      withoutLabel={true}
                      hidePasswordButton={true}
                    />
                  </div>

    </div>
    <div className='align-items-center each-wrap w-10/12 text-right mt-2'>
    <Button className="btn-yellow " onClick={() => dispatch(setActiveTimelineStep(3))}>CONTINUE</Button>
    </div>
    </div>)
}


