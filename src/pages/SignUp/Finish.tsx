import React, { useEffect, useState } from 'react';
import { useRedux } from '../../hooks';

export const Finish = () => {
    const { dispatch, useAppSelector } = useRedux();
    const { investorType, signUpData,nameUser } = useAppSelector((state) => ({
        investorType:state.Pages.investorType,
        signUpData:state.Pages.signUpData,
        nameUser:state.Pages.nameUser
  }))

    return(<>
    <section className="bg-white center-div ">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
          {`Thanks for signing up, ${nameUser}!`}
        </h2>
        
        <h5 className='font-noah-700'>You will receive a confirmation email shortly.</h5>
        <div className="flex flex-wrap">
        </div>
      </div>
    </section>
    </>)
}