
import React from 'react';
import Content from './Content';
import style from '../css/Content.module.css';

const Header = () => {
  return (

    <div className={style.maindiv}>
      <div>
        <Content />
      </div>
      <div>
        <div>
          <img className={style.img}  src="https://assets.wfcdn.com/im/09369320/resize-h837-w1971%5Ecompr-r85/2700/270056526/tile1Bg_270056526_desktop.jpg" alt=""  />
        </div>
        <div>
          <img className={style.img} src="https://assets.wfcdn.com/im/03466670/resize-h837-w1971%5Ecompr-r85/2700/270056692/tile2Bg_270056692_desktop.jpg" alt="" />
        </div>
      </div>
    </div>
 

 

    
  );
}

export default Header;
