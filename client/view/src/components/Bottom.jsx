import React from 'react';
import style from "../css/Bottom.module.css"

const Bottom = () => {
  return (
    <div className={style.main}>
      <div>
        <h2>Abouts Us</h2>
        <p>About Wayfair</p>
        <p>Wayfair Professional</p>
        <p>Gift Cards</p>
        <p>Wayfair Credit Card</p>
        <p>Wayfair Financing</p>
        <p>Careers</p>
        <p>Sell on Wayfair</p>
        <p>Investor Relations</p>
        <p>Advertise With Us</p>
        <p>Locations</p>
      </div>
      <div>
        <h2>Customer Service</h2>
        <p>My Orders</p>
        <p>My Account</p>
        <p>Track My Order</p>
        <p>Wayfair Accessibility Statement</p>
        <p>Return Policy</p>
        <p>Help Center</p>
        <p>Product Recalls
</p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <button>Quick Us</button><br />
        <button>Call us</button>
        <div>
           <h3>Customer Service</h3>
           <p>Closed. Opens 9:00 AM</p>
           <p>Mon - Fri: 8:00 AM - 11:59 PM</p>
           <p>Sat: 8:00 AM - 8:00 PM</p>
           <p>Sun: 9:00 AM - 6:00 PM</p>
           <p>All times Eastern</p>
        </div>
        <div>
            <h3>Shopping Assistance</h3>
            <p>Closed. Opens 9:00 AM</p>
            <p>on - Fri: 8:00 AM - 11:55 PM</p>
            <p>Sat: 8:00 AM - 8:00 PM</p>
            <p>Sun: 9:00 AM - 6:00 PM</p>
            <p>All times Eastern</p>
        </div>
      </div>
    </div>
  )
}

export default Bottom
