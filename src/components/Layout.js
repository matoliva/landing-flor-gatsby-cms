import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme, breakpoints } from '../style/theme'
import { useWindowSize } from "../utils/hooks";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.font};
    box-sizing: border-box;
  }

  h1 {
    @media ${props => props.theme.device.laptop} {
      font-size: 36px;
    }
    @media ${props => props.theme.device.mobile} {
      font-size: 20px;
    }
    @media ${props => props.theme.device.mobile} {
      font-size: 24px;
    }
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Layout = ({ children }) => {
  const { width } = useWindowSize();

  return(<ThemeProvider theme={theme}>
    <LayoutWrapper>
      <GlobalStyles />
      { width > breakpoints.mobile && <Header />}
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </LayoutWrapper>
  </ThemeProvider>)
};

export default Layout
