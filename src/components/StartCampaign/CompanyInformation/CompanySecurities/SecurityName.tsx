import React, { useEffect, useMemo, useState } from 'react';

import Select, { components } from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Label } from 'reactstrap';
import { useRedux } from '../../../../hooks';
import { setActiveTimelineStep } from '../../../../redux/actions';


export const SecurityName = () => {
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
        companyLegalName: yup.string().required("Required field."),

        })
      );
    
      const defaultValues: any = {
        companyLegalName: "",
      };
    
      const methods = useForm({ defaultValues, resolver });
      const {
        handleSubmit,
        register,
        control,
        formState: { errors },
      } = methods;


      
    return (
      <div className="flex  w-full bg-white page-height p-6">
    <div className='each-wrap w-12/12 w-full '>
    <div className="each-wrap  pl-2 flex flex-row sm:w-12/12">

    <div className="time-line-circle center-div align-items-center place-content-center flex font-label-black ">
                1
            </div>
            <span className=" font-noah-black ml-2 sm:w-12/12 ml-1 center-div">
            {" "}
            Security Name
          </span>
            </div>
    <div className="font-label font-size-14 ml-5">
          <Label>What classes of securities exist in your company?</Label>
        </div>
        <div className="each-wrap ml-6 pl-2 flex flex-row sm:w-12/12 ">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-label ml-1  mt-1"

          />
          <span className=" ml-2 font-label-black sm:w-12/12 font-size-14 mb-2 ml-1 center-div">
            {" "}
            Common Units
          </span>
        </div>
        <div className="each-wrap ml-6 pl-2 flex flex-row sm:w-12/12">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1  mt-1"

          />
          <span className=" ml-2 font-label-black sm:w-12/12 font-size-14 mb-2 ml-1 center-div">
            {" "}
            Preferred Units
          </span>
        </div>
        <div className="each-wrap ml-6 pl-2 flex flex-row sm:w-12/12">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1  mt-1"

          />
          <span className=" ml-2 font-label-black sm:w-12/12 ml-1 center-div font-size-14 mb-2">
            {" "}
            Other Equity Class (i.e. Class A Common Units, Class B Non-voting Units, etc.)
          </span>
        </div>
        <div className="each-wrap ml-6 pl-2 flex flex-row sm:w-12/12">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1  mt-1"

          />
          <span className=" ml-2 font-label-black sm:w-12/12 ml-1 center-div font-size-14 mb-2">
            {" "}
            Convertible Securities (Convertible Notes or SAFE Notes)
          </span>
        </div>
        <div className="each-wrap ml-6 pl-2 flex flex-row sm:w-12/12">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1  mt-1"
          />
          <span className=" ml-2 font-label-black sm:w-12/12 ml-1 center-div font-size-14 mb-2">
            {" "}
            Other (i.e. Revenue Share, Debt, DATE, RATE etc.)
          </span>
        </div>
     
    <div className='align-items-center each-wrap w-10/12 text-right mt-2'>
    <Button className="btn-yellow" onClick={() => dispatch(setActiveTimelineStep(8))}>CONTINUE</Button>
    </div>
    </div>
    </div>
    )
}