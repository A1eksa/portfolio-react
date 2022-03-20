import React from 'react';
import './Home.css';
import styled from 'styled-components';
import poppy from './poppy.jpg';

export const Home = () => {
  let today = new Date(),
    hour = today.getHours();
  return (
    <div
      style={{
        backgroundImage: `url(${poppy})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Wrapper>
        <Name>Aleksandra Safranko</Name>
        <Title>Frontend developer</Title>
        <SpanContainer>
          <div className='span-container'>
            <p>
              I <span className='change-text'></span>{' '}
              <span className='responsive'>b</span>
              <span className='responsive'>e</span>
              <span className='responsive'>a</span>
              <span className='responsive'>u</span>
              <span className='responsive'>t</span>
              <span className='responsive'>i</span>
              <span className='responsive'>f</span>
              <span className='responsive'>u</span>
              <span className='responsive'>l</span>
              <span className='responsive'>l</span>{' '}
              <span className='space'>and</span>{' '}
              <span className='responsive'>r</span>
              <span className='responsive'>e</span>
              <span className='responsive'>s</span>
              <span className='responsive'>p</span>
              <span className='responsive'>o</span>
              <span className='responsive'>n</span>
              <span className='responsive'>s</span>
              <span className='responsive'>i</span>
              <span className='responsive'>v</span>
              <span className='responsive'>e</span> websites.
            </p>
          </div>
        </SpanContainer>
      </Wrapper>
      <div>
        have a great
        <span>
          {hour < 12 ? ' morning' : hour < 18 ? ' afternoon' : ' evening'}
        </span>
        .
      </div>
    </div>
  );
};

export const Title = styled.h1`
  font-size: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Name = styled.h2`
  font-size: 3rem;
`;
