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

export const CompanyNameForm = () => {
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
    <div className='each-wrap w-12/12 w-full '>
    <div className="flex flex-col  font-timeline-form">
       <div className="each-wrap w-10/12 md:w-12/12 sm:w-12/12 pl-2">
                    <Input
                      type="text"
                      name="companyLegalName"
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
    <Button className="btn-yellow" onClick={() => dispatch(setActiveTimelineStep(2))}>CONTINUE</Button>
    </div>
    </div>)
}