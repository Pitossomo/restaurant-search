import React from 'react';

import { StyledSlider, Slide } from './styles'

import fakeImg from '../../assets/restaurante-fake.png'

const Carousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true
  };
  
  const slides = Array(12).fill({name: "Nome do Restaurante", imgUrl: fakeImg});
  
  return (
    <StyledSlider {...sliderSettings} >
      { slides.map((restaurant, i) => (
        <Slide key={`slide${i}`} photo={restaurant.imgUrl}>
          <p>{`${restaurant.name} ${i+1}`}</p>
        </Slide>
      ))}
    </StyledSlider>
  );  
};

export default Carousel; 