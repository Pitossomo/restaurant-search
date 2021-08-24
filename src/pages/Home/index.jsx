import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from "react-slick";

import logo from '../../assets/logo.svg'
import fakeImg from '../../assets/restaurante-fake.png'

import { Wrapper, Container, Search, SearchLogo, Map, CarouselTitle } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    adaptiveHeight: true
  };

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
        <Slider {...sliderSettings} >
          <div>
            <img src={fakeImg} alt="fakeImg" />
          </div>
          <div>
            <img src={fakeImg} alt="fakeImg" />
          </div>
          <div>
            <img src={fakeImg} alt="fakeImg" />
          </div>
          <div>
            <img src={fakeImg} alt="fakeImg" />
          </div>
          <div>
            <img src={fakeImg} alt="fakeImg" />
          </div>
          <div>
            <img src={fakeImg} alt="fakeImg" />
          </div>
        </Slider>
      </Container>
      <Map>
      </Map>
    </Wrapper>
  );
};

export default Home;