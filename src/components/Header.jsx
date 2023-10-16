import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/pijypsb7rsnimrspm45v" style={{ width: "100px"; }}
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
