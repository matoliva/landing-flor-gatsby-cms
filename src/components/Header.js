import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;

    .header-img {
        width: 100%;
        height: 100%;
    }
`

const Header = () => (
  <HeaderWrapper>
      <StaticImage 
        src="../img/logo-header.jpg"
        alt="header logo"
        placeholder="tracedSVG"
        className="header-img"/>
  </HeaderWrapper>
);

export default Header;