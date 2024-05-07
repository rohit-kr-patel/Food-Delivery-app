import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
const PlaceOrder = () => {
  const {getTotal}=useContext(StoreContext);
  return (


    
    
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="phone" placeholder='Phone' />
      </div>
      <div className="place-order-right"></div>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotal()===0?0:getTotal()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
    </form>
  
  )
}

export default PlaceOrder
