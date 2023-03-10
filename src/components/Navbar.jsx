import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {FaShopify} from 'react-icons/fa'

const Navbar = () => {


    const user = JSON.parse(localStorage.getItem("userData"));
    const navigate = useNavigate();

      const logoutHamdler = () => {
        localStorage.removeItem("userData")
        navigate("/login")
      }

  return (
    
    <div className="">

    <nav className='flex justify-between items-center p-2 shadow'>
     <div className=" flex items-center gap-2">
       <FaShopify className=' text-xl text-orange-600' />
       <h1 className=' font-semibold'>MMS-Shop</h1>
     </div>
      <div className=" flex justify-center items-center p-1 gap-3">
        <input type="text" placeholder='  search' className='bg-gray-200 p-1 rounded-md shadow' />
        <img className=' w-10 border p-1 rounded-full' src={user?.image} alt="" />
        <button onClick={logoutHamdler} className=' bg-orange-600 text-white px-2 py-1 rounded shadow-md'>Logout</button>
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar
