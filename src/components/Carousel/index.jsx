import React from 'react';

import { StyledSlider, Slide } from './styles'

import fakeImg from '../../assets/restaurante-fake.png'

const Carousel = ({restaurants}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true
  };
   
  return (
    <StyledSlider {...sliderSettings} >
      { restaurants.map((restaurant) => (
        <Slide 
          key={restaurant.location_id}
          photo={restaurant.photos ? restaurant.photos[0] : fakeImg}
        >
          <p>{restaurant.name}</p>
        </Slide>
      ))}
    </StyledSlider>
  );  
};

export default Carousel; 