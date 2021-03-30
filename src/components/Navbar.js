import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`

const NavItem = styled(Link)`
  font-size: 12px;
  font-weight: 100;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  :visited {
    color: #444;
  }
  :hover {
    color: #fff;
    background-color: #161616;
  }
`

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