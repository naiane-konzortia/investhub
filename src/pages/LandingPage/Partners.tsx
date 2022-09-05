import React from 'react';
import partner1 from '../../assets/images/svg/partner1.svg'
import partner2 from '../../assets/images/svg/partner2.svg'
import partner3 from '../../assets/images/svg/partner3.svg'
import partner4 from '../../assets/images/svg/partner4.svg'
import partner5 from '../../assets/images/svg/partner5.svg'

export const Partners = () => {
    return(<>
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center font-noah-700 text-gray-800 mb-8">
          Service Partners
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/5 px-2 mb-4">
            <img src={partner1} className=" font-size-10 ml-1" alt="Search Icon" />
          </div>
          <div className="w-full md:w-1/5 px-2 mb-4">
          <img src={partner2} className=" font-size-10 ml-1" alt="Search Icon" />
          </div>
          <div className="w-full md:w-1/5 px-2 mb-4">
          <img src={partner3} className=" font-size-10 ml-1" alt="Search Icon" />
          </div>
          <div className="w-full md:w-1/5 px-2 mb-4">
          <img src={partner4} className=" font-size-10 ml-1" alt="Search Icon" />
          </div>
          <div className="w-full md:w-1/5 px-2 mb-4">
          <img src={partner5} className=" font-size-10 ml-1" alt="Search Icon" />
          </div>
        </div>
      </div>
    </section>
    </>)
}