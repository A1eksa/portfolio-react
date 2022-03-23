import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar>
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
      </Navbar>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.div`
box-sizing: border-box;

width: 100%;
padding: 2rem 2rem 2.5rem 2rem;
display flex;
// align-items: center;
// justify-content: space-between;
position: fixed;
// top:0;

// z-index: 3;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
