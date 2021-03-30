import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 40px;
  height: 500px;
  background: #F5F5F5;
`

const Footer = () => (
  <FooterWrapper>
    I'm a footer
  </FooterWrapper>
)

export default Footer;