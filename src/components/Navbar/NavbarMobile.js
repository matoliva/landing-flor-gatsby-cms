import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { v4 as id }from 'uuid'

const NavbarWrapper = styled.div`
  position: fixed;
  height: 100vh;
`

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s linear;
    

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open, theme }) => open ? theme.colors.primary : theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
)


const NavbarMobile = ({ items, open, setOpen }) => (
  <NavbarWrapper>
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open}>
      {items.map(item => (
        <Link to={item.to} onClick={() => setOpen(false)} key={id()}>
          {item.label}
        </Link>
      ))}
    </Menu>
  </NavbarWrapper>
)

export default NavbarMobile


