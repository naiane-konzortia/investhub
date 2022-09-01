import React, { useEffect, useMemo, useState } from 'react';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';

export const Footer = () => {



    return (<>
      <div className='white-line-footer'></div>
 <footer className=" footer  text-white mt-2">
      <div className="justify-between items-center sm:px-12 px-4   py-4">
        <div>
        </div>
      </div>
      <ItemsContainer />
      {/* <div
        className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span className='font-noah-black'>© 2020 Apply. All rights reserved.</span>
        <span className='font-noah-black'>Terms · Privacy Policy</span> */}
        {/* <div className="text-teal-500">
        <span
          key='{icon.name}'
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
        </span>
    </div>      */}
     {/* </div> */}
    </footer>   
    </>
    )
}