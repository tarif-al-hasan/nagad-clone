import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from "../../images/slide1.jpg";
import './Slider.css';
const Slider = () => {
  return (
    <>
   <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 sider-images"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
        <button className='btn btn-warning'>Read Mor <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg> </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </>
  )
}

export default Slider;