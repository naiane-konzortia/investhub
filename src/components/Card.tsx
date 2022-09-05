import React from 'react';

interface ICard {
    width:string | number;
    height: string | number;
    color:string;
    children:string;
}
export const Card = ({width, height, color, children}: ICard) => {

    return (<>
    <div className='pointer text-center' style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${color}`
    }}>
{children}
    </div>
    </>)
}