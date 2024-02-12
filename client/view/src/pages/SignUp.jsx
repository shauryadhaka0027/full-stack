
import React, { useState } from 'react';
import style from "../css/Sign.module.css";
import { FaUnlockAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate=useNavigate()

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      try {
        const response = await axios.post("http://localhost:3002/user/register", user);
        console.log(response.data); 
        alert("User registered successfully");
        if(response.status == 200){
          navigate("/Login")
        }
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Failed to register user. Please try again.");
      }
      setUser({ email: "", password: "" })
    } else {
      alert('Please fill the form');
    }
  };

  return (
    <div>
      <div className={style.main}>
        <div>
          <img className={style.img} src="https://mma.prnewswire.com/media/2008141/Wayfair_Logo.jpg?p=facebook" alt="" />
        </div>
        <div className={style.logo}>
          <span className={style.span}><FaUnlockAlt />  <p> secure Login</p></span>
        </div>
      </div>

      <div className={style.container}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='email'
              id="email"
              value={user.email}
              onChange={handleUserChange}
            />
          </div>
          <div className={style.form}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name='password'
              value={user.password}
              onChange={handleUserChange}
            />
          </div>
          <button  className={style.button} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
