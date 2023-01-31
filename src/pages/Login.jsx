import axios from 'axios';
import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username,setName] = useState("kminchelle");   //username ka api lat khan aung pay tr ,
  const [password,setPassword] = useState("0lelplR");
  const [loading,setIsloading] = useState(false);
  const navigate = useNavigate();

      const apiLoginHandler = async(userdata) => {
        setIsloading(true);
        const {data} = await axios.post('https://dummyjson.com/auth/login',userdata);
        console.log(data);
        if(data){
          const user = {name:data?.username , token:data?.token, image:data?.image};
          localStorage.setItem("userData" , JSON.stringify(user));
          navigate("/")
        }
      }

      const onsubitHandler = async(e) => {
        e.preventDefault();
        const userdata = {username,password};
        await apiLoginHandler(userdata)
        setIsloading(false)
      }

  return (
    <>
     <div className=" h-screen flex justify-center items-center">
      <form action="" onSubmit={onsubitHandler} className=' w-96 border p-5 rounded shadow-lg'>
        <h1 className=' text-2xl text-violet-800'>Login to your Account</h1>
        <div className=" mb-6 mt-4">
          <label htmlFor="username">User Name</label>
          <input required value={username} onChange={e => setName(e.target.value)} type="text" name="" id="username" className='border-gray-100 border w-full p-1' />
           <label htmlFor="password">Password</label>
          <input required value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="password" className=' border-gray-100 border w-full p-1' />
          <button type='submit' className=' px-3 py-2 rounded-md bg-gray-800 text-white mt-5'> {loading ? "loading..." : "Login"} </button>
        </div>
      </form>
     </div>
    </>
  )
}

export default Login