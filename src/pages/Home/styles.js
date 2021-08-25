import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper =  styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`; 

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
  align-items: stretch;
`;

export const SearchLogo = styled.img`
  margin: auto auto 20px auto;
  width: 50%;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular };
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 8px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`

export const Slide = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  padding: 5px;
  color: white;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
`

export const Map = styled.div`
  background-color: red;
  width: 500px;
`
