import React from 'react';
import styles from '../css/Navabar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Navabar = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.menu}>
        <span className={styles.span}><GiHamburgerMenu/><p>Menu</p></span>
       
       <img src="https://www.battery.com/wp-content/uploads/2021/03/Wayfair_logo_color.png" alt="" />
        </div>
        <div className={styles.search}>
        
        
        <input type="text" placeholder="Search..." />
      
    

        </div>
        <div className={styles.login}>
            <span><VscAccount />SignUp</span>
            <span><BsCart3 />Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
