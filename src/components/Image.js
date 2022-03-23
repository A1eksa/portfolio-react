import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

export const Image = () => {
  return <img src='./me.png'></img>;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
