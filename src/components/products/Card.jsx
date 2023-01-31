import React from 'react';
import {ImCoinDollar} from 'react-icons/im'

const Card = ({product}) => {
    // console.log(product)
    const {title,price,category,description,image} = product;
    
  return (
    <div className=' relative w-72 border flex flex-col gap-3 p-4 rounded shadow-lg'>
      <img src={image} className=" h-44 mx-auto" alt="" />
      <p className=' text-gray-400 font-bold text-xl'>{title?.substring(0,20)}...</p>
      <p className=' text-sm text-gray-800'>{description?.substring(0,20)}...</p>
      <div className=" flex items-center">
        <ImCoinDollar className=' text-xl text-orange-500' />
      <p className=''> ${price}</p>
      </div>
      <p className=' absolute top-3 left-[-10px]  rounded-md shadow-md py-1 px-2 bg-orange-500 text-white'>{category}</p>
      <button className=' bg-orange-500 text-white px-2 py-2 rounded-sm shadow-sm'>Add to cart</button>
    </div>
  )
}

export default Card
