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

export const CompanyWebsite = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { activeSubStep } = useAppSelector((state) => ({
    activeSubStep:state.Pages.activeSubStep,
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
      fontSize: "10px",
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
      companyWebsite: yup.string().required("Required field."),
    })
  );

  const defaultValues: any = {
    companyWebsite: "",
  };

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const [stepper, setStepper] = useState(1);

  return (
    <>
      {!activeSubStep  && (
        <div className="each-wrap w-10/12">
          <div className="flex flex-col   font-timeline-form">
            <div className="each-wrap w-12/12 pl-2">
              <Input
                type="text"
                name="companyWebsite"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
          </div>
          <div className="each-wrap w-12/12 flex flex-row ">
            <span
              className="align-self-left each-wrap w-4/12 font-label-orange font-size-12 mt-2 ml-2 underline underline-offset-8 pointer"
              onClick={() => dispatch(setActiveSubstep(!activeSubStep))}
            >
              Add More Social links
            </span>
                <div className='align-items-center each-wrap w-10/12 text-right mt-2'>
    <Button className="btn-yellow "  onClick={() => dispatch(setActiveTimelineStep(4))}>CONTINUE</Button>
    </div>
          </div>
        </div>
      )}
      {activeSubStep && (
        <div className="each-wrap w-12/12 w-full">
          <div className="flex flex-col  font-timeline-form">
            <div className="each-wrap w-10/12 pl-2">
              <Input
                type="text"
                name="companyWebsite"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
          </div>
          <div className="each-wrap w-12/12 flex flex-row ">
            <span
              className="align-self-left each-wrap w-6/12 font-label-orange font-size-12 mt-2 ml-2 underline underline-offset-8 pointer"
              onClick={() => dispatch(setActiveSubstep(!activeSubStep))}
            >
              Add More Social links
            </span>
          </div>
          <div className="flex flex-row font-timeline-form each-wrap w-10/12 center-div">
            <div className="each-wrap w-3/12 flex flex-row pl-10">
              <Input
                type="text"
                name="twitter"
                placeholder="Twitter"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
            <div className="each-wrap w-3/12 flex flex-row pl-5">
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
            <div className="each-wrap w-3/12 flex flex-row pl-5">
              <Input
                type="text"
                name="instagram"
                placeholder="Instagram"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
          </div>
          <div className="flex flex-row font-timeline-form each-wrap w-10/12 center-div">
            <div className="each-wrap w-3/12 flex flex-row pl-10">
              <Input
                type="text"
                name="vimeo"
                placeholder="Vimeo"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
            <div className="each-wrap w-3/12 flex flex-row pl-5">
              <Input
                type="text"
                name="yelp"
                register={register}
                errors={errors}
                placeholder="Yelp"
                control={control}
                className="form-one-line font-timeline-form font-label"
 
              />
            </div>
            <div className="each-wrap w-3/12 flex flex-row pl-5">
              <Input
                type="text"
                name="blog"
                placeholder="Blog"
                register={register}
                errors={errors}
                control={control}
                className="form-one-line font-timeline-form font-label"

              />
            </div>
          </div>
          <div className="each-wrap w-10/12 align-items-right place-content-right text-right justify-content-right align-content-right mt-2">
          <Button
            className="btn-yellow"
            onClick={() => dispatch(setActiveTimelineStep(4))}
          >
            CONTINUE
          </Button>
          </div>
        </div>
      )}
    </>
  );
};
