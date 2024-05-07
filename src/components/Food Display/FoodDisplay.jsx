import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItems from '../Food Items/FoodItems'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {
const {food_list}=useContext(StoreContext)

  return (
    <div className='food-display mt-5 ' id='food-display'>
      <h1 className='text-[max(2vw,24px)] font-medium  '>Top dishes near you</h1>
      <div className='food-list'>
        {food_list.map((item,index)=>{
            if(category==="All" || category===item.category){
                return(
                    <FoodItems key={index} id={item._id} name={item.name} price={item.price} desc={item.description} image={item.image}/>
                )

            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
