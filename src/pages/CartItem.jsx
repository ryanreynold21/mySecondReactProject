import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Item from '../components/Item';

const CartItem = () => {
    const cartitem = JSON.parse(localStorage.getItem('cartItems'));
    const [cart,setCart] = useState(cartitem);
    const navigate = useNavigate();

    const total = cart?.reduce( (pv,cv) => pv+cv.price*cv.qty ,0)

    const clearHandler = () => {
      setCart([])
      localStorage.removeItem('cartItems')
    }

    const purchaseHandler = () => {
      setCart([]);
      localStorage.removeItem('cartItems')
      navigate('/success')
    }
  
    const increment = (id) => {
      setCart(
        cart?.map((item) => {
          if (item.id === id) {
            item.qty += 1;
          }
          return item;
        })
      );
    };
    const decrement = (id) => {
      setCart(
        cart?.map((item) => {
          if (item.id === id && item.qty > 1) {
            item.qty -= 1;
          }
          return item;
        })
      );
    };

  return (
    <div className=' bg-gray-200 h-screen flex flex-col items-center justify-center'>
      <div className=" flex item-center flex-col bg-slate-50 w-1/2">
        {!cart?.length && (
             <div className=" flex flex-col items-center justify-center p-10">
             <span className=' text-xl text-cyan-700'>Your Cart is empty !</span>
             <Link to={'/'}>
              <button className='my-2 bg-slate-800 text-white px-4 py-2 rounded shadow-md'>Go to shop</button>
             </Link>
           </div>
        )}
      {cart?.map(item => <Item key={item.id} increment={increment} decrement={decrement} item={item} /> )}
      </div>
    <div className=" bg-slate-900 w-1/2 py-6 text-center">
        <span className=' text-xl font-bold text-cyan-500'>Total price - $ {total} </span>
        <div className=" mt-4">
        <button onClick={clearHandler} className='mx-3 text-lg text-white  rounded px-4 py-2 bg-rose-500'>Clear</button>
        <button onClick={purchaseHandler} className='mx-3 text-lg rounded px-4 py-2 bg-slate-50'>Perchase</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
