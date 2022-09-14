import React from 'react';

export const Menu = () => {
    return (
        <nav className="w-full bg-header-lp shadow">
        <div className="justify-between px-4 py-4 mx-auto lg:max-w-7xl  md:items-center md:px-8">
            <div>
              
            </div>
            <div>
                    <ul className="items-center  place-content-center align-items-center flex justify-center text-center space-y-8 space-x-4 md:flex md:space-x-6 md:space-y-0">
                        <li className="font-label-btn-700 font-size-16 mr-3 border-white hover:text-orange-600">
                            <a href="">AI/ML Matching</a>
                        </li>
                        <li className="font-label-btn-700 mr-3 font-size-16 hover:text-orange-600">
                            <a href="">Deal Flow Sourcing</a>
                        </li>
                        <li className="font-label-btn-700 mr-3 font-size-16 hover:text-orange-600">
                            <a href="">Venture Advisors</a>
                        </li>
                    </ul>
            </div>
          </div>
            
    </nav>
    );
  }