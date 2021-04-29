import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { v4 as id } from 'uuid'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 1000;
`

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.size.m};
  font-weight: 100;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  :visited {
    color: ${({ theme }) => theme.colors.font};
  }
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavbarDesktop = ({ items }) => (
  <NavbarWrapper> 
    {items.map(item => (
      <NavItem to={item.to} key={id()}>
        {item.label}
      </NavItem>
    ))}
  </NavbarWrapper>
)

export default NavbarDesktop;
