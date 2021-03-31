import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.size.l};
  font-weight: 100;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  :visited {
    color: ${({ theme }) => theme.font};
  }
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Navbar = () => (
  <NavbarWrapper> 
    <NavItem to="/">Home</NavItem>
    <NavItem to="/">Proyectos</NavItem>
    <NavItem to="/">Servicios</NavItem>
    <NavItem to="/">Prensa</NavItem>
    <NavItem to="/">Contacto</NavItem>
    <NavItem to="/test">Test</NavItem>
  </NavbarWrapper>
)

export default Navbar;