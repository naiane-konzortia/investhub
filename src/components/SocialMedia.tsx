import React from "react";
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'

interface ItemProps{
    links?:any;
    title:any;
}
const SocialMedia = ({ links, title }:ItemProps ) => {
  return (
    <>
    <h1 className="mb-1 center-div font-noah-black-700 font-size-14">{title}</h1>
    <div className="flex flex-row center-div ">
      <div className=" hover:text-orange-400 mr-2 cursor-pointer font-noah-black-700" >
          <FaFacebookSquare size={25}/>
        </div>
        <div className=" hover:text-orange-400 mr-2 cursor-pointer font-noah-black-700" >
          <BsInstagram size={25}/>
        </div>
        <div className=" hover:text-orange-400 mr-2 cursor-pointer font-noah-black-700" >
          <FaTwitterSquare size={25}/>
        </div>
        <div className=" hover:text-orange-400 cursor-pointer font-noah-black-700" >
          <ImLinkedin size={25}/>
        </div>
    </div>
    </>
  );
};

export default SocialMedia;