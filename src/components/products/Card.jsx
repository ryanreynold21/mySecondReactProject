import axios from 'axios';
import React, { useState } from 'react';
import {ImCoinDollar} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    // console.log(product)
    let [amount,Setamount] = useState(1)
    const [isAdded,setIsAdded] = useState(true)
    const navigate = useNavigate();
    const {title,price,category,description,image} = product;
    
  const AddtoCart = () => {
    setIsAdded(!isAdded);
  }

  const amountCounter = (e) => {
    
    if(e.target.id === 'plus'){
      Setamount(amount += 1)
    }else{
      if(amount > 1)
      Setamount(amount -= 1)
    }
  }

  // const deleteCard = () => {
  //   const data = axios.delete("http://localhost:3000/products/" + product.id)
  //   // navigate('/')
  //   return product
  // }

  return (
    <div className=' relative w-72 border flex flex-col gap-3 p-4 rounded shadow-lg'>
      <img src={image} className=" h-44 mx-auto" alt="" />
      <p className=' text-gray-400 font-bold text-xl'>{title?.substring(0,20)}...</p>
      <p className=' text-sm text-gray-800'>{description?.substring(0,20)}...</p>
      <div className=" flex items-center justify-between">
       <div className=" flex">
         <ImCoinDollar className=' text-xl text-orange-500' />
      <p className=''> $ {(price * amount).toFixed(2)} </p>
       </div>
      <div className=" mr-0 flex item-center gap-3">
        <button id='minus' onClick={(e) => amountCounter(e)} className=' px-2 bg-gray-200'>-</button>
          {amount}
        <button id='plus' onClick={(e) => amountCounter(e)} className=' px-2 bg-gray-200'>+</button>
      </div>
      </div>
      <p className=' absolute top-3 left-[-10px]  rounded-md shadow-md py-1 px-2 bg-orange-500 text-white'>{category}</p>
    <Link to={`/${product.id}`} state={{ product}}> 
     <button className=' bg-lime-600 text-white px-3 py-2 rounded-lg'>View more Details ..</button>
    </Link>
    </div>
  )
}

export default Card
