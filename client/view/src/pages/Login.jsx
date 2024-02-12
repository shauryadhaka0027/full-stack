import React, { useState } from 'react';
import style from "../css/Sign.module.css";
import { FaUnlockAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

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
        const response = await axios.post('http://localhost:3002/user/login', user,{withCredentials:true});
        if(response.status === 200){
           navigate("/home"); 
        }
        console.log(response)
        setMessage(response.data.message); 
      } catch (error) {
        console.error('Login error:', error);
        setMessage('Failed to login. Please try again.');
      }
      setUser({ email: '', password: '' });
    } else {
      setMessage('Please fill the form');
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleUserChange}
            />
          </div>
          <div className={style.form}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleUserChange}
            />
          </div>
          <button className={style.button} type="submit">Login</button>
        </form>
        <div>{message}</div> 
      </div>
    </div>
  );
};

export default Login;
