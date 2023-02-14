import React from 'react';
import {BsMinecartLoaded} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Cart = ({cartItems}) => {
  // console.log(products);
  return (
    <Link to={'/cartitem'}>
    <div className=' bg-lime-400 px-5 py-3 text-rose-800 rounded-md shadow-lg fixed right-[60px] top-20 z-10'>
      <BsMinecartLoaded className='' />
      <span className=' absolute top-[-10px] right-[-10px] bg-rose-500 text-white text-sm rounded-lg px-2'> {cartItems?.length ? cartItems.length : "0"}</span>
    </div>
    </Link>
  )
}

export default Cart
