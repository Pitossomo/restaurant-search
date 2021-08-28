import React from 'react';
import ReactStars from "react-rating-stars-component";

import fakeImg from '../../assets/restaurante-fake.png';

import { Address, RestaurantPhoto, Restaurant, RestaurantInfo, Title } from './styles';

const RestaurantCard = ({restaurant}) => (
  <Restaurant>
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
      src={restaurant.photos ? restaurant.photos[0].getUrl() : fakeImg}
      alt="Foto do restaurante"
    />
  </Restaurant>
);

export default RestaurantCard;