import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import fakeImg from '../../assets/restaurante-fake.png';

import { Address, RestaurantPhoto, Restaurant, RestaurantInfo, Title } from './styles';
import Skeleton from '../Skeleton';

const RestaurantCard = ({restaurant, onClick}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          edit={false}
          value={4} 
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : fakeImg}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;