import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Form, Input } from "reactstrap";
import FormInput from "../../components/FormInput";
import { useRedux } from "../../hooks";
import { setActiveSignUpTimeline, setSignUpData } from "../../redux/actions";


export const SignUpForm = () => {
  const { dispatch, useAppSelector } = useRedux();

  const resolver = yupResolver(
    yup.object().shape({
      name: yup.string().required("Please Enter Full Name."),
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

  const onSubmitForm = (values:any) => {
    console.log('values',values)
    dispatch(setSignUpData({name: values.name, email: values.email, password:values.password}))
    dispatch(setActiveSignUpTimeline('more_info'))

  }

  return (
    <>
      <div className="w-full">
      <div className="flex items-center w-full ">
        <hr className="w-full" />
        <div className="font-size-14 w-full font-label">SIGN UP WITH</div>
        <hr className="w-full" />
      </div>
        <div className="flex flex-row mb-12">
          <button
            type="button"
            className="focus:outline-none inline-block font-label-gray-700  mr-2 py-2 px-10 bg-gray flex items-center w-full mt-10"
          >
            <AiOutlineGoogle />
            <p className=" font-size-12 mt-1 font-label ml-2 break-normal text-gray-700">
            Google
            </p>
          </button>
          <button
            type="button"
            className="focus:outline-none inline-block font-label-gray-700  mr-2 px-10 py-2 bg-gray flex items-center w-full mt-10"
          >
            <BsLinkedin />
            <p className="text-base mt-1 w-full font-size-12 font-label-gray-700 ml-2 break-normal text-gray-700">
            LinkedIn
            </p>
          </button>
          <button
            type="button"
            className="focus:outline-none inline-block font-label-gray-700 py-2  px-10 bg-gray flex items-center w-full mt-10"
          >
            <AiFillApple />
            <p className="text-base mt-1 font-size-12 font-label-gray-700 ml-2 mr-2 break-normal text-gray-700">
            AppleID
            </p>
          </button>
        </div>
      </div>
      <div className="flex items-center w-full ">
        <hr className="w-full" />
        <div className="font-size-14 mr-5 ml-5 font-label">OR</div>
        <hr className="w-full" />
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="position-relative mt-6">
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
                <button  type="submit" className="bg-orange font-label-white font-size-14 p-2 px-8">
                  SIGN UP
                </button>

              </div>
              </form>

              <div className="mt-4  text-center font-label font-size-12">
              By signing up, you agree to our 
                <span>
                  {" "}
                  <a
                    href="#"
                    target="_blank"
                    className="font-label-orange"
                  >
                    Privacy Policy,
                  </a>
                </span>
                <span>
                  {" "}
                  <a
                    href="#"
                    target="_blank"
                    className="font-label-orange"
                  >
                    Cookie Policy
                  </a>
                </span>
                <span>
                  {" "}
                  <a
                    href="#"
                    target="_blank"
                    className="font-label font-size-12 "
                  >
                    and 
                  </a>
                  {" "}
                  <a
                    href="#"
                    target="_blank"
                    className="font-label-orange"
                  >
                    Terms of Use.
                  </a>
                </span>
              </div>
    </>
  );
};
