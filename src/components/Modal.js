import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalWrapper>
      <button onClick={() => setOpenModal(true)}>CLOSE</button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/skills'>Skills</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </ModalWrapper>
  );
};

export const ModalWrapper = styled.div`
  padding: 0 2rem;
  background-color: grey;
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  //right: -100%;
  //   transition: 850ms;
  // box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  //   z-index: 3;
`;
