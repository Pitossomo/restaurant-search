import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'

import { Wrapper, Container, Search, SearchLogo, CarouselTitle } from './styles'
import { RestaurantCard, Carousel, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

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
          <CarouselTitle>Na sua Área </CarouselTitle>
          <Carousel />
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  );
};

export default Home;