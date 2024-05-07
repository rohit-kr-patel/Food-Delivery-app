import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import '../Food Display/FoodDisplay.css'

import { StoreContext } from '../../context/StoreContext'
const FoodItems = ({id,name,price,desc,image}) => {


const {cartItems,addTocart,removeFromcart}=useContext(StoreContext);

  return (
    <div className='food-item w-full hover:scale-105 ease-out duration-500 cursor-pointer m-auto rounded-md shadow-md'>
    <div className='food-item-conatiner  relative '>
        <img className='food-item-img  w-full rounded-xl ' src={image} alt="" />
        {!cartItems[id]
            ?<img className='add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full  ' onClick={()=>addTocart(id)}  src={assets.add_icon_white} />
            :<div className='food-item-counter absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-full bg-white'>
               <img className='w-7'  onClick={()=>removeFromcart(id)} src={assets.remove_icon_red}/>
               <p>{cartItems[id]}</p>
               <img className='w-7' onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
            </div>
        } 
    </div>
    <div className='food-item-info p-5' >
        <div className='food-item-name-rating flex justify-between item-center mb-2'>
            <p className='text-xl font-medium'>{name}</p>
            <img className='w-[70px] h-5' src={assets.rating_starts} alt="" />
        </div>
    <p className='food-item-desc text-[#676767] text-sm'>{desc}</p>
    <p className='food-item-price text-[tomato] text-xl font-medium my-1'>${price}</p>
    </div>
    </div>
  )
}

export default FoodItems
