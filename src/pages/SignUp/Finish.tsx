import React, { useEffect, useState } from "react";
import { useRedux } from "../../hooks";
import { setActiveState } from "../../redux/actions";

export const Finish = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { investorType, signUpData, nameUser, activeState } = useAppSelector(
    (state) => ({
      investorType: state.Pages.investorType,
      signUpData: state.Pages.signUpData,
      nameUser: state.Pages.nameUser,
      activeState: state.Pages.activeState,
    })
  );

  return (
    <>
      <section className="bg-white center-div ">
        <div className="container mx-auto px-6 py-20">
          {activeState === "sign_in" &&  (
            <>
            <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
              Welcome!
              {/* {`Welcome, ${nameUser}!`} */}
            </h2>
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
                {`Thanks for signing up, ${nameUser}!`}
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
