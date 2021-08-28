import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'

import { Wrapper, Container, Search, SearchLogo, CarouselTitle } from './styles'
import { RestaurantCard, Carousel, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);
 

  function handleKeyPress(e) {
    if (e.key === "Enter");
      setQuery(inputValue);
  }

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
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área </CarouselTitle>
          <Carousel restaurants={restaurants} />
        </Search>
        { restaurants.map((restaurant) => <RestaurantCard key={restaurant.location_id} restaurant={restaurant} />)}
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  );
};

export default Home;