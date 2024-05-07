import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header h-[34vw] mx-8 my-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative '>
        
      <div className="header-contents xl-max-w-[45%]  md:max-w-[65%] absolute flex flex-col items-start gap-5 max-w-[50%] bottom-[10%] left-[6%]">
        <h1 className='text-[4.2vw]   text-white font-semibold'>Order your favourite food here</h1>
        <p className='text-white  lg:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
        <button className='border-none  md:py-[1vw] md:mb-4  md:px-[2vw] text-[#747474] font-semibold px-4 py-2 bg-white rounded-full text-[max(1vw,13px)] hover:scale-105 ease-linear duration-200 mb-2' >View Menu</button>
      </div>
    </div>
  )
}

export default Header
