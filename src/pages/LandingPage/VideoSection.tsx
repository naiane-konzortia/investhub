import React from 'react';
import background from "../../assets/animation/animation.gif"

export const VideoSection = () => {

    return (

    <section className="bg-blue">
              <div className="container mx-auto px-6 py-20">
              <div className="flex items-center flex-wrap mb-20 mt-20">
  <div className="w-full md:w-1/3">
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={background} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <button type="button" className=" inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
  </div>
</div>
  <div className="w-full md:w-1/3">
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={background} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <button type="button" className=" inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
  </div>
</div>
  <div className="w-full md:w-1/3">
<div className="flex flex-row">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={background} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <button type="button" className=" inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
  </div>
</div>
</div>
</div>

    </section>

    
    )
}