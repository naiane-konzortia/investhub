import React, { useEffect, useMemo, useState } from "react";
import countries from "../../../../utils/countries";
import { SideMenu } from "../../SideMenu";
import Select, { components } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Label } from "reactstrap";
import { useRedux } from "../../../../hooks";
import { setActiveTimelineStep } from "../../../../redux/actions";
import citiesUSA from "../../../../utils/citiesUSA";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const LegalStatusForm = () => {
  const { dispatch, useAppSelector } = useRedux();

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

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="each-wrap w-12/12 w-full">
      <div className="flex flex-col  font-timeline-form sm:w-12/12">
        <div className="font-label ml-2">
          <Label>What type of company are you?</Label>
        </div>
        <div className="each-wrap  pl-2 flex flex-row sm:w-12/12">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1  mt-1"

          />
          <span className=" font-label-black sm:w-12/12 ml-1 center-div">
            {" "}
            C Corporation
          </span>
        </div>
        <div className="each-wrap  sm:w-12/12 pl-2 flex flex-row ">
          <Input
            type="radio"
            name="data"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label ml-1 mt-1 center-div"

          />
          <span className=" font-label-black  sm:w-12/12 ml-1 center-div">
            LLC
          </span>
        </div>
        <div className="card-warning mt-2 each-wrap sm:w-12/12  w-11/12 ml-2 center-div flex p-2 hidden md:flex lg:flex ">
          <span className="font-label-black each-wrap ">
            Don't see your corporate type? Please reach out to
            <span className="pointer  font-label-orange">
              {" "}
              hello@investhub.ventures{" "}
            </span>
            to learn more about the types of corporate structures we can work
            with. If you are an LLC, please refer to our help article{" "}
            <span className="pointer font-label-orange"> here</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col  font-timeline-form">
        <div className="font-label ml-2 ">
          <Label>What is your Company's Tax ID Number (EIN)</Label>
        </div>
        <div className="each-wrap w-10/12 pl-2">
          <Input
            type="text"
            name="taxIdNumber"
            register={register}
            errors={errors}
            control={control}
            className="form-one-line font-timeline-form font-label"

          />
        </div>
      </div>
      <div className="flex flex-row font-timeline-form each-wrap w-10/12">

        <div className="flex flex-col font-timeline-form ">

      </div>
      </div>
      <div className="flex flex-row font-timeline-form each-wrap w-10/12 pl-2">
      <Controller
        name="citiesUSA"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
        <Select
        {...field}
        // value={personTags}
         isClearable={false}
         styles={customStyles}
         placeholder={<div className="font-label pl-1">In what State is your company organized?</div>}
         // hideSelectedOptions={false}
         className="font-label align-items-left flex align-items-center each-wrap w-10/12 w-100 mt-3"
         maxMenuHeight={136}
         menuShouldScrollIntoView={false}
         menuPlacement="top"
         menuPosition="fixed"
         options={citiesUSA}
                        />
                      )}
                    />
      </div>
      <span className='font-label font-size-12 ml-5'>If LLC, check your articles of organization</span>
      <div className="flex flex-col font-timeline-form">
        <div className="font-label ml-2 mt-2">
          <Label>What date was your company formed?</Label>
        </div>
        <div className=" each-wrap w-10/12 sm:w-12/12 md:w-12/12 pl-2 mt-2">
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

        </div>
      </div>
      <div className="align-items-center each-wrap w-10/12 text-right mt-2">
        <Button
          className="btn-yellow"
          onClick={() => dispatch(setActiveTimelineStep(5))}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};
