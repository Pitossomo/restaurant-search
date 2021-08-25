import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  box-sizing: border-box;
  width: 340px;
  margin-bottom: 16px;
  .slick-slide {
    margin-right: 8px;
  }
`;

export const Slide = styled.div`
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