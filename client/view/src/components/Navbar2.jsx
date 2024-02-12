import React, { useContext } from 'react';
import styles from '../css/Navabar.module.css';
import { BsCart3 } from "react-icons/bs";
import { ContextApi } from '../Context/ContextApiProvider';
import { useNavigate} from 'react-router-dom';

const Navbar2 = () => {
  const { query,setQuery } = useContext(ContextApi);
  const navigate=useNavigate()
  
  const logout = () => {
     navigate("/")
    alert("Logged out successfully!");
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <img src="https://www.battery.com/wp-content/uploads/2021/03/Wayfair_logo_color.png" alt="" />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className={styles.login}>
        
          <span onClick={logout}>Logout</span>
          <span className={styles.cart}><BsCart3 />Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
