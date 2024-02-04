import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../css/Content.module.css"


const Content = () => {
  return (
    <div >
     <Carousel slide={false}>
      <Carousel.Item>
        <ExampleCarouselImage text="" imageUrl="https://crcdn01.adnxs-simple.com/creative20/p/6839/2023/11/13/52032519/0dce50eb-3d4e-49ee-8a76-46c74345b7e0.jpg"/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Budget Friendly Bedroom" imageUrl="https://assets.wfcdn.com/im/82215184/resize-h837-w1971%5Ecompr-r85/2700/270056474/tile1Bg_270056474_desktop.jpg" />
        <Carousel.Caption>
          <h2>Budget Freindly bedroom</h2>
       </Carousel.Caption>
      
    
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Content;
