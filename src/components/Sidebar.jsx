import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Sidebar = () => {
  return (

     <div className=" shadow-xl flex items-center flex-col justify-between border border-rose-800 rounded-lg right-5 fixed top-16 left-10 bg-gray-200 w-72 h-screen z-[100]">
        <div className="">
          <h1 className=' text-black  text-[23px] font-bold border-b-red-900 border px-6 py-4'>Yours Porducts</h1>
          <div className=" mt-2">
            <CartItem />
          </div>
        </div>
          <div className=" my-16">
            <Link to={'/create'}>
            <button className=' w-full px-16 py-2 my-2 text-white bg-orange-700 rounded shadow'>Create New Product</button>
            </Link>
          </div>
     </div>
  )
}

export default Sidebar
