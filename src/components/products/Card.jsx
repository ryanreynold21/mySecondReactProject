import axios from 'axios';
import React, { useState } from 'react';
import {ImCoinDollar} from 'react-icons/im'
import { json, Link, useNavigate } from 'react-router-dom';
import Products from './Products';

const Card = ({product,addToCart,removeFromCart}) => {
    const navigate = useNavigate();
    const {title,price,category,description,image} = product;
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    const goDetail = (e) => {
      e.stopPropagation();
      navigate(`/product/${product.id}`)
    }

  return (
    <div onClick={goDetail} className=' relative w-72 border flex flex-col gap-3 p-4 rounded shadow-lg'>
      <img src={image} className=" h-44 mx-auto" alt="" />
      <p className=' text-gray-400 font-bold text-xl'>{title?.substring(0,20)}...</p>
      <p className=' text-sm text-gray-800'>{description?.substring(0,20)}...</p>
      <div className=" flex items-center justify-between">
       <div className=" flex">
         <ImCoinDollar className=' text-xl text-orange-500' />
      <p className=''> $ {price} </p>
       </div>
      </div>
      <p className=' absolute top-3 left-[-10px]  rounded-md shadow-md py-1 px-2 bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900'>{category}</p>
      {cartItems?.find(item => item.id === product?.id) ? 
     ( <button  onClick={(e) =>{
        e.stopPropagation();
         removeFromCart(product?.id)}
        } 
        className=' w-full bg-rose-900 text-white px-3 py-2 rounded-lg'>
          Remove form Cart
          </button> )
      :
     ( <button onClick={(e) => {
        e.stopPropagation();
        addToCart({...product, qty: 1})
      }} 
      className=' w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-3 py-2 rounded-lg'
      >Add to Cart
      </button>)
    }
    </div>
    // </Link>
  )
}

export default Card
