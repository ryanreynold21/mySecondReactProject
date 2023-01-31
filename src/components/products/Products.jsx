import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

const Products = () => {
    const [products,setProduct] = useState([]);
    const getProducts = async() => {
        const { data } = await axios.get("http://localhost:3000/products")
        // console.log(data);
        setProduct(data)
    }

    useEffect( () => {
        getProducts()
    } , [] )

  return (
    <>
      <div className=" container mx-auto">
        <Link to={'/create'}>
        <button className=' text-white bg-orange-700 my-4 px-5 py-1 rounded shadow'>Create New Product</button>
        </Link>
        <div className=" flex flex-wrap justify-center gap-5">
        {products?.map(product => <Card product={product} key={product.id} /> )}
        </div>
      </div>
    </>
  )
}

export default Products
