import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

export const Contact = () => {
  const Upp = () => {
    scroll.scrollUpp({ delay: 0, duration: 0 });
  };
  return (
    <div>
      <container>
        <a
          href='mailto:aleksandra.safranko1@gmail.com'
          data-hover="Let's talk!"
        >
          Need a developer?
        </a>
      </container>
      <div title='Back to Top' onClick={Upp}></div>
    </div>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
