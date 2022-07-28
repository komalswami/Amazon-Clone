import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselContainer.css'

function CarouselContainer() {
  return (
     <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className='c__image'
          src="b1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>India's largest B2B Platform for businesses & shop-owners</h3>
          <p>  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
         className='c__image'
          src="b2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>India's largest B2B Platform for businesses & shop-owners</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='c__image'
          src="b3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>India's largest B2B Platform for businesses & shop-owners</h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;