import React, { useEffect, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form, Input } from "reactstrap";
import FormInput from "../../components/FormInput";
import { useRedux } from "../../hooks";
import {
  login,
  setActiveSignUpTimeline,
  setSignUpData,
  linkedinAuth,
  setActiveState,
  googleSignUp,
  linkedinSignUp,
  signUp,
  signUpData,
  setGoogleData,
} from "../../redux/actions";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { LinkedIn, useLinkedIn } from "react-linkedin-login-oauth2";

export const SignUpForm = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { investorType } = useAppSelector((state) => ({
    investorType: state.Pages.investorType,
  }));
  const resolver = yupResolver(
    yup.object().shape({
      name: yup
      .string()
      .matches(
        /^(?:([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)) (?:([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*))$/g,
        'Please enter your full name.'
    )
      .required("Please Enter Full Name."),
      email: yup.string().required("Please Enter E-mail."),
      password: yup.string().required("Please Enter Password."),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match.")
        .required("This value is required."),
    })
  );

  const defaultValues: any = {
    email: "",
    password: "",
  };

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const onSubmitForm = (values: any) => {
    console.log("values", values);
    dispatch(
      signUpData({
        full_name: values.name,
        email: values.email,
        password: values.password,
        phone: phone,
        lead_type: investorType === "raise" ? "S" : "I",
        verification:0
      })
    );
    dispatch(setActiveSignUpTimeline("more_info"));
  };
  const [phone, setPhone] = useState();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_GOOGLE_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res: any) => {
    console.log("success google:", res);
    dispatch(googleSignUp({
      google_id: res.googleId,
      access_token:res.tokenId,
      email:res.profileObj.email
    }))
    dispatch(setGoogleData(res))
    
    // dispatch(login(res))
   
  };
  const onFailure = (err: any) => {
    console.log("failed:", err);
  };

  // dispatch(googleSignUp({}))
  // dispatch(linkedinSignUp({}))
  // dispatch(signUp({}))
  // dispatch(login({}))

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_ID as string,
    // clientSecret: process.env.REACT_APP_API_URL as string,
    redirectUri: `${process.env.REACT_APP_API_URL}auth/linkedin/callback`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log("code linkedin", code);

      // dispatch(linkedinAuth({
      //   grant_type:'authorization_code',
      //   code:code,
      //   client_id:process.env.REACT_APP_LINKEDIN_ID,
      //   client_secret:process.env.REACT_APP_LINKEDIN_SECRET,
      //   redirect_uri:`${process.env.REACT_APP_API_URL}`
      // }))

      // window.location.href =
      // process.env.REACT_APP_LOGIN_URL + "login-success";
      // dispatch(login(code))
      // dispatch(setActiveSignUpTimeline("more_info"));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <div className="container mx-auto mb-6">
        <h4 className=" font-bold text-center font-noah-700 text-gray-800 ">
          {investorType === "raise"
            ? `We will not charge you anything until you are able to successfully raise capital.`
            : `We will not charge you anything, this is a free service for investors right now.`}
        </h4>
      </div>
      {/* <div className="w-full"> */}
        {/* <div className="flex items-center w-full ">
          <hr className="w-full" />
          <div className="font-size-14 w-full font-label">SIGN UP WITH</div>
          <hr className="w-full" />
        </div> */}
        {/* <div className="flex flex-col lg:flex-row md:flex-row mb-12"> */}
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID as string}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            render={(renderProps) => (
              <button
                type="button"
                className="focus:outline-none inline-block font-label-gray-700  mr-2 py-2 px-10 bg-gray flex items-center w-full mt-10"
                onClick={renderProps.onClick}
              >
                <AiOutlineGoogle />
                <p className=" font-size-12 mt-1 font-label ml-2 break-normal text-gray-700">
                  Google
                </p>
              </button>
            )}
          /> */}
          {/* <button
            type="button"
            className="focus:outline-none inline-block font-label-gray-700  mr-2 py-2 px-10 bg-gray flex items-center w-full mt-10"
          >
            <AiOutlineGoogle />
            <p className=" font-size-12 mt-1 font-label ml-2 break-normal text-gray-700">
              Google
            </p>
          </button> */}
{/* 
          <button
            type="button"
            className="focus:outline-none inline-block font-label-gray-700  mr-2 py-2 px-10 bg-gray flex items-center w-full mt-10"
            onClick={linkedInLogin}
          >
            <BsLinkedin />
            <p className="font-size-12 mt-1 font-label ml-2 break-normal text-gray-700">
              LinkedIn
            </p>
          </button> */}
          {/* <button
            type="button"
            className="focus:outline-none inline-block font-label-gray-700 py-2  px-10 bg-gray flex items-center w-full mt-10"
          >
            <AiFillApple />
            <p className="text-base mt-1 font-size-12 font-label-gray-700 ml-2 mr-2 break-normal text-gray-700">
              AppleID
            </p>
          </button> */}
        {/* </div> */}
      {/* </div> */}
      <div className="flex items-center w-full ">
        <hr className="w-full" />
        {/* <div className="font-size-14 mr-5 ml-5 font-label">SIGN UP</div> */}
        <hr className="w-full" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="position-relative mt-6"
      >
        <div className="mb-3">
          <FormInput
            type="text"
            name="name"
            control={control}
            errors={errors}
            register={register}
            placeholder="Enter full name"
            className="form-control font-label font-size-14 "
            hidePasswordButton={true}
          />
        </div>
        <div className="mb-3">
          <FormInput
            type="email"
            name="email"
            control={control}
            errors={errors}
            register={register}
            placeholder="Enter your email"
            className="form-control font-label font-size-14 "
            hidePasswordButton={true}
          />
        </div>
        <div className="mb-3">
          <PhoneInput
            type="tel"
            required
            placeholder="Phone number"
            // maxLength="18"
            value={phone !== null ? phone : ""}
            defaultCountry="US"
            onChange={(e: any) => {
              setPhone(e);
            }}
            // onBlur={(e) => {setNewPhone(e); changePhoneNumber()}}
          />
        </div>
        <div className="mb-3">
          <FormInput
            type="password"
            name="password"
            register={register}
            errors={errors}
            control={control}
            placeholder="Enter Your Password"
            className="form-control font-label font-size-14 "
            withoutLabel={true}
            hidePasswordButton={true}
          />
        </div>
        <div className="mb-3">
          <FormInput
            type="password"
            name="confirmpassword"
            register={register}
            errors={errors}
            control={control}
            placeholder="Confirm Password"
            className="form-control font-label font-size-14 "
            withoutLabel={true}
            hidePasswordButton={true}
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-orange font-label-white font-size-14 p-2 px-8"
          >
            NEXT
          </button>
        </div>
      </form>

      <div className="mt-4  text-center font-label font-size-12">
        By signing up, you agree to our
        <span>
          {" "}
          <a href="#" target="_blank" className="font-label-orange">
            Privacy Policy,
          </a>
        </span>
        <span>
          {" "}
          <a href="#" target="_blank" className="font-label-orange">
            Cookie Policy
          </a>
        </span>
        <span>
          {" "}
          <a href="#" target="_blank" className="font-label font-size-12 ">
            and
          </a>{" "}
          <a href="#" target="_blank" className="font-label-orange">
            Terms of Use.
          </a>
        </span>
      </div>
    </>
  );
};
