import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 40px;
  height: 300px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

const Footer = () => (
  <FooterWrapper>
    I'm a footer
  </FooterWrapper>
)

export default Footer;