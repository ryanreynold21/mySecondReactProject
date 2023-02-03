import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Detail = () => {
    const data = useParams();
    const location = useLocation();
    const product = location.state.product;
    console.log(product);

    const starCount = (star) => {
        for(let i=0; i<star.length; i++){
           return <p>*</p>
        }
    }
    starCount(4)
  return (
    <div>
      <h1 className='text-rose-700 px-3 py-1 m-4 w-96 text-cyan-900 shadow-md border-cyan-200 border-8 rounded-lg'>{product.title}</h1>
      <img src={product.image} className='w-96' alt="" />
      <p className=' tracking-wider text-base text-rose-700 px-3 my-7'>{product.description}</p>
      <p className=' mx-4 inline bg-cyan-200 rounded-md shadow-md px-2 py-2 w-16'>${product.price}</p>
      <span className=' bg-cyan-200 px-2 py-2 rounded-md shadow-md '>Rating * {product.rating.rate} *</span>
      <Link to={'/'}>
        <button className=' block my-10 px-6 bg-zinc-300 py-2 mx-5 rounded-md shadow-md hover:bg-cyan-200'>Go Back ..</button>
      </Link>
    </div>
  )
}

export default Detail
