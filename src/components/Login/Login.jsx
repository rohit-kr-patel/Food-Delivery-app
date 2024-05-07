import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({ setShowLogin }) => {
    const [curState, setCurState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className='login-container' action="">
                <div className="login-title">
                    <h2 className='text-2xl font-semibold'>{curState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-inputs">
                    {
                        curState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />
                    }

                    <input type="email" placeholder='Your email' name="" id="" required />
                    <input type="password" placeholder='Your password' required />

                </div>
                <button>{curState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-conditon">
                    <input type="checkbox" required name="" id="" />
                    <p>By continuing,i agree to the terms of use & privacy policy.</p>
                </div>
                {
                    curState === "Sign Up" ? <p>Already have an account? <span onClick={() => setCurState("Login")}>Login here</span></p> : <p>Create a new account? <span onClick={() => setCurState("Sign Up")}>Click here</span></p>
                }


            </form>
        </div>
    )
}

export default Login
