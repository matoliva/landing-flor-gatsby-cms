import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: #444;
    box-sizing: border-box;
  }
`

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyles />
    <Navbar />
    <Main>{children}</Main>
    <Footer />
  </LayoutWrapper>
)

export default Layout
