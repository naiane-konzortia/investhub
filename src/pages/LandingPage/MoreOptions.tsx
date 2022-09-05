import React from 'react';

export const MoreOptions = () => {
    return(<>
    <section className="bg-orange">
      <div className="container mx-auto px-6 py-20">
        <div className="flex text-center flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="  py-2">
              <span className='pointer font-noah-white font-size-24'>Source</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="py-2">
            <span className='pointer font-noah-white font-size-24'>Match</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
          <div className="py-2">
            <span className='pointer font-noah-white font-size-24'>Exit</span>
            </div>
          </div>
        </div>
        <div className="flex text-center mt-5 flex-wrap">
            <div className=" w-full md:w-1/1 px-2  ">
              <button className='btn-orange  font-noah-black font-size-24 mr-10'>Invest</button>
              <button className='btn-orange font-noah-black font-size-24'>Raise</button>
          </div>

        </div>
      </div>
    </section>
    </>)
}