import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-24 text-[max(3vw,20px)] text-center font-medium' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms flex gap-[max(2vw,10px)] mt-5 justify-center">
            <img className='cursor-pointer w-[max(30vw,120px)] max-w-[180px] hover:scale-105 duration-200 ' src={assets.play_store} alt="" />
            <img className='cursor-pointer w-[max(30vw,120px)] max-w-[180px] hover:scale-105   duration-200 ' src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
