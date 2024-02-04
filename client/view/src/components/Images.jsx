import React from 'react'
import style from "../css/Image.module.css"
const Images = () => {
  return (
    <div>
    <div  className={style.main}>
      <div>
        <img className={style.img} src="https://assets.wfcdn.com/im/83418907/resize-h657-w1551%5Ecompr-r85/2700/270056808/tile4Bg_270056808_desktop.jpg" alt="" />
      </div>
      <div>
        <img className={style.img} src="https://assets.wfcdn.com/im/75976604/resize-h657-w1551%5Ecompr-r85/2700/270056700/tile3Bg_270056700_desktop.jpg" alt="" />
      </div>
      <div>
        <img className={style.img} src="https://assets.wfcdn.com/im/38460533/resize-h657-w1551%5Ecompr-r85/2700/270057023/tile5Bg_270057023_desktop.jpg" alt="" />
      </div>
    </div>
      
      <div className={style.box}>
        <p>Deals of the Day | Offers every 24 hours</p>
      </div>

    </div>
  )
}

export default Images
