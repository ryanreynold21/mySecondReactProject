import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import Card from './Card';

const Products = () => {
    const [openCart,setOpenCart] = useState(false);
    const [products,setProduct] = useState([]);
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const [cart, setCart] = useState(cartItems ? [...cartItems] : []);

    const addToCart = (product) => {
      setCart([...cart, product]);
      localStorage.setItem("cartItems", JSON.stringify([...cart, product]));
    };

    const removeFromCart = (id) => {
      setCart(cart?.filter((item) => item.id !== id));
      localStorage.setItem(
        "cartItems",
        JSON.stringify(cart?.filter((item) => item.id !== id))
      );
    };
  
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

        {products?.map(product => <Card addToCart={addToCart} removeFromCart={removeFromCart} product={product} key={product.id} /> )}

         <button>
        <Cart  cartItems={cartItems} />
        </button>

         {openCart &&  <Sidebar /> }
         
        </div>
      </div>
    </>
)
}

export default Products
