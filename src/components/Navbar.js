import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
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
  </NavbarWrapper>
)

export default Navbar;