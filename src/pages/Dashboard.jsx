import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Products from '../components/products/Products';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
 
  const user = JSON.parse( localStorage.getItem("userData"));
  const navigate = useNavigate();


  
  return (
    <>
    <div className=" container mx-auto">        
      <Navbar />
      <Products />
      
    </div>
     
    </>
  )
}

export default Dashboard