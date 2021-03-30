import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    color: #444;
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
