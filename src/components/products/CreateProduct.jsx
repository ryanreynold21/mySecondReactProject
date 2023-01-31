import axios from 'axios';
import React, { useState } from 'react'

const CreateProduct = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState("");

    const CreateProduct = async() => {
        const {data} = await axios.post("http://localhost:3000/products",{
            title,
            description,
            image,
            category,
            price
        });
        console.log(data);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        CreateProduct()
    }

  return (
    <div className="flex h-screen items-center justify-center">
    <form onSubmit={onSubmitHandler} className=' flex flex-col gap-3 border w-96 p-10 justify-center items-center'>
        <h2 className=' text-gray-600 font-bold text-xl tracking-wider'>Create New Product</h2>
        <input value={title} onChange={e=> setTitle(e.target.value)} className=' w-full outline-none border-b-2 py-2' type="text" placeholder='Enter Title' name="" id="" />
       
        <input value={description} onChange={e=>setDescription(e.target.value)} className=' w-full outline-none border-b-2 py-2' type="text" placeholder='Enter description' name="" id="" />
       
        <input value={image} onChange={e=>setImage(e.target.value)} className=' w-full outline-none border-b-2 py-2' type="text" placeholder='Enter Image Url' name="" id="" />
       
        <input value={category} onChange={e=>setCategory(e.target.value)} className=' w-full outline-none border-b-2 py-2' type="text" placeholder='Enter caregory' name="" id="" />
       
        <input value={price} onChange={e=>setPrice(e.target.value)} className=' w-full outline-none border-b-2 py-2' type="text" placeholder='Enter price' name="" id="" />
       
        <button className=' px-3 py-2 text-sm bg-orange-700 text-white rounded shadow-lg'>Create</button>
    </form>
    </div>
  )
}

export default CreateProduct
