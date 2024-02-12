import React from 'react';
import styles from '../css/Navabar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";

import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Menuu from './Menuu';
import Logs from './Logs';


const Navabar = () => {
  
  const login=()=>{
    alert("Login First")
  }
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.menu}>
   
       
       <img src="https://www.battery.com/wp-content/uploads/2021/03/Wayfair_logo_color.png" alt="" />
        </div>
        <div className={styles.search}>
        
        
        <input type="text" placeholder="Search..." />
      
    

        </div>
        <div className={styles.login}>
            <span>
              <Logs/></span>
            <span className={styles.cart} onClick={login}><BsCart3 />Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navabar



