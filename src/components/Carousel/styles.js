import styled from 'styled-components';
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import Skeleton from '../Skeleton';

export const StyledSlider = styled(Slider)`
  box-sizing: border-box;
  width: 340px;
  margin-bottom: 16px;
  .slick-slide {
    margin-right: 8px;
  }
`;

export const StyledSlide = styled.div`
  height: 90px;
  width: 80px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    padding: 5px;
    color: white;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 14px;
  }
`;

export const Slide = ({photo, title}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      { imageLoaded ? ( 
          <StyledSlide photo={photo}>
            <p>{title}</p>
          </StyledSlide>
        ) : <Skeleton width='100px' height='100px' />
      }
    </>
  )
};