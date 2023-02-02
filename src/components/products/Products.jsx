import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import Sidebar from '../Sidebar';
import Card from './Card';

const Products = () => {
    const [openCart,setOpenCart] = useState(false);
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
      <div className=" container mx-auto relative">
      
        <div className=" flex flex-wrap justify-center gap-5">

        {products?.map(product => <Card product={product} key={product.id} /> )}

         <button onClick={() => setOpenCart(!openCart)}>
        <Cart products={products} />
        </button>

         {openCart &&  <Sidebar /> }
         
        </div>
      </div>
    </>
)
}

export default Products
