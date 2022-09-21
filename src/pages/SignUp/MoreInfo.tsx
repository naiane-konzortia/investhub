import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { components } from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRedux } from "../../hooks";
import { Label } from "reactstrap";
import { setActiveSignUpTimeline, signUp } from "../../redux/actions";

export const MoreInfo = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { investorType, signUpData, googleData } = useAppSelector((state) => ({
    investorType: state.Pages.investorType,
    signUpData: state.Register.signUpData,
    googleData: state.Register.googleData,
  }));

  const customStyles = {
    control: () => ({
      minWidth: "400px",
      display: "flex",
      height: "50px",
      borderRadius: "6px",
      background: "#F8F8F8",
      borderTop: "transparent",
      borderLeft: "transparent",
      borderRight: "transparent",
      fontSize: "14px",
      //   padding: "6px 3px 3px 6px",
      color: "#BDBDBD",
      alignItems: "left",
      justifyContent: "left",
    }),
    option: () => ({
      cursor: "pointer",
      fontSize: "14px",
      marginBottom: "2px",
      padding: "10px",
      color: "#BDBDBD",
      "&:hover": {
        background: "#E0FF4F",
        color: "black",
      },
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
      label: "Pre-Revenue Company",
      value: " PreRC",
    },
    {
      label: "Post-Revenue Company",
      value: "PostRC",
    },
    {
      label: "Single Family Office",
      value: "FO",
    },
    {
      label: "Multi-Family Office",
      value: "MFO",
    },
    {
      label: "Fund",
      value: "F",
    },
    {
      label: "Fund of Funds",
      value: "FOF",
    },
    {
      label: "Venture Capital Firm",
      value: "VC",
    },
    {
      label: "Broker Dealer / Advisor / Wealth Manager",
      value: "BAW",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const descriptionOptionsInvest = [
    {
      label: "Individual Non-Accredited Investor",
      value: "INAI",
    },
    {
      label: "Individual Accredited Investor",
      value: "IAI",
    },
    {
      label: "Single Family Office",
      value: "FO",
    },
    {
      label: "Multi-Family Office",
      value: "MFO",
    },
    {
      label: "Fund",
      value: "F",
    },
    {
      label: "Fund of Funds",
      value: "FOF",
    },
    {
      label: "Venture Capital Firm",
      value: "VC",
    },
    {
      label: "Broker Dealer / Advisor / Wealth Manager",
      value: "BAW",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  const raiseOptions = [
    {
      label: "$500k - less than $2M",
      value: "$500k - less than $2M",
      minValue: 500,
      maxValue: 2000000,
    },
    {
      label: "$2M - $5M",
      value: "$2M - $5M",
      minValue: 2000000,
      maxValue: 5000000,
    },
    {
      label: "$5M - $10M",
      value: "$5M - $10M",
      minValue: 5000000,
      maxValue: 10000000,
    },
    {
      label: "$10 M- $20M",
      value: "$10 M- $20M",
      minValue: 10000000,
      maxValue: 20000000,
    },
    {
      label: "$20M - $50M",
      value: "$20M - $50M",
      minValue: 20000000,
      maxValue: 50000000,
    },
    {
      label: "$50M - $100 M",
      value: "$50M - $100 M",
      minValue: 50000000,
      maxValue: 100000000,
    },
    {
      label: "$100M +",
      value: "$100M +",
      minValue: 100000000,
      maxValue: 100000000,
    },
  ];

  const investOptions = [
    {
      label: "under $100K",
      value: "under $100K",
      minValue: 100000,
      maxValue: 100000,
    },
    {
      label: "$100K - less than $500K",
      value: "$100K - less than $500K",
      minValue: 100000,
      maxValue: 500000,
    },
    {
      label: "$500 k  - less than $2M",
      value: "$500 k  - less than $2M",
      minValue: 500000,
      maxValue: 2000000,
    },
    {
      label: "$2M - $5M",
      value: "$2M - $5M",
      minValue: 2000000,
      maxValue: 5000000,
    },
    {
      label: "$5M - $10M",
      value: "$5M - $10M",
      minValue: 5000000,
      maxValue: 10000000,
    },
    {
      label: "$10 M- $20M",
      value: "$10 M- $20M",
      minValue: 10000000,
      maxValue: 20000000,
    },
    {
      label: "$20M - $50M",
      value: "$20M - $50M",
      minValue: 20000000,
      maxValue: 50000000,
    },
    {
      label: "$50M - $100 M",
      value: "$50M - $100 M",
      minValue: 50000000,
      maxValue: 100000000,
    },
    {
      label: "$100M +",
      value: "$100M +",
      minValue: 100000000,
      maxValue: 100000000,
    },
  ];

  const onSubmitForm = (values: any) => {
    console.log(values);
    if (signUpData) {
      dispatch(
        signUp({
          ...signUpData,
          category: values.description.label,
          min_fund: values.amount.minValue,
          max_fund: values.amount.maxValue,
        })
      );
    } 
    // else if (googleData) {
    //   dispatch(
    //     signUp({
    //       full_name: googleData.profileObj.name,
    //       email: googleData.profileObj.email,
    //       password: googleData.accessToken,
    //       phone: googleData.googleId,
    //       category: values.description.label,
    //       min_fund: values.amount.minValue,
    //       max_fund: values.amount.maxValue,
    //       verified: 0,
    //       lead_type: investorType === "raise" ? "S" : "I",
    //     })
    //   );
    // }
  };
  console.log("investor type", investorType);

  return (
    <>
      <section className="container md:items-center w-full  mx-auto px-6 p-10">
        <div className="flex flex-col ">
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="position-relative mt-6"
          >
            {investorType === "raise" ? (
              <>
                <div className="font-label font-size-16 mb-4  ml-2">
                  <Label>What describes you best?</Label>
                </div>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      // value={personTags}
                      isClearable={false}
                      styles={customStyles}
                      placeholder={
                        <div className="font-label pl-1">Choose an Option</div>
                      }
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
            ) : (
              <>
                <div className="font-label font-size-16 mb-4  ml-2">
                  <Label>What describes you best?</Label>
                </div>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      // value={personTags}
                      isClearable={false}
                      styles={customStyles}
                      placeholder={
                        <div className="font-label text-left pl-1">
                          Choose an Option
                        </div>
                      }
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
            )}
            {investorType === "raise" ? (
              <>
                <div className="font-label font-size-16 mb-4  ml-2">
                  <Label>I am looking to efficiently raise:</Label>
                </div>
                <Controller
                  name="amount"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      // value={personTags}
                      isClearable={false}
                      styles={customStyles}
                      placeholder={
                        <div className="font-label pl-1">Choose an Option</div>
                      }
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
            ) : (
              <>
                <div className="font-label font-size-16 mb-4 mt-4 ml-2">
                  <Label>I am looking to efficiently raise:</Label>
                </div>
                <Controller
                  name="amount"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      // value={personTags}
                      isClearable={false}
                      styles={customStyles}
                      placeholder={
                        <div className="font-label text-left pl-1">
                          Choose an Option
                        </div>
                      }
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
            )}
            <button
              type="submit"
              className="mt-16 bg-orange font-label-white font-size-14 p-2 px-8"
            >
              FINISH
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
