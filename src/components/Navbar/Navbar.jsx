import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
const [menu, setMenu] = useState("Home");

const {getTotal}=useContext(StoreContext);
  return (
    <div className='navbar p-5  flex justify-between items-center'>
    
    <Link to='/'> <img className='logo xl-[140px]   lg:w-[100px]   w-[150px]' src={assets.logo } alt="" /></Link> 
      <ul className="navbar-menu xl:gap-[20px] md:hidden lg:gap-[15px] lg:text-sm flex list-none gap-5  text-[#4d5c8f] text-1xl">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":" "}>Home</Link>
        <a href='#exp-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active" :""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":" "}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":" "}>Contact us</a>
      </ul>
      <div className="navbar-right  xl:gap-[30px] lg:gap-5 flex items-center gap-10">
        <img className='xl:w-[22px] cursor-pointer hover:scale-90  lg:w-[20px]' src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative ">
           <Link to='/cart'> <img className='xl:w-[22px] hover:scale-90 lg:w-[20px]' src={assets.basket_icon} alt="" /></Link>
           {
            getTotal()===0?"":<div className="dot absolute min-w-3 min-h-3 bg-[tomato] rounded-lg top-[-8px] right-[-8px]"></div>
           }
            
        </div>
        <button onClick={()=>setShowLogin(true)} className='bg-transparent xl:py-2 xl:px-6 lg:px-5 lg:py-2 lg:text-sm text-xl text-[#4d5c8f] hover:scale-105 border-[1px] px-8 py-2 rounded-full hover:bg-[#f7d0c9] border-[tomato] ease-in duration-300 '>Sign In</button>
      </div>
      
    </div>
  )
}

export default Navbar
