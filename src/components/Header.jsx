import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="data:image/png;base64,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" style={{ width: "100px"; }}
 alt="logo image" />
        </NavLink>
        <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;
