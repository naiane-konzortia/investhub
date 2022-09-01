import React, { useEffect, useMemo, useState } from "react";
import countries from "../../../../utils/countries";
import { SideMenu } from "../../SideMenu";
import Select, { components } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Label } from "reactstrap";
import { useRedux } from "../../../../hooks";
import { setActiveSubstep, setActiveTimelineStep } from "../../../../redux/actions";
import citiesUSA from "../../../../utils/citiesUSA";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setCommentRange } from "typescript";

export const VotingRights = () => {
  const { dispatch, useAppSelector } = useRedux();

  const { activePage, activeTimelineStep, activeSubStep } = useAppSelector((state) => ({
    activePage:state.Pages.activePage,
    activeTimelineStep: state.Pages.activeTimelineStep,
    activeSubStep: state.Pages.activeSubStep
}))

  const customStyles = {
    control: () => ({
      minWidth: "100%",
      display: "flex",
      height: "30px",
      borderRadius: "6px",
      background: "#F8F8F8",
      borderTop: "transparent",
      borderLeft: "transparent",
      borderRight: "transparent",
      fontSize: "12px",
      //   padding: "6px 3px 3px 6px",
      color: "#BDBDBD",
      alignItems: "left",
      justifyContent: "left",
    }),
    option: () => ({
      cursor: "pointer",
      fontSize: "10px",
      marginBottom: "2px",
      padding: "10px",
      color: "#BDBDBD",
      "&:hover": {
        background: "#E0FF4F",
        color: "black",
      },
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
    typeCompany: "",
    city: "",
    zipcode: "",
    employees: "",
  };

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const [more, setMore] = useState(false);

  const onSubmit = () => {

  }

  return (
    <div className="each-wrap w-12/12 w-full">
      <div className="flex flex-col  font-timeline-form sm:w-12/12">
        <div className="font-label ml-2">
          <Label>Does this class of securities have voting rights?</Label>
        </div>
        <div className="each-wrap  pl-2 flex flex-row sm:w-12/12">
          <Input
            type="radio"
            name="votingRights"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1  mt-1"
            withoutLabel={true}
            hidePasswordButton={true}
            onClick={() => {
                setMore(!more);
                dispatch(setActiveSubstep(!activeSubStep))
            }}
          />
          <span className=" font-label-black sm:w-12/12 ml-1 center-div">
            {" "}
            Yes
          </span>
        </div>
        <div className="each-wrap  sm:w-12/12 pl-2 flex flex-row ">
          <Input
            type="radio"
            name="votingRights"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1 mt-1 center-div"
            withoutLabel={true}
            hidePasswordButton={true}
            onClick={() => {
                dispatch(setActiveSubstep(false))
            }}
          />
          <span className=" font-label-black  sm:w-12/12 ml-1 center-div">
            No
          </span>
        </div>
        {
            activeSubStep && 
            <div className='each-wrap w-12/12 w-full '>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col   font-timeline-form">
            <div className="font-label font-size-14 ml-5">
                  <Label>Description of voting rights</Label>
                </div>
               <div className="each-wrap w-10/12 md:w-12/12 ml-3 sm:w-12/12 pl-2">
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
        
            </form>
            </div>
        }
  
        <div className='flex flex-row each-wrap w-10/12 ml-4 text-end justify-end '>
    <div className='flex flex-row each-wrap w-2/12 justify-end rigth-div mt-2 mr-2'>
    <Button className="btn-cancel " onClick={() => {dispatch(setActiveTimelineStep(9)); dispatch(setActiveSubstep(false))}}>BACK</Button>

    </div>
    <div className='flex flex-row each-wrap w-2/12 justify-end mt-2 '>
    <Button className="btn-yellow" onClick={() => {dispatch(setActiveTimelineStep(11)); dispatch(setActiveSubstep(false))}}>CONTINUE</Button>

    </div>
    </div>
    </div>
    </div>
  );
};
