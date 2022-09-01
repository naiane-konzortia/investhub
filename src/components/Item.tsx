import React from "react";
interface ItemProps{
    links:any;
    title:any;
}
const Item = ({ links, title }:ItemProps ) => {
  return (
    <ul>
      <h1 className="mb-1 font-noah-black-700 font-size-16">{title}</h1>
      {links.map((link:any) => (
        <li key={link.name}>
          <a
            className="hover:text-orange-400 duration-300
          text-sm cursor-pointer leading-6 mr-10 font-size-14 font-noah-black-300"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;