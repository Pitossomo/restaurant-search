import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'
import fakeImg from '../../assets/restaurante-fake.png'

import { Wrapper, Container, Search, SearchLogo, Map, CarouselTitle, Slide, Carousel } from './styles'
//import { Slide } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 9,
    adaptiveHeight: true
  };

  const slides = Array(9).fill({name: "Nome do Restaurante", imgUrl: fakeImg})

  return (
    <Wrapper>
      <Container>
        <Search>
          <SearchLogo src={logo} alt="Logo do site" />
          <TextField
            label='Pesquisar'
            outlined
            onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
        </Search>
        <CarouselTitle>Na sua Área </CarouselTitle>
        <Carousel {...sliderSettings} >
          { slides.map((restaurant, i) => (
            <Slide key={`slide${i}`} photo={restaurant.imgUrl}>
              <span>{restaurant.name}</span>
            </Slide>
          ))}
        </Carousel>
      </Container>
      <Map>
      </Map>
    </Wrapper>
  );
};

export default Home;