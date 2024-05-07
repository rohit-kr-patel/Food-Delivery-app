import React from 'react'
import { assets } from '../../assets/assets'
import '../Food Display/FoodDisplay.css'

const Footer = () => {
    return (
        <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-20 md:px-8  pt-20 mt-16' id='footer'>
            <div className='footer-content md:flex md:flex-col md:gap-[35px]'>
                <div className="footer-content-left ">
                    <img src={assets.logo} alt="" />
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga non accusantium nisi deleniti quo adipisci numquam. Tenetur nesciunt dolore temporibus enim ad exercitationem cumque veniam pariatur ex eligendi maiores voluptas eaque quidem esse, accusamus dignissimos placeat repudiandae officiis iure, omnis ratione possimus voluptatem! Deleniti doloremque quaerat quis aliquid sed. </p>
                    <div className="footer-social-icons flex gap-5 mt-5">
                        <img className='cursor-pointer hover:scale-105 hover:bg-[#1877F2] rounded-full' src={assets.facebook_icon} alt="" />
                        <img className='cursor-pointer hover:scale-105 hover:bg-[#1DA1F2] rounded-full' src={assets.twitter_icon} alt="" />
                        <img className='cursor-pointer hover:scale-105 hover:bg-[#0077B5] rounded-full' src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2 className='text-2xl font-semibold'>COMPANY</h2>
                    <ul className='my-5'>
                        <li className='mt-2 cursor-pointer '>Home</li>
                        <li className='mt-2 cursor-pointer'>About us</li>
                        <li className='mt-2 cursor-pointer'>Delivery</li>
                        <li className='mt-2 cursor-pointer'>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right ">
                    <h2 className='text-2xl font-semibold'>GET IN TOUCH</h2>
                    <ul className='mt-5'>
                        <li className='mt-2'>+1-212-456-7890</li>
                        <li className='mt-2'>contact@tomato.com</li>
                    </ul>
                </div>

            </div>
            <hr className='w-full h-[2px] bg-[grey] border-none my-4' />
            <p className="footer-copyright md:text-center">Copyright © 2024 Tomato.com - All Right Reserved.</p>

        </div>
    )
}

export default Footer
