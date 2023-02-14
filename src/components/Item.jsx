import React from 'react'

const Item = ({item,increment,decrement}) => {
  console.log(item)
  return (
    <div className=' flex items-center justify-evenly border border-b-cyan-700 shadow-md shadow-cyan-500/50 my-2 py-6'>
        <div className="">
        <img src={item.image} className='h-32 w-32' alt="" />
        <h1 className='w-56'>{item.title}</h1>
        </div>
        <div className="">
          <p className=' text-cyan-600 font-bold text-xl'>$ {item.price*item.qty}</p>
            <div className=" flex items-center gap-3 my-3">
              <button onClick={() => increment(item?.id)} className=' px-4 bg-zinc-300 rounded-md py-1'>+</button>
              <span>{item.qty}</span>
              <button onClick={() => decrement(item?.id)} className=' px-4 bg-zinc-300 rounded-md py-1'>-</button>
            </div>
        </div>
       
    </div>
  )
}

export default Item
