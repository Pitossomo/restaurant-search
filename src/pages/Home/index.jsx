import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'

import { Wrapper, Container, Search, SearchLogo, Map } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('pizza');

  return (
    <Wrapper>
      <Container>
        <Search>
          <SearchLogo src={logo} alt="Logo do site" />
          <TextField
            label='Pesquisar'
            outlined
            // onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
        </Search>
      </Container>
      <Map>
      </Map>
    </Wrapper>
  );
};

export default Home;