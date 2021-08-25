import React from 'react';
import ReactStars from "react-rating-stars-component";

import fakeImg from '../../assets/restaurante-fake.png';

import { Address, RestaurantPhoto, Restaurant, RestaurantInfo, Title } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars
        count={5}
        isHalf
        edit={false}
        value={4} 
        activeColor="#e7711c"
      />
      <Address>Endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={fakeImg} alt="Foto do restaurante" />
  </Restaurant>
);

export default RestaurantCard;