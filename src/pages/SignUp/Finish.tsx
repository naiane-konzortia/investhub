import React, { useEffect, useState } from "react";
import { useRedux } from "../../hooks";
import { setActiveState } from "../../redux/actions";

export const Finish = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { investorType, signUpData, nameUser, activeState,googleData,user, linkedinEmail, linkedinName } = useAppSelector(
    (state) => ({
      investorType: state.Pages.investorType,
      signUpData: state.Register.signUpData,
      nameUser: state.Pages.nameUser,
      activeState: state.Pages.activeState,
      linkedinEmail:state.Register.linkedinEmail,
      linkedinName: state.Register.linkedinName,
      googleData:state.Register.googleData,
      user:state.Register.user,
    })
  );


  return (
    <>
      <section className="bg-white center-div ">
        <div className="container mx-auto px-6 py-20">
          {activeState === "sign_in" &&  (
            <>
            {
              googleData &&
              <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
              {/* Welcome! */}
              {`Welcome, ${ googleData.profileObj.givenName}!`}
            </h2>
            }
            {
              user &&
              <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
              {/* Welcome! */}
              {`Welcome, ${ user.full_name[0]}!`}
            </h2>
            }
           {
            linkedinName &&
            <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
              {/* Welcome! */}
              {`Welcome, ${linkedinName}!`}
            </h2>
           }
            <button
            type="submit"
            className="mt-6 bg-orange font-label-white font-size-14 p-2 px-20"
            onClick={() => dispatch(setActiveState("sign_in"))}
          >
            Start using the system
            {/* {investorType === 'raise' ? 'Start raising' : 'Start investing'} */}
          </button>
          </>
          )}
          {activeState === "sign_up" && (
            <>
              <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
                {`Thanks for signing up, ${signUpData && signUpData.full_name.split(" ")[0]}!`}
              </h2>
              <h5 className="font-noah-700">
                You will receive a confirmation email shortly.
              </h5>
              <div className="flex flex-col">
            <button
              type="submit"
              className="mt-16 bg-gray font-label-white font-size-14 p-2 px-20"
            >
              Resend Email
            </button>
            <button
              type="submit"
              className="mt-6 bg-orange font-label-white font-size-14 p-2 px-20"
              onClick={() => dispatch(setActiveState("sign_in"))}
            >
              Sign In
            </button>
          </div>
            </>
          )}

         
        </div>
      </section>
    </>
  );
};
