import React from 'react';
import {BsMinecartLoaded} from 'react-icons/bs'

const Cart = ({products}) => {
  // console.log(products);
  return (
    <div className=' bg-lime-400 px-5 py-3 text-rose-800 rounded-md shadow-lg fixed right-[60px] top-20 z-10'>
      <BsMinecartLoaded className='' />
      <span className=' absolute top-[-10px] right-[-10px] bg-rose-500 text-white text-sm rounded-lg px-2'>+99</span>
    </div>
  )
}

export default Cart
