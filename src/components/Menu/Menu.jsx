import React from 'react'
import { menu_list } from '../../assets/assets'
import './Menu.css'
const Menu = ({category,setCategory}) => {
  return (
    <div className='exp-menu flex flex-col gap-5  ' id='exp-menu'>
        <h1 className='text-3xl font-medium text-[#262626] '>Explore Our Menu</h1>
        <p className='exp-menu-text xl:max-w-[100%] xl:text-[14px] max-[60%] text-[#808080] '>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
      <div className='exp-menu-list flex justify-between items-center gap-8 text-center my-5 cursor-pointer lg:overflow-x-scroll '>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exp-menu-items hover:scale-105 '>
                    <img className={category===item.menu_name?"active":""}  src={item.menu_image} alt="" />
                    <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className='my-3 h-1 bg-[#e2e2e2] border-none  '/>

    </div>
 
  )
}

export default Menu
